Phần mềm dùng để tìm phòng trống tại Đại Học Quốc Tế - ĐHQGTPHCM
==============
**Truy cập website tại [**đây**](https://interestinglis.github.io/)**
**Mọi thắc mắc xin liên hệ [**Datnim**](https://www.facebook.com/nimdat)**

( *nimdat2004@gmail.com hoặc IELSIU22313@student.hcmiu.edu.vn*)
 

**How it works?**

- Chỉ cần nhập phòng trống, hệ thống sẽ trích xuất data dưới dạng CSV. Không cần backend vì data được embed vào website

   

**Filter Rules:**
 - Các phòng nếu chưa từng được sử dụng từ đầu ngày (Ít khả năng là đã
   được mở khoá) sẽ được đánh 1 dấu *
 - Các phòng thường xuyên được trưng dụng như A1.109 sẽ được đánh thêm 1 dấu *
 - Các phòng Lab, Online, Physical train đều bị loại bỏ
 - Phòng không có tiết nào hôm đó sẽ bị loại bỏ



   
**How to collect data?** (IMPORTANT)
1. Data được lấy từ EDUSOFT>Đăng Kí Môn Học > Hiện Thị Điều Kiện Lọc > Chọn Khoa > Copy hết các môn trong từng khoa
![image](https://github.com/user-attachments/assets/ed0616e9-d5fb-4247-a245-f4f01ad4a1d5)

2. Paste tất cả các môn của tất cả các khoa và lưu dưới dạng XLSX,sau đó align lại các cột, bỏ đi các lớp ONLINE và PHYSICAL TRAINING. Cuối cùng format bằng VBA.
  Script này sẽ unmerge cell, remove duplicates, xoá cột đầu
**Lưu ý data này không bao gồm các lớp IE và các event bất chợt*


> VBA script để format dataset: 

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

    Set rng = ws.Range(ws.Cells(1, 2), ws.Cells(lastRow, lastCol)) ' Excluding column A (1st column)

    rng.RemoveDuplicates Columns:=Application.WorksheetFunction.Transpose(Evaluate("ROW(1:" & lastCol - 1 & ")")), Header:=xlYes

    ws.Columns(1).Delete Shift:=xlToLeft

    End Sub
````
  Cách dùng VBA: 
  > Mở Excel 
  > ALT+F11 
  > Insert Module 
  >  Paste code 
  >Close VBA 
  > ALT+F8 
  > Chọn UnMergeFill() 
  > Run 
  > Range: Tất cả ô có value (Tự kéo)
````

3. Lưu data dưới dạng CSV UTF-8
    
   ![image](https://github.com/user-attachments/assets/cbe41c84-aaf6-4cf4-822c-408ebd415e66)

4. Mở data CSV bằng notepad, select all và copy vào asset/data.js
   
   ![image](https://github.com/user-attachments/assets/db8e70a1-d3db-4ae8-8ac5-3bfd0e8b147d)
   
   ![image](https://github.com/user-attachments/assets/8a0f1cbb-f3c3-42c0-ace6-5578987b90ed)

   

6. All done, enjoy!



*Đây chỉ là một side project nhỏ, không tránh phải việc xảy ra lỗi, mong các bạn bỏ qua*
