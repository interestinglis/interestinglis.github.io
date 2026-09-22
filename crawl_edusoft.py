#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
================================================================================
       🏛️ IU ROOM AVAILABILITY UPDATER (v1.0.0)
       Website "Tìm Phòng Trống": https://interestinglis.github.io/
================================================================================
Tác giả: Datnim & IU Student Community
Mục tiêu: Độc lập hóa nguồn dữ liệu, bảo đảm Bus Factor = 0, bất kỳ ai cũng có thể
duy trì và cập nhật dữ liệu cho thế hệ tiếp theo.
"""

import os
import sys
import time
import re
import socket
import shutil
import argparse
import subprocess
from datetime import datetime

VERSION = "1.0.0"

# Đảm bảo hiển thị UTF-8 chuẩn trên Windows console
if sys.platform == "win32":
    try:
        sys.stdout.reconfigure(encoding="utf-8")
        sys.stderr.reconfigure(encoding="utf-8")
    except Exception:
        pass

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import WebDriverException

DKMH_URL = "https://edusoftweb.hcmiu.edu.vn/Default.aspx?page=dkmonhoc"


def print_banner():
    banner = f"""
================================================================================
       🏛️ IU ROOM AVAILABILITY UPDATER (v{VERSION})
       Hệ thống tự động cập nhật thời khóa biểu & phòng trống HCMIU
================================================================================
"""
    print(banner)


def get_project_root():
    """
    Xác định thư mục gốc của dự án một cách thông minh:
    - Nếu có thư mục assets/ hoặc index.html cạnh file: dùng chính thư mục đó.
    - Nếu chạy từ crawler/: dùng thư mục cha.
    - Nếu chạy từ Desktop/bên ngoài nhưng máy có repo: ưu tiên thư mục repo.
    - Mặc định: thư mục chứa file .exe hoặc script.
    """
    if getattr(sys, "frozen", False):
        candidate = os.path.dirname(os.path.abspath(sys.executable))
    else:
        candidate = os.path.dirname(os.path.abspath(__file__))

    # 1. Nếu candidate chứa assets/ thì chính là project root
    if os.path.exists(os.path.join(candidate, "assets")):
        return candidate

    # 2. Nếu thư mục cha chứa assets/ (khi chạy từ crawler/)
    parent = os.path.dirname(candidate)
    if os.path.exists(os.path.join(parent, "assets")):
        return parent

    # 3. Nếu chạy từ Desktop, thử tìm repo mặc định
    default_repo = r"C:\1_Local_Folder\Code\TimPhongTrong"
    if os.path.exists(os.path.join(default_repo, "assets")):
        return default_repo

    return candidate


def get_chrome_profile_dir():
    """
    Lưu profile Chrome trong %LOCALAPPDATA% chuẩn Windows.
    Giúp người dùng có thể để file EXE ở bất kỳ đâu (Desktop, Downloads)
    mà không bị xả rác file profile ra ngoài màn hình.
    """
    local_app_data = os.environ.get("LOCALAPPDATA", os.path.expanduser("~"))
    profile_dir = os.path.join(local_app_data, "IU-Room-Checker", "chrome_profile")
    os.makedirs(profile_dir, exist_ok=True)
    return profile_dir


def is_port_open(port, host="127.0.0.1", timeout=0.1):
    """Kiểm tra cực nhanh xem cổng có đang mở không (tránh timeout 60s của Selenium)."""
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.settimeout(timeout)
            return s.connect_ex((host, port)) == 0
    except Exception:
        return False


def try_connect_existing_chrome():
    """Chỉ kết nối với Chrome đang mở nếu cổng debug 9222 thực sự đang mở."""
    for port in [9222]:
        if not is_port_open(port):
            continue
        try:
            options = webdriver.ChromeOptions()
            options.add_experimental_option("debuggerAddress", f"localhost:{port}")
            driver = webdriver.Chrome(options=options)
            url = driver.current_url.lower()
            if "edusoftweb.hcmiu.edu.vn" in url:
                print(f"🔗 Đã phát hiện và kết nối với phiên Chrome đang mở sẵn (port {port})!")
                return driver
        except Exception:
            continue
    return None


def init_chrome_driver():
    """Khởi tạo trình duyệt Chrome với profile cách ly trong %LOCALAPPDATA%."""
    existing = try_connect_existing_chrome()
    if existing:
        return existing

    print("🌐 [1/5] Đang khởi chạy trình duyệt Chrome...")

    profile_dir = get_chrome_profile_dir()

    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized")
    options.add_argument("--disable-notifications")
    options.add_argument(f"--user-data-dir={profile_dir}")
    options.add_experimental_option("excludeSwitches", ["enable-automation"])
    options.add_experimental_option("useAutomationExtension", False)

    try:
        driver = webdriver.Chrome(options=options)
        return driver
    except Exception as e:
        print(f"⚠️ Không thể mở với profile cá nhân ({e}), đang mở Chrome độc lập...")
        options_fallback = webdriver.ChromeOptions()
        options_fallback.add_argument("--start-maximized")
        options_fallback.add_argument("--disable-notifications")
        options_fallback.add_experimental_option("excludeSwitches", ["enable-automation"])
        options_fallback.add_experimental_option("useAutomationExtension", False)
        return webdriver.Chrome(options=options_fallback)


def is_logged_in(page_src):
    """
    Kiểm tra chính xác xem đã đăng nhập thành công hay chưa:
    - Nếu ô nhập mật khẩu txtMatKhau vẫn còn trên trang -> CHƯA đăng nhập.
    - Nếu xuất hiện tên sinh viên kèm mã số (vd: Nim Tiến Đạt (IELSIU22313)) hoặc nút Thoát -> ĐÃ đăng nhập.
    """
    if "txtMatKhau" in page_src or "txtTaiKhoa" in page_src:
        return False, None

    match_name = re.search(r"Chào bạn\s+([^\|<]+)", page_src)
    if match_name and "(" in match_name.group(1):
        return True, match_name.group(1).strip()

    if "Thoát" in page_src and ("selectKhoa" in page_src or "pnlDSMonhocDK" in page_src):
        return True, match_name.group(1).strip() if match_name else None

    return False, None


def wait_for_user_login(driver, timeout_seconds=300):
    """Mở trang đăng ký môn học và tự động phát hiện khi đăng nhập thành công."""
    current_url = driver.current_url.lower()
    if "edusoftweb.hcmiu.edu.vn" not in current_url:
        print(f"🔗 Đang mở cổng Edusoft: {DKMH_URL}")
        driver.get(DKMH_URL)

    time.sleep(1)

    logged, user_name = is_logged_in(driver.page_source)
    if logged:
        name_str = f" (Chào bạn: {user_name})" if user_name else ""
        print(f"✅ [2/5] Đã nhận diện phiên đăng nhập hợp lệ!{name_str}\n")
        return

    print("\n" + "=" * 70)
    print("👉 HÃY NHẬP MSSV & MẬT KHẨU TRÊN CỬA SỔ CHROME VỪA MỞ.")
    print("👉 Sau khi bạn bấm 'Đăng Nhập', script sẽ TỰ ĐỘNG làm tất cả phần còn lại!")
    print("=" * 70 + "\n")

    start_time = time.time()

    while time.time() - start_time < timeout_seconds:
        try:
            logged, user_name = is_logged_in(driver.page_source)
            if logged:
                greeting = f" (Chào bạn: {user_name})" if user_name else ""
                print(f"✅ [2/5] Đăng nhập thành công!{greeting}\n")
                return

            if not driver.window_handles:
                print("❌ Cửa sổ trình duyệt đã bị đóng trước khi đăng nhập.")
                sys.exit(1)

        except WebDriverException:
            pass

        time.sleep(1)

    print(f"❌ Quá thời gian chờ đăng nhập ({timeout_seconds}s). Hủy tiến trình.")
    driver.quit()
    sys.exit(1)


def prepare_dkmh_page(driver):
    """Đảm bảo đang ở trang dkmonhoc và kích hoạt bộ lọc Khoa."""
    if "page=dkmonhoc" not in driver.current_url.lower():
        print("🔄 Đang chuyển hướng tới trang Đăng ký môn học...")
        driver.get(DKMH_URL)
        time.sleep(2)

    print("⚙️ [3/5] Đang kích hoạt bộ điều kiện lọc theo Khoa...")

    try:
        WebDriverWait(driver, 15).until(
            lambda d: d.execute_script("return document.readyState === 'complete';")
        )
    except Exception:
        pass

    # Tích checkbox Hiển thị điều kiện lọc
    driver.execute_script("""
    var chk = document.querySelector("input[onclick*='chkHienThiDieuKien']");
    if (chk && !chk.checked) {
        chk.click();
    }
    """)
    time.sleep(1)

    # Đảm bảo chọn loại lọc: Khoa
    driver.execute_script("""
    var selLoc = document.getElementById('selectDKLoc');
    if (selLoc && selLoc.value !== 'khoa') {
        selLoc.value = 'khoa';
        if (typeof selectDKLoc_changed === 'function') selectDKLoc_changed();
    }
    """)
    time.sleep(1)

    # Đợi dropdown selectKhoa xuất hiện
    try:
        WebDriverWait(driver, 10).until(
            lambda d: d.execute_script(
                "var s = document.getElementById('selectKhoa'); return s !== null && s.options.length > 1;"
            )
        )
    except Exception:
        pass


def get_all_faculties(driver):
    """Lấy danh sách mã và tên tất cả các Khoa/Bộ môn từ dropdown selectKhoa."""
    faculties = driver.execute_script("""
    var sel = document.getElementById('selectKhoa');
    if (!sel) return [];
    var res = [];
    for (var i = 0; i < sel.options.length; i++) {
        var opt = sel.options[i];
        if (opt.value && opt.value.trim() !== "") {
            res.push([opt.value.trim(), opt.text.trim()]);
        }
    }
    return res;
    """)
    return faculties or []


def extract_sessions_from_body_table(bt_soup):
    """
    Bóc tách dữ liệu từ 1 bảng môn học (body-table).
    Xử lý tách các buổi học khác nhau trong cùng 1 lớp (các thẻ div.top-fline).
    """
    tds = bt_soup.find_all("td")
    if len(tds) < 18:
        return []

    ma_mhbd = tds[1].get_text(strip=True)
    ma_mh = tds[2].get_text(strip=True)
    ten_mh = tds[3].get_text(strip=True)
    nmh = tds[4].get_text(strip=True)
    tth = tds[5].get_text(strip=True)
    stc = tds[6].get_text(strip=True)
    stchp = tds[7].get_text(strip=True)
    ma_lop = tds[8].get_text(strip=True)
    si_so = tds[9].get_text(strip=True)
    cl = tds[10].get_text(strip=True)
    th = tds[11].get_text(strip=True)

    def get_lines(td):
        divs = td.find_all("div", {"class": "top-fline"})
        if divs:
            return [d.get_text(strip=True) for d in divs]
        lines = [x.strip() for x in td.stripped_strings if x.strip()]
        return lines if lines else [""]

    thu_list = get_lines(tds[12])
    tiet_bd_list = get_lines(tds[13])
    st_list = get_lines(tds[14])
    phong_list = get_lines(tds[15])
    gv_list = get_lines(tds[16])
    tg_list = get_lines(tds[17])

    num_sessions = max(len(thu_list), len(tiet_bd_list), len(st_list), len(phong_list), 1)

    def pad(lst, n):
        return lst + [""] * (n - len(lst))

    thu_list = pad(thu_list, num_sessions)
    tiet_bd_list = pad(tiet_bd_list, num_sessions)
    st_list = pad(st_list, num_sessions)
    phong_list = pad(phong_list, num_sessions)
    gv_list = pad(gv_list, num_sessions)
    tg_list = pad(tg_list, num_sessions)

    results = []
    for i in range(num_sessions):
        results.append([
            ma_mhbd, ma_mh, ten_mh, nmh, tth, stc, stchp, ma_lop,
            si_so, cl, th, thu_list[i], tiet_bd_list[i], st_list[i],
            phong_list[i], gv_list[i], tg_list[i]
        ])
    return results


def scrape_all_faculties(driver):
    """Lặp qua tất cả các Khoa/Bộ môn và cào dữ liệu từng khoa."""
    faculties = get_all_faculties(driver)
    if not faculties:
        print("❌ Không tìm thấy combobox selectKhoa! Hãy kiểm tra lại trang web.")
        return [], 0

    print(f"🔍 Tìm thấy {len(faculties)} Khoa/Bộ môn. Bắt đầu thu thập dữ liệu:\n")
    all_sessions = []

    for idx, (code, name) in enumerate(faculties, 1):
        print(f"  [{idx:02d}/{len(faculties):02d}] ⏳ Đang tải: {name}...", end="", flush=True)

        driver.execute_script(f"""
        var sel = document.getElementById('selectKhoa');
        sel.value = '{code}';
        if (typeof selectKhoa_changed === 'function') {{
            selectKhoa_changed();
        }}
        """)

        for _ in range(40):
            time.sleep(0.3)
            cursor = driver.execute_script("return document.body.style.cursor;")
            if cursor != "wait":
                break
        time.sleep(0.4)

        soup = BeautifulSoup(driver.page_source, "html.parser")
        tbl = soup.find("table", {"id": "pnlDSMonhocDK"})
        faculty_sessions = []
        if tbl:
            body_tables = tbl.find_all("table", {"class": "body-table"})
            for bt in body_tables:
                sessions = extract_sessions_from_body_table(bt)
                faculty_sessions.extend(sessions)

        print(f" -> {len(faculty_sessions)} tiết học.")
        all_sessions.extend(faculty_sessions)

    return all_sessions, len(faculties)


def clean_and_format_data(raw_sessions, exclude_filter=True):
    """
    Làm sạch dữ liệu:
    - Loại bỏ các lớp Online, Physical Training (GDTC), Lab (LA1...)
    - Loại bỏ các dòng trống phòng
    - Khử trùng lặp (Deduplicate)
    """
    STANDARD_COLS = [
        "Mã MHBĐ", "Mã MH", "Tên môn học", "NMH", "TTH", "STC", "STCHP",
        "Mã lớp", "Sĩ số", "CL", "TH", "Thứ", "Tiết BD", "ST", "Phòng", "Giảng viên", "TG học"
    ]

    cleaned = []
    seen = set()

    for r in raw_sessions:
        ma_mh = r[1]
        ten_mh = r[2]
        nmh = r[3]
        ma_lop = r[7]
        thu = r[11]
        tiet_bd = r[12]
        st = r[13]
        phong = r[14]
        tg_hoc = r[16]

        if not ma_mh and not ten_mh:
            continue

        if exclude_filter:
            phong_up = phong.upper()
            ten_up = ten_mh.upper()

            if not phong or phong == "":
                continue
            if "ONLINE" in phong_up or "ONLINE" in ten_up:
                continue
            if "PHYSICAL" in ten_up or "GDTC" in ma_mh.upper() or "TRAINING" in phong_up:
                continue
            if "LAB" in phong_up or phong_up.startswith("LA"):
                continue

        dedup_key = (ma_mh, nmh, ma_lop, thu, tiet_bd, st, phong, tg_hoc)
        if dedup_key in seen:
            continue
        seen.add(dedup_key)

        cleaned.append(r)

    return STANDARD_COLS, cleaned


def validate_dataset(cleaned_rows, num_faculties):
    """
    Chốt chặn an toàn (Data Validation Guardrail):
    Nếu Edusoft đổi HTML hoặc lỗi kết nối khiến số lượng dữ liệu thu thập
    thấp bất thường, lập tức kích hoạt fail-safe ABORT.
    Tuyệt đối không bao giờ cho phép đè dữ liệu rác lên production!
    """
    unique_courses = set(r[1] for r in cleaned_rows if r[1])
    unique_classes = set(r[7] for r in cleaned_rows if r[7])
    unique_rooms = set(r[14] for r in cleaned_rows if len(r) > 14 and r[14])
    total_sessions = len(cleaned_rows)

    MIN_FACULTIES = 5
    MIN_COURSES = 30
    MIN_CLASSES = 50
    MIN_ROOMS = 20
    MIN_SESSIONS = 100

    errors = []
    if num_faculties < MIN_FACULTIES:
        errors.append(f"Số khoa phát hiện quá ít: {num_faculties} (yêu cầu tối thiểu: {MIN_FACULTIES})")
    if len(unique_courses) < MIN_COURSES:
        errors.append(f"Số mã môn học quá ít: {len(unique_courses)} (yêu cầu tối thiểu: {MIN_COURSES})")
    if len(unique_classes) < MIN_CLASSES:
        errors.append(f"Số mã lớp quá ít: {len(unique_classes)} (yêu cầu tối thiểu: {MIN_CLASSES})")
    if len(unique_rooms) < MIN_ROOMS:
        errors.append(f"Số phòng học tìm được quá ít: {len(unique_rooms)} (yêu cầu tối thiểu: {MIN_ROOMS})")
    if total_sessions < MIN_SESSIONS:
        errors.append(f"Tổng số tiết học quá ít: {total_sessions} (yêu cầu tối thiểu: {MIN_SESSIONS})")

    stats = {
        "faculties": num_faculties,
        "courses": len(unique_courses),
        "classes": len(unique_classes),
        "rooms": len(unique_rooms),
        "sessions": total_sessions
    }

    is_valid = len(errors) == 0
    return is_valid, errors, stats


def backup_existing_data(project_root, max_backups=5):
    """
    Tự động sao lưu dữ liệu data.js hiện tại vào thư mục backups/
    và duy trì tối đa max_backups bản mới nhất (Rotating Backup).
    """
    js_path = os.path.join(project_root, "assets", "data.js")
    if not os.path.exists(js_path):
        return None

    backup_dir = os.path.join(project_root, "backups")
    os.makedirs(backup_dir, exist_ok=True)

    timestamp = datetime.now().strftime("%Y-%m-%d_%H%M%S")
    backup_file = os.path.join(backup_dir, f"data_{timestamp}.js")

    try:
        shutil.copy2(js_path, backup_file)

        # Xoay vòng giữ tối đa max_backups bản
        all_backups = sorted([
            os.path.join(backup_dir, f)
            for f in os.listdir(backup_dir)
            if f.startswith("data_") and f.endswith(".js")
        ])
        if len(all_backups) > max_backups:
            to_delete = all_backups[:-max_backups]
            for f in to_delete:
                try:
                    os.remove(f)
                except Exception:
                    pass

        return os.path.relpath(backup_file, project_root)
    except Exception as e:
        print(f"⚠️ Không thể tạo bản sao lưu: {e}")
        return None


def export_csv(headers, rows, output_csv_path):
    """Xuất file CSV chuẩn tương thích với website."""
    with open(output_csv_path, "w", encoding="utf-8-sig", newline="") as f:
        f.write(",".join(headers) + ",\n")
        for r in rows:
            escaped_cells = []
            for cell in r:
                if "," in cell:
                    escaped_cells.append(f'"{cell}"')
                else:
                    escaped_cells.append(cell)
            line = "," + ",".join(escaped_cells) + "\n"
            f.write(line)

    print(f"📁 Đã xuất file CSV thành công: {output_csv_path} ({len(rows)} dòng)")


def update_data_js(headers, rows, js_path):
    """Cập nhật trực tiếp vào file assets/data.js cho website tĩnh."""
    os.makedirs(os.path.dirname(js_path), exist_ok=True)
    csv_lines = [",".join(headers) + ","]
    for r in rows:
        escaped_cells = []
        for cell in r:
            if "," in cell:
                escaped_cells.append(f'"{cell}"')
            else:
                escaped_cells.append(cell)
        csv_lines.append("," + ",".join(escaped_cells))

    csv_content = "\n".join(csv_lines)

    js_content = f"""// 📌 Embedded CSV Data - Cập nhật tự động lúc {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
const csvData = `
{csv_content}
`;
"""
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"🌐 Đã đồng bộ dữ liệu mới vào website: {js_path}")


def handle_git_publish(project_root, files_to_commit, auto_confirm=False):
    """
    Tách biệt việc publish lên GitHub Pages:
    Dữ liệu local đã an toàn trước khi hỏi publish.
    Người dùng sử dụng GitHub credential cá nhân (không hardcode).
    """
    print("\n" + "=" * 70)
    print("🚀 PUBLISH TO WEBSITE (GITHUB PAGES)")
    print("=" * 70)

    if not auto_confirm:
        try:
            confirm = input("👉 Bạn có muốn tự động cập nhật và publish lên website ngay bây giờ không? (y/N): ").strip().lower()
        except EOFError:
            confirm = "n"
        if confirm not in ("y", "yes"):
            print("ℹ️ Đã bỏ qua bước Publish. Dữ liệu mới đã được lưu an toàn tại máy cục bộ.")
            return

    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
    commit_msg = f"Update schedule data: {timestamp}"

    try:
        # git add
        for file in files_to_commit:
            if os.path.exists(file):
                subprocess.run(["git", "add", file], cwd=project_root, check=True)

        # git commit
        res = subprocess.run(["git", "commit", "-m", commit_msg], cwd=project_root, capture_output=True, text=True)
        if "nothing to commit" in res.stdout or "nothing to commit" in res.stderr:
            print("ℹ️ Dữ liệu trên git không có thay đổi mới nào cần commit.")
        else:
            print(f"✅ Đã tạo commit: '{commit_msg}'")

        # git push
        print("⏳ Đang đẩy lên GitHub (git push origin main)...")
        push_res = subprocess.run(["git", "push", "origin", "main"], cwd=project_root, capture_output=True, text=True)
        if push_res.returncode == 0:
            print("🎉 PUBLISH THÀNH CÔNG! Website sẽ cập nhật dữ liệu mới sau 1-2 phút.")
        else:
            print(f"⚠️ Push thất bại hoặc bạn chưa có quyền ghi vào repo:\n{push_res.stderr}")
            print("💡 Hãy đảm bảo bạn đã được thêm làm Collaborator của repo và đã đăng nhập GitHub.")

    except Exception as e:
        print(f"❌ Lỗi khi thực hiện Git: {e}")


def main():
    parser = argparse.ArgumentParser(description="Tự động cập nhật thời khóa biểu EdusoftWeb HCMIU")
    parser.add_argument("--csv", default="Sem_current.csv", help="Tên file CSV xuất ra (mặc định: Sem_current.csv)")
    parser.add_argument("--no-filter", action="store_true", help="Không lọc bỏ các lớp Online, Lab, Physical Training")
    parser.add_argument("--no-js", action="store_true", help="Không cập nhật file assets/data.js")
    parser.add_argument("--commit", action="store_true", help="Tự động publish GitHub mà không cần hỏi lại")
    args = parser.parse_args()

    print_banner()

    project_root = get_project_root()
    driver = init_chrome_driver()

    try:
        # [1] & [2] Đăng nhập
        wait_for_user_login(driver)

        # [3] Kích hoạt điều kiện lọc
        prepare_dkmh_page(driver)

        # [4] Cào toàn bộ các Khoa
        raw_sessions, num_faculties = scrape_all_faculties(driver)

        if not raw_sessions:
            print("❌ Không thu thập được dữ liệu nào từ portal. Vui lòng kiểm tra lại trang web.")
            return

        print(f"\n✨ Thu thập được tổng cộng {len(raw_sessions)} tiết học thô.")

        # [5] Làm sạch dữ liệu
        print("🧹 [4/5] Đang làm sạch dữ liệu và đối soát an toàn (Data Validation)...")
        headers, cleaned_rows = clean_and_format_data(raw_sessions, exclude_filter=not args.no_filter)

        # [6] CHỐT CHẶN AN TOÀN (DATA VALIDATION GUARDRAILS)
        is_valid, errors, stats = validate_dataset(cleaned_rows, num_faculties)

        print("-" * 50)
        print(f"  ✓ Khoa/Bộ môn phát hiện : {stats['faculties']}")
        print(f"  ✓ Số mã môn học         : {stats['courses']}")
        print(f"  ✓ Số mã lớp             : {stats['classes']}")
        print(f"  ✓ Số phòng học thực tế  : {stats['rooms']}")
        print(f"  ✓ Tổng số tiết học      : {stats['sessions']}")
        print("-" * 50)

        if not is_valid:
            print("🚨 [DATA VALIDATION FAILED - BÁO ĐỘNG]")
            print("Dữ liệu thu thập không đạt tiêu chuẩn an toàn của hệ thống:")
            for err in errors:
                print(f"  ❌ {err}")
            print("\n🛑 HỆ THỐNG ĐÃ TỰ ĐỘNG HỦY BỎ (ABORT)!")
            print("👉 Website KHÔNG bị ghi đè dữ liệu rác/trống.")
            print("💡 Hãy kiểm tra lại kết nối mạng hoặc xem Edusoft có thay đổi cấu trúc bảng không.")
            return

        print("✅ Data validation: PASSED! Dữ liệu đạt chất lượng cao.\n")

        # [7] Backup dataset cũ
        backed_file = backup_existing_data(project_root, max_backups=5)
        if backed_file:
            print(f"💾 Đã sao lưu dữ liệu cũ: {backed_file} (giữ tối đa 5 bản gần nhất)")

        # [8] Xuất file CSV
        output_csv = args.csv
        if not os.path.isabs(output_csv):
            output_csv = os.path.join(project_root, output_csv)
        export_csv(headers, cleaned_rows, output_csv)

        # [9] Cập nhật assets/data.js
        files_to_commit = [output_csv]
        if not args.no_js:
            js_path = os.path.join(project_root, "assets", "data.js")
            update_data_js(headers, cleaned_rows, js_path)
            files_to_commit.append(js_path)

        # [10] Hỏi và thực hiện Publish lên GitHub
        handle_git_publish(project_root, files_to_commit, auto_confirm=args.commit)

        print("\n🎉 HOÀN TẤT TẤT CẢ CÁC BƯỚC! Dữ liệu phòng trống đã sẵn sàng.")

    finally:
        try:
            driver.quit()
        except Exception:
            pass

        if getattr(sys, "frozen", False):
            print("\n" + "=" * 70)
            try:
                input("👉 Nhấn Enter để kết thúc và đóng cửa sổ...")
            except Exception:
                pass


if __name__ == "__main__":
    main()
