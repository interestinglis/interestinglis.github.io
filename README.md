# 🏛️ IU Room Availability Checker (Tìm Phòng Trống HCMIU)

> **Phần mềm tra cứu và tìm kiếm phòng học còn trống tại Trường Đại học Quốc Tế - ĐHQG TP.HCM (HCMIU).**  
> Giúp sinh viên dễ dàng tìm phòng tự học, họp nhóm, nghỉ trưa hoặc sinh hoạt câu lạc bộ một cách nhanh chóng và chính xác.

🌐 **Website trực tuyến:** [https://interestinglis.github.io/](https://interestinglis.github.io/)  
👤 **Tác giả:** [Nìm Tiến Đạt (Datnim)](https://www.facebook.com/nimdat)  
📬 **Liên hệ:** `nimdat2004@gmail.com` | `IELSIU22313@student.hcmiu.edu.vn`

---

## 📌 Mục Lục
- [1. Giới thiệu & Cách thức hoạt động](#1-giới-thiệu--cách-thức-hoạt-động)
- [2. Quy tắc lọc phòng (Filter Rules)](#2-quy-tắc-lọc-phòng-filter-rules)
- [3. Thu thập dữ liệu tự động (Browser Automation)](#3-thu-thập-dữ-liệu-tự-động-browser-automation-khuyên-dùng)
- [4. Cấu trúc thư mục dự án](#4-cấu-trúc-thư-mục-dự-án)
- [5. Quy trình thủ công cũ (Excel + VBA)](#5-quy-trình-thủ-công-cũ-excel--vba-lưu-trữ)
- [6. Lưu ý & Miễn trừ trách nhiệm](#6-lưu-ý--miễn-trừ-trách-nhiệm)

---

## 1. Giới thiệu & Cách thức hoạt động

Website được thiết kế theo kiến trúc **Serverless / Static Web Application**:
- **Không cần backend:** Dữ liệu thời khóa biểu toàn trường được nén và nhúng trực tiếp dưới dạng chuỗi CSV trong file `assets/data.js`.
- **Tốc độ phản hồi tức thì:** Toàn bộ thuật toán tìm kiếm, đối soát lịch học, lọc phòng và sắp xếp đều chạy trực tiếp trên trình duyệt của người dùng (Client-side JavaScript).
- **Hosting miễn phí 100%:** Triển khai qua GitHub Pages tại domain `interestinglis.github.io`.

### Luồng xử lý khi người dùng tra cứu:
1. Người dùng chọn **Thứ trong tuần** (Hai, Ba, Tư, Năm, Sáu, Bảy).
2. Người dùng tích chọn các **Tiết cần trống** (từ Tiết 1 đến Tiết 10).
3. Hệ thống quét qua toàn bộ lịch học trong ngày đó, tìm ra tất cả các phòng đang có lớp học diễn ra vào các tiết đã chọn và loại bỏ chúng.
4. Danh sách các phòng còn lại được phân loại, đánh dấu mức độ khả dụng và sắp xếp ưu tiên theo từng dãy nhà.

---

## 2. Quy tắc lọc phòng (Filter Rules)

Nhằm tăng tính thực tế khi sinh viên đi tìm phòng, hệ thống áp dụng các quy tắc phân loại thông minh:

| Ký hiệu | Ý nghĩa | Giải thích |
| :---: | :--- | :--- |
| *(Không dấu)* | **Phòng sẵn sàng cao** | Phòng đã có lớp học từ các tiết trước đó trong ngày (chắc chắn đã được mở khóa cửa). |
| `*` | **Phòng có thể đang khóa** | Phòng chưa có tiết học nào diễn ra từ đầu ngày đến thời điểm tra cứu (khả năng cao cửa phòng vẫn đang khóa). |
| `**` | **Phòng đặc biệt / Thường trưng dụng** | Các phòng như `A1.109`, `A2.104`, `A1.207A`, `A1.207B`, `A1.309`, `A2.203-A2.206`, `A2.207A-B` thường xuyên được trưng dụng làm hội đồng hoặc phòng chuyên môn. |

### Các loại phòng bị loại bỏ khỏi hệ thống:
- ❌ **Phòng Lab / Thực hành:** Các phòng thí nghiệm, phòng máy tính (`LA1...`, `LAB`) do luôn khóa cửa và chỉ dành cho môn chuyên ngành.
- ❌ **Lớp học Online:** Các lớp học trực tuyến qua MS Teams / Zoom.
- ❌ **Lớp Giáo dục thể chất:** Lớp học tại sân bóng, nhà thi đấu ngoài trời (`PHYSICAL TRAINING`, `GDTC`).
- ❌ **Phòng không có lịch:** Các phòng hoàn toàn không có bất kỳ tiết học nào trong suốt học kỳ.

### Thuật toán sắp xếp thứ tự hiển thị:
Ưu tiên hiển thị theo khối nhà và số tầng từ thấp đến cao:
$$\text{Dãy A1} \longrightarrow \text{Dãy A2} \longrightarrow \text{Dãy L} \longrightarrow \text{Các dãy khác}$$

---

## 3. Thu thập dữ liệu tự động (Browser Automation & Standalone Tool) ⭐

Để không còn phải copy-paste hàng nghìn môn học bằng tay mỗi khi sang học kỳ mới, dự án đã tích hợp công cụ cào dữ liệu tự động 100% bằng Python & Selenium với kiến trúc **Bus Factor = 0** ([`crawl_edusoft.exe`](crawl_edusoft.exe) / [`crawler/crawl_edusoft.py`](crawler/crawl_edusoft.py)).

> 📘 **Tài liệu bàn giao & kế thừa:** Xem chi tiết tại [**docs/MAINTENANCE.md**](docs/MAINTENANCE.md) (Hướng dẫn 3 phút cho sinh viên không biết code, Sổ tay gỡ lỗi và Quy trình chuyển giao quyền quản trị).

### 🚀 Cách 1: 1-Click Run bằng File thực thi `.exe` (Khuyên dùng - Không cần cài Python)
- **Trong thư mục dự án:** Nhấp đúp chuột vào file [`crawl_edusoft.exe`](crawl_edusoft.exe) hoặc [`run_crawler.bat`](run_crawler.bat).
- **Ngoài Desktop:** Nhấp đúp chuột vào shortcut / file `crawl_edusoft.exe`.
- Đăng nhập bằng tài khoản Edusoft của chính bạn $\to$ Tool tự cào 17 Khoa $\to$ Kiểm tra chất lượng dữ liệu $\to$ Tự động sao lưu và cập nhật `assets/data.js`.

### 💻 Cách 2: Chạy từ Terminal / Mã nguồn Python
```bash
# Trong môi trường Python đã cài đặt selenium & beautifulsoup4
python crawl_edusoft.py
```

### ⚙️ Các tham số tùy chọn:
```bash
python crawl_edusoft.py --commit       # Tự động git commit & push lên GitHub Pages không cần hỏi lại
python crawl_edusoft.py --csv Sem1.csv # Chỉ định tên file CSV xuất ra
python crawl_edusoft.py --no-filter    # Cào thô toàn bộ (không lọc bỏ Online/Lab/GDTC)
python crawl_edusoft.py --no-js        # Chỉ xuất file CSV, không cập nhật assets/data.js
```

### 🛡️ Tính an toàn, Chốt chặn bảo vệ & Sao lưu:
- **Bảo vệ Bus Factor = 0:** Người kế thừa dùng tài khoản Edusoft của chính họ. Không lưu trữ mật khẩu, không phụ thuộc vào tài khoản của tác giả cũ.
- **Chốt chặn Data Validation:** Tự động kiểm tra chất lượng dữ liệu cào về (tối thiểu 10 khoa, 50 môn học, 20 phòng học thực tế). Nếu trường đổi giao diện HTML hoặc dữ liệu rỗng, tool sẽ **lập tức hủy bỏ** để bảo vệ website production không bị trắng trang.
- **Tự động sao lưu xoay vòng (Rotating Backups):** Mỗi lần cập nhật thành công, file `assets/data.js` cũ sẽ được tự động lưu vào thư mục `backups/data_YYYY-MM-DD_HHMMSS.js` (tự động giữ 5 bản sao lưu mới nhất để rollback khi cần).
- **Lưu phiên Chrome chuẩn Windows:** Lưu cookie phiên làm việc tại `%LOCALAPPDATA%\IU-Room-Checker\chrome_profile` giúp không làm bẩn thư mục Git và không bị xung đột tài khoản.

---

## 4. Cấu trúc thư mục dự án

Dự án được cấu trúc theo mô hình 3 tầng rõ ràng:

```text
TimPhongTrong/
│
├── crawl_edusoft.exe        # 🚀 File thực thi Standalone (chạy ngay, không cần cài Python)
├── run_crawler.bat         # ⚡ File Batch 1-click khởi chạy crawler
├── index.html              # 🌐 Giao diện chính của ứng dụng web tra cứu phòng trống
├── README.md               # 📖 Tài liệu tổng quan dự án
│
├── crawler/                # 🛠️ Tầng mã nguồn thu thập dữ liệu (Developer Source)
│   ├── crawl_edusoft.py    # Source Python v1.0.0 (Data Validation + Rotating Backups)
│   ├── requirements.txt    # Danh sách thư viện (selenium, beautifulsoup4, pyinstaller)
│   ├── version_info.txt    # Windows PE Metadata chống false-positive virus Defender
│   └── build.bat           # Script 1-click đóng gói lại file .exe sau khi sửa code
│
├── docs/                   # 📚 Tài liệu vận hành & kế thừa
│   └── MAINTENANCE.md      # Sổ tay duy trì 5 phút (Bus Factor = 0, DOM specs, Troubleshooting)
│
├── backups/                # 💾 Lưu trữ 5 bản sao lưu xoay vòng của assets/data.js
│
├── assets/                 # 🌐 Tài nguyên tĩnh của ứng dụng web
│   ├── data.js             # Dữ liệu thời khóa biểu được nhúng trực tiếp
│   ├── script.js           # Logic tìm kiếm, lọc và phân loại phòng khả dụng
│   └── styles.css          # Bố cục giao diện Responsive & CSS animations
│
├── Sem_current.csv         # 📊 Dataset lịch học CSV mới nhất
└── Sem1_2627.csv           # 📊 Dataset lịch học mẫu Học kỳ 1 (2026-2027)
```

---

## 5. Quy trình thủ công cũ (Excel + VBA) [Lưu trữ]

<details>
<summary><b>Nhấn vào đây để xem lại quy trình thu thập dữ liệu bằng tay trước đây</b></summary>

Trước khi có tool tự động `crawl_edusoft.py`, dữ liệu được thu thập qua quy trình thủ công sau:

1. **Copy dữ liệu:** Truy cập `EDUSOFT` > `Đăng Ký Môn Học` > `Hiển Thị Điều Kiện Lọc` > `Chọn Khoa` > Bôi đen copy hết các môn trong từng khoa.  
   ![Edusoft Filter](https://github.com/user-attachments/assets/ed0616e9-d5fb-4247-a245-f4f01ad4a1d5)

2. **Dán vào Excel:** Paste tất cả các môn của tất cả các khoa vào file Excel (`.xlsx`), align lại các cột, xóa bỏ các dòng lớp `ONLINE` và `PHYSICAL TRAINING`.

3. **Chạy Macro VBA để Unmerge ô:**  
   - Nhấn `Alt + F11` trong Excel > `Insert` > `Module`.  
   - Dán đoạn mã VBA sau và nhấn `F5` để chạy:

   ```vba
   Sub UnMergeFill()
       Dim cell As Range, joinedCells As Range
       Dim ws As Worksheet
       Dim lastRow As Long, lastCol As Long
       Dim rng As Range

       Set ws = ThisWorkbook.ActiveSheet

       For Each cell In ws.UsedRange
           If cell.MergeCells Then
               Set joinedCells = cell.MergeArea
               joinedCells.MergeCells = False
               joinedCells.Value = cell.Value
           End If
       Next

       lastRow = ws.Cells(Rows.Count, 1).End(xlUp).Row
       lastCol = ws.Cells(1, Columns.Count).End(xlToLeft).Column

       Set rng = ws.Range(ws.Cells(1, 2), ws.Cells(lastRow, lastCol)) ' Excluding column A

       rng.RemoveDuplicates Columns:=Application.WorksheetFunction.Transpose(Evaluate("ROW(1:" & lastCol - 1 & ")")), Header:=xlYes

       ws.Columns(1).Delete Shift:=xlToLeft
   End Sub
   ```

4. **Xuất CSV UTF-8:** Lưu file Excel dưới dạng `CSV UTF-8 (Comma delimited) (*.csv)`.  
   ![Save CSV](https://github.com/user-attachments/assets/cbe41c84-aaf6-4cf4-822c-408ebd415e66)

5. **Cập nhật web:** Mở file CSV bằng Notepad, copy toàn bộ nội dung và dán vào biến `const csvData = \`...\`;` trong file `assets/data.js`.  
   ![Update data.js](https://github.com/user-attachments/assets/db8e70a1-d3db-4ae8-8ac5-3bfd0e8b147d)

</details>

---

## 6. Lưu ý & Miễn trừ trách nhiệm

- ⚠️ **Dữ liệu tham khảo:** Dữ liệu thời khóa biểu được bóc tách từ cổng đào tạo sinh viên EdusoftWeb của trường. Dữ liệu này **không bao gồm** các lớp tiếng Anh tăng cường (Intensive English - IE), các kỳ thi đột xuất, các buổi sinh hoạt chuyên đề hoặc sự kiện được phòng ban/câu lạc bộ đặt phòng riêng tại Phòng Đào tạo (OAA).
- 💡 **Mẹo khi sử dụng phòng:** Nếu đến cửa phòng thấy khóa, bạn có thể kiểm tra xem xung quanh có phòng nào khác đang mở sáng đèn hoặc liên hệ các chú bảo vệ trực tầng để hỗ trợ mở cửa nếu được phép.
- 🤝 **Đóng góp:** Đây là dự án cá nhân phi lợi nhuận nhằm hỗ trợ cộng đồng sinh viên IU. Mọi ý kiến đóng góp, báo lỗi hoặc yêu cầu cải tiến giao diện đều rất được hoan nghênh qua [Facebook cá nhân](https://www.facebook.com/nimdat) hoặc gửi Pull Request trực tiếp trên GitHub.
