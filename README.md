# 🏛️ Tìm Phòng Trống HCMIU (IU Room Availability Checker)

> **Ứng dụng tra cứu phòng học còn trống tại Trường Đại học Quốc Tế - ĐHQG TP.HCM (HCMIU).**  
> Giúp các bạn sinh viên tìm phòng tự học, họp nhóm, nghỉ trưa hoặc sinh hoạt CLB nhanh chóng và tiện lợi.

- 🌐 **Website trực tuyến:** [https://interestinglis.github.io/](https://interestinglis.github.io/)  
- 👤 **Tác giả:** [Nìm Tiến Đạt (Datnim)](https://www.facebook.com/nimdat)  
- 📬 **Liên hệ:** `nimdat2004@gmail.com` | `IELSIU22313@student.hcmiu.edu.vn`

---

## ✨ 1. Web hoạt động như thế nào?

- **Dùng ngay không cần cài đặt:** Bạn chỉ cần truy cập website, chọn **Thứ trong tuần** và tích chọn các **Tiết cần trống** (từ Tiết 1 đến Tiết 10).
- **Phản hồi tức thì:** Toàn bộ dữ liệu thời khóa biểu được tích hợp trực tiếp vào trang web, hệ thống sẽ lọc và trả về danh sách các phòng khả dụng ngay lập tức mà không cần chờ tải lại trang.
- **Quy tắc hiển thị và ký hiệu phòng:**
  - **Phòng không dấu (ví dụ `A1.401`):** Phòng đã có lớp học từ các tiết trước đó trong ngày $\to$ chắc chắn cửa phòng đã được mở sẵn, vào học thoải mái.
  - **Phòng có dấu `*` (ví dụ `A1.402 *`):** Từ đầu ngày đến lúc bạn tra chưa có tiết học nào $\to$ khả năng cao cửa phòng vẫn đang khóa.
  - **Phòng có dấu `**` (ví dụ `A1.109 **`):** Các phòng thường xuyên được trưng dụng làm hội đồng, phòng họp hoặc bảo vệ khóa luận.
  - *Hệ thống đã tự động lọc bỏ các phòng Lab thực hành (luôn khóa cửa) và các lớp học Online / Thể dục ngoài sân.*

---

## 🔄 2. Quy trình cập nhật dữ liệu mỗi khi sang học kỳ mới

Mỗi khi trường công bố thời khóa biểu kỳ mới, quy trình cập nhật diễn ra theo các bước nối tiếp nhau cực kỳ đơn giản:

### Bước 1: Cào dữ liệu tự động bằng tool 1-Click
1. Nhấp đúp chuột vào file **[`crawl_edusoft.exe`](crawl_edusoft.exe)** (có thể chạy ngay trong thư mục dự án hoặc file ngoài Desktop).
2. Cửa sổ Google Chrome sẽ tự động bật lên $\to$ Bạn **nhập MSSV & Mật khẩu Edusoft của chính bạn** rồi bấm Đăng nhập.
3. Chờ khoảng 30 giây để tool tự động quét 17 Khoa/Bộ môn, lọc sạch dữ liệu và xuất ra file **`Sem_current.csv`**.
4. Khi hoàn tất kiểm tra an toàn, tool sẽ hỏi:
   ```text
   👉 Bạn có muốn tự động cập nhật và publish lên website ngay bây giờ không? (y/N):
   ```
   - **Nếu gõ `y`:** Tool sẽ tự động cập nhật thẳng vào `assets/data.js` và git push lên website luôn $\to$ Hoàn tất!
   - **Nếu gõ `N` (hoặc bạn muốn tự kiểm tra dữ liệu trước khi đẩy lên web):** Thực hiện tiếp Bước 2 dưới đây.

---

### Bước 2: Dán dữ liệu CSV vào `data.js` (khi không auto-commit)

Nếu bạn không auto-commit ở Bước 1, hoặc khi bạn có sẵn file CSV thời khóa biểu và muốn cập nhật thủ công:

1. **Mở file CSV:** Nhấp chuột phải vào file `Sem_current.csv` $\to$ chọn **Open with** $\to$ **Notepad**.
2. **Copy toàn bộ dữ liệu:** Nhấn tổ hợp phím **`Ctrl + A`** (chọn tất cả) $\to$ nhấn **`Ctrl + C`** (sao chép).
3. **Mở file data của website:** Mở file **`assets/data.js`** bằng **Notepad**.
4. **Dán đè nội dung:** Dán toàn bộ nội dung vừa copy vào **bên trong cặp dấu nháy xiên (\`)** của biến `const csvData`:
   ```javascript
   // 📌 assets/data.js
   const csvData = `
   Mã MHBĐ,Mã MH,Tên môn học,NMH,TTH,STC,STCHP,Mã lớp,Sĩ số,CL,TH,Thứ,Tiết BD,ST,Phòng,Giảng viên,TG học,
   ,BA005IU,BA005IU,Financial Accounting,01,,3,3,FAAC25IU01,50,Hết,,Hai,7,3,A2.301,T.D.Khiêm,07/09/2026--27/12/2026
   ... (dán toàn bộ nội dung CSV của bạn vào đây)
   `;
   ```
5. **Lưu file:** Nhấn **`Ctrl + S`** để lưu lại `assets/data.js`.
6. **Đẩy lên website:** Chạy lệnh Git để đưa lên GitHub Pages:
   ```bash
   git add assets/data.js Sem_current.csv
   git commit -m "Update schedule data for new semester"
   git push origin main
   ```
   Website sẽ tự động cập nhật dữ liệu mới sau 1 - 2 phút!

---

## 📁 3. Cấu trúc thư mục dự án

```text
TimPhongTrong/
│
├── crawl_edusoft.exe        # 🚀 Tool tự động cập nhật 1-click (chạy ngay, không cần cài Python)
├── run_crawler.bat         # ⚡ File chạy nhanh dự phòng
├── index.html              # 🌐 Giao diện chính của trang web
├── README.md               # 📖 Tài liệu hướng dẫn bạn đang đọc
│
├── assets/
│   ├── data.js             # 📦 Nơi chứa chuỗi dữ liệu thời khóa biểu (const csvData)
│   ├── script.js           # ⚙️ Logic xử lý tìm kiếm và lọc phòng trống
│   └── styles.css          # 🎨 Giao diện và màu sắc trang web
│
├── crawler/                # 🛠️ Mã nguồn tool cào dữ liệu cho lập trình viên
│   ├── crawl_edusoft.py    # Code Python v1.0.0 (kiểm tra an toàn & tự sao lưu)
│   ├── requirements.txt    # Danh sách thư viện cần thiết
│   └── build.bat           # Script 1-click đóng gói lại file .exe khi sửa code
│
├── docs/
│   └── MAINTENANCE.md      # 📖 Sổ tay chi tiết dành cho các bạn duy trì tiếp theo (Bus Factor = 0)
│
├── backups/                # 💾 Nơi tự động lưu 5 bản sao lưu gần nhất của data.js
└── Sem_current.csv         # 📊 File CSV thời khóa biểu học kỳ hiện tại
```

---

## 💡 4. Một số lưu ý khi tìm phòng tại trường

- **Dữ liệu mang tính tham khảo:** Dữ liệu được bóc tách từ cổng đào tạo EdusoftWeb của trường, do đó **không bao gồm** các lớp Tiếng Anh tăng cường (Intensive English - IE), các kỳ thi đột xuất, hoặc các sự kiện/hội thảo được CLB/Khoa đặt phòng riêng tại Phòng Đào tạo (OAA).
- **Mẹo tìm phòng:** Trường không có bảo vệ trực tầng để hỗ trợ mở cửa phòng trống. Nếu đến nơi thấy phòng đang khóa, bạn chỉ cần mở lại web và chọn một phòng khác trong danh sách kết quả (đặc biệt ưu tiên các phòng không có dấu sao vì chắc chắn đã có lớp mở cửa từ trước).
- **Đóng góp phát triển:** Đây là dự án nhỏ phi lợi nhuận phục vụ cộng đồng sinh viên IU. Mọi ý kiến đóng góp, báo lỗi hoặc chia sẻ bạn cứ liên hệ qua [Facebook Datnim](https://www.facebook.com/nimdat) nhé!

---

<details>
<summary><b>📦 Bấm vào đây để xem lại quy trình thủ công cũ (Excel + VBA) [Lưu trữ]</b></summary>

Trước khi có tool tự động `crawl_edusoft.exe`, dữ liệu từng được thu thập thủ công qua các bước:
1. Vào EdusoftWeb > Đăng ký môn học > Bật điều kiện lọc > Chọn từng Khoa > Copy bảng môn học.
2. Dán vào Excel (`.xlsx`), căn chỉnh cột, xóa các dòng môn Online và Thể dục.
3. Chạy đoạn macro VBA sau để unmerge ô và xóa dòng trùng:
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

       Set rng = ws.Range(ws.Cells(1, 2), ws.Cells(lastRow, lastCol))
       rng.RemoveDuplicates Columns:=Application.WorksheetFunction.Transpose(Evaluate("ROW(1:" & lastCol - 1 & ")")), Header:=xlYes

       ws.Columns(1).Delete Shift:=xlToLeft
   End Sub
   ```
4. Lưu file dưới dạng `CSV UTF-8 (Comma delimited) (*.csv)`.
5. Mở file CSV bằng Notepad, copy toàn bộ rồi dán vào biến `const csvData = \`...\`;` trong `assets/data.js`.
</details>
