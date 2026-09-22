# 📖 Sổ Tay Duy Trì & Kế Thừa Dự Án (Maintenance Playbook)
> **Dành cho thế hệ duy trì tiếp theo của IU Room Availability Checker (Tìm Phòng Trống HCMIU)**  
> *Triết lý thiết kế: Bus Factor = 0. Dự án có thể tự sống và được cập nhật dễ dàng bởi bất kỳ sinh viên nào sau khi đọc tài liệu này trong 5 phút.*

---

## 📌 Mục Lục
1. [Triết lý kiến trúc & Bus Factor = 0](#1-triết-lý-kiến-trúc--bus-factor--0)
2. [Dành cho người cập nhật dữ liệu (Non-Tech Guide - 3 phút)](#2-dành-cho-người-cập-nhật-dữ-liệu-non-tech-guide---3-phút)
3. [Dành cho lập trình viên (Developer Guide)](#3-dành-cho-lập-trình-viên-developer-guide)
4. [Sổ tay xử lý sự cố (Troubleshooting Playbook)](#4-sổ-tay-xử-lý-sự-cố-troubleshooting-playbook)
5. [Quy trình bàn giao quyền quản trị Repo](#5-quy-trình-bàn-giao-quyền-quản-trị-repo)

---

## 1. Triết lý kiến trúc & Bus Factor = 0

Hầu hết các dự án sinh viên bị "chết" sau khi tác giả tốt nghiệp vì **Bus Factor = 1**:
- Tác giả ra trường $\to$ Tài khoản Edusoft của tác giả bị khóa.
- Người kế thừa không có tài khoản, hoặc không biết cách cào dữ liệu mới.
- Dữ liệu rác hoặc rỗng bị ghi đè lên production làm sập web.

### Giải pháp của hệ thống này:
```text
Sinh viên còn quyền Edusoft
   │
   ▼
Chạy crawl_edusoft.exe
   │
   ▼
Tự đăng nhập bằng tài khoản Edusoft của CHÍNH MÌNH (Không cần xin tài khoản tác giả cũ)
   │
   ▼
Selenium cào 17 Khoa + Tự động bóc tách đa lịch học
   │
   ▼
Chốt chặn Data Validation: Kiểm tra an toàn (>= 20 phòng, >= 50 môn)
   │
   ├─► [FAIL] ──► HỦY BỎ (ABORT) - Giữ an toàn cho website
   │
   └─► [PASS] ──► Tự động Backup 5 bản gần nhất vào backups/
                 Cập nhật assets/data.js
                 Hỏi: Publish lên GitHub Pages? [Y/N]
```

---

## 2. Dành cho người cập nhật dữ liệu (Non-Tech Guide - 3 phút)

Nếu bạn là sinh viên được giao nhiệm vụ cập nhật phòng trống cho học kỳ mới mà **không biết lập trình Python**, hãy làm đúng 4 bước sau:

1. **Khởi động tool:**  
   Nhấp đúp chuột vào file `crawl_edusoft.exe` (hoặc file `.bat` ngoài Desktop).
2. **Đăng nhập Edusoft:**  
   Cửa sổ trình duyệt Google Chrome sẽ tự động bật lên. Bạn **nhập MSSV và Mật khẩu của chính bạn** vào trang Edusoft và bấm *Đăng nhập*.
3. **Chờ tự động cào dữ liệu (khoảng 30 giây):**  
   Script sẽ tự động duyệt qua tất cả 17 Khoa/Bộ môn. Bạn có thể theo dõi tiến độ từng khoa trực tiếp trên màn hình:
   ```text
   [01/17] ⏳ Đang tải: EFA - Economics, Finance and Accounting... -> 116 tiết học.
   ...
   [17/17] ⏳ Đang tải: BT - Bio-Technology... -> 189 tiết học.
   ```
4. **Kiểm tra và Publish:**  
   Khi thấy dòng chữ:
   ```text
   ✅ Data validation: PASSED! Dữ liệu đạt chất lượng cao.
   👉 Bạn có muốn tự động cập nhật và publish lên website ngay bây giờ không? (y/N):
   ```
   Bạn chỉ cần gõ **`y`** và nhấn **Enter**. Website sẽ tự động cập nhật dữ liệu mới sau 1-2 phút!

---

## 3. Dành cho lập trình viên (Developer Guide)

Nếu bạn là lập trình viên cần chỉnh sửa logic hoặc sửa mã nguồn khi trường thay đổi giao diện:

### Cấu trúc mã nguồn crawler:
Toàn bộ source code nằm trong thư mục `crawler/`:
- `crawl_edusoft.py`: File mã nguồn Python chính.
- `requirements.txt`: Các thư viện phụ thuộc (`selenium`, `beautifulsoup4`, `pyinstaller`).
- `version_info.txt`: Thông tin bản quyền nhúng vào file `.exe` (giúp chống virus flag).
- `build.bat`: Script 1-click tự động biên dịch lại file `.exe` ra thư mục gốc.

### Cài đặt môi trường phát triển:
```bash
cd crawler
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### Cơ chế kỹ thuật của EdusoftWeb cần ghi nhớ:
- **Kiến trúc:** ASP.NET WebForms kết hợp AjaxPro RPC.
- **Dropdown chọn Khoa:** `id="selectKhoa"`.
- **Kích hoạt tải dữ liệu:** Khi giá trị `selectKhoa.value` thay đổi, phải gọi hàm JavaScript `selectKhoa_changed()`. Hàm này sẽ gọi ngầm:
  ```javascript
  EduSoft.Web.UC.DangKyMonHoc.LocTheoMaKhoa(true, chosenOption.value, '', ShowTatCaTDK_callback);
  ```
- **Nhận diện tải xong:** Theo dõi trạng thái `document.body.style.cursor`. Trong lúc tải là `'wait'`, khi hoàn tất sẽ trả về `''` (default).
- **Cấu trúc bảng môn học:** Thẻ `table id="pnlDSMonhocDK"` chứa nhiều `table class="body-table"`. Trong mỗi môn, các buổi học khác nhau (Lý thuyết, Thực hành) được xếp trong các thẻ `<div class="top-fline">`.

### Cách build lại file `.exe` sau khi sửa code:
Chỉ cần nhấp đúp vào file `crawler/build.bat` (hoặc chạy lệnh):
```bash
cd crawler
build.bat
```
File thực thi mới sẽ được tự động copy ra thư mục gốc: `crawl_edusoft.exe`.

---

## 4. Sổ tay xử lý sự cố (Troubleshooting Playbook)

### 🔴 Sự cố 1: "DATA VALIDATION FAILED - BÁO ĐỘNG"
- **Hiện tượng:** Script dừng lại và in thông báo số lượng phòng hoặc môn học quá ít, hủy bỏ cập nhật.
- **Nguyên nhân:**
  1. Trường đang trong thời gian bảo trì hoặc chưa công bố thời khóa biểu kỳ mới.
  2. Nhà trường đã thay đổi cấu trúc bảng HTML hoặc ID của dropdown.
- **Khắc phục:** 
  - Mở file `crawler/crawl_edusoft.py`.
  - Kiểm tra xem các selector `id="selectKhoa"` và `id="pnlDSMonhocDK"` có bị trường đổi tên không.
  - Sửa lại selector tương ứng trong code và chạy `build.bat` để cập nhật.

### 🔴 Sự cố 2: Trình duyệt Chrome không mở lên
- **Hiện tượng:** Bấm file `.exe` nhưng báo lỗi không khởi động được Chrome.
- **Nguyên nhân:** Máy tính chưa cài đặt Google Chrome, hoặc Chrome đang bị treo ngầm.
- **Khắc phục:**
  - Cài đặt Google Chrome bản mới nhất từ trang chủ Google.
  - Mở Task Manager (`Ctrl + Shift + Esc`), tắt tất cả các tiến trình `chrome.exe` và `chromedriver.exe` đang chạy ngầm rồi thử lại.

### 🔴 Sự cố 3: "Push thất bại hoặc bạn chưa có quyền ghi vào repo"
- **Hiện tượng:** Cào dữ liệu thành công nhưng bước cuối cùng báo lỗi Git Push.
- **Nguyên nhân:** Bạn chưa được chủ repository thêm quyền Collaborator (quyền Write), hoặc máy tính chưa đăng nhập Git.
- **Khắc phục:**
  1. Liên hệ chủ repo nhờ thêm tài khoản GitHub của bạn vào mục **Settings > Collaborators**.
  2. Mở terminal, chạy lệnh: `gh auth login` hoặc thiết lập Git Credential Manager trên máy của bạn.
  3. Dữ liệu lúc này đã được cập nhật ở local (`assets/data.js`), bạn chỉ cần chạy tay:
     ```bash
     git add assets/data.js Sem_current.csv
     git commit -m "Update schedule data"
     git push origin main
     ```

### 🔴 Sự cố 4: Muốn hoàn tác (Rollback) lại dữ liệu cũ khi lỡ cập nhật nhầm
- **Khắc phục:** 
  - Mở thư mục `backups/`.
  - Tìm file sao lưu gần nhất (ví dụ `data_2026-09-22_155000.js`).
  - Copy file đó đè lại vào `assets/data.js`.
  - Commit và push lên GitHub để khôi phục lại trang web.

---

## 5. Quy trình bàn giao quyền quản trị Repo

Khi tác giả chính chuẩn bị tốt nghiệp:
1. Vào trang GitHub của repository: `https://github.com/interestinglis/interestinglis.github.io/settings/access`.
2. Bấm **Add people** $\to$ Nhập username GitHub của sinh viên kế thừa.
3. Gửi cho bạn ấy đường link dẫn đến tài liệu này: `docs/MAINTENANCE.md`.
4. Người kế thừa chỉ cần clone repo về máy và làm theo hướng dẫn tại Mục 2 mỗi khi có học kỳ mới.
