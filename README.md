
Đây là phần mềm dùng để tìm phòng trống tại ĐHQT - ĐHQGTPHCM
Mọi thắc mắc xin liên hệ DatNim

**How it works?**
Chỉ cần nhập phòng trống, hệ thống sẽ trích xuất data dưới dạng CSV. Không cần backend vì data được embed vào frontend


**Rules:**
Các phòng nếu chưa từng được sử dụng từ đầu ngày (Ít khả năng là đã được mở khoá) sẽ được đánh 1 dấu *
Các phòng thường xuyên được trưng dụng như A1.109 sẽ được đánh thêm 1 dấu sao


**How to collect data?**
Data được lấy từ EDUSOFT>Đăng Kí Môn Học > Hiện Thị Điều Kiện Lọc > Chọn Khoa > Copy hết các môn trong khoa
![image](https://github.com/user-attachments/assets/ed0616e9-d5fb-4247-a245-f4f01ad4a1d5)
Paste tất cả các môn của tất cả các khoa và lưu dưới dạng XLSX, sau được process, unmerge cells, remove duplicates, remove online class, Physical training class, labs , sau đó lưu dưới dạng csv
Data csv được load vào asset/data.js
Lưu ý data này không bao gồm các lớp IE và các event bất chợt
