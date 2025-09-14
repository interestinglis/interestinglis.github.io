// 📌 Embedded CSV Data
const csvData = `
,Mã MHBĐ,Mã MH,Tên môn học,NMH,TTH,STC,STCHP,Mã lớp,Sĩ số,CL,TH,Thứ,Tiết BD,ST,Phòng,Giảng viên,TG học
,BA005IU,BA005IU, Financial Accounting,1,,3,3,BABA244WE31,60,Hết,,Tư,7,3,A2.401,N.T.Nam,08/09/2025--21/12/2025
,BA005IU,BA005IU, Financial Accounting,2,,3,3,BABA244WE31,60,Hết,,Năm,1,3,A2.601,N.T.Nam,08/09/2025--21/12/2025
,BA005IU,BA005IU, Financial Accounting,3,,3,3,BABA244WE31,50,24,,Bảy,1,3,A2.507,N.T.Nam,08/09/2025--21/12/2025
,BA005IU,BA005IU, Financial Accounting,4,,3,3,BABA244WE31,60,1,,Năm,4,3,A2.401,T.D.Khiêm,08/09/2025--21/12/2025
,BA005IU,BA005IU, Financial Accounting,5,,3,3,BABA244WE31,60,1,,Tư,4,3,L202,T.D.Khiêm,08/09/2025--21/12/2025
,BA005IU,BA005IU, Financial Accounting,6,,3,3,BABA244WE31,60,1,,Tư,1,3,L202,T.D.Khiêm,08/09/2025--21/12/2025
,BA005IU,BA005IU, Financial Accounting,8,,3,3,FAAC22IU41,45,Hết,,Sáu,7,3,A2.509,N.T.L.Hà,08/09/2025--21/12/2025
,BA005IU,BA005IU, Financial Accounting,9,,3,3,FAAC22IU41,45,1,,Năm,1,3,A2.401,N.T.L.Hà,08/09/2025--21/12/2025
,BA005IU,BA005IU, Financial Accounting,10,,3,3,FAAC22IU41,45,27,,Bảy,1,3,L205,L.N.A.Khoa,08/09/2025--21/12/2025
,BA010IU,BA010IU, Managerial Accounting,1,,3,3,BABA23IU41,62,Hết,,Tư,7,3,A2.608,N.T.L.Hà,08/09/2025--21/12/2025
,BA010IU,BA010IU, Managerial Accounting,2,,3,3,FAAC22IU01,50,32,,Bảy,1,3,A2.410,N.T.L.Hà,08/09/2025--21/12/2025
,BA016IU,BA016IU, Fundamentals of Financial Management,1,,3,3,BABA244WE01,62,Hết,,Năm,4,3,L202,N.P.L.Thy,08/09/2025--21/12/2025
,BA016IU,BA016IU, Fundamentals of Financial Management,2,,3,3,BABA244WE01,60,1,,Bảy,7,3,A1.202,L.Đ.T.Trang,08/09/2025--21/12/2025
,BA016IU,BA016IU, Fundamentals of Financial Management,3,,3,3,BABA244WE01,60,1,,Bảy,1,3,A1.401,L.Đ.T.Trang,08/09/2025--21/12/2025
,BA016IU,BA016IU, Fundamentals of Financial Management,4,,3,3,BABA244WE01,60,Hết,,Năm,4,3,L201,P.N.Anh,08/09/2025--21/12/2025
,BA016IU,BA016IU, Fundamentals of Financial Management,5,,3,3,BABA244WE01,60,1,,Bảy,7,3,A2.507,N.B.K.Nguyên,08/09/2025--21/12/2025
,BA016IU,BA016IU, Fundamentals of Financial Management,6,,3,3,FAAC22IU11,54,1,,Sáu,7,3,L103,N.P.L.Thy,08/09/2025--21/12/2025
,BA051IU,BA051IU, International Financial Management,1,,3,3,BABA24UH31,50,Hết,,Sáu,1,3,A1.207B,T.Q.Đạt,08/09/2025--21/12/2025
,BA051IU,BA051IU, International Financial Management,2,,3,3,BABA24UH31,50,Hết,,Bảy,4,3,A1.206,L.L.Bình,08/09/2025--21/12/2025
,BA051IU,BA051IU, International Financial Management,3,,3,3,FAAC22IU21,50,Hết,,Sáu,7,3,A1.205,T.Q.Đạt,08/09/2025--21/12/2025
,BA051IU,BA051IU, International Financial Management,4,,3,3,FAAC22IU21,50,Hết,,Năm,7,3,A2.408,T.Q.Đạt,08/09/2025--21/12/2025
,BA054IU,BA054IU, Corporate Finance,2,,3,3,FAAC23IU11,45,Hết,,Năm,4,3,L106,T.T.Nga,08/09/2025--21/12/2025
,BA054IU,BA054IU, Corporate Finance,3,,3,3,FAAC23IU11,45,1,,Năm,1,3,L106,T.T.Nga,08/09/2025--21/12/2025
,BA054IU,BA054IU, Corporate Finance,4,,3,3,BABA24AD11,45,1,,Tư,4,3,A2.402,T.T.Nga,08/09/2025--21/12/2025
,BA057IU,BA057IU, Auditing,1,,3,3,FAAC23IU21,45,1,,Tư,7,3,A1.402,L.P.Thảo,08/09/2025--21/12/2025
,BA057IU,BA057IU, Auditing,2,,3,3,FAAC23IU21,54,13,,Hai,1,3,L102,L.P.Thảo,08/09/2025--21/12/2025
,BA065IU,BA065IU, Business Analysis & Evaluation,1,,3,3,FAAC22IU11,45,2,,Hai,7,3,A2.509,N.C.Tiên,08/09/2025--21/12/2025
,BA065IU,BA065IU, Business Analysis & Evaluation,2,,3,3,FAAC22IU11,46,Hết,,Tư,4,3,A2.310,N.C.Tiên,08/09/2025--21/12/2025
,BA065IU,BA065IU, Business Analysis & Evaluation,3,,3,3,FAAC22IU11,45,5,,Năm,7,3,L207,N.C.Tiên,08/09/2025--21/12/2025
,BA068IU,BA068IU, International Economics,1,,3,3,FAAC23IU41,56,Hết,,Tư,1,3,C.501,N.P.T.Anh,08/09/2025--21/12/2025
,BA068IU,BA068IU, International Economics,2,,3,3,FAAC23IU41,56,2,,Tư,4,3,C.501,N.P.T.Anh,08/09/2025--21/12/2025
,BA087IU,BA087IU, Taxation,1,,3,3,FAAC22IU21,45,7,,Bảy,1,3,A2.509,L.P.Thảo,08/09/2025--21/12/2025
,BA087IU,BA087IU, Taxation,2,,3,3,FAAC22IU21,45,41,,Hai,7,3,L109,L.P.Thảo,08/09/2025--21/12/2025
,BA087IU,BA087IU, Taxation,3,,3,3,FAAC22IU21,45,5,,Tư,4,3,L102,L.P.Thảo,08/09/2025--21/12/2025
,BA087IU,BA087IU, Taxation,4,,3,3,FAAC22IU21,45,2,,Tư,1,3,L102,L.P.Thảo,08/09/2025--21/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,1,,3,3,BABA24IU01,60,Hết,,Hai,1,3,A1.202,L.V.Chơn,08/09/2025--21/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,2,,3,3,BABA24IU01,60,Hết,,Hai,4,3,A1.202,L.V.Chơn,08/09/2025--21/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,3,,3,3,BABA24IU01,60,Hết,,Tư,1,3,A1.202,L.V.Chơn,08/09/2025--21/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,4,,3,3,BABA24IU01,60,Hết,,Tư,7,3,A1.202,L.V.Chơn,08/09/2025--21/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,5,,3,3,BABA25IU01,0,Hết,,Năm,1,3,A2.402,D.M.Hoàng,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,6,,3,3,BABA25IU01,0,Hết,,Năm,1,3,A1.201,L.Q.Thái,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,7,,3,3,BABA25IU01,0,Hết,,Bảy,7,3,A2.402,L.Q.Thái,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,8,,3,3,BABA25AD41,0,Hết,,Sáu,7,3,A2.601,L.Q.Thái,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,9,,3,3,FAAC22IU01,50,6,,Tư,4,3,A2.409,N.V.Phương,08/09/2025--21/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,10,,3,3,BABA25IU01,90,1,,Ba,4,3,A1.401,N.V.Phương,08/09/2025--21/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,11,,3,3,FAAC22IU01,50,Hết,,Năm,4,3,A2.310,D.M.Hoàng,08/09/2025--21/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,12,,3,3,FAAC22IU01,50,25,,Hai,4,3,A2.409,L.Q.Thái,08/09/2025--21/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,13,,3,3,BABA25IU01,50,9,,Hai,1,3,A2.312,L.Q.Thái,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,14,,3,3,BABA25IU01,50,3,,Ba,7,3,A2.309,L.Q.Thái,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,15,,3,3,FAAC24IU11,50,1,,Bảy,1,3,A1.402,D.M.Hoàng,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,16,,3,3,FAAC24IU11,55,1,,Ba,1,3,L202,D.M.Hoàng,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,17,,3,3,BABA25IU01,0,Hết,,Sáu,1,3,A2.401,N.P.L.Thy,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,18,,3,3,BABA25IU01,0,Hết,,Sáu,1,3,A2.402,L.V.Chơn,15/09/2025--28/12/2025
,BA117IU,BA117IU, Introduction to Microeconomics,19,,3,3,BABA25IU01,0,Hết,,Tư,1,3,A1.401,L.Q.Thái,15/09/2025--28/12/2025
,BA119IU,BA119IU, Introduction to Macroeconomics,1,,3,3,BABA24AD41,45,2,,Bảy,1,3,A2.411,N.B.Trung,08/09/2025--21/12/2025
,BA119IU,BA119IU, Introduction to Macroeconomics,2,,3,3,BABA24IU02,60,Hết,,Tư,1,3,A2.501,H.T.Á.Ngọc,08/09/2025--21/12/2025
,BA119IU,BA119IU, Introduction to Macroeconomics,3,,3,3,BABA24IU02,50,15,,Sáu,1,3,L103,H.T.Á.Ngọc,08/09/2025--21/12/2025
,BA119IU,BA119IU, Introduction to Macroeconomics,5,,3,3,BABA24IU02,50,20,,Sáu,7,3,L106,Đ.H.Phương,08/09/2025--21/12/2025
,BA119IU,BA119IU, Introduction to Macroeconomics,6,,3,3,FAAC22IU01,50,2,,Bảy,4,3,A2.310,N.B.Trung,08/09/2025--21/12/2025
,BA134IU,BA134IU, Financial Institutions and Markets,1,,3,3,FAAC22IU11,45,Hết,,Tư,1,3,L103,V.T.Quý,08/09/2025--21/12/2025
,BA134IU,BA134IU, Financial Institutions and Markets,2,,3,3,FAAC22IU11,46,1,,Hai,1,3,L103,V.T.Quý,08/09/2025--21/12/2025
,BA134IU,BA134IU, Financial Institutions and Markets,3,,3,3,FAAC22IU11,45,1,,Năm,4,3,A2.302,V.T.Quý,08/09/2025--21/12/2025
,BA138IU,BA138IU, Portfolio Theory and Investment Analysis,1,,3,3,FAAC22IU11,46,Hết,,Năm,1,3,A1.207B,L.H.Nhung,08/09/2025--21/12/2025
,BA138IU,BA138IU, Portfolio Theory and Investment Analysis,2,,3,3,BABA24AD11,46,Hết,,Hai,4,3,L109,L.H.Nhung,08/09/2025--21/12/2025
,BA174IU,BA174IU, Econometrics with Financial Application,1,,3,3,BABA24IU21,50,Hết,,Tư,7,3,A2.310,N.B.Trung,08/09/2025--21/12/2025
,BA185IU,BA185IU, Commercial Banking,1,,3,3,FAAC23IU11,45,26,,Bảy,1,3,L203,N.B.K.Nguyên,08/09/2025--21/12/2025
,BA186IU,BA186IU, Investment Banking,2,,3,3,FAAC23IU11,45,11,,Ba,7,3,A2.408,T.H.Vương,08/09/2025--21/12/2025
,BA189IU,BA189IU, Banking Risk Management,1,,3,3,FAAC22IU21,45,16,,Năm,1,3,A2.408,N.P.Anh,08/09/2025--21/12/2025
,BA189IU,BA189IU, Banking Risk Management,2,,3,3,FAAC22IU21,45,10,,Tư,7,3,L102,N.P.Anh,08/09/2025--21/12/2025
,BA191IU,BA191IU, Quantitative Methods for Finance,1,,3,3,FAAC23IU41,45,1,,Năm,7,3,A2.512,N.P.Anh,08/09/2025--21/12/2025
,BA191IU,BA191IU, Quantitative Methods for Finance,2,,3,3,FAAC23IU41,45,Hết,,Ba,1,3,A2.309,N.P.Anh,08/09/2025--21/12/2025
,BA192IU,BA192IU, International Finance,1,,3,3,FAAC23IU11,45,19,,Tư,1,3,L106,V.T.M.Uyên,08/09/2025--21/12/2025
,BA192IU,BA192IU, International Finance,3,,3,3,FAAC23IU11,45,2,,Sáu,7,3,A1.207B,V.T.M.Uyên,08/09/2025--21/12/2025
,BA213IU,BA213IU, Corporate Governance,1,,3,3,FAAC22IU41,45,Hết,,Sáu,4,3,L101,P.N.Anh,08/09/2025--21/12/2025
,BA213IU,BA213IU, Corporate Governance,2,,3,3,FAAC22IU41,45,Hết,,Hai,4,3,A1.207A,P.N.Anh,08/09/2025--21/12/2025
,BA214IU,BA214IU, Financial Institutions Management,1,,3,3,FAAC22IU41,45,12,,Sáu,4,3,L103,H.Diep,08/09/2025--21/12/2025
,BA216IU,BA216IU, Derivatives and Risk management,1,,3,3,FAAC22IU41,45,Hết,,Năm,4,3,A2.509,V.X.Hồng,08/09/2025--21/12/2025
,BA216IU,BA216IU, Derivatives and Risk management,2,,3,3,FAAC22IU41,45,Hết,,Hai,4,3,A2.512,V.X.Hồng,08/09/2025--21/12/2025
,BA217IU,BA217IU, Behavioural Finance,1,,3,3,FAAC22IU41,50,Hết,,Bảy,4,3,A2.309,N.P.L.Thy,08/09/2025--21/12/2025
,BA219IU,BA219IU, Accounting Information System,1,,3,3,FAAC23IU01,45,Hết,,Năm,1,3,A2.511,L.N.A.Khoa,08/09/2025--21/12/2025
,BA220IU,BA220IU, Working Capital Management,1,,3,3,FAAC22IU41,45,35,,Hai,7,3,L103,V.T.Quý,08/09/2025--21/12/2025
,BA222IU,BA222IU, Management Decisions and Financial Reporting,1,,3,3,FAAC23IU11,53,1,,Ba,4,3,A2.401,T.D.Khiêm,08/09/2025--21/12/2025
,BA222IU,BA222IU, Management Decisions and Financial Reporting,2,,3,3,FAAC23IU11,45,1,,Hai,7,3,A1.603,T.D.Khiêm,08/09/2025--21/12/2025
,BA257IU,BA257IU, Workshop 2 on Financial,1,,2,2,FAAC23IU21,50,Hết,,Bảy,1,4,A2.311,V.T.M.Uyên,08/09/2025--02/11/2025
,BA257IU,BA257IU, Workshop 2 on Financial,2,,2,2,FAAC23IU21,50,34,,Bảy,1,4,A2.311,,03/11/2025--28/12/2025
,BA261IU,BA261IU, Fintech,1,,3,3,FAAC23IU01,45,31,,Hai,4,3,A1.205,H.Diep,08/09/2025--21/12/2025
,BA269IU,BA269IU, Research methods for finance,1,,3,3,FAAC22IU01,45,12,,Sáu,1,3,A2.411,V.X.Hồng,08/09/2025--21/12/2025
,BA276IU,BA276IU, Cost Accounting,1,,3,3,FAAC23IU21,50,Hết,,Hai,7,3,A2.409,V.T.Anh,08/09/2025--21/12/2025
,BA279IU,BA279IU, Advanced Financial Reporting and Analysis,1,,3,3,FAAC23IU21,45,14,,Ba,7,3,A2.412,N.T.N.Linh,08/09/2025--21/12/2025
,BA280IU,BA280IU, Advanced Auditing,1,,3,3,FAAC23IU21,45,1,,Năm,4,3,A2.512,P.M.Vương,08/09/2025--21/12/2025
,BA281IU,BA281IU, Workshop 2 on Accounting Issues,1,,2,2,FAAC23IU21,50,13,,Bảy,7,4,A2.311,L.P.Thảo,08/09/2025--02/11/2025
,BA282IU,BA282IU, Math for Business,1,,4,4,BABA24AD41,60,31,,Bảy,7,4,A1.201,L.N.A.Khoa,08/09/2025--21/12/2025
,BA282IU,BA282IU, Math for Business,2,,4,4,BABA23IU41,60,8,,Ba,7,4,A2.402,L.N.A.Khoa,08/09/2025--21/12/2025
,BA282IU,BA282IU, Math for Business,3,,4,4,BABA23IU41,50,24,,Ba,7,4,A1.207B,T.N.Minh,08/09/2025--21/12/2025
,BA282IU,BA282IU, Math for Business,4,,4,4,BABA23IU41,60,3,,Hai,7,4,A2.608,T.N.Minh,08/09/2025--21/12/2025
,BA282IU,BA282IU, Math for Business,5,,4,4,FAAC22IU01,60,Hết,,Sáu,7,4,L207,D.M.Hoàng,08/09/2025--21/12/2025
,BA282IU,BA282IU, Math for Business,6,,4,4,FAAC25IU01,0,Hết,,Hai,7,4,A2.508,D.M.Hoàng,15/09/2025--28/12/2025
,BA282IU,BA282IU, Math for Business,7,,4,4,FAAC25IU01,0,Hết,,Bảy,7,4,A1.402,D.M.Hoàng,15/09/2025--28/12/2025
,BA282IU,BA282IU, Math for Business,8,,4,4,FAAC25IU01,0,Hết,,Hai,1,4,A2.401,P.T.Hiển,15/09/2025--28/12/2025
,BA282IU,BA282IU, Math for Business,9,,4,4,FAAC25IU01,0,Hết,,Hai,7,4,A2.401,P.T.Hiển,15/09/2025--28/12/2025
,BA283IU,BA283IU, Financial Accounting 1,1,,3,3,BABA24AD11,40,15,,Sáu,4,3,A2.511,N.T.Nam,08/09/2025--21/12/2025
,BA284IU,BA284IU, Financial Accounting 2,1,,3,3,BABA24AD41,40,16,,Ba,4,3,A2.511,N.T.Nam,08/09/2025--21/12/2025
,BA284IU,BA284IU, Financial Accounting 2,2,,3,3,FAAC23IU21,45,18,,Hai,4,3,A2.311,N.T.Nam,08/09/2025--21/12/2025
,EFA204IU,EFA204IU, Time Series Econometrics,1,,3,3,FAAC22IU01,45,33,,Ba,1,3,LA1.301,Đ.H.Phương,08/09/2025--21/12/2025
,EFA206IU,EFA206IU, Environmental Economics,1,,3,3,FAAC22IU01,45,20,,Hai,1,3,A2.409,,08/09/2025--21/12/2025
,EFA221IU,EFA221IU, Fundamentals of Programming for Economics,1,,3,3,FAAC24IU11,45,12,,Tư,4,3,LA1.301,V.Q.Bảo,08/09/2025--21/12/2025
,EFA234IU,EFA234IU, Bank Accounting,1,,3,3,FAAC23IU01,45,38,,Hai,7,3,A2.311,N.T.L.Hà,08/09/2025--21/12/2025
,EFA239IU,EFA239IU, Data Analytics in Finance,1,,3,3,FAAC22IU01,45,30,,Tư,1,3,A2.411,T.N.Minh,08/09/2025--21/12/2025
,EFA369IU,EFA369IU, Internship,1,,3,3,FAAC22IU21,45,29,,,0,0,,T.Q.Đạt,08/09/2025--21/12/2025
,EFA456IU,EFA456IU, Thesis,1,,12,12,FAAC22IU01,50,50,,,0,0,,T.Q.Đạt,08/09/2025--21/12/2025
,BM003IU,BM003IU, Pre-Thesis,1,,1,1,BEBE22IU21,60,21,,,0,0,,T.L.Giang,08/09/2025--21/12/2025
,BM004IU,BM004IU, Thesis,1,,10,10,BEBE21IU01,100,42,,,0,0,,Đ.N.Hoan,08/09/2025--21/12/2025
,BM005IU,BM005IU, Statistics for Health Science,1,,3,3,BEBE23IU01,30,Hết,,Năm,7,4,A2.411,H.T.T.Hương,08/09/2025--05/10/2025
,BM005IU,BM005IU, Statistics for Health Science,1,,3,3,BEBE23IU01,30,Hết,,,,,,,
,BM005IU,BM005IU, Statistics for Health Science,1,,3,3,BEBE23IU01,30,Hết,,Năm,7,4,A2.411,T.P.Long,06/10/2025--21/12/2025
,BM007IU,BM007IU, Introduction to Biomedical Engineering,1,1,4,4,BEBE24IU41,25,1,*,Sáu,7,4,LA1.408,T.L.Giang,22/09/2025--16/11/2025
,BM007IU,BM007IU, Introduction to Biomedical Engineering,1,1,4,4,BEBE24IU41,25,1,*,,,,,,
,BM007IU,BM007IU, Introduction to Biomedical Engineering,1,1,4,4,BEBE24IU41,25,1,*,Ba,7,3,A2.313,V.V.Tới,08/09/2025--21/12/2025
,BM007IU,BM007IU, Introduction to Biomedical Engineering,1,2,4,4,BEBE24IU41,25,Hết,*,Hai,7,4,LA1.408,T.L.Giang,22/09/2025--16/11/2025
,BM007IU,BM007IU, Introduction to Biomedical Engineering,1,2,4,4,BEBE24IU41,25,Hết,*,,,,,,
,BM007IU,BM007IU, Introduction to Biomedical Engineering,1,2,4,4,BEBE24IU41,25,Hết,*,Ba,7,3,A2.313,V.V.Tới,08/09/2025--21/12/2025
,BM008IU,BM008IU, Bioethics,1,,3,3,BEBE22IU01,40,Hết,,Sáu,4,3,A1.207A,H.T.T.Hương,08/09/2025--21/12/2025
,BM009IU,BM009IU, BME Capstone Design Course,1,1,4,4,BEBE22IU21,25,4,*,Năm,7,4,LA1.408,N.T.Như,29/09/2025--23/11/2025
,BM009IU,BM009IU, BME Capstone Design Course,1,1,4,4,BEBE22IU21,25,4,*,,,,,,
,BM009IU,BM009IU, BME Capstone Design Course,1,1,4,4,BEBE22IU21,25,4,*,Tư,7,3,A2.313,V.V.Tới,08/09/2025--21/12/2025
,BM009IU,BM009IU, BME Capstone Design Course,1,2,4,4,BEBE22IU21,25,15,*,Tư,1,4,LA1.408,N.T.Như,29/09/2025--23/11/2025
,BM009IU,BM009IU, BME Capstone Design Course,1,2,4,4,BEBE22IU21,25,15,*,,,,,,
,BM009IU,BM009IU, BME Capstone Design Course,1,2,4,4,BEBE22IU21,25,15,*,Tư,7,3,A2.313,V.V.Tới,08/09/2025--21/12/2025
,BM010IU,BM010IU, Biosignal Processing,1,1,4,4,BEBE22IU01,30,3,*,Bảy,7,4,C.420,T.L.Giang,06/10/2025--30/11/2025
,BM010IU,BM010IU, Biosignal Processing,1,1,4,4,BEBE22IU01,30,3,*,,,,,,
,BM010IU,BM010IU, Biosignal Processing,1,1,4,4,BEBE22IU01,30,3,*,Bảy,1,3,C.501,T.L.Giang,08/09/2025--21/12/2025
,BM011IU,BM011IU, Engineering Challenges in Medicine I,1,,3,3,BEBE23IU41,51,3,,Hai,1,3,A1.205,L.Q.Tuấn,08/09/2025--21/12/2025
,BM013IU,BM013IU, Entrepreneurship in Biomedical Engineering,1,,3,3,BEBE22IU01,40,Hết,,Bảy,4,3,C.503,N.T.Như,08/09/2025--21/12/2025
,BM017IU,BM017IU, Medical Design,1,,1,1,BEBE23IU01,25,3,,Năm,1,4,LA1.408,T.L.Giang,08/09/2025--02/11/2025
,BM017IU,BM017IU, Medical Design,2,,1,1,BEBE23IU01,25,7,,Sáu,1,4,LA1.408,T.L.Giang,08/09/2025--02/11/2025
,BM030IU,BM030IU, Machine Design,1,,3,3,BEBE23IU41,30,Hết,,Bảy,1,3,C.504,N.T.Quả,08/09/2025--21/12/2025
,BM052IU,BM052IU, Practice 3: Electronic Design,1,,1,1,BEBE24IU41,26,Hết,,Tư,7,4,LA1.404,L.N.Bích,08/09/2025--02/11/2025
,BM053IU,BM053IU, Principles of EE1,1,,3,3,BEBE24IU11,50,Hết,,Ba,7,3,A1.603,N.T.Như,03/11/2025--21/12/2025
,BM053IU,BM053IU, Principles of EE1,1,,3,3,BEBE24IU11,50,Hết,,,,,,,
,BM053IU,BM053IU, Principles of EE1,1,,3,3,BEBE24IU11,50,Hết,,Ba,7,3,A1.603,P.T.T.Hiền,08/09/2025--02/11/2025
,BM054IU,BM054IU, Principles of EE1 Laboratory,1,,1,1,BEBE24IU11,25,2,,Hai,7,3,LA2.201,P.T.T.Hiền,06/10/2025--14/12/2025
,BM054IU,BM054IU, Principles of EE1 Laboratory,2,,1,1,BEBE24IU11,25,7,,Ba,1,3,LA2.201,N.T.Như,06/10/2025--14/12/2025
,BM058IU,BM058IU, Biomedical Image Processing,1,1,4,4,BEBE22IU01,26,Hết,*,Ba,1,4,LA2.413,L.N.Bích,27/10/2025--21/12/2025
,BM058IU,BM058IU, Biomedical Image Processing,1,1,4,4,BEBE22IU01,26,Hết,*,,,,,,
,BM058IU,BM058IU, Biomedical Image Processing,1,1,4,4,BEBE22IU01,26,Hết,*,Năm,1,3,A2.309,L.N.Bích,08/09/2025--21/12/2025
,BM060IU,BM060IU, Digital Systems,1,,3,3,BEBE22IU01,25,Hết,,Năm,4,3,A1.203,P.T.T.Hiền,08/09/2025--21/12/2025
,BM061IU,BM061IU, Digital Systems Lab,1,,1,1,BEBE22IU01,16,1,,Tư,7,3,LA2.108,P.T.T.Hiền,06/10/2025--14/12/2025
,BM062IU,BM062IU, Micro-electronic Devices,1,,3,3,BEBE22IU01,40,1,,Sáu,1,3,C.501,L.N.Bích,08/09/2025--21/12/2025
,BM063IU,BM063IU, Micro-electronic Devices Laboratory,1,,1,1,BEBE22IU01,25,4,,Hai,7,4,LA1.404,L.N.Bích,27/10/2025--21/12/2025
,BM064IU,BM064IU, Applied Informatics,1,2,4,4,BEBE23IU01,20,Hết,*,Tư,7,4,LA1.605,T.L.Giang,27/10/2025--23/11/2025
,BM064IU,BM064IU, Applied Informatics,1,2,4,4,BEBE23IU01,20,Hết,,,,,,,
,BM064IU,BM064IU, Applied Informatics,1,2,4,4,BEBE23IU01,20,Hết,*,Tư,7,4,LA1.605,N.T.Lụa,29/09/2025--26/10/2025
,BM064IU,BM064IU, Applied Informatics,1,2,4,4,BEBE23IU01,20,Hết,,Tư,1,3,A1.207B,N.T.Lụa,08/09/2025--02/11/2025
,BM064IU,BM064IU, Applied Informatics,1,2,4,4,BEBE23IU01,20,Hết,,Tư,1,3,A1.207B,T.L.Giang,03/11/2025--21/12/2025
,BM067IU,BM067IU, Practice 2: Animal Cells and Microbiologies,2,,1,1,BEBE24IU01,25,Hết,,Năm,1,4,LC.109,T.P.Long,08/09/2025--02/11/2025
,BM067IU,BM067IU, Practice 2: Animal Cells and Microbiologies,3,,1,1,BEBE24IU01,20,Hết,,Năm,1,4,LA1.210,V.M.Quân,08/09/2025--02/11/2025
,BM068IU,BM068IU, Project 1,1,,1,1,BEBE22IU01,40,Hết,,,0,0,,H.T.T.Hương,08/09/2025--21/12/2025
,BM069IU,BM069IU, Project 2,1,,1,1,BEBE22IU01,50,12,,,0,0,,P.T.T.Hiền,08/09/2025--21/12/2025
,BM079IU,BM079IU, Principle of Pharmacokinetics,1,1,4,4,BEBE23IU41,25,23,*,Năm,7,4,LA1.407,V.B.Long,29/09/2025--23/11/2025
,BM079IU,BM079IU, Principle of Pharmacokinetics,1,1,4,4,BEBE23IU41,25,23,*,,,,,,
,BM079IU,BM079IU, Principle of Pharmacokinetics,1,1,4,4,BEBE23IU41,25,23,*,Sáu,1,3,A1.205,V.B.Long,08/09/2025--21/12/2025
,BM082IU,BM082IU, Biomaterials,1,1,4,4,BEBE23IU11,20,Hết,*,Hai,7,4,LC.109,N.T.Hiệp,06/10/2025--30/11/2025
,BM082IU,BM082IU, Biomaterials,1,1,4,4,BEBE23IU11,20,Hết,*,,,,,,
,BM082IU,BM082IU, Biomaterials,1,1,4,4,BEBE23IU11,20,Hết,*,Sáu,1,3,A2.313,V.M.Quân,27/10/2025--21/12/2025
,BM082IU,BM082IU, Biomaterials,1,1,4,4,BEBE23IU11,20,Hết,*,Sáu,1,3,A2.313,N.T.Hiệp,08/09/2025--26/10/2025
,BM082IU,BM082IU, Biomaterials,1,2,4,4,BEBE23IU11,20,10,*,Tư,7,4,LC.109,V.M.Quân,06/10/2025--30/11/2025
,BM082IU,BM082IU, Biomaterials,1,2,4,4,BEBE23IU11,20,10,*,,,,,,
,BM082IU,BM082IU, Biomaterials,1,2,4,4,BEBE23IU11,20,10,*,Sáu,1,3,A2.313,V.M.Quân,27/10/2025--21/12/2025
,BM082IU,BM082IU, Biomaterials,1,2,4,4,BEBE23IU11,20,10,*,Sáu,1,3,A2.313,N.T.Hiệp,08/09/2025--26/10/2025
,BM083IU,BM083IU, Applications of Biomaterials in Regenerative Medicine,1,1,4,4,BEBE22IU01,25,Hết,*,Năm,7,4,LA2.413,N.T.Hiệp,06/10/2025--30/11/2025
,BM083IU,BM083IU, Applications of Biomaterials in Regenerative Medicine,1,1,4,4,BEBE22IU01,25,Hết,*,,,,,,
,BM083IU,BM083IU, Applications of Biomaterials in Regenerative Medicine,1,1,4,4,BEBE22IU01,25,Hết,*,Sáu,7,3,A1.207A,N.T.Hiệp,08/09/2025--21/12/2025
,BM086IU,BM086IU, Methods and Process in Fabrication of Scaffold,1,1,4,4,BEBE22IU01,25,Hết,*,Ba,7,4,LA2.413,Đ.N.Hoan,06/10/2025--30/11/2025
,BM086IU,BM086IU, Methods and Process in Fabrication of Scaffold,1,1,4,4,BEBE22IU01,25,Hết,*,,,,,,
,BM086IU,BM086IU, Methods and Process in Fabrication of Scaffold,1,1,4,4,BEBE22IU01,25,Hết,*,Tư,4,3,A2.509,Đ.N.Hoan,08/09/2025--21/12/2025
,BM090IU,BM090IU, Biology for BME,1,1,4,4,BEBE24IU11,25,6,*,Năm,7,4,LC.109,H.C.Khôn,06/10/2025--30/11/2025
,BM090IU,BM090IU, Biology for BME,1,1,4,4,BEBE24IU11,25,6,*,,,,,,
,BM090IU,BM090IU, Biology for BME,1,1,4,4,BEBE24IU11,25,6,*,Tư,4,3,A1.207A,H.C.Khôn,08/09/2025--23/11/2025
,BM090IU,BM090IU, Biology for BME,1,1,4,4,BEBE24IU11,25,6,*,Tư,4,3,A1.207A,V.M.Quân,24/11/2025--21/12/2025
,BM090IU,BM090IU, Biology for BME,1,2,4,4,BEBE24IU11,25,2,*,Bảy,1,4,LC.109,V.M.Quân,06/10/2025--30/11/2025
,BM090IU,BM090IU, Biology for BME,1,2,4,4,BEBE24IU11,25,2,*,,,,,,
,BM090IU,BM090IU, Biology for BME,1,2,4,4,BEBE24IU11,25,2,*,Tư,4,3,A1.207A,H.C.Khôn,08/09/2025--23/11/2025
,BM090IU,BM090IU, Biology for BME,1,2,4,4,BEBE24IU11,25,2,*,Tư,4,3,A1.207A,V.M.Quân,24/11/2025--21/12/2025
,BM091IU,BM091IU, Human Anatomy and Physiology,1,,3,3,BEBE24IU41,50,3,,Năm,7,3,L102,T.T.N.Hân,08/09/2025--21/12/2025
,BM094IU,BM094IU, Principles of Clinical Test and Instrumentation,1,1,4,4,BEBE23IU11,20,Hết,*,Ba,1,4,LA1.210,H.C.Khôn,08/09/2025--02/11/2025
,BM094IU,BM094IU, Principles of Clinical Test and Instrumentation,1,1,4,4,BEBE23IU11,20,Hết,*,,,,,,
,BM094IU,BM094IU, Principles of Clinical Test and Instrumentation,1,1,4,4,BEBE23IU11,20,Hết,*,Bảy,1,3,C.420,H.C.Khôn,08/09/2025--21/12/2025
,BM094IU,BM094IU, Principles of Clinical Test and Instrumentation,1,2,4,4,BEBE23IU11,20,Hết,*,Bảy,7,4,LA2.413,H.C.Khôn,29/09/2025--30/11/2025
,BM094IU,BM094IU, Principles of Clinical Test and Instrumentation,1,2,4,4,BEBE23IU11,20,Hết,*,,,,,,
,BM094IU,BM094IU, Principles of Clinical Test and Instrumentation,1,2,4,4,BEBE23IU11,20,Hết,*,Bảy,1,3,C.420,H.C.Khôn,08/09/2025--21/12/2025
,BM096IU,BM096IU, AI for Healthcare,1,,3,3,BEBE23IU11,30,Hết,,Hai,7,3,A1.206,N.T.Lụa,08/09/2025--02/11/2025
,BM096IU,BM096IU, AI for Healthcare,1,,3,3,BEBE23IU11,30,Hết,,,,,,,
,BM096IU,BM096IU, AI for Healthcare,1,,3,3,BEBE23IU11,30,Hết,,Hai,7,3,A1.206,N.T.Tâm,03/11/2025--21/12/2025
,BM098IU,BM098IU, Chemistry for BME Laboratory,1,,1,1,BEBE24IU41,25,1,,Sáu,1,4,LC.109,T.P.Long,08/09/2025--02/11/2025
,BM098IU,BM098IU, Chemistry for BME Laboratory,2,,1,1,BEBE24IU41,25,7,,Ba,1,4,LC.109,Đ.N.Hoan,08/09/2025--02/11/2025
,BM099IU,BM099IU, Stem Cell Technology,1,1,4,4,BEBE22IU01,25,4,*,Tư,7,4,LA2.413,T.T.N.Hân,15/09/2025--09/11/2025
,BM099IU,BM099IU, Stem Cell Technology,1,1,4,4,BEBE22IU01,25,4,*,,,,,,
,BM099IU,BM099IU, Stem Cell Technology,1,1,4,4,BEBE22IU01,25,4,*,Tư,1,3,A2.309,T.T.N.Hân,08/09/2025--21/12/2025
,BM101IU,BM101IU, Mechanical design and Manufacturing processes in Biomedical Engineering,1,,2,2,BEBE23IU01,40,13,,Bảy,7,3,C.501,N.T.Quả,08/09/2025--16/11/2025
,BM104IU,BM104IU, Microfluidics,1,1,4,4,BEBE22IU21,25,Hết,*,Năm,1,4,LA1.404,N.T.Quả,27/10/2025--23/11/2025
,BM104IU,BM104IU, Microfluidics,1,1,4,4,BEBE22IU21,25,Hết,,,,,,,
,BM104IU,BM104IU, Microfluidics,1,1,4,4,BEBE22IU21,25,Hết,*,Năm,1,4,LA2.413,N.T.Quả,29/09/2025--26/10/2025
,BM104IU,BM104IU, Microfluidics,1,1,4,4,BEBE22IU21,25,Hết,,Sáu,4,3,A2.313,N.T.Quả,03/11/2025--21/12/2025
,BM104IU,BM104IU, Microfluidics,1,1,4,4,BEBE22IU21,25,Hết,,Sáu,4,3,A2.313,H.C.Khôn,08/09/2025--02/11/2025
,CH014IU,CH014IU, Chemistry for BME,1,,3,3,BEBE24IU41,50,14,,Năm,4,3,A1.204,Đ.N.Hoan,03/11/2025--21/12/2025
,CH014IU,CH014IU, Chemistry for BME,1,,3,3,BEBE24IU41,50,14,,,,,,,
,CH014IU,CH014IU, Chemistry for BME,1,,3,3,BEBE24IU41,50,14,,Tư,1,3,A2.313,T.P.Long,08/09/2025--02/11/2025
,CE101IU,CE101IU, Engineering Mechanic - Statics,1,,3,3,CECE25IU01,25,16,,Ba,1,3,A2.310,P.N.Hòa,15/09/2025--28/12/2025
,CE103IU,CE103IU, Computer-Aided Design and Drafting (CADD),1,,3,3,CECE24IU01,25,6,,Sáu,1,3,LA1.505,T.T.Hà,08/09/2025--21/12/2025
,CE104IU,CE104IU, Practice CADD,1,,1,1,CECE24IU01,25,4,,Hai,7,4,LA1.505,T.T.Hà,06/10/2025--30/11/2025
,CE105IU,CE105IU, Engineering Mechanics and Mechanics of Materials,1,,3,3,CECE24IU01,25,15,,Tư,4,3,L206,N.B.Q.Vinh,08/09/2025--21/12/2025
,CE106IU,CE106IU, Soil mechanics and foundation,1,,3,3,CECE24IU01,25,15,,Tư,1,3,L206,N.B.Q.Vinh,08/09/2025--21/12/2025
,CE205IU,CE205IU, Fluid Mechanics,1,,2,2,CECE24IU21,50,8,,Ba,4,2,A2.412,P.Ngọc,08/09/2025--21/12/2025
,CE206IU,CE206IU, Fluid Mechanics Laboratory,1,,1,1,CECE24IU21,25,5,,Hai,7,4,LA1.103,P.Ngọc,06/10/2025--30/11/2025
,CE206IU,CE206IU, Fluid Mechanics Laboratory,2,,1,1,CECE24IU21,25,3,,Tư,7,4,LA1.103,P.Ngọc,06/10/2025--30/11/2025
,CE208IU,CE208IU, Mechanics of Materials 2,1,,2,2,CECE23IU01,25,16,,Năm,4,2,L111,N.B.Q.Vinh,08/09/2025--21/12/2025
,CE209IU,CE209IU, Structural Analysis 1,1,,2,2,CECE24IU21,25,15,,Tư,1,2,A2.412,L.V.Cảnh,08/09/2025--21/12/2025
,CE210IU,CE210IU, Construction Materials,1,,3,3,CECE24IU21,25,11,,Tư,4,3,A2.412,T.C.T.Ngọc,08/09/2025--21/12/2025
,CE214IU,CE214IU, Civil Architecture,1,,2,2,CECE24IU21,25,14,,Sáu,4,2,A2.310,P.N.Hòa,08/09/2025--21/12/2025
,CE215IU,CE215IU, Applied Linear Algebra,1,,2,2,CECE24IU21,25,13,,Năm,4,2,A1.603,T.C.T.Ngọc,08/09/2025--21/12/2025
,CE216IU,CE216IU, Probability and Statistic,1,,3,3,CECE24IU21,25,10,,Bảy,4,3,A2.412,P.N.L.Khánh,08/09/2025--21/12/2025
,CE302IU,CE302IU, Soil Mechanics,1,,3,3,CECE24IU41,25,19,,Hai,7,3,A1.205,P.N.L.Khánh,08/09/2025--21/12/2025
,CE303IU,CE303IU, Soil Mechanics Laboratory,1,,1,1,CECE24IU41,25,20,,Hai,1,4,LA1.104,C.D.Angeli,06/10/2025--30/11/2025
,CE304IU,CE304IU, Reinforced concrete 1,1,,3,3,CECE24IU41,25,8,,Sáu,1,3,A1.207A,T.C.T.Ngọc,08/09/2025--21/12/2025
,CE305IU,CE305IU, Steel Structures,1,,3,3,CECE24IU41,25,18,,Tư,1,3,C.508,P.N.Hòa,08/09/2025--21/12/2025
,CE306IU,CE306IU, Water Supply and Sewerage,1,,3,3,CECE24IU41,25,15,,Sáu,4,3,C.508,C.D.Angeli,08/09/2025--21/12/2025
,CE309IU,CE309IU, Foundation Engineering,1,,3,3,CECE24IU41,25,14,,Năm,7,3,L203,P.N.L.Khánh,08/09/2025--21/12/2025
,CE310IU,CE310IU, Reinforced Concrete 2,1,,3,3,CECE24IU41,25,14,,Tư,1,3,A2.410,T.C.T.Ngọc,08/09/2025--21/12/2025
,CE311IU,CE311IU, Construction Engineering,1,,3,3,CECE24IU41,25,14,,Tư,7,3,A1.207A,N.H.Nghĩa,08/09/2025--21/12/2025
,CE312IU,CE312IU, Steel Structure Project,1,,1,1,CECE24IU41,25,12,,,0,0,,P.N.Hòa,08/09/2025--21/12/2025
,CE313IU,CE313IU, Reinforced Concrete Project,1,,1,1,CECE24IU41,25,12,,,0,0,,T.C.T.Ngọc,08/09/2025--21/12/2025
,CE403IU,CE403IU, Construction Project,1,,1,1,CECE23IU01,25,21,,,0,0,,N.H.Nghĩa,08/09/2025--21/12/2025
,CE407IU,CE407IU, Tall Buildings,1,,3,3,CECE23IU01,25,9,,Năm,1,3,A1.603,T.C.T.Ngọc,08/09/2025--09/11/2025
,CE407IU,CE407IU, Tall Buildings,1,,3,3,CECE23IU01,25,9,,,,,,,
,CE407IU,CE407IU, Tall Buildings,1,,3,3,CECE23IU01,25,9,,Năm,1,3,A1.603,P.N.L.Khánh,10/11/2025--21/12/2025
,CE420IU,CE420IU, Thesis,1,,10,10,CECE23IU01,25,24,,,0,0,,P.N.L.Khánh,08/09/2025--21/12/2025
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,BTBT24IU41,90,Hết,,Hai,7,3,A1.401,N.T.Thuận,08/09/2025--21/12/2025
,CH011IU,CH011IU, Chemistry for Engineers,2,,3,3,ENEL24IU21,90,7,,Tư,1,3,L201,N.T.H.Hải,08/09/2025--21/12/2025
,CH011IU,CH011IU, Chemistry for Engineers,3,,3,3,ENEL24IU21,90,26,,Tư,1,3,A2.301,P.T.Hoa,08/09/2025--21/12/2025
,CH011IU,CH011IU, Chemistry for Engineers,4,,3,3,ENEL25IU01,0,Hết,,Ba,1,3,A2.407,H.K.Lâm,15/09/2025--28/12/2025
,CH011IU,CH011IU, Chemistry for Engineers,5,,3,3,ENEL25IU01,0,Hết,,Ba,1,3,A2.501,V.T.M.Thư,15/09/2025--28/12/2025
,CH011IU,CH011IU, Chemistry for Engineers,6,,3,3,ENEL25IU01,0,Hết,,Năm,7,3,A2.205,N.T.H.Hải,15/09/2025--28/12/2025
,CHE0011IU,CHE0011IU, Applied Mechanics,1,,2,2,CHCE24IU01,35,9,,Bảy,7,3,A1.203,P.T.Tùng,08/09/2025--16/11/2025
,CHE0011IU,CHE0011IU, Applied Mechanics,2,,2,2,CHCE24IU01,35,Hết,,Hai,1,3,L104,P.T.Tùng,08/09/2025--16/11/2025
,CHE0031IU,CHE0031IU, Research Methodology,1,,3,3,CHCE22IU01,50,32,,Ba,1,3,A1.204,N.T.Thủy,08/09/2025--21/12/2025
,CHE0042IU,CHE0042IU, Project 1,1,,1,1,BTCH21IU01,12,12,,,0,0,,C.D.Angeli,08/09/2025--21/12/2025
,CHE0062IU,CHE0062IU, Project 3,1,,1,1,BTCH21IU01,20,11,,,0,0,,N.T.Thủy,08/09/2025--21/12/2025
,CHE1011IU,CHE1011IU, Introduction to Chemical Engineering,1,,2,2,CHCE24IU01,90,10,,Tư,1,3,A2.302,H.K.Lâm,08/09/2025--16/11/2025
,CHE1031IU,CHE1031IU, Physical Chemistry 1,1,,3,3,CHEV22IU01,35,8,,Tư,7,3,A2.408,Đ.H.Linh,08/09/2025--21/12/2025
,CHE1043IU,CHE1043IU, Physical Chemistry 2,1,,2,2,CHCE23IU01,50,Hết,,Hai,1,3,A1.207B,N.T.Thuận,08/09/2025--16/11/2025
,CHE1044IU,CHE1044IU, Physical Chemistry 2 Lab,1,,1,1,CHCE23IU01,20,8,,Ba,1,5,LA2.502,N.T.Thuận,10/11/2025--21/12/2025
,CHE1044IU,CHE1044IU, Physical Chemistry 2 Lab,2,,1,1,CHCE23IU01,20,5,,Năm,7,5,LA2.502,N.T.Thuận,10/11/2025--21/12/2025
,CHE1044IU,CHE1044IU, Physical Chemistry 2 Lab,3,,1,1,CHCE23IU01,20,Hết,,Ba,7,5,LA2.502,N.T.Thuận,10/11/2025--21/12/2025
,CHE1051IU,CHE1051IU, Analytical Chemistry 1,1,,3,3,CHCE22IU01,75,6,,Năm,4,3,A2.205,N.T.Trang,08/09/2025--21/12/2025
,CHE1091IU,CHE1091IU, Organic Chemistry 2,1,,3,3,CHCE23IU01,90,10,,Hai,7,3,A2.307,L.Q.Phong,08/09/2025--21/12/2025
,CHE1092IU,CHE1092IU, Organic Chemistry Laboratory,1,,2,2,CHCE23IU01,20,Hết,,Sáu,7,5,LA2.502,L.Q.Phong,22/09/2025--14/12/2025
,CHE1092IU,CHE1092IU, Organic Chemistry Laboratory,2,,2,2,CHCE23IU01,20,1,,Năm,1,5,LA2.502,L.Q.Phong,22/09/2025--14/12/2025
,CHE1104IU,CHE1104IU, Biochemistry,1,,3,3,CHCE22IU01,40,23,,Sáu,4,3,A2.309,N.T.Trang,08/09/2025--21/12/2025
,CHE1105IU,CHE1105IU, Biochemistry Lab,2,,1,1,CHCE22IU01,20,4,,Tư,7,5,LA2.502,N.N.T.Đạt,10/11/2025--21/12/2025
,CHE1111IU,CHE1111IU, Industrial Chemistry,1,,2,2,CHCE22IU01,60,29,,Bảy,1,3,L202,P.T.Khoa,08/09/2025--16/11/2025
,CHE2011IU,CHE2011IU, Reaction Kinetics and Catalysis,1,,3,3,CHCE23IU01,50,39,,Năm,7,3,A2.309,P.T.Khoa,08/09/2025--21/12/2025
,CHE2024IU,CHE2024IU, Computational Chemistry,1,,2,2,CHCE22IU01,30,4,,Ba,4,3,A1.206,H.K.Lâm,08/09/2025--16/11/2025
,CHE2025IU,CHE2025IU, Computational Chemistry Lab,1,,1,1,CHCE22IU01,30,16,,Sáu,1,5,LA1.605,H.K.Lâm,10/11/2025--21/12/2025
,CHE2041IU,CHE2041IU, Mass Transfer Operations,1,,3,3,CHCE23IU01,35,8,,Hai,1,3,L205,Đ.H.Linh,08/09/2025--21/12/2025
,CHE2041IU,CHE2041IU, Mass Transfer Operations,2,,3,3,CHCE22IU01,35,2,,Tư,1,3,L205,Đ.H.Linh,08/09/2025--21/12/2025
,CHE2051IU,CHE2051IU, Heat Transfer Operations,1,,3,3,CHCE22IU01,70,3,,Tư,4,3,L108,Đ.H.Linh,08/09/2025--21/12/2025
,CHE2061IU,CHE2061IU, Chemical Reaction Engineering,1,,3,3,CHCE22IU01,60,27,,Bảy,7,3,L202,P.T.Khoa,08/09/2025--21/12/2025
,CHE2103IU,CHE2103IU, Inorganic Chemistry,2,,3,3,CHCE24IU01,50,3,,Ba,1,3,A1.203,P.T.Khoa,08/09/2025--21/12/2025
,CHE2103IU,CHE2103IU, Inorganic Chemistry,3,,3,3,CHCE24IU01,40,12,,Ba,4,3,A2.512,P.T.Khoa,08/09/2025--21/12/2025
,CHE2104IU,CHE2104IU, Inorganic Chemistry Lab,1,,1,1,CHCE24IU01,20,Hết,,Hai,7,5,LA2.502,P.T.Khoa,10/11/2025--21/12/2025
,CHE2104IU,CHE2104IU, Inorganic Chemistry Lab,3,,1,1,CHCE24IU01,20,Hết,,Sáu,1,5,LA2.502,P.T.Khoa,10/11/2025--21/12/2025
,CHE2104IU,CHE2104IU, Inorganic Chemistry Lab,4,,1,1,CHCE24IU01,20,Hết,,Sáu,1,5,LA2.502,P.T.Khoa,29/09/2025--09/11/2025
,CHE2104IU,CHE2104IU, Inorganic Chemistry Lab,5,,1,1,CHCE24IU01,20,16,,Ba,7,5,LA2.502,N.N.T.Đạt,29/09/2025--09/11/2025
,CHE3211IU,CHE3211IU, Nanomaterials,1,,3,3,CHCE22IU01,30,17,,Hai,4,3,L205,Đ.H.Linh,08/09/2025--21/12/2025
,CHE3421IU,CHE3421IU, Pipping and Instruments System Design,1,,3,3,CHEV23IU21,30,19,,Sáu,1,3,A2.311,N.T.Thủy,08/09/2025--21/12/2025
,CHE4012IU,CHE4012IU, Research 1,1,,1,1,CHCE22IU01,40,4,,,0,0,,H.K.Lâm,08/09/2025--21/12/2025
,CHE4022IU,CHE4022IU, Research 2,1,,1,1,CHCE22IU01,40,16,,,0,0,,H.K.Lâm,08/09/2025--21/12/2025
,CHE4042IU,CHE4042IU, Internship,1,,2,2,BTCH21IU01,20,20,,,0,0,,H.K.Lâm,08/09/2025--21/12/2025
,CHE4052IU,CHE4052IU, Thesis,1,,12,12,BTCH21IU01,30,16,,,0,0,,H.K.Lâm,08/09/2025--21/12/2025
,CM201IU,CM201IU, Introduction to Construction Management,1,,3,3,CECM24IU01,25,16,,Năm,1,2,A2.311,T.T.Hà,08/09/2025--21/12/2025
,CM202IU,CM202IU, Construction Measurement and Cost Estimating,1,,3,3,CECM24IU01,25,8,,Năm,7,3,A2.311,N.H.Nghĩa,08/09/2025--21/12/2025
,CM203IU,CM203IU, Construction Management Project,1,,1,1,CECM24IU01,25,16,,,0,0,,T.T.Hà,08/09/2025--21/12/2025
,CM301IU,CM301IU, Operation Management in Construction,1,,3,3,CECM24IU01,25,17,,Bảy,1,3,A2.310,P.T.Tùng,08/09/2025--21/12/2025
,CM304IU,CM304IU, Construction Measurement and Cost Estimating Project,1,,1,1,CECM24IU01,25,17,,,0,0,,N.H.Nghĩa,08/09/2025--21/12/2025
,CM307IU,CM307IU, Construction Planning and Scheduling Project,1,,1,1,CECM24IU01,25,15,,,0,0,,N.H.Nghĩa,08/09/2025--21/12/2025
,CM308IU,CM308IU, Project Feasibility Study and Appraisal,1,,3,3,CECM24IU01,25,14,,Tư,4,3,A1.603,N.H.Nghĩa,08/09/2025--21/12/2025
,CM309IU,CM309IU, Construction Economics,1,,3,3,CECM24IU01,25,13,,Sáu,4,3,L206,P.T.Tùng,08/09/2025--21/12/2025
,CM311IU,CM311IU, Construction Project Management (PMBOK extension),1,,3,3,CECM24IU01,25,16,,Tư,1,3,L109,N.V.Tiếp,08/09/2025--21/12/2025
,CM312IU,CM312IU, Building Information Management Project,1,,1,0,CECM24IU01,25,17,,,0,0,,T.T.Hà,08/09/2025--21/12/2025
,CM402IU,CM402IU, Construction Jobsite Management,1,,3,3,CECM24IU11,25,5,,Ba,1,3,L109,T.T.Hà,08/09/2025--21/12/2025
,CM403IU,CM403IU, Value Engineering,1,,3,3,CECM24IU11,25,15,,Ba,4,3,A2.409,P.T.Tùng,08/09/2025--21/12/2025
,CM404IU,CM404IU, Contract Management - FIDIC Contracts,1,,3,3,CECM24IU11,25,13,,Sáu,4,3,A1.206,N.H.Nghĩa,08/09/2025--21/12/2025
,CM406IU,CM406IU, Construction Quality Management,1,,3,3,CECM24IU11,25,15,,Tư,7,3,L205,T.T.Hà,08/09/2025--21/12/2025
,ENEE1011IU,ENEE1011IU, Hydraulics for Environmental Engineering,1,,2,2,CHEV23IU01,20,16,,Năm,4,3,C.508,C.D.Angeli,08/09/2025--16/11/2025
,ENEE1012IU,ENEE1012IU, Hydraulics for Environmental Engineering Lab,1,,1,1,CHEV23IU01,20,16,,Tư,7,5,LA1.104,C.D.Angeli,10/11/2025--21/12/2025
,ENEE1013IU,ENEE1013IU, Engineering Drawing,1,,2,2,CHCE24IU01,51,4,,Hai,4,3,L102,P.N.Hòa,08/09/2025--16/11/2025
,ENEE1014IU,ENEE1014IU, Engineering Drawing Lab,1,,1,1,CHCE24IU01,30,2,,Tư,7,5,LA1.505,P.N.Hòa,10/11/2025--21/12/2025
,ENEE1014IU,ENEE1014IU, Engineering Drawing Lab,2,,1,1,EVEV20IU01,25,8,,Tư,1,5,LA1.505,P.T.Tùng,10/11/2025--21/12/2025
,ENEE1019IU,ENEE1019IU, Applied Statistics in Environment,1,,2,2,CHCE24IU01,50,4,,Năm,7,3,L103,T.T.Tú,08/09/2025--16/11/2025
,ENEE1020IU,ENEE1020IU, Applied Statistics in Environment Lab,1,,1,1,CHCE24IU01,25,Hết,,Sáu,7,5,LA1.604,T.T.Tú,10/11/2025--21/12/2025
,ENEE1020IU,ENEE1020IU, Applied Statistics in Environment Lab,2,,1,1,CHCE24IU01,25,4,,Ba,7,5,LA1.604,T.T.Tú,10/11/2025--21/12/2025
,ENEE2020IU,ENEE2020IU, Physical and Chemical Processes for Environmental Engineering,1,,2,2,CHEV23IU01,20,13,,Tư,4,3,A2.313,N.T.Thuận,08/09/2025--16/11/2025
,ENEE2021IU,ENEE2021IU, Physical and Chemical Processes for Environmental Engineering Lab,1,,1,1,CHEV23IU01,20,13,,Bảy,1,5,LA2.502,N.T.Thuận,10/11/2025--21/12/2025
,ENEE2022IU,ENEE2022IU, Biological Processes for Environmental Engineering,1,,2,2,CHEV23IU01,20,13,,Bảy,7,3,C.506,N.T.H.Hải,08/09/2025--16/11/2025
,ENEE2023IU,ENEE2023IU, Biological Processes for Environmental Engineering Lab,1,,1,1,CHEV23IU01,20,13,,Bảy,1,5,LA2.502,N.T.H.Hải,29/09/2025--09/11/2025
,ENEE3111IU,ENEE3111IU, Project 2,1,,2,2,EVEV20IU01,10,9,,,0,0,,N.T.H.Hải,08/09/2025--21/12/2025
,ENEE5001IU,ENEE5001IU, Internship,1,,2,2,EVEV20IU01,10,10,,,0,0,,H.K.Lâm,08/09/2025--21/12/2025
,ENEE5002IU,ENEE5002IU, Thesis,1,,12,12,EVEV20IU01,1,1,,,0,0,,H.K.Lâm,08/09/2025--21/12/2025
,ENEE5003IU,ENEE5003IU, Thesis,1,,10,10,EVEV20IU01,10,9,,,0,0,,H.K.Lâm,08/09/2025--21/12/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,ENEL24IU21,50,12,,Ba,4,3,A1.207A,N.T.Thủy,08/09/2025--21/12/2025
,PE014IU,PE014IU, Environmental Science,2,,3,3,ENEL24IU21,50,23,,Ba,7,3,A2.510,B.X.A.Đào,08/09/2025--21/12/2025
,PE014IU,PE014IU, Environmental Science,4,,3,3,ENEL24IU21,50,2,,Sáu,7,3,A2.411,N.T.H.Hải,08/09/2025--21/12/2025
,PE014IU,PE014IU, Environmental Science,5,,3,3,ENEL24IU21,90,43,,Ba,1,3,A1.402,B.X.A.Đào,08/09/2025--21/12/2025
,PE014IU,PE014IU, Environmental Science,6,,3,3,ENEL254WE41,50,28,,Ba,1,3,A1.206,T.T.Tú,08/09/2025--21/12/2025
,EE010IU,EE010IU, Electromagnetic Theory,1,,3,3,EEEE23IU11,35,4,,Bảy,1,3,A1.202,P.T.Kiên,08/09/2025--21/12/2025
,EE010IU,EE010IU, Electromagnetic Theory,2,,3,3,EEEE23IU11,40,Hết,,Sáu,4,3,A1.207B,P.T.Kiên,08/09/2025--21/12/2025
,EE049IU,EE049IU, Introduction to Electrical Engineering,1,,3,3,EEEE24IU01,35,10,,Hai,1,3,A1.207A,N.N.T.Minh,08/09/2025--21/12/2025
,EE050IU,EE050IU, Introduction to Computer for Engineers,1,,3,3,EEEE24IU01,35,Hết,,Ba,1,3,LA1.605,T.T.Long,08/09/2025--21/12/2025
,EE050IU,EE050IU, Introduction to Computer for Engineers,2,,3,3,EEEE24IU01,35,Hết,,Ba,4,3,LA1.607,T.Q.Hiển,08/09/2025--21/12/2025
,EE050IU,EE050IU, Introduction to Computer for Engineers,3,,3,3,EEEE24IU01,35,Hết,,Bảy,1,3,LA1.605,T.Q.Hiển,08/09/2025--21/12/2025
,EE051IU,EE051IU, Principles of EE1,1,,3,3,EEEE23SB11,60,Hết,,Sáu,7,3,A2.608,T.V.Sư,08/09/2025--21/12/2025
,EE051IU,EE051IU, Principles of EE1,2,,3,3,EEEE23SB11,50,Hết,,Hai,7,3,A1.203,T.V.Sư,08/09/2025--21/12/2025
,EE051IU,EE051IU, Principles of EE1,3,,3,3,EEEE23SB11,51,Hết,,Hai,7,3,L101,N.L.Luật,08/09/2025--21/12/2025
,EE052IU,EE052IU, Principles of EE1 Laboratory,1,,1,1,EEEE23SB11,22,1,,Bảy,4,3,LA2.201,P.T.Kiên,13/10/2025--21/12/2025
,EE052IU,EE052IU, Principles of EE1 Laboratory,2,,1,1,EEEE23SB11,22,Hết,,Tư,1,3,LA2.201,P.T.Kiên,13/10/2025--21/12/2025
,EE052IU,EE052IU, Principles of EE1 Laboratory,3,,1,1,EEEE23SB11,22,Hết,,Tư,4,3,LA2.201,P.T.Kiên,13/10/2025--21/12/2025
,EE052IU,EE052IU, Principles of EE1 Laboratory,4,,1,1,EEEE23SB11,22,8,,Bảy,7,3,LA2.201,N.L.Luật,13/10/2025--21/12/2025
,EE052IU,EE052IU, Principles of EE1 Laboratory,5,,1,1,EEEE23SB11,22,1,,Ba,7,3,LA2.201,N.L.Luật,13/10/2025--21/12/2025
,EE052IU,EE052IU, Principles of EE1 Laboratory,6,,1,1,EEEE23SB11,22,Hết,,Bảy,1,3,LA2.201,N.L.Luật,13/10/2025--21/12/2025
,EE053IU,EE053IU, Digital Logic Design,1,,3,3,EEEE23SB41,35,2,,Năm,4,3,L101,V.Q.Bảo,08/09/2025--21/12/2025
,EE053IU,EE053IU, Digital Logic Design,2,,3,3,EEEE23SB41,35,11,,Ba,4,3,L109,V.Q.Bảo,08/09/2025--21/12/2025
,EE053IU,EE053IU, Digital Logic Design,3,,3,3,EEEE23SB41,35,6,,Hai,4,3,A1.207B,V.Q.Bảo,08/09/2025--21/12/2025
,EE054IU,EE054IU, Digital Logic Design Laboratory,1,,1,1,EEEE23SB41,16,5,,Ba,7,3,LA2.108,N.M.Thiện,13/10/2025--21/12/2025
,EE054IU,EE054IU, Digital Logic Design Laboratory,3,,1,1,EEEE23SB41,16,Hết,,Tư,1,3,LA2.108,V.Q.Bảo,13/10/2025--21/12/2025
,EE054IU,EE054IU, Digital Logic Design Laboratory,4,,1,1,EEEE23SB41,16,Hết,,Sáu,1,3,LA2.108,N.T.Hiếu,13/10/2025--21/12/2025
,EE054IU,EE054IU, Digital Logic Design Laboratory,5,,1,1,EEEE23SB41,16,Hết,,Năm,1,3,LA2.108,N.T.Hiếu,13/10/2025--21/12/2025
,EE054IU,EE054IU, Digital Logic Design Laboratory,6,,1,1,EEEE23SB41,16,1,,Sáu,7,3,LA2.108,N.T.Hiếu,13/10/2025--21/12/2025
,EE055IU,EE055IU, Principles of EE2,1,,3,3,EEEE23IU41,35,7,,Năm,1,3,A1.203,N.L.Luật,08/09/2025--21/12/2025
,EE055IU,EE055IU, Principles of EE2,2,,3,3,EEEE23IU41,35,12,,Ba,7,3,L109,N.T.Lương,08/09/2025--21/12/2025
,EE056IU,EE056IU, Principles of EE2 Laboratory,1,,1,1,EEEE23IU41,20,1,,Năm,4,3,LA2.201,N.L.Luật,13/10/2025--21/12/2025
,EE056IU,EE056IU, Principles of EE2 Laboratory,3,,1,1,EEEE23IU41,20,4,,Tư,7,3,LA2.201,N.T.Lương,13/10/2025--21/12/2025
,EE057IU,EE057IU, Programming for Engineers (C),1,,3,3,EEEE24IU41,50,Hết,,Tư,7,3,A2.511,N.M.Thiện,08/09/2025--21/12/2025
,EE057IU,EE057IU, Programming for Engineers (C),2,,3,3,EEEE24IU41,50,Hết,,Sáu,7,3,L110,N.M.Thiện,08/09/2025--21/12/2025
,EE057IU,EE057IU, Programming for Engineers (C),3,,3,3,EEEE24IU41,50,Hết,,Tư,7,3,L206,N.T.Hiếu,08/09/2025--21/12/2025
,EE058IU,EE058IU, Programming for Engineers Laboratory,1,,1,1,EEEE24IU41,24,Hết,,Ba,1,3,LA2.207,N.M.Thiện,13/10/2025--21/12/2025
,EE058IU,EE058IU, Programming for Engineers Laboratory,2,,1,1,EEEE24IU41,22,Hết,,Năm,4,3,LA2.207,N.M.Thiện,13/10/2025--21/12/2025
,EE058IU,EE058IU, Programming for Engineers Laboratory,3,,1,1,EEEE24IU41,22,Hết,,Tư,1,3,LA2.207,N.M.Thiện,13/10/2025--21/12/2025
,EE058IU,EE058IU, Programming for Engineers Laboratory,4,,1,1,EEEE24IU41,22,Hết,,Hai,1,3,LA2.207,N.M.Thiện,13/10/2025--21/12/2025
,EE058IU,EE058IU, Programming for Engineers Laboratory,5,,1,1,EEEE24IU41,22,3,,Bảy,7,3,LA2.207,N.T.Hiếu,13/10/2025--21/12/2025
,EE058IU,EE058IU, Programming for Engineers Laboratory,6,,1,1,EEEE24IU41,22,1,,Ba,7,3,LA2.207,N.T.Hiếu,13/10/2025--21/12/2025
,EE063IU,EE063IU, Digital System Design,1,,3,3,EEEE22IU01,40,13,,Năm,1,3,A1.206,V.M.Thạnh,08/09/2025--21/12/2025
,EE066IU,EE066IU, VLSI Design,1,,3,3,EEEE22IU01,50,1,,Hai,1,3,C.501,N.B.Dương,08/09/2025--21/12/2025
,EE068IU,EE068IU, Principles of Communication Systems,1,,3,3,EEEE22IU41,25,Hết,,Hai,1,3,A2.311,H.V.T.Dũng,08/09/2025--21/12/2025
,EE072IU,EE072IU, Computer and Communication Networks,1,,3,3,EEEE22IU01,30,8,,Năm,1,3,L101,V.Q.Bảo,08/09/2025--21/12/2025
,EE079IU,EE079IU, Power Electronics,1,,3,3,EEEE22IU01,40,6,,Sáu,1,3,C.410,N.V.Bình,08/09/2025--21/12/2025
,EE083IU,EE083IU, Micro-processing Systems,1,,3,3,EEEE23WE41,40,14,,Hai,7,3,L102,V.M.Thạnh,08/09/2025--21/12/2025
,EE083IU,EE083IU, Micro-processing Systems,2,,3,3,EEEE23WE41,50,Hết,,Bảy,7,3,A2.301,V.M.Thạnh,08/09/2025--21/12/2025
,EE084IU,EE084IU, Micro-processing Systems Laboratory,1,,1,1,EEEE23WE41,20,2,,Ba,7,3,LA2.202,V.M.Thạnh,13/10/2025--21/12/2025
,EE084IU,EE084IU, Micro-processing Systems Laboratory,2,,1,1,EEEE23WE41,18,2,,Sáu,1,3,LA2.202,V.M.Thạnh,13/10/2025--21/12/2025
,EE084IU,EE084IU, Micro-processing Systems Laboratory,3,,1,1,EEEE23WE41,20,3,,Bảy,1,3,LA2.202,V.M.Thạnh,13/10/2025--21/12/2025
,EE084IU,EE084IU, Micro-processing Systems Laboratory,4,,1,1,EEEE23WE41,20,Hết,,Năm,4,3,LA2.202,V.M.Thạnh,13/10/2025--21/12/2025
,EE088IU,EE088IU, Signals & Systems,1,,3,3,EEEE23UN41,40,Hết,,Năm,4,3,A2.311,Đ.N.Hùng,08/09/2025--21/12/2025
,EE088IU,EE088IU, Signals & Systems,2,,3,3,EEEE23UN41,50,5,,Hai,1,3,A1.603,Đ.N.Hùng,08/09/2025--21/12/2025
,EE089IU,EE089IU, Signals & Systems Laboratory,1,,1,1,EEEE23UN41,24,Hết,,Năm,1,3,LA2.207,Đ.N.Hùng,13/10/2025--21/12/2025
,EE089IU,EE089IU, Signals & Systems Laboratory,2,,1,1,EEEE23UN41,22,5,,Bảy,1,3,LA2.207,Đ.N.Hùng,13/10/2025--21/12/2025
,EE089IU,EE089IU, Signals & Systems Laboratory,3,,1,1,EEEE23UN41,24,Hết,,Bảy,4,3,LA2.207,Đ.N.Hùng,13/10/2025--21/12/2025
,EE090IU,EE090IU, Electronics Devices,1,,3,3,EEEE23IU21,50,11,,Ba,7,3,A2.509,T.V.Sư,08/09/2025--21/12/2025
,EE090IU,EE090IU, Electronics Devices,2,,3,3,EEEE23IU21,50,6,,Bảy,1,3,A2.312,N.T.Lương,08/09/2025--21/12/2025
,EE091IU,EE091IU, Electronics Devices Laboratory,1,,1,1,EEEE23IU21,24,Hết,,Bảy,4,3,LA2.202,N.T.Lương,13/10/2025--21/12/2025
,EE091IU,EE091IU, Electronics Devices Laboratory,2,,1,1,EEEE23IU21,24,7,,Hai,7,3,LA2.202,N.T.Lương,13/10/2025--21/12/2025
,EE091IU,EE091IU, Electronics Devices Laboratory,3,,1,1,EEEE23IU21,24,4,,Hai,1,3,LA2.202,N.T.Lương,13/10/2025--21/12/2025
,EE092IU,EE092IU, Digital Signal Processing,1,,3,3,EEEE22IU41,50,Hết,,Bảy,1,3,A2.510,L.T.Thường,08/09/2025--21/12/2025
,EE093IU,EE093IU, Digital Signal Processing Laboratory,1,,1,1,EEEE22IU41,16,Hết,,Bảy,7,3,LA2.202,T.Q.Hiển,13/10/2025--21/12/2025
,EE093IU,EE093IU, Digital Signal Processing Laboratory,2,,1,1,EEEE22IU41,16,2,,Tư,7,3,LA2.202,T.Q.Hiển,13/10/2025--21/12/2025
,EE093IU,EE093IU, Digital Signal Processing Laboratory,3,,1,1,EEEE22IU41,16,3,,Ba,1,3,LA2.202,T.Q.Hiển,13/10/2025--21/12/2025
,EE097IU,EE097IU, Thesis,1,,10,10,EEEE24IU01,80,45,,,0,0,,Đ.N.Hùng,08/09/2025--21/12/2025
,EE102IU,EE102IU, Stochastic Signal Processing,1,,3,3,EEEE22IU11,30,9,,Bảy,7,3,A2.312,Đ.H.Tuấn,08/09/2025--21/12/2025
,EE103IU,EE103IU, Image Processing,1,,3,3,EEEE22IU41,30,Hết,,Sáu,7,3,A1.204,N.N.T.Minh,08/09/2025--21/12/2025
,EE105IU,EE105IU, Antennas and Microwave Engineering,1,,3,3,EEEE22IU11,20,4,,Hai,7,3,A1.207A,N.B.Dương,08/09/2025--21/12/2025
,EE107IU,EE107IU, Senior Project,1,,2,2,EEEE22IU21,80,16,,,0,0,,Đ.N.Hùng,08/09/2025--21/12/2025
,EE114IU,EE114IU, Entrepreneurship,1,,3,3,EEEE22IU11,35,10,,Sáu,1,3,A2.310,N.D.Uyen,08/09/2025--21/12/2025
,EE114IU,EE114IU, Entrepreneurship,2,,3,3,EEEE22IU11,35,17,,Bảy,1,3,A2.309,T.H.Vương,08/09/2025--21/12/2025
,EE115IU,EE115IU, Principles of Communication Systems Lab,1,,1,1,EEEE22IU41,25,Hết,,Sáu,1,3,LA2.207,H.V.T.Dũng,13/10/2025--21/12/2025
,EE117IU,EE117IU, Digital System Design Lab,1,,1,1,EEEE22IU21,30,6,,Tư,7,3,LA2.207,V.M.Thạnh,13/10/2025--21/12/2025
,EE121IU,EE121IU, VLSI Design Lab,1,,1,1,EEEE22IU21,30,Hết,,Tư,4,3,LA2.207,N.B.Dương,06/10/2025--14/12/2025
,EE121IU,EE121IU, VLSI Design Lab,2,,1,1,EEEE22IU21,30,11,,Ba,7,3,LA1.608,L.T.Nga,06/10/2025--14/12/2025
,EE122IU,EE122IU, Image Processing Lab,1,,1,1,EEEE22IU41,30,Hết,,Hai,7,3,LA2.207,Đ.N.Hùng,13/10/2025--21/12/2025
,EE124IU,EE124IU, Antennas and Microwave Engineering Lab,2,,1,1,EEEE22IU21,20,9,,Tư,1,3,LA2.109,N.B.Dương,13/10/2025--21/12/2025
,EE127IU,EE127IU, Machine Learning and Artificial Intelligence,1,,3,3,EEEE22IU11,32,Hết,,Sáu,4,3,LA2.207,Đ.N.Hùng,08/09/2025--21/12/2025
,EE130IU,EE130IU, Capstone Design 1,1,,2,2,EEEE23IU11,50,3,,Hai,7,2,A1.207B,H.T.Quốc,08/09/2025--21/12/2025
,EE131IU,EE131IU, Capstone Design 2,1,,2,2,EEEE22IU21,70,36,,,0,0,,Đ.N.Hùng,08/09/2025--21/12/2025
,EE133IU,EE133IU, Emerging Engineering Technologies,1,,3,3,EEEE22IU11,35,2,,Ba,1,3,A2.412,H.V.T.Dũng,08/09/2025--02/11/2025
,EE133IU,EE133IU, Emerging Engineering Technologies,1,,3,3,EEEE22IU11,35,2,,,,,,,
,EE133IU,EE133IU, Emerging Engineering Technologies,1,,3,3,EEEE22IU11,35,2,,Ba,1,3,A2.412,N.L.Luật,03/11/2025--21/12/2025
,EEAC001IU,EEAC001IU, Materials Science & Engineering,1,,3,3,EEEE24IU01,35,1,,Tư,1,3,A2.312,N.D.Uyen,08/09/2025--21/12/2025
,EEAC001IU,EEAC001IU, Materials Science & Engineering,2,,3,3,EEEE24IU01,35,4,,Năm,4,3,A1.205,N.D.Uyen,08/09/2025--21/12/2025
,EEAC003IU,EEAC003IU, Power Electronics Lab,1,,1,1,EEAC22IU21,18,Hết,,Hai,1,3,LA2.201,N.V.Bình,13/10/2025--21/12/2025
,EEAC003IU,EEAC003IU, Power Electronics Lab,2,,1,1,EEAC22IU21,15,2,,Năm,1,3,LA2.201,N.V.Bình,13/10/2025--21/12/2025
,EEAC004IU,EEAC004IU, PC Based Control and SCADA System,1,,3,3,EEAC22IU41,40,1,,Sáu,4,3,L111,N.B.Dương,08/09/2025--21/12/2025
,EEAC005IU,EEAC005IU, PC Based Control and SCADA System Lab,1,,1,1,EEAC22IU41,20,2,,Ba,1,3,LA2.210,N.B.Dương,13/10/2025--21/12/2025
,EEAC005IU,EEAC005IU, PC Based Control and SCADA System Lab,2,,1,1,EEAC22IU41,20,3,,Ba,4,3,LA2.210,N.B.Dương,13/10/2025--21/12/2025
,EEAC006IU,EEAC006IU, Programmable Logic Control (PLC),1,,3,3,EEAC22IU41,35,2,,Sáu,1,3,A2.409,T.T.Long,08/09/2025--21/12/2025
,EEAC007IU,EEAC007IU, Programmable Logic Control (PLC) Lab,1,,1,1,EEAC22IU41,18,Hết,,Hai,4,3,LA2.210,T.T.Long,13/10/2025--21/12/2025
,EEAC007IU,EEAC007IU, Programmable Logic Control (PLC) Lab,2,,1,1,EEAC22IU41,18,2,,Hai,1,3,LA2.210,T.T.Long,13/10/2025--21/12/2025
,EEAC015IU,EEAC015IU, Robotics,1,,3,3,EEAC22IU21,40,Hết,,Năm,4,3,A1.207B,H.T.Quốc,08/09/2025--21/12/2025
,EEAC017IU,EEAC017IU, Digital Control,1,,3,3,EEAC22IU21,35,1,,Tư,1,3,A2.311,T.T.Long,08/09/2025--21/12/2025
,EEAC020IU,EEAC020IU, Theory of Automatic Control,1,,4,4,EEAC22IU21,50,2,,Sáu,7,4,A2.311,N.V.Bình,08/09/2025--21/12/2025
,EEAC021IU,EEAC021IU, Mathematics for Engineers,1,,4,4,EEEE24IU01,60,Hết,,Ba,7,4,A2.501,H.V.T.Dũng,08/09/2025--21/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,1,,3,3,BTBT24IU01,90,13,,Năm,7,3,L201,N.T.H.Hoa,08/09/2025--21/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,2,,3,3,BTBT24IU01,90,1,,Tư,7,3,L201,N.T.H.Như,08/09/2025--21/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,3,,3,3,BTBT24IU01,90,32,,Sáu,7,3,L201,N.T.Nguồn,08/09/2025--21/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,4,,3,3,BTBT24IU01,90,20,,Bảy,7,3,A2.508,P.T.M.Nguyệt,08/09/2025--21/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,5,,3,3,BTFT25IU11,0,Hết,,Hai,1,3,A2.307,M.T.K.Trinh,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,6,,3,3,BTFT25IU11,0,Hết,,Ba,1,3,A2.307,N.T.Nguồn,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,7,,3,3,BTFT25IU11,0,Hết,,Tư,1,3,A2.307,N.T.H.Như,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,8,,3,3,BTFT25IU11,0,Hết,,Năm,1,3,A2.307,N.T.H.Như,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,9,,3,3,BTFT25IU11,0,Hết,,Sáu,1,3,A2.307,N.T.Nguồn,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,10,,3,3,BTFT25IU11,0,Hết,,Bảy,1,3,A2.307,P.T.M.Nguyệt,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,11,,3,3,BABA23EX31,1,Hết,,,0,3,,N.T.H.Giang,08/09/2025--21/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,11,,3,3,BABA23EX31,1,Hết,,,,,,,
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,11,,3,3,BABA23EX31,1,Hết,,,0,3,,N.D.Q.Cuong,08/09/2025--21/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,12,,3,3,BTFT25IU11,0,Hết,,Hai,1,3,A1.109,,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,13,,3,3,BTFT25IU11,0,Hết,,Hai,1,3,A1.309,,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,14,,3,3,BTFT25IU11,0,Hết,,Ba,7,3,A2.205,,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,15,,3,3,BTFT25IU11,0,Hết,,Năm,1,3,A1.309,,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,16,,3,3,BTFT25IU11,0,Hết,,Hai,1,3,A2.407,,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,17,,3,3,BTFT25IU11,0,Hết,,Ba,1,3,A2.205,,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,18,,3,3,BTFT25IU11,0,Hết,,Tư,7,3,A2.411,,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,19,,3,3,BTFT25IU11,0,Hết,,Hai,1,3,A2.301,,15/09/2025--28/12/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,20,,3,3,BTFT25IU11,0,Hết,,Sáu,1,3,A2.507,,15/09/2025--28/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,1,,2,2,BTBT24IU01,90,10,,Năm,10,2,A2.104,T.T.T.Thùy,08/09/2025--21/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,2,,2,2,BTBT24IU01,90,1,,Tư,10,2,L201,T.T.H.Thương,08/09/2025--21/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,3,,2,2,BTBT24IU01,50,1,,Sáu,10,2,L101,P.T.T.Linh,08/09/2025--21/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,4,,2,2,BTBT24IU01,90,26,,Bảy,5,2,L207,B.V.Tuyển,08/09/2025--21/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,5,,2,2,BTFT25IU11,0,Hết,,Hai,4,2,A2.307,T.T.H.Thương,15/09/2025--21/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,6,,2,2,BTFT25IU11,0,Hết,,Ba,4,2,A2.307,P.T.T.Linh,15/09/2025--28/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,7,,2,2,BTFT25IU11,0,Hết,,Tư,4,2,A2.307,H.T.V.Thuý,15/09/2025--28/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,8,,2,2,BTFT25IU11,0,Hết,,Năm,4,2,A2.307,T.T.H.Thương,15/09/2025--28/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,9,,2,2,BTFT25IU11,0,Hết,,Sáu,4,2,A2.307,T.T.T.Thùy,15/09/2025--28/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,10,,2,2,BTFT25IU11,0,Hết,,Bảy,4,2,A2.307,T.T.H.Thương,15/09/2025--28/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,11,,2,2,BABA23EX31,1,Hết,,,0,2,,N.D.Q.Cuong,08/09/2025--21/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,11,,2,2,BABA23EX31,1,Hết,,,,,,,
,PE016IU,PE016IU, Political economics of Marxism and Leninism,11,,2,2,BABA23EX31,1,Hết,,,0,2,,H.T.N.Sao,08/09/2025--21/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,12,,2,2,BTFT25IU11,0,Hết,,Hai,4,2,A1.109,,15/09/2025--28/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,14,,2,2,BTFT25IU11,0,Hết,,Ba,10,2,A2.205,,15/09/2025--28/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,15,,2,2,BTFT25IU11,0,Hết,,Năm,4,2,A1.309,,15/09/2025--28/12/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,18,,2,2,BTFT25IU11,0,Hết,,Tư,10,2,A2.411,,15/09/2025--28/12/2025
,PE017IU,PE017IU, Scientific socialism,1,,2,2,BTBT24IU01,120,Hết,,Tư,5,2,A1.208,Đ.K.Diễm,08/09/2025--21/12/2025
,PE017IU,PE017IU, Scientific socialism,2,,2,2,BTBT24IU01,90,Hết,,Tư,5,2,L207,N.T.H.Như,08/09/2025--21/12/2025
,PE017IU,PE017IU, Scientific socialism,3,,2,2,BTBT24IU01,90,Hết,,Ba,1,2,L207,P.T.ĐOẠT,08/09/2025--21/12/2025
,PE017IU,PE017IU, Scientific socialism,4,,2,2,BTBT24IU01,90,Hết,,Ba,1,2,L201,B.V.Tuyển,08/09/2025--21/12/2025
,PE017IU,PE017IU, Scientific socialism,5,,2,2,BTFT25IU11,119,25,,Bảy,7,2,A2.307,N.T.B.Cần,15/09/2025--28/12/2025
,PE017IU,PE017IU, Scientific socialism,6,,2,2,BTFT25IU11,119,32,,Bảy,7,2,A2.407,Đ.K.Diễm,15/09/2025--28/12/2025
,PE017IU,PE017IU, Scientific socialism,7,,2,2,BTFT25IU11,0,Hết,,Bảy,7,2,A1.208,B.V.Tuyển,15/09/2025--28/12/2025
,PE017IU,PE017IU, Scientific socialism,8,,2,2,BTFT25IU11,45,2,,Bảy,9,2,A1.208,Đ.K.Diễm,15/09/2025--28/12/2025
,PE017IU,PE017IU, Scientific socialism,9,,2,2,BTFT25IU11,45,Hết,,Bảy,9,2,A2.307,B.V.Tuyển,15/09/2025--28/12/2025
,PE017IU,PE017IU, Scientific socialism,10,,2,2,BTFT25IU11,47,5,,Bảy,9,2,A2.407,N.T.B.Cần,15/09/2025--28/12/2025
,PE017IU,PE017IU, Scientific socialism,11,,2,2,BABA23EX31,1,Hết,,,0,2,,N.T.H.Giang,08/09/2025--21/12/2025
,PE017IU,PE017IU, Scientific socialism,11,,2,2,BABA23EX31,1,Hết,,,,,,,
,PE017IU,PE017IU, Scientific socialism,11,,2,2,BABA23EX31,1,Hết,,,0,2,,N.D.Q.Cuong,08/09/2025--21/12/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,1,,2,2,BTBT24IU01,120,Hết,,Tư,1,2,A2.104,T.T.CHÂU,08/09/2025--21/12/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,2,,2,2,BTBT24IU01,90,Hết,,Tư,1,2,L207,T.T.Phượng,08/09/2025--21/12/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,3,,2,2,BTBT24IU01,90,3,,Ba,5,2,L207,L.K.Cương,08/09/2025--21/12/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,4,,2,2,BTBT24IU01,90,Hết,,Ba,5,2,L201,N.V.That,08/09/2025--21/12/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,5,,2,2,BTBT24IU01,90,Hết,,Bảy,1,2,L207,P.T.C.Lai,08/09/2025--21/12/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,6,,2,2,BTBT24IU01,120,Hết,,Ba,7,2,A2.104,N.V.That,08/09/2025--21/12/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,8,,2,2,BTBT24IU01,90,Hết,,Ba,5,2,A2.501,T.T.CHÂU,08/09/2025--21/12/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,1,,2,2,BTBT24IU01,120,Hết,,Tư,3,2,A2.104,T.T.CHÂU,08/09/2025--21/12/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,2,,2,2,BTBT24IU01,90,Hết,,Tư,3,2,L207,P.T.T.Huong,08/09/2025--21/12/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,3,,2,2,BTBT24IU01,90,Hết,,Ba,3,2,L207,T.T.CHÂU,08/09/2025--21/12/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,4,,2,2,BTBT24IU01,90,Hết,,Ba,3,2,L201,N.V.That,08/09/2025--21/12/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,5,,2,2,BTBT24IU01,90,Hết,,Bảy,3,2,L207,P.T.C.Lai,08/09/2025--21/12/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,6,,2,2,BTBT24IU01,120,Hết,,Ba,9,2,A2.104,N.V.That,08/09/2025--21/12/2025
,PE021IU,PE021IU, General Law,1,,3,3,BABA24IU41,90,Hết,,Năm,4,3,A1.401,V.T.Huân,08/09/2025--21/12/2025
,PE021IU,PE021IU, General Law,2,,3,3,BABA244WE21,100,1,,Sáu,7,3,A2.307,V.T.Huân,08/09/2025--21/12/2025
,PE021IU,PE021IU, General Law,3,,3,3,BABA244WE21,100,Hết,,Ba,4,3,A1.109,V.T.Huân,08/09/2025--21/12/2025
,PE021IU,PE021IU, General Law,5,,3,3,BABA252WE01,0,Hết,,Sáu,7,3,A1.309,N.M.Quân,15/09/2025--28/12/2025
,PE021IU,PE021IU, General Law,6,,3,3,BABA244WE21,100,Hết,,Năm,1,3,A2.104,N.Đ.Hiếu,08/09/2025--21/12/2025
,PE021IU,PE021IU, General Law,7,,3,3,BABA244WE21,100,2,,Ba,7,3,A2.307,N.Đ.Hiếu,08/09/2025--21/12/2025
,PE021IU,PE021IU, General Law,8,,3,3,BABA244WE21,101,Hết,,Tư,4,3,A1.309,N.Đ.Hiếu,08/09/2025--21/12/2025
,PE021IU,PE021IU, General Law,9,,3,3,BABA244WE21,100,Hết,,Tư,1,3,A2.205,N.Đ.Hiếu,08/09/2025--21/12/2025
,PE021IU,PE021IU, General Law,10,,3,3,BABA252WE01,0,Hết,,Bảy,7,3,A2.104,N.K.H.Nguyên,15/09/2025--28/12/2025
,PE021IU,PE021IU, General Law,11,,3,3,BABA252WE01,0,Hết,,Hai,1,3,L201,N.M.Quân,15/09/2025--28/12/2025
,PE021IU,PE021IU, General Law,12,,3,3,BABA252WE01,0,Hết,,Sáu,1,3,A1.203,T.T.Long,15/09/2025--28/12/2025
,PE021IU,PE021IU, General Law,13,,3,3,BABA252WE01,0,Hết,,Ba,1,3,A2.402,N.M.Quân,15/09/2025--28/12/2025
,PE021IU,PE021IU, General Law,14,,3,3,BABA252WE01,0,Hết,,Tư,7,3,A2.410,N.K.H.Nguyên,15/09/2025--28/12/2025
,PE022IU,PE022IU, Engineering Ethics and Critical Thinking,1,,3,3,CECE24IU21,40,13,,Hai,7,3,A2.310,N.H.Nghĩa,08/09/2025--21/12/2025
,PT001IU,PT001IU, Physical Training 1,1,,3,3,EVEV21IU41,0,Hết,,Bảy,7,4,A2.409,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,2,,3,3,EVEV21IU41,60,Hết,,Ba,7,4,VOLLEYBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,3,,3,3,IEIE25SB01,60,Hết,,Tư,7,4,BASKETBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,4,,3,3,IEIE25SB01,60,1,,Năm,7,4,PICKLEBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,5,,3,3,EVEV21IU41,60,2,,Sáu,7,4,MARTIAL.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,7,,3,3,EVEV21IU41,58,2,,Hai,7,4,TABLE TEN.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,8,,3,3,IEIE25SB01,0,Hết,,Bảy,7,4,VOLLEYBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,9,,3,3,IEIE25SB01,0,Hết,,Sáu,2,4,VOLLEYBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,10,,3,3,IEIE25SB01,0,Hết,,Bảy,2,4,VOLLEYBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,11,,3,3,IEIE25SB01,0,Hết,,Sáu,2,4,BASKETBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,12,,3,3,IEIE25SB01,0,Hết,,Bảy,2,4,BASKETBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,13,,3,3,IEIE25SB01,0,Hết,,Bảy,7,4,BASKETBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,14,,3,3,IEIE25SB01,0,Hết,,Sáu,2,4,PICKLEBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,15,,3,3,IEIE25SB01,0,Hết,,Bảy,2,4,PICKLEBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,16,,3,3,IEIE25SB01,0,Hết,,Bảy,7,4,PICKLEBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,17,,3,3,IEIE25SB01,0,Hết,,Tư,7,4,MARTIAL.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,18,,3,3,IEIE25SB01,0,Hết,,Năm,7,4,MARTIAL.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,19,,3,3,IEIE25SB01,0,Hết,,Sáu,2,4,MARTIAL.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,20,,3,3,IEIE25SB01,0,Hết,,Bảy,2,4,MARTIAL.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,21,,3,3,IEIE25SB01,0,Hết,,Sáu,7,4,PICKLEBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,23,,3,3,IEIE25SB01,0,Hết,,Ba,7,4,TABLE TEN.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,24,,3,3,IEIE25SB01,0,Hết,,Tư,7,4,TABLE TEN.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,25,,3,3,IEIE25SB01,0,Hết,,Năm,2,4,TABLE TEN.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,26,,3,3,IEIE25SB01,0,Hết,,Sáu,7,4,TABLE TEN.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,27,,3,3,IEIE25SB01,55,7,,Bảy,2,4,TABLE TEN.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,28,,3,3,IEIE25SB01,0,Hết,,Bảy,7,4,TABLE TEN.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,29,,3,3,IEIE25SB01,0,Hết,,Bảy,7,4,MARTIAL.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,30,,3,3,IEIE25SB01,0,Hết,,Sáu,7,4,VOLLEYBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,31,,3,3,IEIE25SB01,55,14,,Ba,2,4,MARTIAL.,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,32,,3,3,IEIE25SB01,0,Hết,,Bảy,2,4,VOLLEYBALL,,15/09/2025--28/12/2025
,PT001IU,PT001IU, Physical Training 1,33,,3,3,IEIE25SB01,55,12,,Năm,2,4,VOLLEYBALL,,15/09/2025--28/12/2025
,PT002IU,PT002IU, Physical Training 2,1,,3,3,EVEV21IU41,60,Hết,,Hai,7,4,VOLLEYBALL,,08/09/2025--21/12/2025
,PT002IU,PT002IU, Physical Training 2,2,,3,3,EVEV21IU41,60,2,,Ba,7,4,BASKETBALL,,08/09/2025--21/12/2025
,PT002IU,PT002IU, Physical Training 2,3,,3,3,EVEV21IU41,60,Hết,,Tư,7,4,PICKLEBALL,,08/09/2025--21/12/2025
,PT002IU,PT002IU, Physical Training 2,4,,3,3,EVEV21IU41,60,Hết,,Hai,7,4,MARTIAL.,,08/09/2025--21/12/2025
,PT002IU,PT002IU, Physical Training 2,6,,3,3,EVEV21IU41,60,Hết,,Năm,7,4,TABLE TEN.,,08/09/2025--21/12/2025
,IT013IU,IT013IU, Algorithms & Data Structures,1,1,4,4,ITIT23WE41,65,Hết,*,Sáu,1,3,LA1.302,Đ.T.Nhân,06/10/2025--14/12/2025
,IT013IU,IT013IU, Algorithms & Data Structures,1,1,4,4,ITIT23WE41,65,Hết,*,,,,,,
,IT013IU,IT013IU, Algorithms & Data Structures,1,1,4,4,ITIT23WE41,65,Hết,*,Năm,7,3,A2.407,T.T.Tùng,08/09/2025--21/12/2025
,IT013IU,IT013IU, Algorithms & Data Structures,1,2,4,4,ITIT23WE41,35,1,*,Hai,4,3,LA1.604,Đ.T.Nhân,06/10/2025--14/12/2025
,IT013IU,IT013IU, Algorithms & Data Structures,1,2,4,4,ITIT23WE41,35,1,*,,,,,,
,IT013IU,IT013IU, Algorithms & Data Structures,1,2,4,4,ITIT23WE41,35,1,*,Năm,7,3,A2.407,T.T.Tùng,08/09/2025--21/12/2025
,IT013IU,IT013IU, Algorithms & Data Structures,2,1,4,4,ITIT23WE41,110,31,*,Ba,1,3,ONLINE1,Đ.T.Nhân,06/10/2025--14/12/2025
,IT013IU,IT013IU, Algorithms & Data Structures,2,1,4,4,ITIT23WE41,110,31,*,,,,,,
,IT013IU,IT013IU, Algorithms & Data Structures,2,1,4,4,ITIT23WE41,110,31,*,Tư,7,3,A2.205,H.L.Vân,08/09/2025--21/12/2025
,IT017IU,IT017IU, Operating Systems,1,1,4,4,ITIT23WE01,35,1,*,Bảy,1,3,LA1.607,Đ.T.Nhân,06/10/2025--14/12/2025
,IT017IU,IT017IU, Operating Systems,1,1,4,4,ITIT23WE01,35,1,*,,,,,,
,IT017IU,IT017IU, Operating Systems,1,1,4,4,ITIT23WE01,35,1,*,Bảy,7,3,A2.205,T.M.Hà,08/09/2025--21/12/2025
,IT017IU,IT017IU, Operating Systems,1,2,4,4,ITIT23WE01,75,10,*,Tư,1,3,ONLINE3,Đ.T.Nhân,06/10/2025--14/12/2025
,IT017IU,IT017IU, Operating Systems,1,2,4,4,ITIT23WE01,75,10,*,,,,,,
,IT017IU,IT017IU, Operating Systems,1,2,4,4,ITIT23WE01,75,10,*,Bảy,7,3,A2.205,T.M.Hà,08/09/2025--21/12/2025
,IT017IU,IT017IU, Operating Systems,2,1,4,4,ITIT23WE01,110,29,*,Năm,1,3,ONLINE3,Đ.T.Nhân,06/10/2025--14/12/2025
,IT017IU,IT017IU, Operating Systems,2,1,4,4,ITIT23WE01,110,29,*,,,,,,
,IT017IU,IT017IU, Operating Systems,2,1,4,4,ITIT23WE01,110,29,*,Bảy,4,3,A2.205,T.M.Hà,08/09/2025--21/12/2025
,IT024IU,IT024IU, Computer Graphics,1,1,4,4,ITIT24IU11,35,20,*,Hai,1,3,LA1.604,T.T.Tín,06/10/2025--14/12/2025
,IT024IU,IT024IU, Computer Graphics,1,1,4,4,ITIT24IU11,35,20,*,,,,,,
,IT024IU,IT024IU, Computer Graphics,1,1,4,4,ITIT24IU11,35,20,*,Sáu,1,3,A2.312,N.V.Sinh,08/09/2025--21/12/2025
,IT056IU,IT056IU, IT Project Management,1,1,4,4,ITIT23UN01,75,Hết,*,Bảy,7,3,ONLINE3,,06/10/2025--14/12/2025
,IT056IU,IT056IU, IT Project Management,1,1,4,4,ITIT23UN01,75,Hết,*,,,,,H.L.Vân,
,IT056IU,IT056IU, IT Project Management,1,1,4,4,ITIT23UN01,75,Hết,*,Năm,7,3,A2.307,,08/09/2025--21/12/2025
,IT056IU,IT056IU, IT Project Management,1,2,4,4,ITIT23UN01,35,Hết,*,Bảy,1,3,LA1.608,,06/10/2025--14/12/2025
,IT056IU,IT056IU, IT Project Management,1,2,4,4,ITIT23UN01,35,Hết,*,,,,,H.L.Vân,
,IT056IU,IT056IU, IT Project Management,1,2,4,4,ITIT23UN01,35,Hết,*,Năm,7,3,A2.307,,08/09/2025--21/12/2025
,IT058IU,IT058IU, Thesis,1,,10,10,ITIT24IU11,200,60,,,0,0,,N.V.Sinh,08/09/2025--21/12/2025
,IT064IU,IT064IU, Introduction to Computing,1,,3,3,ITIT25IU01,82,1,,Bảy,1,3,L201,H.K.Tú,15/09/2025--28/12/2025
,IT064IU,IT064IU, Introduction to Computing,2,,3,3,ITIT25IU01,79,Hết,,Bảy,7,3,L201,H.K.Tú,15/09/2025--28/12/2025
,IT067IU,IT067IU, Digital Logic Design,1,,3,3,ITIT24IU21,88,17,,Tư,1,3,A2.401,Đ.Đ.A.Vũ,08/09/2025--21/12/2025
,IT068IU,IT068IU, Principles of EE1,1,,3,3,ITIT214WE41,15,Hết,,Hai,1,3,ONLINE,N.T.Văn,08/09/2025--21/12/2025
,IT069IU,IT069IU, Object-Oriented Programming,1,1,4,4,ITIT22CE41,36,Hết,*,Hai,4,3,LA1.607,T.T.Tín,06/10/2025--14/12/2025
,IT069IU,IT069IU, Object-Oriented Programming,1,1,4,4,ITIT22CE41,36,Hết,*,,,,,,
,IT069IU,IT069IU, Object-Oriented Programming,1,1,4,4,ITIT22CE41,36,Hết,*,Tư,7,3,A2.307,T.T.Tùng,08/09/2025--21/12/2025
,IT069IU,IT069IU, Object-Oriented Programming,1,2,4,4,ITIT22CE41,36,Hết,*,Tư,4,3,LA1.605,T.T.Tín,06/10/2025--14/12/2025
,IT069IU,IT069IU, Object-Oriented Programming,1,2,4,4,ITIT22CE41,36,Hết,*,,,,,,
,IT069IU,IT069IU, Object-Oriented Programming,1,2,4,4,ITIT22CE41,36,Hết,*,Tư,7,3,A2.307,T.T.Tùng,08/09/2025--21/12/2025
,IT069IU,IT069IU, Object-Oriented Programming,1,3,4,4,ITIT22CE41,38,Hết,*,Tư,1,3,LA1.605,T.T.Tín,06/10/2025--14/12/2025
,IT069IU,IT069IU, Object-Oriented Programming,1,3,4,4,ITIT22CE41,38,Hết,*,,,,,,
,IT069IU,IT069IU, Object-Oriented Programming,1,3,4,4,ITIT22CE41,38,Hết,*,Tư,7,3,A2.307,T.T.Tùng,08/09/2025--21/12/2025
,IT079IU,IT079IU, Principles of Database Management,1,1,4,4,ITIT23IU41,35,1,*,Ba,1,3,LA1.608,N.Q.Phú,06/10/2025--14/12/2025
,IT079IU,IT079IU, Principles of Database Management,1,1,4,4,ITIT23IU41,35,1,*,,,,,,
,IT079IU,IT079IU, Principles of Database Management,1,1,4,4,ITIT23IU41,35,1,*,Hai,7,3,A2.205,N.T.T.Loan,08/09/2025--21/12/2025
,IT079IU,IT079IU, Principles of Database Management,1,2,4,4,ITIT23IU41,35,Hết,*,Ba,4,3,LA1.608,N.Q.Phú,06/10/2025--14/12/2025
,IT079IU,IT079IU, Principles of Database Management,1,2,4,4,ITIT23IU41,35,Hết,*,,,,,,
,IT079IU,IT079IU, Principles of Database Management,1,2,4,4,ITIT23IU41,35,Hết,*,Hai,7,3,A2.205,N.T.T.Loan,08/09/2025--21/12/2025
,IT079IU,IT079IU, Principles of Database Management,1,3,4,4,ITIT23IU41,35,1,*,Bảy,7,3,LA1.608,N.Q.Phú,06/10/2025--14/12/2025
,IT079IU,IT079IU, Principles of Database Management,1,3,4,4,ITIT23IU41,35,1,*,,,,,,
,IT079IU,IT079IU, Principles of Database Management,1,3,4,4,ITIT23IU41,35,1,*,Hai,7,3,A2.205,N.T.T.Loan,08/09/2025--21/12/2025
,IT079IU,IT079IU, Principles of Database Management,2,1,4,4,ITIT23IU41,35,14,*,Hai,1,3,LA1.607,N.Q.Phú,06/10/2025--14/12/2025
,IT079IU,IT079IU, Principles of Database Management,2,1,4,4,ITIT23IU41,35,14,*,,,,,,
,IT079IU,IT079IU, Principles of Database Management,2,1,4,4,ITIT23IU41,35,14,*,Tư,7,3,A2.407,N.T.T.Loan,08/09/2025--21/12/2025
,IT079IU,IT079IU, Principles of Database Management,2,2,4,4,ITIT23IU41,75,52,*,Năm,4,3,ONLINE3,N.Q.Phú,06/10/2025--14/12/2025
,IT079IU,IT079IU, Principles of Database Management,2,2,4,4,ITIT23IU41,75,52,*,,,,,,
,IT079IU,IT079IU, Principles of Database Management,2,2,4,4,ITIT23IU41,75,52,*,Tư,7,3,A2.407,N.T.T.Loan,08/09/2025--21/12/2025
,IT082IU,IT082IU, Internship,1,,3,3,ITIT24IU11,300,185,,,0,0,,N.V.Sinh,08/09/2025--21/12/2025
,IT083IU,IT083IU, Special Study of the Field,1,,3,3,ITIT24IU11,300,85,,,0,0,,N.V.Sinh,08/09/2025--21/12/2025
,IT089IU,IT089IU, Computer Architecture,1,1,4,4,ITIT23CE41,35,Hết,*,Ba,1,3,LA1.607,L.T.Nga,06/10/2025--14/12/2025
,IT089IU,IT089IU, Computer Architecture,1,1,4,4,ITIT23CE41,35,Hết,*,,,,,,
,IT089IU,IT089IU, Computer Architecture,1,1,4,4,ITIT23CE41,35,Hết,*,Bảy,1,3,A1.208,P.Q.Cường,08/09/2025--21/12/2025
,IT089IU,IT089IU, Computer Architecture,1,2,4,4,ITIT23CE41,35,Hết,*,Hai,4,3,LA1.605,L.T.Nga,06/10/2025--14/12/2025
,IT089IU,IT089IU, Computer Architecture,1,2,4,4,ITIT23CE41,35,Hết,*,,,,,,
,IT089IU,IT089IU, Computer Architecture,1,2,4,4,ITIT23CE41,35,Hết,*,Bảy,1,3,A1.208,P.Q.Cường,08/09/2025--21/12/2025
,IT089IU,IT089IU, Computer Architecture,2,1,4,4,ITIT23CE41,35,Hết,*,Sáu,4,3,LA1.608,L.T.Nga,06/10/2025--14/12/2025
,IT089IU,IT089IU, Computer Architecture,2,1,4,4,ITIT23CE41,35,Hết,*,,,,,,
,IT089IU,IT089IU, Computer Architecture,2,1,4,4,ITIT23CE41,35,Hết,*,Bảy,4,3,A1.208,P.Q.Cường,08/09/2025--21/12/2025
,IT089IU,IT089IU, Computer Architecture,2,2,4,4,ITIT23CE41,50,Hết,*,Tư,4,3,ONLINE1,L.T.Nga,06/10/2025--14/12/2025
,IT089IU,IT089IU, Computer Architecture,2,2,4,4,ITIT23CE41,50,Hết,*,,,,,,
,IT089IU,IT089IU, Computer Architecture,2,2,4,4,ITIT23CE41,50,Hết,*,Bảy,4,3,A1.208,P.Q.Cường,08/09/2025--21/12/2025
,IT090IU,IT090IU, Object-Oriented Analysis and Design,1,1,4,4,ITIT23CE41,60,7,*,Tư,1,3,LA1.302,L.T.N.Hạnh,06/10/2025--14/12/2025
,IT090IU,IT090IU, Object-Oriented Analysis and Design,1,1,4,4,ITIT23CE41,60,7,*,,,,,,
,IT090IU,IT090IU, Object-Oriented Analysis and Design,1,1,4,4,ITIT23CE41,60,7,*,Ba,4,3,L202,L.T.N.Hạnh,08/09/2025--21/12/2025
,IT091IU,IT091IU, Computer Networks,1,1,4,4,ITIT23WE01,40,19,*,Ba,1,3,ONLINE12,V.T.L.Phương,06/10/2025--14/12/2025
,IT091IU,IT091IU, Computer Networks,1,1,4,4,ITIT23WE01,40,19,*,,,,,,
,IT091IU,IT091IU, Computer Networks,1,1,4,4,ITIT23WE01,40,19,*,Sáu,4,3,A1.109,V.T.L.Phương,08/09/2025--21/12/2025
,IT091IU,IT091IU, Computer Networks,1,2,4,4,ITIT23WE01,35,5,*,Năm,7,3,LA1.607,Đ.T.Nhân,06/10/2025--14/12/2025
,IT091IU,IT091IU, Computer Networks,1,2,4,4,ITIT23WE01,35,5,*,,,,,,
,IT091IU,IT091IU, Computer Networks,1,2,4,4,ITIT23WE01,35,5,*,Sáu,4,3,A1.109,V.T.L.Phương,08/09/2025--21/12/2025
,IT091IU,IT091IU, Computer Networks,1,3,4,4,ITIT23WE01,35,8,*,Bảy,7,3,LA1.607,Đ.T.Nhân,06/10/2025--14/12/2025
,IT091IU,IT091IU, Computer Networks,1,3,4,4,ITIT23WE01,35,8,*,,,,,,
,IT091IU,IT091IU, Computer Networks,1,3,4,4,ITIT23WE01,35,8,*,Sáu,4,3,A1.109,V.T.L.Phương,08/09/2025--21/12/2025
,IT091IU,IT091IU, Computer Networks,2,2,4,4,ITIT23WE01,50,30,*,Ba,4,3,ONLINE1,Đ.T.Nhân,06/10/2025--14/12/2025
,IT091IU,IT091IU, Computer Networks,2,2,4,4,ITIT23WE01,50,30,*,,,,,,
,IT091IU,IT091IU, Computer Networks,2,2,4,4,ITIT23WE01,50,30,*,Tư,7,3,A1.205,V.T.L.Phương,08/09/2025--21/12/2025
,IT092IU,IT092IU, Principles of Programming Languages,1,1,4,4,ITIT23UN11,60,11,*,Năm,1,3,LA1.302,N.Q.Phú,06/10/2025--14/12/2025
,IT092IU,IT092IU, Principles of Programming Languages,1,1,4,4,ITIT23UN11,60,11,*,,,,,,
,IT092IU,IT092IU, Principles of Programming Languages,1,1,4,4,ITIT23UN11,60,11,*,Sáu,1,3,L108,L.T.N.Hạnh,08/09/2025--21/12/2025
,IT092IU,IT092IU, Principles of Programming Languages,2,1,4,4,ITIT23UN11,30,1,*,Sáu,7,3,LA1.606,N.Q.Phú,06/10/2025--14/12/2025
,IT092IU,IT092IU, Principles of Programming Languages,2,1,4,4,ITIT23UN11,30,1,*,,,,,,
,IT092IU,IT092IU, Principles of Programming Languages,2,1,4,4,ITIT23UN11,30,1,*,Hai,1,3,L108,L.T.N.Hạnh,08/09/2025--21/12/2025
,IT092IU,IT092IU, Principles of Programming Languages,2,2,4,4,ITIT23UN11,30,Hết,*,Năm,7,3,LA1.606,T.T.Tín,06/10/2025--14/12/2025
,IT092IU,IT092IU, Principles of Programming Languages,2,2,4,4,ITIT23UN11,30,Hết,*,,,,,,
,IT092IU,IT092IU, Principles of Programming Languages,2,2,4,4,ITIT23UN11,30,Hết,*,Hai,1,3,L108,L.T.N.Hạnh,08/09/2025--21/12/2025
,IT093IU,IT093IU, Web Application Development,1,2,4,4,ITIT23UN11,28,16,*,Năm,1,4,LA1.606,N.T.Nghĩa,06/10/2025--14/12/2025
,IT093IU,IT093IU, Web Application Development,1,2,4,4,ITIT23UN11,28,16,*,,,,,,
,IT093IU,IT093IU, Web Application Development,1,2,4,4,ITIT23UN11,28,16,*,Tư,1,3,A1.109,N.V.Sinh,08/09/2025--21/12/2025
,IT093IU,IT093IU, Web Application Development,1,3,4,4,ITIT23UN11,27,9,*,Ba,1,4,LA1.606,N.T.Nghĩa,06/10/2025--14/12/2025
,IT093IU,IT093IU, Web Application Development,1,3,4,4,ITIT23UN11,27,9,*,,,,,,
,IT093IU,IT093IU, Web Application Development,1,3,4,4,ITIT23UN11,27,9,*,Tư,1,3,A1.109,N.V.Sinh,08/09/2025--21/12/2025
,IT093IU,IT093IU, Web Application Development,1,4,4,4,ITIT23UN11,27,8,*,Tư,7,4,LA1.606,N.T.Nghĩa,06/10/2025--14/12/2025
,IT093IU,IT093IU, Web Application Development,1,4,4,4,ITIT23UN11,27,8,*,,,,,,
,IT093IU,IT093IU, Web Application Development,1,4,4,4,ITIT23UN11,27,8,*,Tư,1,3,A1.109,N.V.Sinh,08/09/2025--21/12/2025
,IT093IU,IT093IU, Web Application Development,2,1,4,4,ITIT23UN41,28,1,*,Bảy,7,4,LA1.606,N.T.Nghĩa,06/10/2025--14/12/2025
,IT093IU,IT093IU, Web Application Development,2,1,4,4,ITIT23UN41,28,1,*,,,,,,
,IT093IU,IT093IU, Web Application Development,2,1,4,4,ITIT23UN41,28,1,*,Năm,7,3,A2.104,N.V.Sinh,08/09/2025--21/12/2025
,IT093IU,IT093IU, Web Application Development,2,2,4,4,ITIT23UN41,55,22,*,Bảy,1,4,LA1.302,N.T.Nghĩa,06/10/2025--14/12/2025
,IT093IU,IT093IU, Web Application Development,2,2,4,4,ITIT23UN41,55,22,*,,,,,,
,IT093IU,IT093IU, Web Application Development,2,2,4,4,ITIT23UN41,55,22,*,Năm,7,3,A2.104,N.V.Sinh,08/09/2025--21/12/2025
,IT093IU,IT093IU, Web Application Development,2,3,4,4,ITIT23UN41,27,4,*,Hai,1,4,LA1.606,N.T.Nghĩa,06/10/2025--14/12/2025
,IT093IU,IT093IU, Web Application Development,2,3,4,4,ITIT23UN41,27,4,*,,,,,,
,IT093IU,IT093IU, Web Application Development,2,3,4,4,ITIT23UN41,27,4,*,Năm,7,3,A2.104,N.V.Sinh,08/09/2025--21/12/2025
,IT096IU,IT096IU, Net-Centric Programming,1,1,4,4,ITIT24IU11,55,8,*,Ba,7,3,LA1.302,N.T.Nghĩa,06/10/2025--14/12/2025
,IT096IU,IT096IU, Net-Centric Programming,1,1,4,4,ITIT24IU11,55,8,*,,,,,,
,IT096IU,IT096IU, Net-Centric Programming,1,1,4,4,ITIT24IU11,55,8,*,Năm,1,3,A2.205,L.T.Sơn,08/09/2025--21/12/2025
,IT096IU,IT096IU, Net-Centric Programming,1,2,4,4,ITIT24IU11,55,30,*,Năm,7,3,LA1.302,N.T.Nghĩa,06/10/2025--14/12/2025
,IT096IU,IT096IU, Net-Centric Programming,1,2,4,4,ITIT24IU11,55,30,*,,,,,,
,IT096IU,IT096IU, Net-Centric Programming,1,2,4,4,ITIT24IU11,55,30,*,Năm,1,3,A2.205,L.T.Sơn,08/09/2025--21/12/2025
,IT098IU,IT098IU, Principles of EE1 Laboratory,1,,1,1,ITIT214WE41,15,5,,Ba,7,3,LA1.607,H.T.Quốc,06/10/2025--14/12/2025
,IT099IU,IT099IU, Digital Logic Design Laboratory,1,,1,1,ITIT24IU21,22,1,,Hai,7,3,LA1.604,H.V.T.Dũng,06/10/2025--14/12/2025
,IT099IU,IT099IU, Digital Logic Design Laboratory,2,,1,1,ITIT24IU21,22,4,,Sáu,7,3,LA1.608,H.T.Quốc,06/10/2025--14/12/2025
,IT103IU,IT103IU, Digital Signal Processing,1,1,4,4,ITIT22CE41,35,26,*,Hai,1,3,LA1.605,V.T.L.Phương,06/10/2025--14/12/2025
,IT103IU,IT103IU, Digital Signal Processing,1,1,4,4,ITIT22CE41,35,26,*,,,,,,
,IT103IU,IT103IU, Digital Signal Processing,1,1,4,4,ITIT22CE41,35,26,*,Sáu,1,3,A1.206,V.C.Thành,08/09/2025--21/12/2025
,IT116IU,IT116IU, C/C++ Programming,1,1,4,4,ITIT24IU41,30,Hết,*,Sáu,1,3,LA1.606,T.T.Tín,06/10/2025--14/12/2025
,IT116IU,IT116IU, C/C++ Programming,1,1,4,4,ITIT24IU41,30,Hết,*,,,,,,
,IT116IU,IT116IU, C/C++ Programming,1,1,4,4,ITIT24IU41,30,Hết,*,Sáu,4,3,A2.601,L.T.Sơn,15/09/2025--28/12/2025
,IT116IU,IT116IU, C/C++ Programming,1,2,4,4,ITIT24IU41,60,7,*,Ba,4,3,LA1.302,T.T.Tín,06/10/2025--14/12/2025
,IT116IU,IT116IU, C/C++ Programming,1,2,4,4,ITIT24IU41,60,7,*,,,,,,
,IT116IU,IT116IU, C/C++ Programming,1,2,4,4,ITIT24IU41,60,7,*,Sáu,4,3,A2.601,L.T.Sơn,15/09/2025--28/12/2025
,IT116IU,IT116IU, C/C++ Programming,2,1,4,4,ITIT24IU41,60,12,*,Ba,1,3,LA1.302,T.T.Tín,06/10/2025--14/12/2025
,IT116IU,IT116IU, C/C++ Programming,2,1,4,4,ITIT24IU41,60,12,*,,,,,,
,IT116IU,IT116IU, C/C++ Programming,2,1,4,4,ITIT24IU41,60,12,*,Năm,7,3,A2.601,L.T.Sơn,15/09/2025--28/12/2025
,IT116IU,IT116IU, C/C++ Programming,3,1,4,4,ITIT25IU01,0,Hết,*,Năm,1,3,LA1.605,L.T.Nga,06/10/2025--14/12/2025
,IT116IU,IT116IU, C/C++ Programming,3,1,4,4,ITIT25IU01,0,Hết,*,,,,,,
,IT116IU,IT116IU, C/C++ Programming,3,1,4,4,ITIT25IU01,0,Hết,*,Tư,1,3,A2.608,H.L.Vân,15/09/2025--28/12/2025
,IT116IU,IT116IU, C/C++ Programming,3,2,4,4,ITIT25IU01,0,Hết,*,Sáu,1,3,LA1.604,N.T.Nghĩa,06/10/2025--14/12/2025
,IT116IU,IT116IU, C/C++ Programming,3,2,4,4,ITIT25IU01,0,Hết,*,,,,,,
,IT116IU,IT116IU, C/C++ Programming,3,2,4,4,ITIT25IU01,0,Hết,*,Tư,1,3,A2.608,H.L.Vân,15/09/2025--28/12/2025
,IT116IU,IT116IU, C/C++ Programming,4,1,4,4,ITIT25IU01,0,Hết,*,Sáu,4,3,LA1.302,T.T.Tín,06/10/2025--14/12/2025
,IT116IU,IT116IU, C/C++ Programming,4,1,4,4,ITIT25IU01,0,Hết,*,,,,,,
,IT116IU,IT116IU, C/C++ Programming,4,1,4,4,ITIT25IU01,0,Hết,*,Năm,1,3,L201,H.L.Vân,15/09/2025--28/12/2025
,IT117IU,IT117IU, System and Network Security,1,1,4,4,ITIT23UN01,60,5,*,Tư,1,4,ONLINE2,L.H.Dương,06/10/2025--30/11/2025
,IT117IU,IT117IU, System and Network Security,1,1,4,4,ITIT23UN01,60,5,*,,,,,,
,IT117IU,IT117IU, System and Network Security,1,1,4,4,ITIT23UN01,60,5,*,Bảy,7,3,A2.302,L.H.Dương,08/09/2025--21/12/2025
,IT120IU,IT120IU, Entrepreneurship,1,,3,3,ITIT24IU11,110,Hết,,Bảy,7,3,ONLINE,N.T.Tuấn,08/09/2025--21/12/2025
,IT120IU,IT120IU, Entrepreneurship,2,,3,3,ITIT24IU11,110,Hết,,Sáu,7,3,ONLINE1,N.T.Tuấn,08/09/2025--21/12/2025
,IT125IU,IT125IU, System & Network Administration,1,1,4,4,ITIT23CE41,70,4,*,Năm,1,4,ONLINE12,L.H.Dương,06/10/2025--30/11/2025
,IT125IU,IT125IU, System & Network Administration,1,1,4,4,ITIT23CE41,70,4,*,,,,,,
,IT125IU,IT125IU, System & Network Administration,1,1,4,4,ITIT23CE41,70,4,*,Tư,7,3,L108,L.H.Dương,08/09/2025--21/12/2025
,IT128IU,IT128IU, Micro-processing Systems,1,,3,3,ITIT24IU21,35,23,,Bảy,4,3,A1.603,V.T.Bình,08/09/2025--21/12/2025
,IT129IU,IT129IU, Micro-processing Systems Laboratory,1,,1,1,ITIT24IU21,35,23,,Bảy,7,4,LA1.604,V.T.Bình,03/11/2025--30/11/2025
,IT129IU,IT129IU, Micro-processing Systems Laboratory,1,,1,1,ITIT24IU21,35,23,,,,,,,
,IT129IU,IT129IU, Micro-processing Systems Laboratory,1,,1,1,ITIT24IU21,35,23,,Bảy,7,4,LA1.604,L.T.Nga,06/10/2025--02/11/2025
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT24IU01,35,3,*,Năm,4,3,LA1.607,T.T.Tín,06/10/2025--14/12/2025
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT24IU01,35,3,*,,,,,,
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT24IU01,35,3,*,Ba,1,3,A2.608,H.V.U.Synh,08/09/2025--21/12/2025
,IT131IU,IT131IU, Theoretical Models in Computing,1,1,4,4,ITIT234WE01,70,33,*,Sáu,7,3,ONLINE2,H.V.U.Synh,06/10/2025--14/12/2025
,IT131IU,IT131IU, Theoretical Models in Computing,1,1,4,4,ITIT234WE01,70,33,*,,,,,,
,IT131IU,IT131IU, Theoretical Models in Computing,1,1,4,4,ITIT234WE01,70,33,*,Năm,1,3,L202,H.V.U.Synh,08/09/2025--21/12/2025
,IT133IU,IT133IU, Mobile Application Development,1,1,4,4,ITIT23UN01,30,Hết,*,Năm,4,3,LA1.604,L.D.Tân,06/10/2025--14/12/2025
,IT133IU,IT133IU, Mobile Application Development,1,1,4,4,ITIT23UN01,30,Hết,*,,,,,,
,IT133IU,IT133IU, Mobile Application Development,1,1,4,4,ITIT23UN01,30,Hết,*,Hai,4,3,A2.302,L.D.Tân,08/09/2025--21/12/2025
,IT133IU,IT133IU, Mobile Application Development,1,2,4,4,ITIT23UN01,30,8,*,Năm,1,3,LA1.604,L.D.Tân,06/10/2025--14/12/2025
,IT133IU,IT133IU, Mobile Application Development,1,2,4,4,ITIT23UN01,30,8,*,,,,,,
,IT133IU,IT133IU, Mobile Application Development,1,2,4,4,ITIT23UN01,30,8,*,Hai,4,3,A2.302,L.D.Tân,08/09/2025--21/12/2025
,IT135IU,IT135IU, Introduction to Data Science,1,,3,3,ITIT25IU01,20,6,,Sáu,1,3,A1.402,N.T.T.Sang,15/09/2025--28/12/2025
,IT137IU,IT137IU, Data Analysis,1,1,4,4,ITIT22CE41,50,1,*,Năm,7,4,ONLINE_1,N.T.Kỳ,06/10/2025--30/11/2025
,IT137IU,IT137IU, Data Analysis,1,1,4,4,ITIT22CE41,50,1,*,,,,,,
,IT137IU,IT137IU, Data Analysis,1,1,4,4,ITIT22CE41,50,1,*,Bảy,1,3,A1.206,N.T.Kỳ,08/09/2025--21/12/2025
,IT138IU,IT138IU, Data Science and Data Visualization,1,1,4,4,ITIT22CE41,60,Hết,*,Sáu,7,4,ONLINE_1,T.T.Tùng,06/10/2025--30/11/2025
,IT138IU,IT138IU, Data Science and Data Visualization,1,1,4,4,ITIT22CE41,60,Hết,*,,,,,,
,IT138IU,IT138IU, Data Science and Data Visualization,1,1,4,4,ITIT22CE41,60,Hết,*,Ba,7,3,A1.402,T.T.Tùng,08/09/2025--21/12/2025
,IT139IU,IT139IU, Scalable and Distributed Computing,1,1,4,4,ITIT23WE41,92,62,*,Tư,1,4,ONLINE,M.H.B.Ân,06/10/2025--30/11/2025
,IT139IU,IT139IU, Scalable and Distributed Computing,1,1,4,4,ITIT23WE41,92,62,*,,,,,,
,IT139IU,IT139IU, Scalable and Distributed Computing,1,1,4,4,ITIT23WE41,92,62,*,Bảy,1,3,A1.309,M.H.B.Ân,08/09/2025--21/12/2025
,IT139IU,IT139IU, Scalable and Distributed Computing,2,1,4,4,ITIT23WE41,92,58,*,Năm,1,4,ONLINE1,M.H.B.Ân,06/10/2025--30/11/2025
,IT139IU,IT139IU, Scalable and Distributed Computing,2,1,4,4,ITIT23WE41,92,58,*,,,,,,
,IT139IU,IT139IU, Scalable and Distributed Computing,2,1,4,4,ITIT23WE41,92,58,*,Bảy,4,3,A1.309,M.H.B.Ân,08/09/2025--21/12/2025
,IT140IU,IT140IU, Fundamental Concepts of Data Security,1,1,4,4,ITIT24IU21,35,9,*,Năm,7,4,LA1.608,L.H.Dương,06/10/2025--30/11/2025
,IT140IU,IT140IU, Fundamental Concepts of Data Security,1,1,4,4,ITIT24IU21,35,9,*,,,,,,
,IT140IU,IT140IU, Fundamental Concepts of Data Security,1,1,4,4,ITIT24IU21,35,9,*,Hai,4,3,A1.201,L.H.Dương,08/09/2025--21/12/2025
,IT140IU,IT140IU, Fundamental Concepts of Data Security,1,2,4,4,ITIT24IU21,55,Hết,*,Sáu,1,4,ONLINE,L.H.Dương,06/10/2025--30/11/2025
,IT140IU,IT140IU, Fundamental Concepts of Data Security,1,2,4,4,ITIT24IU21,55,Hết,*,,,,,,
,IT140IU,IT140IU, Fundamental Concepts of Data Security,1,2,4,4,ITIT24IU21,55,Hết,*,Hai,4,3,A1.201,L.H.Dương,08/09/2025--21/12/2025
,IT149IU,IT149IU, Fundamentals of Programming,1,1,4,4,ITIT25IU01,0,Hết,*,Hai,1,3,LA1.302,L.T.Nga,06/10/2025--14/12/2025
,IT149IU,IT149IU, Fundamentals of Programming,1,1,4,4,ITIT25IU01,0,Hết,*,,,,,,
,IT149IU,IT149IU, Fundamentals of Programming,1,1,4,4,ITIT25IU01,0,Hết,*,Ba,1,3,A2.508,L.T.Sơn,15/09/2025--28/12/2025
,IT149IU,IT149IU, Fundamentals of Programming,1,2,4,4,ITIT25IU01,0,Hết,*,Hai,1,3,LA1.608,Đ.T.Nhân,06/10/2025--14/12/2025
,IT149IU,IT149IU, Fundamentals of Programming,1,2,4,4,ITIT25IU01,0,Hết,*,,,,,,
,IT149IU,IT149IU, Fundamentals of Programming,1,2,4,4,ITIT25IU01,0,Hết,*,Ba,1,3,A2.508,L.T.Sơn,15/09/2025--28/12/2025
,IT151IU,IT151IU, Statistical Methods,1,,3,3,ITIT22CE41,90,47,,Bảy,7,4,A2.601,P.H.Uyen,08/09/2025--16/11/2025
,IT151IU,IT151IU, Statistical Methods,1,,3,3,ITIT22CE41,90,47,,,,,,,
,IT151IU,IT151IU, Statistical Methods,1,,3,3,ITIT22CE41,90,47,,Bảy,7,5,A2.601,P.H.Uyen,17/11/2025--23/11/2025
,IT153IU,IT153IU, Discrete Mathematics,1,,3,3,ITIT24IU21,110,Hết,,Bảy,1,3,A2.205,T.A.Tuấn,08/09/2025--21/12/2025
,IT154IU,IT154IU, Linear Algebra,1,,3,3,ITIT22CE41,110,1,,Năm,1,3,A1.109,T.V.Khanh,08/09/2025--21/12/2025
,IT159IU,IT159IU, Artificial Intelligence,1,1,4,4,ITIT23UN41,35,Hết,*,Sáu,1,3,LA1.608,L.T.Nga,06/10/2025--14/12/2025
,IT159IU,IT159IU, Artificial Intelligence,1,1,4,4,ITIT23UN41,35,Hết,*,,,,,,
,IT159IU,IT159IU, Artificial Intelligence,1,1,4,4,ITIT23UN41,35,Hết,*,Tư,7,3,A1.208,N.T.Kỳ,08/09/2025--21/12/2025
,IT159IU,IT159IU, Artificial Intelligence,1,2,4,4,ITIT23UN41,64,Hết,*,Tư,1,3,ONLINE1,L.T.Nga,06/10/2025--14/12/2025
,IT159IU,IT159IU, Artificial Intelligence,1,2,4,4,ITIT23UN41,64,Hết,*,,,,,,
,IT159IU,IT159IU, Artificial Intelligence,1,2,4,4,ITIT23UN41,64,Hết,*,Tư,7,3,A1.208,N.T.Kỳ,08/09/2025--21/12/2025
,IT159IU,IT159IU, Artificial Intelligence,2,1,4,4,ITIT23UN41,60,16,*,Năm,4,3,LA1.302,L.T.Nga,06/10/2025--14/12/2025
,IT159IU,IT159IU, Artificial Intelligence,2,1,4,4,ITIT23UN41,60,16,*,,,,,,
,IT159IU,IT159IU, Artificial Intelligence,2,1,4,4,ITIT23UN41,60,16,*,Hai,4,3,L202,N.T.Kỳ,08/09/2025--21/12/2025
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT24IU01,35,4,*,Sáu,1,3,ONLINE1,N.Q.Phú,06/10/2025--14/12/2025
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT24IU01,35,4,*,,,,,,
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT24IU01,35,4,*,Ba,1,3,A1.202,N.T.T.Sang,08/09/2025--21/12/2025
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT24IU01,35,2,*,Hai,7,3,ONLINE,N.Q.Phú,06/10/2025--14/12/2025
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT24IU01,35,2,*,,,,,,
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT24IU01,35,2,*,Ba,1,3,A1.202,N.T.T.Sang,08/09/2025--21/12/2025
,IT160IU,IT160IU, Data Mining,2,1,4,4,ITIT24IU01,70,32,*,Tư,1,3,ONLINE4,N.Q.Phú,06/10/2025--14/12/2025
,IT160IU,IT160IU, Data Mining,2,1,4,4,ITIT24IU01,70,32,*,,,,,,
,IT160IU,IT160IU, Data Mining,2,1,4,4,ITIT24IU01,70,32,*,Tư,7,3,A2.402,N.T.T.Sang,08/09/2025--21/12/2025
,MA001IU,MA001IU, Calculus 1,1,,4,4,BABA24AD41,120,Hết,,Hai,7,4,A1.208,N.M.Quân,08/09/2025--21/12/2025
,MA001IU,MA001IU, Calculus 1,2,,4,4,MAMA21IU01,120,Hết,,Ba,1,4,A2.104,N.N.Ngọc,08/09/2025--21/12/2025
,MA001IU,MA001IU, Calculus 1,3,,4,4,MAMA21IU01,120,1,,Sáu,7,4,A1.109,N.N.Ngọc,08/09/2025--21/12/2025
,MA001IU,MA001IU, Calculus 1,4,,4,4,BABA25AD41,0,Hết,,Sáu,1,4,A1.309,N.Định,15/09/2025--28/12/2025
,MA001IU,MA001IU, Calculus 1,5,,4,4,MAMA25IU11,0,Hết,,Ba,1,4,A1.309,N.Định,15/09/2025--28/12/2025
,MA001IU,MA001IU, Calculus 1,6,,4,4,MAMA25IU11,0,Hết,,Tư,1,4,A2.407,M.Đ.Thành,15/09/2025--28/12/2025
,MA001IU,MA001IU, Calculus 1,7,,4,4,MAMA25IU11,0,Hết,,Năm,1,4,A2.407,M.Đ.Thành,15/09/2025--28/12/2025
,MA001IU,MA001IU, Calculus 1,8,,4,4,MAMA25IU11,0,Hết,,Sáu,1,4,A2.205,N.M.Quân,15/09/2025--28/12/2025
,MA001IU,MA001IU, Calculus 1,9,,4,4,MAMA25IU11,0,Hết,,Bảy,1,4,L108,P.H.Hà,15/09/2025--28/12/2025
,MA001IU,MA001IU, Calculus 1,10,,4,4,MAMA25IU11,0,Hết,,Sáu,1,4,A2.408,N.N.Ngọc,15/09/2025--28/12/2025
,MA001IU,MA001IU, Calculus 1,11,,4,4,MAMA25IU11,0,Hết,,Năm,7,4,A1.207B,N.T.T.Vân,15/09/2025--28/12/2025
,MA001IU,MA001IU, Calculus 1,12,,4,4,MAMA25IU11,0,Hết,,Bảy,7,4,A1.205,T.Q.Bảo,15/09/2025--28/12/2025
,MA001IU,MA001IU, Calculus 1,13,,4,4,MAMA25IU11,0,Hết,,Tư,7,4,A2.104,L.M.Tuấn,15/09/2025--28/12/2025
,MA003IU,MA003IU, Calculus 2,1,,4,4,MAMA24IU41,120,1,,Ba,1,4,A1.208,T.V.Khanh,08/09/2025--21/12/2025
,MA003IU,MA003IU, Calculus 2,2,,4,4,MAMA24IU41,121,Hết,,Hai,1,4,A1.208,T.V.Khanh,08/09/2025--21/12/2025
,MA003IU,MA003IU, Calculus 2,3,,4,4,MAMA21IU01,120,5,,Tư,7,4,A1.109,T.Q.Bảo,08/09/2025--21/12/2025
,MA019IU,MA019IU, Calculus 2 (BT),1,,4,4,MAMA25IU11,21,3,,Bảy,7,4,A2.509,L.M.Tuấn,15/09/2025--28/12/2025
,MA023IU,MA023IU, Calculus 3,1,,4,4,MAMA21IU01,120,5,,Ba,7,4,A2.407,N.N.Hải,08/09/2025--21/12/2025
,MA023IU,MA023IU, Calculus 3,2,,4,4,MAMA21IU01,120,7,,Năm,7,4,A1.109,N.N.Hải,08/09/2025--21/12/2025
,MA023IU,MA023IU, Calculus 3,3,,4,4,MAMA24IU41,120,1,,Hai,7,4,A1.309,M.Đ.Thành,08/09/2025--21/12/2025
,MA024IU,MA024IU, Differential Equations,1,1,4,4,MAMA24IU41,90,38,*,Năm,1,4,ONLINE,N.N.Ngọc,29/09/2025--23/11/2025
,MA024IU,MA024IU, Differential Equations,1,1,4,4,MAMA24IU41,90,38,*,,,,,,
,MA024IU,MA024IU, Differential Equations,1,1,4,4,MAMA24IU41,90,38,*,Sáu,7,3,A1.201,P.H.A.Ngọc,08/09/2025--21/12/2025
,MA024IU,MA024IU, Differential Equations,2,1,4,4,MAMA24IU41,90,43,*,Tư,1,4,ONLINE9,P.H.Hà,29/09/2025--23/11/2025
,MA024IU,MA024IU, Differential Equations,2,1,4,4,MAMA24IU41,90,43,*,,,,,,
,MA024IU,MA024IU, Differential Equations,2,1,4,4,MAMA24IU41,90,43,*,Sáu,7,3,A2.302,N.A.Tú,08/09/2025--21/12/2025
,MA026IU,MA026IU," Probability, Statistic & Random Process",1,,3,3,MAMA21IU01,120,Hết,,Hai,7,3,A1.109,T.Q.Bảo,08/09/2025--21/12/2025
,MA026IU,MA026IU," Probability, Statistic & Random Process",2,,3,3,MAMA21IU01,120,Hết,,Hai,4,3,A2.407,P.H.Hà,08/09/2025--21/12/2025
,MA027IU,MA027IU, Applied Linear Algebra,1,,2,2,MAMA24IU41,90,20,,Ba,9,2,A2.507,N.T.T.Vân,08/09/2025--21/12/2025
,MA027IU,MA027IU, Applied Linear Algebra,2,,2,2,MAMA24IU41,90,8,,Sáu,3,2,A1.201,L.M.Tuấn,08/09/2025--21/12/2025
,MA027IU,MA027IU, Applied Linear Algebra,3,,2,2,MAMA24IU41,50,Hết,,Sáu,1,2,A1.201,L.M.Tuấn,08/09/2025--21/12/2025
,MA027IU,MA027IU, Applied Linear Algebra,4,,2,2,MAMA24IU41,50,Hết,,Ba,7,2,A2.507,N.T.T.Vân,08/09/2025--21/12/2025
,MAAS220IU,MAAS220IU, Introduction to Statistics,1,,2,2,MAMA22IU01,15,8,,Sáu,5,2,A1.204,N.N.Ngọc,08/09/2025--21/12/2025
,MAAS221IU,MAAS221IU, Introduction to Machine Learning,1,,3,3,MAMA22IU41,15,11,,Sáu,1,3,L101,T.V.Khanh,08/09/2025--21/12/2025
,MAFE101IU,MAFE101IU, Analysis 1,1,,4,4,MAMA22IU01,50,12,,Hai,7,4,A2.309,P.H.A.Ngọc,08/09/2025--21/12/2025
,MAFE103IU,MAFE103IU, Analysis 2,1,,4,4,MAMA22IU01,60,16,,Năm,7,4,A1.201,N.A.Tú,08/09/2025--21/12/2025
,MAFE104IU,MAFE104IU, Linear Algebra,1,,4,4,MAMA22IU01,50,20,,Năm,7,4,A2.401,P.H.Hà,08/09/2025--21/12/2025
,MAFE109IU,MAFE109IU, Introduction to Python,1,,4,4,MAMA22IU01,60,23,,Bảy,4,3,A1.201,T.A.Tuấn,08/09/2025--21/12/2025
,MAFE201IU,MAFE201IU, Real Analysis,1,,4,4,MAMA22IU01,90,7,,Năm,1,4,L207,N.N.Hải,08/09/2025--21/12/2025
,MAFE202IU,MAFE202IU, Differential Equations,1,,4,4,MAMA22IU01,80,7,,Ba,7,4,A2.401,P.H.A.Ngọc,08/09/2025--21/12/2025
,MAFE203IU,MAFE203IU, Analysis 3,1,,3,3,MAMA22IU01,90,28,,Tư,1,4,A1.201,T.V.Khanh,08/09/2025--21/12/2025
,MAFE204IU,MAFE204IU, Database Management system,1,1,3,3,MAMA22IU11,35,1,*,Năm,7,4,LA1.604,T.M.Hà,03/11/2025--21/12/2025
,MAFE204IU,MAFE204IU, Database Management system,1,1,3,3,MAMA22IU11,35,1,*,,,,,,
,MAFE204IU,MAFE204IU, Database Management system,1,1,3,3,MAMA22IU11,35,1,*,Năm,7,4,LA1.604,T.M.Hà,08/09/2025--02/11/2025
,MAFE206IU,MAFE206IU, Probability,1,,3,3,MAMA22IU01,90,39,,Tư,7,3,A1.201,N.M.Quân,08/09/2025--21/12/2025
,MAFE208IU,MAFE208IU, Numerical Analysis,1,,4,4,MAMA22IU01,60,16,,Sáu,7,4,A1.402,M.Đ.Thành,08/09/2025--21/12/2025
,MAFE209IU,MAFE209IU, Financial markets,1,,3,3,MAMA22IU21,50,8,,Sáu,4,3,A2.411,L.N.A.Khoa,08/09/2025--21/12/2025
,MAFE212IU,MAFE212IU, Financial Accounting,1,,4,4,MAMA22IU21,70,2,,Sáu,7,4,L202,T.D.Khiêm,08/09/2025--21/12/2025
,MAFE215IU,MAFE215IU, Financial Management,1,,3,3,MAMA22IU21,50,18,,Tư,7,3,L101,V.T.M.Uyên,08/09/2025--21/12/2025
,MAFE302IU,MAFE302IU, Random Processes,1,,3,3,MAMA22IU01,50,16,,Bảy,7,3,A2.411,P.H.Hà,08/09/2025--21/12/2025
,MAFE303IU,MAFE303IU, Optimization 1,1,,4,4,MAMA22IU01,50,19,,Hai,7,4,A2.411,N.N.Hải,08/09/2025--21/12/2025
,MAFE306IU,MAFE306IU, Financial Mathematics 1,1,,3,3,MAMA22IU01,50,30,,Bảy,7,3,A2.408,L.N.Tân,08/09/2025--21/12/2025
,MAFE307IU,MAFE307IU, Optimization 2,1,,3,3,MAMA22IU01,50,Hết,,Bảy,1,3,A1.603,N.Định,08/09/2025--21/12/2025
,MAFE308IU,MAFE308IU, Financial Risk Management 1,1,,3,3,MAMA22IU01,50,2,,Hai,1,3,A2.411,T.Q.Bảo,08/09/2025--21/12/2025
,MAFE309IU,MAFE309IU, Software Engineering,1,1,3,3,MAMA22IU11,35,11,*,Sáu,7,4,LA1.605,T.M.Hà,03/11/2025--21/12/2025
,MAFE309IU,MAFE309IU, Software Engineering,1,1,3,3,MAMA22IU11,35,11,*,,,,,,
,MAFE309IU,MAFE309IU, Software Engineering,1,1,3,3,MAMA22IU11,35,11,*,Sáu,7,4,LA1.605,T.M.Hà,08/09/2025--02/11/2025
,MAFE311IU,MAFE311IU, Asset pricing,1,,3,3,MAMA22IU21,50,27,,Tư,7,3,A1.603,V.T.Quý,08/09/2025--21/12/2025
,MAFE316IU,MAFE316IU, Statistics,1,,4,4,MAMA22IU01,50,28,,Ba,7,4,A2.411,N.M.Quân,08/09/2025--21/12/2025
,MAFE401IU,MAFE401IU, Financial Mathematics 2,1,,3,3,MAMA22IU01,50,43,,Bảy,1,3,A2.408,L.N.Tân,08/09/2025--21/12/2025
,MAFE401IU,MAFE401IU, Financial Mathematics 2,2,,3,3,MAMA22IU01,50,26,,Bảy,10,3,A2.408,L.N.Tân,08/09/2025--21/12/2025
,MAFE402IU,MAFE402IU, Portfolio Management,1,,3,3,MAMA22IU21,60,48,,Hai,1,3,L202,L.H.Nhung,08/09/2025--21/12/2025
,MAFE403IU,MAFE403IU, Research Methods in Finance,1,,3,3,MAMA22IU21,50,6,,Hai,4,3,A2.309,N.P.Anh,08/09/2025--21/12/2025
,MAFE404IU,MAFE404IU, Financial Risk Management 2,1,,3,3,MAMA22IU01,50,38,,Ba,1,3,A1.207B,T.Q.Bảo,08/09/2025--21/12/2025
,MAFE409IU,MAFE409IU, Graduation Thesis,1,,12,12,MAMA22IU01,35,22,,,0,0,,,08/09/2025--21/12/2025
,MAFE412IU,MAFE412IU, Financial Statement Analysis and Business Evaluation,1,,3,3,MAMA22IU21,50,23,,Năm,7,3,L202,P.N.Anh,08/09/2025--21/12/2025
,IS001IU,IS001IU, Introduction to Industrial Engineering,1,1,1,1,IEIE23IU21,25,10,*,Hai,7,3,LA2.201,N.V.Hợp,15/09/2025--28/09/2025
,IS001IU,IS001IU, Introduction to Industrial Engineering,1,1,1,1,IEIE23IU21,25,10,*,Hai,,,LA2.201,,
,IS001IU,IS001IU, Introduction to Industrial Engineering,1,1,1,1,IEIE23IU21,25,10,*,Hai,0,4,LA2.201,N.V.Hợp,08/09/2025--14/09/2025
,IS001IU,IS001IU, Introduction to Industrial Engineering,1,2,1,1,IEIE23IU21,25,5,*,Tư,7,3,LA2.201,N.V.Hợp,15/09/2025--28/09/2025
,IS001IU,IS001IU, Introduction to Industrial Engineering,1,2,1,1,IEIE23IU21,25,5,*,Tư,,,LA2.201,,
,IS001IU,IS001IU, Introduction to Industrial Engineering,1,2,1,1,IEIE23IU21,25,5,*,Tư,0,4,LA2.201,N.V.Hợp,08/09/2025--14/09/2025
,IS004IU,IS004IU, Engineering Probability & Statistics,1,,4,4,IEIE24IU21,90,24,,Ba,7,4,L201,P.N.K.Phúc,08/09/2025--21/12/2025
,IS019IU,IS019IU, Production Management,1,,3,3,IEIE24IU11,90,39,,Hai,7,3,L207,T.V.Lý,08/09/2025--21/12/2025
,IS019IU,IS019IU, Production Management,2,,3,3,IEIE24IU11,90,Hết,,Tư,7,3,L207,T.V.Lý,08/09/2025--21/12/2025
,IS019IU,IS019IU, Production Management,3,,3,3,IEIE24IU11,90,15,,Sáu,4,3,L207,T.V.Lý,08/09/2025--21/12/2025
,IS023IU,IS023IU, Inventory Management,1,,3,3,IEIE24IU01,90,42,,Hai,1,3,A1.402,N.V.Hợp,08/09/2025--21/12/2025
,IS023IU,IS023IU, Inventory Management,2,,3,3,IEIE24IU01,90,32,,Hai,7,3,A1.402,N.V.Hợp,08/09/2025--21/12/2025
,IS023IU,IS023IU, Inventory Management,3,,3,3,IEIE24IU01,90,1,,Tư,1,3,A1.402,N.V.Hợp,08/09/2025--21/12/2025
,IS025IU,IS025IU, Quality Management,1,,3,3,IEIE24IU41,90,Hết,,Bảy,7,3,A2.608,D.V.N.Anh,08/09/2025--21/12/2025
,IS025IU,IS025IU, Quality Management,2,,3,3,IEIE24IU41,90,3,,Bảy,4,3,A1.402,D.V.N.Anh,08/09/2025--21/12/2025
,IS026IU,IS026IU, Project Management,1,,3,3,IEIE23IU41,90,74,,Hai,7,3,A2.302,P.H.Trâm,08/09/2025--21/12/2025
,IS032IU,IS032IU, Facility Layout,1,,3,3,IEIE24IU01,90,42,,Bảy,7,3,L207,T.V.Lý,08/09/2025--21/12/2025
,IS033IU,IS033IU, Multi-Criteria Decision Making,1,,3,3,IEIE24IU11,50,26,,Sáu,1,3,A2.301,H.T.X.Chi,08/09/2025--21/12/2025
,IS033IU,IS033IU, Multi-Criteria Decision Making,2,,3,3,IEIE23IU11,50,25,,Ba,7,3,A2.302,H.T.X.Chi,08/09/2025--21/12/2025
,IS033IU,IS033IU, Multi-Criteria Decision Making,3,,3,3,IEIE24IU21,90,2,,Năm,7,3,A2.302,P.N.K.Phúc,08/09/2025--21/12/2025
,IS033IU,IS033IU, Multi-Criteria Decision Making,4,,3,3,IEIE24IU21,90,Hết,,Năm,1,3,A2.507,P.N.K.Phúc,08/09/2025--21/12/2025
,IS035IU,IS035IU, Systems Engineering,1,,3,3,IEIE24IU21,100,52,,Ba,7,3,A1.208,P.H.Trâm,08/09/2025--21/12/2025
,IS045IU,IS045IU, Leadership,1,,3,3,IEIE24IU21,90,65,,Sáu,4,3,A2.302,M.N.Khương,08/09/2025--21/12/2025
,IS048IU,IS048IU, Thesis,1,,10,10,IEIE23IU11,50,19,,,0,0,,N.V.Hợp,08/09/2025--21/12/2025
,IS053IU,IS053IU, Internship 2,1,,3,3,IEIE23IU01,60,56,,,0,0,,N.V.Hợp,08/09/2025--21/12/2025
,IS055IU,IS055IU, Principles of Logistics and Supply Chain Management,1,,3,3,IEIE24IU11,90,Hết,,Năm,7,3,A2.301,D.V.N.Anh,27/10/2025--21/12/2025
,IS055IU,IS055IU, Principles of Logistics and Supply Chain Management,1,,3,3,IEIE24IU11,90,Hết,,,,,,,
,IS055IU,IS055IU, Principles of Logistics and Supply Chain Management,1,,3,3,IEIE24IU11,90,Hết,,Năm,7,3,A2.301,N.L.Linh,08/09/2025--26/10/2025
,IS055IU,IS055IU, Principles of Logistics and Supply Chain Management,2,,3,3,IEIE24IU21,90,2,,Hai,4,3,A2.205,D.V.N.Anh,27/10/2025--21/12/2025
,IS055IU,IS055IU, Principles of Logistics and Supply Chain Management,2,,3,3,IEIE24IU21,90,2,,,,,,,
,IS055IU,IS055IU, Principles of Logistics and Supply Chain Management,2,,3,3,IEIE24IU21,90,2,,Hai,4,3,A2.205,N.L.Linh,08/09/2025--26/10/2025
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,1,1,1,1,IEIE23IU21,25,19,*,Ba,7,3,LA2.201,N.V.Hợp,15/09/2025--28/09/2025
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,1,1,1,1,IEIE23IU21,25,19,*,Ba,,,LA2.201,,
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,1,1,1,1,IEIE23IU21,25,19,*,Ba,0,4,LA2.201,N.V.Hợp,08/09/2025--14/09/2025
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,1,2,1,1,IEIE23IU21,25,12,*,Sáu,1,3,LA2.201,N.V.Hợp,15/09/2025--28/09/2025
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,1,2,1,1,IEIE23IU21,25,12,*,Sáu,,,LA2.201,,
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,1,2,1,1,IEIE23IU21,25,12,*,Sáu,0,4,LA2.201,N.V.Hợp,08/09/2025--14/09/2025
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,2,1,1,1,IEIE23IU21,25,Hết,*,Năm,1,3,LA2.201,N.V.Hợp,15/09/2025--28/09/2025
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,2,1,1,1,IEIE23IU21,25,Hết,*,Năm,,,LA2.201,,
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,2,1,1,1,IEIE23IU21,25,Hết,*,Năm,0,4,LA2.201,N.V.Hợp,08/09/2025--14/09/2025
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,2,2,1,1,IEIE23IU21,25,21,*,Bảy,7,3,LA2.201,N.V.Hợp,15/09/2025--28/09/2025
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,2,2,1,1,IEIE23IU21,25,21,*,Bảy,,,LA2.201,,
,IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,2,2,1,1,IEIE23IU21,25,21,*,Bảy,0,4,LA2.201,N.V.Hợp,08/09/2025--14/09/2025
,IS058IU,IS058IU, Time Series & forecasting techniques,1,,3,3,IEIE24IU21,90,1,,Ba,1,3,A2.401,H.T.X.Chi,08/09/2025--21/12/2025
,IS059IU,IS059IU, Materials Handling Systems,1,,3,3,IEIE24IU11,90,61,,Ba,7,3,A2.301,N.V.Chung,08/09/2025--21/12/2025
,IS065IU,IS065IU, Supply Security and Risk Management,1,,3,3,IEIE23IU11,90,88,,Tư,4,3,A2.301,,08/09/2025--21/12/2025
,IS067IU,IS067IU, International transportation & Logistics,1,,3,3,IEIE24IU01,50,36,,Hai,1,3,A2.512,H.T.T.Hòa,08/09/2025--21/12/2025
,IS067IU,IS067IU, International transportation & Logistics,2,,3,3,IEIE24IU01,90,5,,Hai,4,3,A2.301,H.T.T.Hòa,08/09/2025--21/12/2025
,IS067IU,IS067IU, International transportation & Logistics,3,,3,3,IEIE24IU01,90,14,,Ba,1,3,A2.301,H.T.T.Hòa,08/09/2025--21/12/2025
,IS068IU,IS068IU, Procurement Management,1,,3,3,IEIE23IU41,50,31,,Bảy,1,3,A1.205,L.T.D.Hieu,08/09/2025--21/12/2025
,IS070IU,IS070IU, Internship 2,1,,3,3,IEIE23IU01,200,173,,,0,0,,N.V.Hợp,08/09/2025--21/12/2025
,IS071IU,IS071IU, Thesis,1,,10,10,IEIE23IU11,100,28,,,0,0,,N.V.Hợp,08/09/2025--21/12/2025
,IS073IU,IS073IU, Business Law,1,,3,3,IEIE23IU11,50,26,,Hai,7,3,A2.313,T.T.Long,08/09/2025--21/12/2025
,IS073IU,IS073IU, Business Law,2,,3,3,IEIE23IU11,50,28,,Ba,1,3,A1.201,T.T.Long,08/09/2025--21/12/2025
,IS082IU,IS082IU, Retail management,1,,3,3,IEIE24IU41,90,8,,Tư,4,3,A1.402,N.H.G.Anh,08/09/2025--21/12/2025
,IS082IU,IS082IU, Retail management,2,,3,3,IEIE24IU41,50,40,,Sáu,1,3,A2.511,N.H.G.Anh,08/09/2025--21/12/2025
,IS082IU,IS082IU, Retail management,3,,3,3,IEIE24IU41,90,Hết,,Sáu,4,3,A2.507,N.H.G.Anh,08/09/2025--21/12/2025
,IS083IU,IS083IU, Capstone Design,1,,3,3,IEIE23IU11,300,143,,,0,0,,N.V.Hợp,08/09/2025--21/12/2025
,IS085IU,IS085IU, CAD/CAM/CNC,1,1,3,3,IEIE24IU11,30,4,*,Hai,1,4,LA2.614,N.V.Chung,06/10/2025--30/11/2025
,IS085IU,IS085IU, CAD/CAM/CNC,1,1,3,3,IEIE24IU11,30,4,*,,,,,,
,IS085IU,IS085IU, CAD/CAM/CNC,1,1,3,3,IEIE24IU11,30,4,*,Tư,7,2,A2.301,N.V.Chung,08/09/2025--21/12/2025
,IS085IU,IS085IU, CAD/CAM/CNC,1,2,3,3,IEIE24IU11,30,23,*,Ba,1,4,LA2.614,N.V.Chung,06/10/2025--30/11/2025
,IS085IU,IS085IU, CAD/CAM/CNC,1,2,3,3,IEIE24IU11,30,23,*,,,,,,
,IS085IU,IS085IU, CAD/CAM/CNC,1,2,3,3,IEIE24IU11,30,23,*,Tư,7,2,A2.301,N.V.Chung,08/09/2025--21/12/2025
,IS086IU,IS086IU, Introduction to Computing,1,,3,3,IEIE23IU11,90,39,,Ba,4,3,A1.201,N.M.Thiện,08/09/2025--21/12/2025
,IS086IU,IS086IU, Introduction to Computing,3,,3,3,IEIE23IU11,90,45,,Ba,4,3,A2.601,H.T.Quốc,08/09/2025--21/12/2025
,IS086IU,IS086IU, Introduction to Computing,4,,3,3,IEIE23IU11,90,21,,Năm,4,3,A1.201,N.T.Lương,08/09/2025--21/12/2025
,IS086IU,IS086IU, Introduction to Computing,5,,3,3,IEIE23IU11,90,Hết,,Tư,1,3,A2.507,T.Q.Hiển,08/09/2025--21/12/2025
,IS087IU,IS087IU, Manufacturing Processes,1,,3,3,IEIE24IU11,90,72,,Hai,7,3,A2.301,N.V.Chung,08/09/2025--21/12/2025
,IS089IU,IS089IU, Numerical Methods,1,,3,3,IEIE24IU41,90,24,,Tư,7,3,A2.601,N.D.Uyen,08/09/2025--21/12/2025
,IS089IU,IS089IU, Numerical Methods,2,,3,3,IEIE23IU41,90,30,,Tư,4,3,A2.608,N.D.Uyen,08/09/2025--21/12/2025
,IS090IU,IS090IU, Engineering Mechanics- Dynamics,1,,2,2,IEIE23IU11,50,30,,Sáu,7,3,A2.310,N.T.Quả,08/09/2025--21/12/2025
,IS091IU,IS091IU, Management Information Systems with ERP Application,1,,3,3,IEIE24IU41,90,3,,Ba,4,3,A1.202,T.Đ.Vĩ,08/09/2025--21/12/2025
,IS091IU,IS091IU, Management Information Systems with ERP Application,2,,3,3,IEIE24IU41,90,Hết,,Sáu,1,3,A2.302,T.Đ.Vĩ,08/09/2025--21/12/2025
,IS091IU,IS091IU, Management Information Systems with ERP Application,3,,3,3,IEIE24IU41,90,64,,Năm,7,3,A2.608,T.Đ.Vĩ,08/09/2025--21/12/2025
,IS092IU,IS092IU," Data Collection, Analysis and Applications",1,,3,3,IEIE24IU21,100,45,,Ba,4,3,A2.205,N.L.Linh,08/09/2025--26/10/2025
,IS092IU,IS092IU," Data Collection, Analysis and Applications",1,,3,3,IEIE24IU21,100,45,,,,,,,
,IS092IU,IS092IU," Data Collection, Analysis and Applications",1,,3,3,IEIE24IU21,100,45,,Ba,4,3,A2.205,P.N.K.Phúc,27/10/2025--21/12/2025
,IS104IU,IS104IU, Time series & forecasting techniques,1,,2,2,IEIE23IU01,90,64,,Năm,9,2,A1.402,D.N.Anh,08/09/2025--21/12/2025
,IS104IU,IS104IU, Time series & forecasting techniques,2,,2,2,IEIE23IU01,90,2,,Năm,7,2,A1.402,D.N.Anh,08/09/2025--21/12/2025
,IS105IU,IS105IU, Cold Chain Systems,1,,3,3,IEIE24IU01,90,59,,Ba,4,3,A2.301,H.T.T.Hòa,08/09/2025--21/12/2025
,IS106IU,IS106IU, E-Commerce Systems,1,,3,3,IEIE24IU21,90,65,,Bảy,4,3,A1.202,N.H.Anh,08/09/2025--21/12/2025
,IS109IU,IS109IU, Materials Handling Systems,1,,2,2,IEIE23IU01,90,2,,Ba,7,2,A2.608,,08/09/2025--21/12/2025
,IS109IU,IS109IU, Materials Handling Systems,2,,2,2,IEIE23IU01,90,84,,Ba,9,2,A2.608,,08/09/2025--21/12/2025
,IS110IU,IS110IU, Procurement Management,1,,2,2,IEIE23IU41,90,Hết,,Bảy,1,2,A2.302,D.V.N.Anh,08/09/2025--21/12/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,1,1,4,4,IEIE23IU01,30,1,*,Năm,1,4,LA2.613,N.T.Nguyên,06/10/2025--30/11/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,1,1,4,4,IEIE23IU01,30,1,*,,,,,,
,IS112IU,IS112IU, Engineering Probabillity & Statistics,1,1,4,4,IEIE23IU01,30,1,*,Hai,7,3,L201,N.T.Như,08/09/2025--21/12/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,1,3,4,4,IEIE23IU01,30,8,*,Tư,7,4,LA2.614,N.T.Nguyên,06/10/2025--30/11/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,1,3,4,4,IEIE23IU01,30,8,*,,,,,,
,IS112IU,IS112IU, Engineering Probabillity & Statistics,1,3,4,4,IEIE23IU01,30,8,*,Hai,7,3,L201,N.T.Như,08/09/2025--21/12/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,2,1,4,4,IEIE23IU01,30,Hết,*,Hai,7,4,LA2.614,N.T.Nguyên,06/10/2025--30/11/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,2,1,4,4,IEIE23IU01,30,Hết,*,,,,,,
,IS112IU,IS112IU, Engineering Probabillity & Statistics,2,1,4,4,IEIE23IU01,30,Hết,*,Năm,4,3,A2.608,N.T.Như,08/09/2025--21/12/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,2,2,4,4,IEIE23IU01,30,3,*,Sáu,1,4,LA2.613,N.T.Nguyên,06/10/2025--30/11/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,2,2,4,4,IEIE23IU01,30,3,*,,,,,,
,IS112IU,IS112IU, Engineering Probabillity & Statistics,2,2,4,4,IEIE23IU01,30,3,*,Năm,4,3,A2.608,N.T.Như,08/09/2025--21/12/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,3,2,4,4,IEIE23IU01,30,Hết,*,Hai,1,4,LA2.613,N.T.Nguyên,06/10/2025--30/11/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,3,2,4,4,IEIE23IU01,30,Hết,*,,,,,,
,IS112IU,IS112IU, Engineering Probabillity & Statistics,3,2,4,4,IEIE23IU01,30,Hết,*,Sáu,4,3,A2.608,N.T.Như,08/09/2025--21/12/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,3,3,4,4,IEIE23IU01,30,Hết,*,Tư,1,4,LA2.613,N.T.Nguyên,06/10/2025--30/11/2025
,IS112IU,IS112IU, Engineering Probabillity & Statistics,3,3,4,4,IEIE23IU01,30,Hết,*,,,,,,
,IS112IU,IS112IU, Engineering Probabillity & Statistics,3,3,4,4,IEIE23IU01,30,Hết,*,Sáu,4,3,A2.608,N.T.Như,08/09/2025--21/12/2025
,EL001IU,EL001IU, Reading 1 (B2-C1),1,,3,3,ENEL24IU01,50,Hết,,Tư,7,3,A2.312,M.H.Quân,15/09/2025--28/12/2025
,EL001IU,EL001IU, Reading 1 (B2-C1),2,,3,3,ENEL25IU11,0,Hết,,Bảy,1,3,A1.203,N.T.M.Trâm,15/09/2025--28/12/2025
,EL001IU,EL001IU, Reading 1 (B2-C1),3,,3,3,ENEL25IU11,0,Hết,,Ba,4,3,A1.205,N.T.M.Trâm,15/09/2025--28/12/2025
,EL001IU,EL001IU, Reading 1 (B2-C1),4,,3,3,ENEL25IU11,40,1,,Bảy,1,3,A1.207B,M.H.Quân,15/09/2025--28/12/2025
,EL002IU,EL002IU, Writing 1 (B2-C1),1,,3,3,ENEL24IU01,28,4,,Ba,7,3,A2.312,N.H.P.Mai,15/09/2025--28/12/2025
,EL002IU,EL002IU, Writing 1 (B2-C1),2,,3,3,ENEL25IU11,28,3,,Năm,1,3,A2.310,Đ.H.Nga,15/09/2025--28/12/2025
,EL002IU,EL002IU, Writing 1 (B2-C1),3,,3,3,ENEL25IU11,28,5,,Năm,4,3,A1.206,Đ.H.Nga,15/09/2025--28/12/2025
,EL002IU,EL002IU, Writing 1 (B2-C1),4,,3,3,ENEL25IU11,28,3,,Sáu,7,3,A1.203,Đ.N.A.Đức,15/09/2025--28/12/2025
,EL002IU,EL002IU, Writing 1 (B2-C1),5,,3,3,ENEL25IU11,28,3,,Năm,4,3,A2.411,T.T.Hằng,15/09/2025--28/12/2025
,EL002IU,EL002IU, Writing 1 (B2-C1),6,,3,3,ENEL25IU11,0,Hết,,Ba,1,3,A2.411,B.D.B.Huyền,15/09/2025--28/12/2025
,EL002IU,EL002IU, Writing 1 (B2-C1),7,,3,3,ENEL25IU11,28,3,,Năm,1,3,A2.411,N.H.Khánh,15/09/2025--28/12/2025
,EL003IU,EL003IU, Listening 1 (B2-C1),1,,3,3,ENEL24IU01,40,2,,Ba,1,3,A1.207A,N.T.M.Trâm,15/09/2025--28/12/2025
,EL003IU,EL003IU, Listening 1 (B2-C1),2,,3,3,ENEL25IU11,0,Hết,,Hai,1,3,A2.408,B.D.B.Huyền,15/09/2025--28/12/2025
,EL003IU,EL003IU, Listening 1 (B2-C1),3,,3,3,ENEL25IU11,0,Hết,,Hai,4,3,A1.603,B.D.B.Huyền,15/09/2025--28/12/2025
,EL003IU,EL003IU, Listening 1 (B2-C1),4,,3,3,ENEL25IU11,0,Hết,,Hai,1,3,A2.510,V.T.Thịnh,15/09/2025--28/12/2025
,EL004IU,EL004IU, Speaking 1 (B2-C1),1,,3,3,ENEL24IU01,29,Hết,,Năm,1,3,A1.207A,N.H.Đức,15/09/2025--28/12/2025
,EL004IU,EL004IU, Speaking 1 (B2-C1),2,,3,3,ENEL25IU11,0,Hết,,Tư,4,3,A1.206,P.T.Quang,15/09/2025--28/12/2025
,EL004IU,EL004IU, Speaking 1 (B2-C1),3,,3,3,ENEL25IU11,0,Hết,,Tư,1,3,A1.204,P.T.Quang,15/09/2025--28/12/2025
,EL004IU,EL004IU, Speaking 1 (B2-C1),4,,3,3,ENEL25IU11,0,Hết,,Tư,4,3,A1.205,N.T.M.Trâm,15/09/2025--28/12/2025
,EL004IU,EL004IU, Speaking 1 (B2-C1),5,,3,3,ENEL25IU11,0,Hết,,Tư,1,3,A2.408,N.T.M.Trâm,15/09/2025--28/12/2025
,EL004IU,EL004IU, Speaking 1 (B2-C1),6,,3,3,ENEL25IU11,0,Hết,,Tư,1,3,A1.207A,N.H.Đức,15/09/2025--28/12/2025
,EL005IU,EL005IU, Advanced Grammar,1,,2,2,ENEL24IU01,45,Hết,,Ba,4,2,A1.203,N.T.N.Châu,15/09/2025--28/12/2025
,EL005IU,EL005IU, Advanced Grammar,2,,2,2,ENEL25IU11,0,Hết,,Bảy,7,2,A2.309,T.T.Hằng,15/09/2025--28/12/2025
,EL005IU,EL005IU, Advanced Grammar,3,,2,2,ENEL25IU11,0,Hết,,Bảy,9,2,A2.309,T.T.Hằng,15/09/2025--28/12/2025
,EL005IU,EL005IU, Advanced Grammar,4,,2,2,ENEL25IU11,0,Hết,,Bảy,7,2,A1.207B,N.H.P.Mai,15/09/2025--28/12/2025
,EL005IU,EL005IU, Advanced Grammar,5,,2,2,ENEL25IU11,0,Hết,,Bảy,9,2,A1.207B,N.H.P.Mai,15/09/2025--28/12/2025
,EL006IU,EL006IU, Presentation Skills,1,,2,2,ENEL24IU01,30,Hết,,Năm,4,2,A2.312,N.L.B.Ngọc,15/09/2025--28/12/2025
,EL006IU,EL006IU, Presentation Skills,2,,2,2,ENEL24IU01,30,5,,Năm,4,2,A1.207A,M.H.Quân,15/09/2025--28/12/2025
,EL006IU,EL006IU, Presentation Skills,3,,2,2,ENEL25IU11,0,Hết,,Hai,7,2,A2.312,Đ.T.D.Ngọc,15/09/2025--28/12/2025
,EL006IU,EL006IU, Presentation Skills,4,,2,2,ENEL25IU11,0,Hết,,Hai,9,2,A2.312,Đ.T.D.Ngọc,15/09/2025--28/12/2025
,EL007IU,EL007IU, Reading 2 (C1-C2),1,,3,3,ENEL24IU11,55,Hết,,Sáu,7,3,A2.508,N.H.P.Mai,08/09/2025--21/12/2025
,EL008IU,EL008IU, Writing 2 (C1-C2),1,,3,3,ENEL24IU11,30,Hết,,Hai,7,3,L107,V.T.Nga,08/09/2025--21/12/2025
,EL008IU,EL008IU, Writing 2 (C1-C2),2,,3,3,ENEL24IU11,30,4,,Hai,7,3,L106,D.V.Đ.Quang,08/09/2025--21/12/2025
,EL009IU,EL009IU, Listening 2 (C1-C2),1,,3,3,ENEL24IU11,54,Hết,,Ba,7,3,L101,T.T.Hằng,08/09/2025--21/12/2025
,EL010IU,EL010IU, Speaking 2 (C1-C2),1,,3,3,ENEL24IU11,30,8,,Hai,4,3,L105,Đ.H.Nga,08/09/2025--21/12/2025
,EL010IU,EL010IU, Speaking 2 (C1-C2),2,,3,3,ENEL24IU11,30,Hết,,Hai,4,3,L104,N.H.Đức,08/09/2025--21/12/2025
,EL012IU,EL012IU, Research Methodology,1,,3,3,ENEL24IU21,50,Hết,,Tư,7,3,A1.401,Đ.N.A.Đức,08/09/2025--21/12/2025
,EL012IU,EL012IU, Research Methodology,2,,3,3,ENEL24IU21,50,Hết,,Hai,7,3,A1.202,L.M.Thu,08/09/2025--21/12/2025
,EL012IU,EL012IU, Research Methodology,3,,3,3,ENEL24IU21,50,Hết,,Hai,7,3,A1.201,V.H.Ngân,08/09/2025--21/12/2025
,EL012IU,EL012IU, Research Methodology,4,,3,3,ENEL24IU21,54,12,,Bảy,4,3,L109,N.T.Thu,08/09/2025--21/12/2025
,EL012IU,EL012IU, Research Methodology,5,,3,3,ENEL24IU21,50,Hết,,Hai,7,3,L206,V.T.Thịnh,08/09/2025--21/12/2025
,EL013IU,EL013IU, Introduction to Linguistics,1,,3,3,ENEL24IU21,55,Hết,,Ba,1,3,A2.302,V.T.Nga,08/09/2025--21/12/2025
,EL014IU,EL014IU, Introduction to English Teaching Methodology,1,,3,3,ENEL24IU21,50,22,,Sáu,7,3,A2.408,B.D.B.Huyền,08/09/2025--21/12/2025
,EL016IU,EL016IU, Introduction to Translation,1,,3,3,ENEL24IU41,50,Hết,,Ba,7,3,A1.207A,N.T.N.Châu,08/09/2025--21/12/2025
,EL016IU,EL016IU, Introduction to Translation,2,,3,3,ENEL24IU41,55,Hết,,Năm,1,3,A2.608,N.T.N.Châu,08/09/2025--21/12/2025
,EL016IU,EL016IU, Introduction to Translation,3,,3,3,ENEL24IU41,50,Hết,,Tư,1,3,A2.409,Đ.T.D.Ngọc,08/09/2025--21/12/2025
,EL019IU,EL019IU, British Civilization,1,,2,2,ENEL24IU41,50,15,,Năm,9,2,A1.207A,M.H.Quân,08/09/2025--21/12/2025
,EL019IU,EL019IU, British Civilization,2,,2,2,ENEL24IU41,50,Hết,,Năm,7,2,A1.207A,M.H.Quân,08/09/2025--21/12/2025
,EL022IU,EL022IU, Phonetics and Phonology,1,,3,3,ENEL23IU01,50,1,,Sáu,7,3,A2.410,V.H.Ngân,08/09/2025--21/12/2025
,EL022IU,EL022IU, Phonetics and Phonology,2,,3,3,ENEL23IU01,50,Hết,,Ba,7,3,A2.410,V.H.Ngân,08/09/2025--21/12/2025
,EL022IU,EL022IU, Phonetics and Phonology,3,,3,3,ENEL23IU01,50,Hết,,Năm,1,3,A2.312,N.L.B.Ngọc,08/09/2025--21/12/2025
,EL022IU,EL022IU, Phonetics and Phonology,4,,3,3,ENEL23IU01,40,1,,Sáu,7,3,L111,N.H.Khánh,08/09/2025--21/12/2025
,EL022IU,EL022IU, Phonetics and Phonology,5,,3,3,ENEL23IU01,50,Hết,,Năm,4,3,A2.409,N.H.Khánh,08/09/2025--21/12/2025
,EL023IU,EL023IU, Morphology,1,,3,3,ENEL23IU01,50,Hết,,Hai,1,3,L206,L.M.Thu,08/09/2025--21/12/2025
,EL023IU,EL023IU, Morphology,2,,3,3,ENEL23IU01,50,Hết,,Hai,4,3,A2.312,V.T.Nga,08/09/2025--21/12/2025
,EL023IU,EL023IU, Morphology,3,,3,3,ENEL23IU01,50,Hết,,Ba,4,3,A2.309,V.T.Nga,08/09/2025--21/12/2025
,EL023IU,EL023IU, Morphology,4,,3,3,ENEL23IU01,50,Hết,,Ba,4,3,A1.207B,T.Đ.Thư,08/09/2025--21/12/2025
,EL023IU,EL023IU, Morphology,5,,3,3,ENEL23IU01,50,Hết,,Hai,4,3,L206,T.Đ.Thư,08/09/2025--21/12/2025
,EL024IU,EL024IU, Syntax,1,,3,3,ENEL23IU11,50,Hết,,Sáu,7,3,A2.312,N.L.B.Ngọc,08/09/2025--21/12/2025
,EL024IU,EL024IU, Syntax,2,,3,3,ENEL23IU11,50,Hết,,Năm,7,3,A2.312,N.L.B.Ngọc,08/09/2025--21/12/2025
,EL024IU,EL024IU, Syntax,3,,3,3,ENEL23IU11,54,Hết,,Năm,4,3,L109,V.T.Nga,08/09/2025--21/12/2025
,EL024IU,EL024IU, Syntax,4,,3,3,ENEL23IU11,55,Hết,,Năm,4,3,A2.501,T.Đ.Thư,08/09/2025--21/12/2025
,EL025IU,EL025IU, Semantics,1,,3,3,ENEL23IU11,50,5,,Năm,1,3,A2.410,N.T.Quyên,08/09/2025--21/12/2025
,EL025IU,EL025IU, Semantics,2,,3,3,ENEL23IU11,50,3,,Tư,7,3,L103,N.H.Khánh,08/09/2025--21/12/2025
,EL025IU,EL025IU, Semantics,3,,3,3,ENEL23IU11,50,Hết,,Ba,1,3,A1.205,T.Đ.Thư,08/09/2025--21/12/2025
,EL025IU,EL025IU, Semantics,4,,3,3,ENEL23IU11,50,Hết,,Năm,1,3,A2.409,T.Đ.Thư,08/09/2025--21/12/2025
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),1,,3,3,ENEL23IU21,55,1,,Ba,7,3,A2.601,P.H.Đức,08/09/2025--21/12/2025
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),2,,3,3,ENEL23IU21,50,Hết,,Sáu,7,3,A2.401,P.H.Đức,08/09/2025--21/12/2025
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),3,,3,3,ENEL23IU21,50,9,,Sáu,7,3,A2.412,Đ.T.D.Ngọc,08/09/2025--21/12/2025
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),5,,3,3,ENEL23IU21,55,Hết,,Ba,7,3,A1.201,Đ.T.D.Ngọc,08/09/2025--21/12/2025
,EL029IU,EL029IU, Pragmatics,1,,3,3,ENEL23IU21,50,2,,Tư,7,3,A2.309,L.M.Thu,08/09/2025--21/12/2025
,EL029IU,EL029IU, Pragmatics,2,,3,3,ENEL23IU21,50,19,,Bảy,1,3,A2.313,L.M.Thu,08/09/2025--21/12/2025
,EL029IU,EL029IU, Pragmatics,3,,3,3,ENEL23IU21,54,Hết,,Bảy,1,3,L109,N.T.Thu,08/09/2025--21/12/2025
,EL030IU,EL030IU, Discourse Analysis,1,,3,3,ENEL23IU21,50,Hết,,Ba,1,3,A2.410,V.H.Ngân,08/09/2025--21/12/2025
,EL030IU,EL030IU, Discourse Analysis,2,,3,3,ENEL23IU21,50,Hết,,Ba,4,3,A2.410,V.H.Ngân,08/09/2025--21/12/2025
,EL030IU,EL030IU, Discourse Analysis,3,,3,3,ENEL23IU21,45,9,,Ba,1,3,A2.509,L.M.Thu,08/09/2025--21/12/2025
,EL034IU,EL034IU, ELT methods and techniques - Teaching Reading & Writing,1,,3,3,ENEL23IU41,50,Hết,,Năm,1,3,L107,T.T.Hằng,08/09/2025--21/12/2025
,EL034IU,EL034IU, ELT methods and techniques - Teaching Reading & Writing,2,,3,3,ENEL23IU41,50,7,,Tư,1,3,L107,Đ.H.Nga,08/09/2025--21/12/2025
,EL035IU,EL035IU, ELT methods and techniques - Teaching Vocabulary & Grammar,1,,3,3,ENEL23IU41,50,Hết,,Ba,1,3,A2.312,N.H.P.Mai,08/09/2025--21/12/2025
,EL036IU,EL036IU, Language Assessment and Testing,1,,3,3,ENEL23IU41,50,1,,Năm,7,3,L109,V.T.Thịnh,08/09/2025--21/12/2025
,EL039IU,EL039IU, Interpreting 1,1,,3,3,ENEL23IU41,30,15,,Năm,4,3,A2.313,N.T.N.Châu,08/09/2025--21/12/2025
,EL041IU,EL041IU, Advanced Translation,1,,3,3,ENEL23IU41,50,Hết,,Hai,4,3,A2.313,P.H.Đức,08/09/2025--21/12/2025
,EL043IU,EL043IU, Translation in Journalism,1,,3,3,ENEL23IU41,50,Hết,,Hai,1,3,A2.313,P.H.Đức,08/09/2025--21/12/2025
,EL044IU,EL044IU, Internship 1,1,,2,2,ENEL23IU41,20,1,,,0,0,,V.H.Ngân,08/09/2025--21/12/2025
,EL044IU,EL044IU, Internship 1,2,,2,2,ENEL23IU41,20,Hết,,,0,0,,V.H.Ngân,08/09/2025--21/12/2025
,EL044IU,EL044IU, Internship 1,3,,2,2,ENEL23IU41,20,Hết,,,0,0,,V.H.Ngân,08/09/2025--21/12/2025
,EL044IU,EL044IU, Internship 1,4,,2,2,ENEL23IU41,20,Hết,,,0,0,,V.H.Ngân,08/09/2025--21/12/2025
,EL044IU,EL044IU, Internship 1,5,,2,2,ENEL23IU41,20,Hết,,,0,0,,V.H.Ngân,08/09/2025--21/12/2025
,EL045IU,EL045IU, Internship 2,1,,4,4,ENEL23IU41,100,78,,,0,0,,V.H.Ngân,08/09/2025--21/12/2025
,EL046IU,EL046IU, Thesis,1,,10,10,ENEL23IU41,50,24,,,0,0,,V.H.Ngân,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,1,,2,2,ENEL24IU41,35,Hết,,Năm,1,2,L104,H.H.Long,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,2,,2,2,ENEL24IU41,35,Hết,,Năm,3,2,L105,H.H.Long,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,3,,2,2,ENEL24IU41,35,Hết,,Hai,1,2,L107,N.T.T.Anh,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,4,,2,2,ENEL24IU41,35,2,,Hai,3,2,L106,N.T.T.Anh,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,5,,2,2,ENEL24IU41,35,5,,Tư,1,2,L203,T.Q.Nam,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,6,,2,2,ENEL24IU41,35,6,,Tư,3,2,L204,T.Q.Nam,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,7,,2,2,ENEL24IU41,35,Hết,,Ba,7,2,L103,B.T.Q.Như,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,8,,2,2,ENEL24IU41,35,9,,Ba,9,2,L102,B.T.Q.Như,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,9,,2,2,ENEL24IU41,35,2,,Ba,1,2,L101,P.D.Anh,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,10,,2,2,ENEL24IU41,35,Hết,,Ba,3,2,L102,P.D.Anh,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,11,,2,2,ENEL24IU41,35,13,,Hai,1,2,L203,P.D.Anh,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,12,,2,2,ENEL24IU41,35,2,,Hai,3,2,L204,P.D.Anh,08/09/2025--21/12/2025
,EN007IU,EN007IU, Writing AE1,13,,2,2,ENEL25IU02,0,Hết,,Ba,1,2,L203,N.T.T.Anh,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,15,,2,2,ENEL25IU02,0,Hết,,Năm,1,2,L203,L.T.K.Nhật,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,16,,2,2,ENEL25IU02,0,Hết,,Năm,3,2,L204,L.T.K.Nhật,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,17,,2,2,ENEL25IU02,0,Hết,,Sáu,1,2,L203,N.Đ.Phong,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,18,,2,2,ENEL25IU02,0,Hết,,Sáu,3,2,L204,N.Đ.Phong,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,19,,2,2,ENEL25IU02,0,Hết,,Sáu,7,2,A1.206,N.Đ.Phong,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,20,,2,2,ENEL25IU02,0,Hết,,Sáu,9,2,A1.603,N.Đ.Phong,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,21,,2,2,ENEL25IU02,0,Hết,,Ba,7,2,L203,N.T.T.Anh,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,22,,2,2,ENEL25IU02,0,Hết,,Ba,9,2,L204,N.T.T.Anh,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,23,,2,2,ENEL25IU02,0,Hết,,Hai,7,2,L203,N.T.Tuấn,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,24,,2,2,ENEL25IU02,0,Hết,,Hai,9,2,L204,N.T.Tuấn,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,25,,2,2,ENEL25IU02,0,Hết,,Ba,1,2,L205,B.N.M.Thanh,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,26,,2,2,ENEL25IU02,0,Hết,,Ba,3,2,L206,B.N.M.Thanh,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,27,,2,2,ENEL25IU02,0,Hết,,Tư,7,2,L110,L.M.Hà,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,28,,2,2,ENEL25IU02,0,Hết,,Tư,9,2,L111,L.M.Hà,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,29,,2,2,ENEL25IU02,0,Hết,,Tư,1,2,L110,T.T.Tú,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,30,,2,2,ENEL25IU02,0,Hết,,Tư,3,2,L111,T.T.Tú,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,31,,2,2,ENEL25IU02,0,Hết,,Tư,7,2,L203,N.T.Tuấn,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,32,,2,2,ENEL25IU02,0,Hết,,Tư,9,2,L204,N.T.Tuấn,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,33,,2,2,ENEL25IU02,0,Hết,,Hai,7,2,L110,L.T.K.Nhật,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,34,,2,2,ENEL25IU02,0,Hết,,Hai,9,2,L111,L.T.K.Nhật,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,35,,2,2,ENEL25IU02,0,Hết,,Ba,7,2,L106,L.T.K.Nhật,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,36,,2,2,ENEL25IU02,0,Hết,,Ba,9,2,L107,L.T.K.Nhật,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,37,,2,2,ENEL25IU02,0,Hết,,Năm,7,2,A2.509,T.T.V.Hoài,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,38,,2,2,ENEL25IU02,0,Hết,,Năm,9,2,A1.603,T.T.V.Hoài,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,39,,2,2,ENEL25IU02,0,Hết,,Năm,7,2,L106,L.M.Hà,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,41,,2,2,ENEL25IU02,0,Hết,,Bảy,7,2,A2.313,,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,42,,2,2,ENEL25IU02,0,Hết,,Bảy,9,2,A2.310,,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,43,,2,2,ENEL25IU02,0,Hết,,Bảy,1,2,L105,,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,44,,2,2,ENEL25IU02,0,Hết,,Bảy,3,2,L106,,15/09/2025--28/12/2025
,EN007IU,EN007IU, Writing AE1,45,,2,2,ENEL25IU02,0,Hết,,Bảy,1,2,L204,,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,1,,2,2,ENEL24IU41,35,7,,Năm,3,2,L104,L.N.Thiện,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,2,,2,2,ENEL24IU41,35,Hết,,Năm,1,2,L105,L.N.Thiện,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,3,,2,2,ENEL24IU41,35,6,,Hai,3,2,L107,N.A.Vũ,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,4,,2,2,ENEL24IU41,35,2,,Hai,1,2,L106,N.A.Vũ,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,5,,2,2,ENEL24IU41,35,Hết,,Tư,3,2,L203,L.T.K.Nhật,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,6,,2,2,ENEL24IU41,35,Hết,,Tư,1,2,L204,L.T.K.Nhật,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,7,,2,2,ENEL24IU41,35,Hết,,Ba,9,2,L103,P.N.Q.Trâm,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,8,,2,2,ENEL24IU41,35,2,,Ba,7,2,L102,P.N.Q.Trâm,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,9,,2,2,ENEL24IU41,35,10,,Ba,3,2,L101,P.N.Q.Trâm,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,10,,2,2,ENEL24IU41,35,9,,Ba,1,2,L102,P.N.Q.Trâm,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,11,,2,2,ENEL24IU41,35,Hết,,Hai,3,2,L203,L.T.K.Nhật,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,12,,2,2,ENEL24IU41,35,Hết,,Hai,1,2,L204,L.T.K.Nhật,08/09/2025--21/12/2025
,EN008IU,EN008IU, Listening AE1,13,,2,2,ENEL25IU02,0,Hết,,Ba,3,2,L203,L.T.K.Nhật,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,15,,2,2,ENEL25IU02,0,Hết,,Năm,3,2,L203,P.D.Anh,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,16,,2,2,ENEL25IU02,0,Hết,,Năm,1,2,L204,P.D.Anh,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,17,,2,2,ENEL25IU02,0,Hết,,Sáu,3,2,L203,P.T.Dương,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,18,,2,2,ENEL25IU02,0,Hết,,Sáu,1,2,L204,P.T.Dương,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,19,,2,2,ENEL25IU02,0,Hết,,Sáu,9,2,A1.206,P.T.Dương,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,20,,2,2,ENEL25IU02,0,Hết,,Sáu,7,2,A1.603,P.T.Dương,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,21,,2,2,ENEL25IU02,0,Hết,,Ba,9,2,L203,N.T.K.Dung,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,22,,2,2,ENEL25IU02,0,Hết,,Ba,7,2,L204,N.T.K.Dung,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,23,,2,2,ENEL25IU02,0,Hết,,Hai,9,2,L203,N.Đ.Phong,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,24,,2,2,ENEL25IU02,0,Hết,,Hai,7,2,L204,N.Đ.Phong,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,25,,2,2,ENEL25IU02,0,Hết,,Ba,3,2,L205,P.T.Dương,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,26,,2,2,ENEL25IU02,0,Hết,,Ba,1,2,L206,P.T.Dương,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,27,,2,2,ENEL25IU02,0,Hết,,Tư,9,2,L110,B.T.Q.Như,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,28,,2,2,ENEL25IU02,0,Hết,,Tư,7,2,L111,B.T.Q.Như,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,29,,2,2,ENEL25IU02,0,Hết,,Tư,3,2,L110,B.N.M.Thanh,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,30,,2,2,ENEL25IU02,0,Hết,,Tư,1,2,L111,B.N.M.Thanh,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,31,,2,2,ENEL25IU02,0,Hết,,Tư,9,2,L203,N.Đ.Phong,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,32,,2,2,ENEL25IU02,0,Hết,,Tư,7,2,L204,N.Đ.Phong,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,33,,2,2,ENEL25IU02,0,Hết,,Hai,9,2,L110,L.M.Hà,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,34,,2,2,ENEL25IU02,0,Hết,,Hai,7,2,L111,L.M.Hà,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,35,,2,2,ENEL25IU02,0,Hết,,Ba,9,2,L106,T.Q.Nam,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,36,,2,2,ENEL25IU02,0,Hết,,Ba,7,2,L107,T.Q.Nam,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,37,,2,2,ENEL25IU02,0,Hết,,Năm,9,2,A2.509,N.T.K.Dung,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,38,,2,2,ENEL25IU02,0,Hết,,Năm,7,2,A1.603,N.T.K.Dung,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,39,,2,2,ENEL25IU02,0,Hết,,Năm,9,2,L106,,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,41,,2,2,ENEL25IU02,0,Hết,,Bảy,9,2,A2.313,,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,42,,2,2,ENEL25IU02,0,Hết,,Bảy,7,2,A2.310,,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,43,,2,2,ENEL25IU02,0,Hết,,Bảy,3,2,L105,,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,44,,2,2,ENEL25IU02,0,Hết,,Bảy,1,2,L106,,15/09/2025--28/12/2025
,EN008IU,EN008IU, Listening AE1,45,,2,2,ENEL25IU02,0,Hết,,Bảy,3,2,L204,,15/09/2025--28/12/2025
,EN011IU,EN011IU, Writing AE2,1,,2,2,ENEL24IU42,35,Hết,,Sáu,1,2,L104,Đ.Đ.Dũng,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,2,,2,2,ENEL24IU42,35,2,,Sáu,3,2,L105,Đ.Đ.Dũng,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,3,,2,2,ENEL24IU42,35,2,,Tư,7,2,L104,N.T.Thu,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,5,,2,2,ENEL24IU42,35,1,,Tư,1,2,L104,Đ.Đ.Dũng,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,6,,2,2,ENEL24IU42,35,1,,Tư,3,2,L105,Đ.Đ.Dũng,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,7,,2,2,ENEL24IU42,35,Hết,,Ba,1,2,L104,Đ.Đ.Dũng,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,8,,2,2,ENEL24IU42,35,Hết,,Ba,3,2,L105,Đ.Đ.Dũng,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,9,,2,2,ENEL24IU42,35,Hết,,Hai,7,2,L104,N.A.Vũ,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,10,,2,2,ENEL24IU42,35,Hết,,Hai,9,2,L105,N.A.Vũ,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,11,,2,2,ENEL24IU42,35,1,,Sáu,7,2,L104,H.H.Long,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,13,,2,2,ENEL24IU42,35,Hết,,Năm,7,2,L104,H.H.Long,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,15,,2,2,ENEL24IU42,35,Hết,,Ba,7,2,L104,T.T.V.Hoài,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,16,,2,2,ENEL24IU42,35,1,,Ba,9,2,L105,T.T.V.Hoài,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,17,,2,2,ENEL24IU42,35,Hết,,Ba,1,2,L110,T.T.V.Hoài,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,18,,2,2,ENEL24IU42,35,1,,Ba,3,2,L111,T.T.V.Hoài,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,19,,2,2,ENEL24IU42,35,Hết,,Ba,7,2,L110,Đ.Đ.Dũng,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,20,,2,2,ENEL24IU42,35,Hết,,Ba,9,2,L111,Đ.Đ.Dũng,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,21,,2,2,ENEL24IU42,35,4,,Ba,1,2,L106,D.V.Đ.Quang,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,22,,2,2,ENEL24IU42,35,Hết,,Ba,3,2,L107,D.V.Đ.Quang,08/09/2025--21/12/2025
,EN011IU,EN011IU, Writing AE2,23,,2,2,ENEL24IU42,35,1,,Tư,7,2,L106,D.V.Đ.Quang,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,1,,2,2,ENEL24IU42,35,Hết,,Sáu,3,2,L104,H.H.Long,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,2,,2,2,ENEL24IU42,35,Hết,,Sáu,1,2,L105,H.H.Long,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,5,,2,2,ENEL24IU42,35,3,,Tư,3,2,L104,P.D.Anh,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,6,,2,2,ENEL24IU42,35,Hết,,Tư,1,2,L105,P.D.Anh,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,7,,2,2,ENEL24IU42,35,Hết,,Ba,3,2,L104,N.A.Vũ,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,8,,2,2,ENEL24IU42,35,Hết,,Ba,1,2,L105,N.A.Vũ,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,9,,2,2,ENEL24IU42,35,10,,Hai,9,2,L104,N.T.T.Anh,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,10,,2,2,ENEL24IU42,35,6,,Hai,7,2,L105,N.T.T.Anh,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,11,,2,2,ENEL24IU42,35,3,,Sáu,9,2,L104,N.T.M.Nguyệt,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,12,,2,2,ENEL24IU42,35,6,,Sáu,7,2,L105,N.T.M.Nguyệt,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,13,,2,2,ENEL24IU42,35,7,,Năm,9,2,L104,L.N.Thiện,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,14,,2,2,ENEL24IU42,35,10,,Năm,7,2,L105,L.N.Thiện,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,15,,2,2,ENEL24IU42,35,13,,Ba,9,2,L104,P.T.Dương,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,16,,2,2,ENEL24IU42,35,1,,Ba,7,2,L105,P.T.Dương,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,17,,2,2,ENEL24IU42,35,Hết,,Ba,3,2,L110,N.T.K.Dung,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,18,,2,2,ENEL24IU42,35,1,,Ba,1,2,L111,N.T.K.Dung,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,19,,2,2,ENEL24IU42,35,Hết,,Ba,9,2,L110,Đ.H.Nga,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,20,,2,2,ENEL24IU42,35,Hết,,Ba,7,2,L111,D.V.Đ.Quang,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,21,,2,2,ENEL24IU42,35,4,,Ba,3,2,L106,Đ.H.Nga,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,22,,2,2,ENEL24IU42,35,Hết,,Ba,1,2,L107,Đ.H.Nga,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,23,,2,2,ENEL24IU42,35,9,,Tư,9,2,L106,Đ.H.Nga,08/09/2025--21/12/2025
,EN012IU,EN012IU, Speaking AE2,24,,2,2,ENEL24IU42,35,1,,Tư,7,2,L107,Đ.H.Nga,08/09/2025--21/12/2025
,PE008IU,PE008IU, Critical Thinking,1,,3,3,ENEL24IU41,110,1,,Tư,1,3,A1.309,P.Ngọc,15/09/2025--28/12/2025
,PE008IU,PE008IU, Critical Thinking,2,,3,3,ENEL24IU41,90,Hết,,Sáu,1,3,A2.407,P.T.Hoa,15/09/2025--28/12/2025
,PE008IU,PE008IU, Critical Thinking,3,,3,3,ENEL253WE41,72,Hết,,Bảy,7,3,A1.309,T.T.Tú,15/09/2025--28/12/2025
,PE008IU,PE008IU, Critical Thinking,4,,3,3,ENEL253WE41,45,23,,Sáu,7,3,A1.208,H.V.T.Dũng,15/09/2025--28/12/2025
,PE008IU,PE008IU, Critical Thinking,5,,3,3,ENEL24IU41,90,Hết,,Sáu,1,3,A1.109,P.T.Tùng,15/09/2025--28/12/2025
,PE008IU,PE008IU, Critical Thinking,6,,3,3,ENEL24IU41,90,Hết,,Sáu,7,3,A2.407,N.T.Thủy,15/09/2025--28/12/2025
,PE008IU,PE008IU, Critical Thinking,7,,3,3,ENEL253WE41,21,Hết,,Bảy,1,3,A2.104,N.T.Hiếu,15/09/2025--28/12/2025
,PE008IU,PE008IU, Critical Thinking,8,,3,3,ENEL24IU41,90,17,,Sáu,7,3,A2.205,H.T.Phong,15/09/2025--28/12/2025
,PH012IU,PH012IU, Physics 4,1,,2,2,PHSE24IU21,90,3,,Sáu,3,2,A1.401,Đ.X.Hội,08/09/2025--21/12/2025
,PH012IU,PH012IU, Physics 4,2,,2,2,PHSE24IU21,90,9,,Sáu,1,2,A1.401,Đ.X.Hội,08/09/2025--21/12/2025
,PH013IU,PH013IU, Physics 1,1,,2,2,PHSE25IU11,0,Hết,,Tư,3,2,A1.208,P.B.Ngọc,15/09/2025--28/12/2025
,PH013IU,PH013IU, Physics 1,2,,2,2,PHSE24IU41,90,2,,Ba,1,2,A2.507,P.H.Vũ,08/09/2025--21/12/2025
,PH013IU,PH013IU, Physics 1,3,,2,2,PHSE24IU41,90,Hết,,Hai,1,2,A2.507,Đ.X.Hội,08/09/2025--21/12/2025
,PH013IU,PH013IU, Physics 1,4,,2,2,PHSE25IU11,0,Hết,,Tư,1,2,A1.208,P.B.Ngọc,15/09/2025--28/12/2025
,PH013IU,PH013IU, Physics 1,5,,2,2,PHSE24IU41,90,Hết,,Hai,1,2,A1.401,B.Vu,08/09/2025--21/12/2025
,PH013IU,PH013IU, Physics 1,6,,2,2,PHSE25IU11,0,Hết,,Năm,1,2,A1.208,Đ.X.Hội,15/09/2025--28/12/2025
,PH013IU,PH013IU, Physics 1,7,,2,2,PHSE25IU11,0,Hết,,Sáu,1,2,A2.601,P.T.Kiên,15/09/2025--28/12/2025
,PH013IU,PH013IU, Physics 1,8,,2,2,PHSE25IU11,0,Hết,,Tư,1,2,A2.402,Đ.X.Hội,15/09/2025--28/12/2025
,PH013IU,PH013IU, Physics 1,9,,2,2,PHSE25IU11,0,Hết,,Ba,1,2,A2.408,P.B.Ngọc,15/09/2025--28/12/2025
,PH013IU,PH013IU, Physics 1,10,,2,2,PHSE25IU11,0,Hết,,Năm,7,2,A1.206,Đ.X.Hội,15/09/2025--28/12/2025
,PH013IU,PH013IU, Physics 1,11,,2,2,PHSE25IU11,0,Hết,,Ba,7,2,L108,N.Quang,15/09/2025--28/12/2025
,PH014IU,PH014IU, Physics 2,2,,2,2,PHSE24IU41,90,3,,Ba,3,2,A2.507,P.H.Vũ,08/09/2025--21/12/2025
,PH014IU,PH014IU, Physics 2,3,,2,2,PHSE24IU41,90,25,,Hai,3,2,A2.507,Đ.X.Hội,08/09/2025--21/12/2025
,PH014IU,PH014IU, Physics 2,5,,2,2,PHSE24IU41,90,20,,Hai,3,2,A1.401,B.Vu,08/09/2025--21/12/2025
,PH014IU,PH014IU, Physics 2,6,,2,2,PHSE25IU11,45,24,,Năm,3,2,A1.208,Đ.X.Hội,15/09/2025--28/12/2025
,PH015IU,PH015IU, Physics 3,1,,3,3,PHSE24IU41,90,46,,Hai,7,3,A2.507,P.B.Ngọc,08/09/2025--21/12/2025
,PH015IU,PH015IU, Physics 3,2,,3,3,PHSE24IU41,90,Hết,,Sáu,7,3,A1.202,P.H.Vũ,08/09/2025--21/12/2025
,PH015IU,PH015IU, Physics 3,3,,3,3,PHSE24IU41,90,28,,Sáu,7,3,A2.301,P.T.Kiên,08/09/2025--21/12/2025
,PH016IU,PH016IU, Physics 3 Laboratory,4,,1,1,PHSE24IU21,20,3,,Năm,1,4,LA1.403,T.T.Thủy,06/10/2025--30/11/2025
,PH016IU,PH016IU, Physics 3 Laboratory,5,,1,1,PHSE24IU21,20,10,,Tư,7,4,LA1.403,L.T.Quế,06/10/2025--30/11/2025
,PH016IU,PH016IU, Physics 3 Laboratory,6,,1,1,PHSE24IU21,20,Hết,,Ba,7,4,LA1.403,T.T.Thủy,06/10/2025--30/11/2025
,PH016IU,PH016IU, Physics 3 Laboratory,7,,1,1,PHSE24IU21,20,1,,Hai,1,4,LA1.403,L.T.Quế,06/10/2025--30/11/2025
,PH024IU,PH024IU, General Physics 3 Laboratory,2,,1,1,PHSE23IU01,15,10,,Năm,1,4,LA2.203,L.T.Quế,06/10/2025--30/11/2025
,PH026IU,PH026IU, Differential Equations,1,,2,2,PHSE23IU01,24,5,,Bảy,4,2,LA1.504,N.Quang,08/09/2025--21/12/2025
,PH030IU,PH030IU, Probability and Statistics for Engineers,1,,3,3,PHSE23IU01,24,9,,Bảy,1,3,LA1.504,N.Quang,08/09/2025--21/12/2025
,PH031IU,PH031IU, Optics and Photonics,1,,2,2,PHSE23IU01,20,12,,Ba,4,2,A2.411,T.X.Thăng,08/09/2025--21/12/2025
,PH037IU,PH037IU, Space Environment,1,,3,3,PHSE23IU01,24,11,,Ba,7,3,A2.409,P.B.Ngọc,08/09/2025--21/12/2025
,PH040IU,PH040IU, Satellite Technology,1,,3,3,PHSE23IU01,30,6,,Năm,7,3,ONLINE3,Đ.X.Phong,08/09/2025--21/12/2025
,PH042IU,PH042IU, Research Project,1,,4,4,PHSE23IU01,30,19,,,0,0,,,08/09/2025--21/12/2025
,PH046IU,PH046IU, Geographic Information Systems (GIS) and Spatial Analysis,1,,3,3,PHSE23IU01,12,3,,Tư,1,4,LA1.504,P.H.Vũ,08/09/2025--21/12/2025
,PH049IU,PH049IU, Advanced Remote Sensing,1,,3,3,PHSE23IU01,30,20,,Tư,7,3,A2.311,P.H.Vũ,08/09/2025--21/12/2025
,PH050IU,PH050IU, Thesis,1,,10,10,PHSE23IU01,30,24,,,0,0,,,08/09/2025--21/12/2025
,PH063IU,PH063IU, Introduction to Space communications,1,,2,2,PHSE23IU01,30,8,,Sáu,1,2,LA2.514,N.N.T.Minh,08/09/2025--21/12/2025
,PH066IU,PH066IU, Project 1,1,,1,0,PHSE23IU01,30,28,,,0,0,,,08/09/2025--21/12/2025
,PH068IU,PH068IU, Business Analytics with Big Data,1,,3,3,PHSE23IU01,12,3,,Bảy,7,3,LA1.504,N.Quang,01/09/2025--14/12/2025
,BA003IU,BA003IU, Principles of Marketing,1,,3,3,BABA24IU41,60,Hết,,Ba,4,3,A1.402,Đ.T.U.Thảo,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,2,,3,3,BABA24AD41,52,Hết,,Hai,1,3,A2.302,N.Q.Tiên,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,3,,3,3,BABA24IU41,50,Hết,,Tư,4,3,A2.512,B.T.Thanh,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,4,,3,3,BABA24IU41,50,Hết,,Ba,1,3,A2.313,N.H.Khôi,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,5,,3,3,BABA24IU41,50,1,,Ba,1,3,C.420,B.T.Thanh,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,6,,3,3,BABA24IU41,54,13,,Sáu,7,3,L109,H.Đ.Sinh,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,7,,3,3,BABA24IU41,50,Hết,,Ba,4,3,A2.509,B.T.T.Hiền,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,8,,3,3,BABA24IU41,54,5,,Bảy,1,3,L102,B.T.T.Hiền,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,9,,3,3,BABA25IU01,0,Hết,,Sáu,4,3,L201,H.Đ.Sinh,15/09/2025--28/12/2025
,BA003IU,BA003IU, Principles of Marketing,10,,3,3,FAAC24IU01,50,1,,Ba,4,3,A2.311,N.H.Khôi,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,11,,3,3,FAAC24IU01,50,9,,Ba,1,3,A2.311,N.T.Hưng,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,12,,3,3,FAAC24IU01,54,Hết,,Ba,4,3,C.420,B.T.Thanh,08/09/2025--21/12/2025
,BA003IU,BA003IU, Principles of Marketing,13,,3,3,FAAC24IU01,50,11,,Ba,4,3,A2.408,L.T.P.M.Hoàng,08/09/2025--21/12/2025
,BA006IU,BA006IU, Business Communication,1,,3,3,BABA242WE41,65,Hết,,Sáu,4,3,A2.301,P.T.Huyền,08/09/2025--21/12/2025
,BA006IU,BA006IU, Business Communication,2,,3,3,BABA242WE41,65,Hết,,Tư,4,3,A1.202,P.T.Huyền,08/09/2025--21/12/2025
,BA006IU,BA006IU, Business Communication,3,,3,3,BABA242WE41,65,Hết,,Năm,7,3,A2.501,P.T.Huyền,08/09/2025--21/12/2025
,BA006IU,BA006IU, Business Communication,4,,3,3,BABA24AD11,65,24,,Sáu,7,3,A2.507,P.P.Linh,08/09/2025--21/12/2025
,BA006IU,BA006IU, Business Communication,5,,3,3,BABA242WE41,65,1,,Tư,7,3,A2.302,P.P.Linh,08/09/2025--21/12/2025
,BA006IU,BA006IU, Business Communication,6,,3,3,BABA242WE41,65,Hết,,Hai,7,3,A2.407,P.P.Linh,08/09/2025--21/12/2025
,BA018IU,BA018IU, Quality Management,1,,3,3,BABA23IU11,90,31,,Năm,4,3,A2.507,N.T.Hưng,08/09/2025--21/12/2025
,BA020IU,BA020IU, Business Ethics,1,,3,3,BABA242WE01,60,Hết,,Năm,1,3,A2.501,C.M.Mẫn,08/09/2025--21/12/2025
,BA020IU,BA020IU, Business Ethics,2,,3,3,BABA242WE01,61,3,,Tư,7,3,A2.507,C.M.Mẫn,08/09/2025--21/12/2025
,BA020IU,BA020IU, Business Ethics,3,,3,3,BABA242WE01,60,1,,Ba,7,3,L207,C.M.Mẫn,08/09/2025--21/12/2025
,BA020IU,BA020IU, Business Ethics,4,,3,3,BABA242WE01,60,1,,Hai,7,3,A2.601,C.M.Mẫn,08/09/2025--21/12/2025
,BA020IU,BA020IU, Business Ethics,5,,3,3,BABA242WE01,50,10,,Năm,1,3,L110,N.T.Mẫn,08/09/2025--21/12/2025
,BA020IU,BA020IU, Business Ethics,6,,3,3,BABA242WE01,50,2,,Hai,7,3,A1.204,N.T.Mẫn,08/09/2025--21/12/2025
,BA022IU,BA022IU, Logistic and Supply Chain Management,1,,3,3,BABA24UH21,50,30,,Năm,1,3,A2.510,N.T.H.Ân,08/09/2025--21/12/2025
,BA022IU,BA022IU, Logistic and Supply Chain Management,2,,3,3,BABA24UH21,50,2,,Năm,1,3,C.501,N.T.B.Hà,08/09/2025--21/12/2025
,BA022IU,BA022IU, Logistic and Supply Chain Management,3,,3,3,BABA24UH21,50,Hết,,Tư,1,3,C.401,N.T.B.Hà,08/09/2025--21/12/2025
,BA023IU,BA023IU, Project Management,1,,3,3,BABA24UH01,60,19,,Hai,7,3,L108,N.N.Tỷ,08/09/2025--21/12/2025
,BA023IU,BA023IU, Project Management,2,,3,3,BABA24UH01,61,1,,Hai,7,3,A2.501,N.N.Tung,08/09/2025--21/12/2025
,BA023IU,BA023IU, Project Management,3,,3,3,BABA24UH01,60,18,,Hai,7,3,L202,N.T.B.Hà,08/09/2025--21/12/2025
,BA027IU,BA027IU, E - Commerce,1,,3,3,BABA24UH01,60,1,,Tư,7,3,ONLINE,N.H.Anh,08/09/2025--21/12/2025
,BA027IU,BA027IU, E - Commerce,2,,3,3,BABA24UH01,60,20,,Năm,7,3,ONLINE,N.H.Anh,08/09/2025--21/12/2025
,BA027IU,BA027IU, E - Commerce,3,,3,3,BABA24UH01,60,9,,Sáu,7,3,ONLINE,N.H.Anh,08/09/2025--21/12/2025
,BA027IU,BA027IU, E - Commerce,4,,3,3,BABA24UH01,60,4,,Ba,1,3,ONLINE,N.H.Anh,08/09/2025--21/12/2025
,BA032IU,BA032IU, Sales Management,1,,3,3,BABA24UH31,61,2,,Tư,4,3,A2.508,L.V.Phúc,08/09/2025--21/12/2025
,BA032IU,BA032IU, Sales Management,2,,3,3,BABA24UH31,50,26,,Năm,4,3,A2.402,L.T.P.M.Hoàng,08/09/2025--21/12/2025
,BA080IU,BA080IU, Statistics for Business,1,,3,3,BABA24AD41,75,3,,Năm,4,3,L108,N.H.Phú,08/09/2025--21/12/2025
,BA080IU,BA080IU, Statistics for Business,2,,3,3,BABA24IU41,75,4,,Sáu,1,3,L201,N.H.Phú,08/09/2025--21/12/2025
,BA080IU,BA080IU, Statistics for Business,3,,3,3,BABA24IU41,75,21,,Sáu,4,3,A1.402,N.N.Tung,08/09/2025--21/12/2025
,BA080IU,BA080IU, Statistics for Business,4,,3,3,BABA24IU41,70,11,,Tư,7,3,L202,Đ.H.Phương,08/09/2025--21/12/2025
,BA080IU,BA080IU, Statistics for Business,5,,3,3,FAAC23IU01,50,Hết,,Năm,4,3,A2.511,N.B.Trung,08/09/2025--21/12/2025
,BA080IU,BA080IU, Statistics for Business,6,,3,3,FAAC23IU01,50,Hết,,Tư,4,3,A2.511,N.B.Trung,08/09/2025--21/12/2025
,BA080IU,BA080IU, Statistics for Business,7,,3,3,FAAC23IU01,50,Hết,,Tư,4,3,A2.309,Đ.H.Phương,08/09/2025--21/12/2025
,BA080IU,BA080IU, Statistics for Business,8,,3,3,FAAC23IU01,50,1,,Năm,4,3,A2.510,N.N.Tung,08/09/2025--21/12/2025
,BA081IU,BA081IU, Business Law,1,,3,3,BABA24AD41,90,31,,Tư,4,3,A2.205,N.K.H.Nguyên,08/09/2025--21/12/2025
,BA081IU,BA081IU, Business Law,2,,3,3,BABA242WE11,90,2,,Năm,4,3,A1.109,M.T.Kiên,08/09/2025--21/12/2025
,BA081IU,BA081IU, Business Law,3,,3,3,BABA242WE11,90,Hết,,Ba,7,3,A1.109,M.T.Kiên,08/09/2025--21/12/2025
,BA081IU,BA081IU, Business Law,4,,3,3,BABA242WE11,90,1,,Năm,7,3,A1.208,M.T.Kiên,08/09/2025--21/12/2025
,BA081IU,BA081IU, Business Law,5,,3,3,FAAC24IU01,50,8,,Ba,7,3,A2.310,T.T.Long,08/09/2025--21/12/2025
,BA081IU,BA081IU, Business Law,6,,3,3,FAAC24IU01,50,7,,Hai,1,3,A1.203,T.T.Long,08/09/2025--21/12/2025
,BA082IU,BA082IU, Brand Management,1,,3,3,BABA23IU11,65,Hết,,Hai,1,3,A2.608,N.T.Mẫn,08/09/2025--21/12/2025
,BA082IU,BA082IU, Brand Management,2,,3,3,BABA23IU11,60,Hết,,Sáu,4,3,A2.402,B.T.Thanh,08/09/2025--21/12/2025
,BA083IU,BA083IU, Consumer Behavior,1,,3,3,BABA24AD11,60,Hết,,Sáu,1,3,L207,H.Đ.Sinh,08/09/2025--21/12/2025
,BA084IU,BA084IU, Import Export Management,1,,3,3,BABA24IU21,60,1,,Bảy,1,3,A2.508,N.T.H.Ân,08/09/2025--21/12/2025
,BA094IU,BA094IU, Advertising and PR,1,,3,3,BABA24AD11,60,1,,Năm,1,3,A2.508,L.T.P.M.Hoàng,08/09/2025--21/12/2025
,BA098IU,BA098IU, Leadership,1,,3,3,BABA24IU21,63,7,,Năm,4,3,A1.202,M.N.Khương,08/09/2025--21/12/2025
,BA115IU,BA115IU, Introduction to Business Administration,1,,3,3,BABA24IU02,60,40,,Hai,1,3,C.401,L.T.M.Phương,08/09/2025--21/12/2025
,BA115IU,BA115IU, Introduction to Business Administration,2,,3,3,BABA24IU02,60,31,,Tư,4,3,C.401,L.T.M.Phương,08/09/2025--21/12/2025
,BA115IU,BA115IU, Introduction to Business Administration,3,,3,3,BABA24IU02,60,Hết,,Năm,4,3,A1.402,Đ.H.Q.Ngọc,08/09/2025--21/12/2025
,BA115IU,BA115IU, Introduction to Business Administration,4,,3,3,BABA24IU02,60,10,,Năm,7,3,C.401,N.M.Quân,08/09/2025--21/12/2025
,BA115IU,BA115IU, Introduction to Business Administration,5,,3,3,BABA25IU01,50,8,,Ba,1,3,L108,P.V.Hạnh,08/09/2025--21/12/2025
,BA115IU,BA115IU, Introduction to Business Administration,6,,3,3,BABA24IU02,60,Hết,,Ba,4,3,L108,P.V.Hạnh,08/09/2025--21/12/2025
,BA115IU,BA115IU, Introduction to Business Administration,8,,3,3,FAAC23IU41,45,19,,Sáu,1,3,L110,P.T.Anh,08/09/2025--21/12/2025
,BA118IU,BA118IU, Introduction to Psychology,1,,3,3,BABA244WE01,50,19,,Ba,1,3,A2.510,N.H.Trung,08/09/2025--21/12/2025
,BA118IU,BA118IU, Introduction to Psychology,2,,3,3,BABA244WE01,50,23,,Tư,7,3,A1.203,N.H.Trung,08/09/2025--21/12/2025
,BA118IU,BA118IU, Introduction to Psychology,4,,3,3,BABA244WE01,50,2,,Năm,1,3,A2.509,N.T.Thịnh,08/09/2025--21/12/2025
,BA118IU,BA118IU, Introduction to Psychology,5,,3,3,FAAC23IU41,45,1,,Hai,1,3,A2.509,N.H.Trung,08/09/2025--21/12/2025
,BA118IU,BA118IU, Introduction to Psychology,6,,3,3,FAAC23IU41,45,2,,Hai,4,3,A2.410,N.H.Trung,08/09/2025--21/12/2025
,BA120IU,BA120IU, Business Computing Skills,1,,3,3,BABA24AD41,60,16,,Ba,7,3,LA1.301,Đ.N.Hùng,08/09/2025--21/12/2025
,BA120IU,BA120IU, Business Computing Skills,2,,3,3,BABA24IU01,60,Hết,,Hai,7,3,LA1.301,V.Q.Bảo,08/09/2025--21/12/2025
,BA120IU,BA120IU, Business Computing Skills,3,,3,3,BABA24IU01,60,33,,Tư,7,3,LA1.301,N.L.Luật,08/09/2025--21/12/2025
,BA120IU,BA120IU, Business Computing Skills,4,,3,3,BABA24IU01,60,Hết,,Hai,1,3,LA1.301,H.T.Quốc,08/09/2025--21/12/2025
,BA120IU,BA120IU, Business Computing Skills,5,,3,3,BABA25AD41,55,43,,Tư,1,3,LA1.301,H.T.Quốc,15/09/2025--28/12/2025
,BA120IU,BA120IU, Business Computing Skills,6,,3,3,FAAC24IU11,60,24,,Năm,4,3,LA1.301,N.N.T.Minh,08/09/2025--21/12/2025
,BA120IU,BA120IU, Business Computing Skills,7,,3,3,FAAC24IU11,60,5,,Hai,4,3,LA1.301,N.V.Bình,08/09/2025--21/12/2025
,BA120IU,BA120IU, Business Computing Skills,8,,3,3,FAAC24IU11,60,24,,Ba,4,3,LA1.301,N.T.Hiếu,08/09/2025--21/12/2025
,BA120IU,BA120IU, Business Computing Skills,9,,3,3,FAAC24IU11,60,3,,Năm,1,3,LA1.301,T.T.Long,08/09/2025--21/12/2025
,BA123IU,BA123IU, Principles of Management,1,,3,3,BABA24IU21,60,Hết,,Sáu,4,3,A2.508,Đ.T.U.Thảo,08/09/2025--21/12/2025
,BA123IU,BA123IU, Principles of Management,2,,3,3,BABA24IU21,64,6,,Ba,7,3,A2.508,N.Đ.T.An,08/09/2025--21/12/2025
,BA123IU,BA123IU, Principles of Management,3,,3,3,BABA24AD11,50,23,,Bảy,7,3,A1.204,N.Đ.T.An,08/09/2025--21/12/2025
,BA123IU,BA123IU, Principles of Management,4,,3,3,BABA24IU21,60,Hết,,Năm,1,3,L108,N.Đ.T.An,08/09/2025--21/12/2025
,BA123IU,BA123IU, Principles of Management,5,,3,3,BABA25IU01,0,Hết,,Hai,1,3,A2.402,A.Thớ,15/09/2025--28/12/2025
,BA123IU,BA123IU, Principles of Management,6,,3,3,BABA25IU01,0,Hết,,Tư,1,3,A2.601,P.T.N.Minh,15/09/2025--28/12/2025
,BA123IU,BA123IU, Principles of Management,7,,3,3,BABA25IU01,0,Hết,,Bảy,1,3,A2.601,A.Thớ,15/09/2025--28/12/2025
,BA123IU,BA123IU, Principles of Management,8,,3,3,BABA25IU01,0,Hết,,Hai,1,3,A2.501,P.V.Hạnh,15/09/2025--28/12/2025
,BA123IU,BA123IU, Principles of Management,9,,3,3,FAAC24IU01,50,5,,Bảy,4,3,A2.409,P.V.Hạnh,08/09/2025--21/12/2025
,BA123IU,BA123IU, Principles of Management,10,,3,3,BABA25IU01,0,Hết,,Hai,4,3,A2.411,P.T.N.Minh,15/09/2025--28/12/2025
,BA123IU,BA123IU, Principles of Management,11,,3,3,BABA25IU01,0,Hết,,Hai,4,3,A2.408,P.V.Hạnh,15/09/2025--28/12/2025
,BA130IU,BA130IU, Organizational Behavior,1,,3,3,BABA244WE11,60,2,,Hai,4,3,A1.402,M.N.Khương,08/09/2025--21/12/2025
,BA130IU,BA130IU, Organizational Behavior,2,,3,3,FAAC25IU01,28,Hết,,Hai,4,3,A1.203,N.D.Chinh,15/09/2025--28/12/2025
,BA130IU,BA130IU, Organizational Behavior,3,,3,3,BABA244WE11,60,8,,Bảy,7,3,L108,H.T.Hiếu,08/09/2025--21/12/2025
,BA130IU,BA130IU, Organizational Behavior,4,,3,3,BABA244WE11,60,Hết,,Năm,4,3,A2.508,H.T.Hiếu,08/09/2025--21/12/2025
,BA130IU,BA130IU, Organizational Behavior,5,,3,3,FAAC23IU41,52,Hết,,Ba,4,3,A2.302,H.T.Hiếu,08/09/2025--21/12/2025
,BA130IU,BA130IU, Organizational Behavior,6,,3,3,FAAC23IU41,50,Hết,,Năm,1,3,A2.313,H.T.Hiếu,08/09/2025--21/12/2025
,BA140IU,BA140IU, Business Game,1,,3,3,BABA23IU21,40,15,,Sáu,4,3,LA1.301,B.Q.Thông,08/09/2025--21/12/2025
,BA140IU,BA140IU, Business Game,2,,3,3,BABA23IU21,40,5,,Năm,7,3,LA1.301,B.Q.Thông,08/09/2025--21/12/2025
,BA140IU,BA140IU, Business Game,3,,3,3,BABA23IU21,40,20,,Sáu,7,3,LA1.301,B.Q.Thông,08/09/2025--21/12/2025
,BA142IU,BA142IU, Marketing Strategy,1,,3,3,BABA22IU43,60,Hết,,Tư,7,3,A2.508,L.T.P.M.Hoàng,08/09/2025--21/12/2025
,BA145IU,BA145IU, International Marketing,1,,3,3,BABA23IU11,65,Hết,,Bảy,1,3,A2.608,N.Q.Tiên,08/09/2025--21/12/2025
,BA145IU,BA145IU, International Marketing,2,,3,3,BABA23IU11,66,2,,Năm,1,3,A1.402,L.N.N.Quế,08/09/2025--21/12/2025
,BA151IU,BA151IU, International Business Management,1,,3,3,BABA24UH31,61,5,,Sáu,4,3,L108,P.T.Anh,08/09/2025--21/12/2025
,BA151IU,BA151IU, International Business Management,2,,3,3,BABA24UH31,50,Hết,,Hai,7,3,A2.402,P.T.Anh,08/09/2025--21/12/2025
,BA153IU,BA153IU, Internship,1,,3,3,BABA24IU21,200,87,,,0,0,,H.M.Trí,08/09/2025--21/12/2025
,BA153IU,BA153IU, Internship,2,,3,3,FAAC22IU21,45,22,,,0,0,,T.Q.Đạt,08/09/2025--21/12/2025
,BA154IU,BA154IU, Entrepreneurship and Small Business Management,1,,3,3,BABA23IU11,45,2,,Hai,4,3,L110,N.V.H.Châu,08/09/2025--21/12/2025
,BA154IU,BA154IU, Entrepreneurship and Small Business Management,2,,3,3,BABA23IU11,45,2,,Hai,4,3,A1.206,T.S.Đào,08/09/2025--21/12/2025
,BA154IU,BA154IU, Entrepreneurship and Small Business Management,3,,3,3,BABA23IU11,45,2,,Tư,4,3,A1.204,T.S.Đào,08/09/2025--21/12/2025
,BA154IU,BA154IU, Entrepreneurship and Small Business Management,4,,3,3,BABA23IU11,45,Hết,,Năm,1,3,L109,N.H.Phú,08/09/2025--21/12/2025
,BA154IU,BA154IU, Entrepreneurship and Small Business Management,5,,3,3,BABA23IU11,45,13,,Sáu,4,3,A1.203,Đ.N.Long,08/09/2025--21/12/2025
,BA156IU,BA156IU, Human Resources Management,1,,3,3,BABA23IU21,60,1,,Tư,1,3,A2.508,N.T.Minh,08/09/2025--21/12/2025
,BA156IU,BA156IU, Human Resources Management,2,,3,3,BABA23IU21,60,1,,Sáu,1,3,A2.508,N.T.Minh,08/09/2025--21/12/2025
,BA156IU,BA156IU, Human Resources Management,3,,3,3,BABA23IU21,54,6,,Bảy,1,3,L101,N.T.Minh,08/09/2025--21/12/2025
,BA161IU,BA161IU, Business Research Methods,1,,3,3,BABA24UH21,45,Hết,,Sáu,1,3,A2.510,Đ.T.L.Trinh,08/09/2025--21/12/2025
,BA161IU,BA161IU, Business Research Methods,2,,3,3,BABA24UH21,45,Hết,,Sáu,7,3,A2.409,C.M.Mẫn,08/09/2025--21/12/2025
,BA161IU,BA161IU, Business Research Methods,3,,3,3,BABA24UH21,45,3,,Năm,7,3,A2.508,L.Đ.M.Trí,08/09/2025--21/12/2025
,BA161IU,BA161IU, Business Research Methods,4,,3,3,BABA24UH21,46,1,,Sáu,1,3,A2.509,L.Đ.M.Trí,08/09/2025--21/12/2025
,BA161IU,BA161IU, Business Research Methods,5,,3,3,BABA24UH21,45,Hết,,Năm,7,3,A2.507,H.M.Trí,08/09/2025--21/12/2025
,BA161IU,BA161IU, Business Research Methods,6,,3,3,FAAC23IU01,45,41,,Năm,7,3,A1.203,N.V.Phương,08/09/2025--21/12/2025
,BA161IU,BA161IU, Business Research Methods,7,,3,3,FAAC23IU01,45,Hết,,Hai,1,3,A1.206,N.N.D.Phương,08/09/2025--21/12/2025
,BA161IU,BA161IU, Business Research Methods,8,,3,3,FAAC23IU01,45,Hết,,Tư,1,3,A2.510,N.N.D.Phương,08/09/2025--21/12/2025
,BA161IU,BA161IU, Business Research Methods,9,,3,3,BABA24UH21,45,14,,Năm,4,3,A2.410,Đ.T.L.Trinh,08/09/2025--21/12/2025
,BA162IU,BA162IU, Strategy Formulation and Implementation,1,,3,3,BABA242WE01,75,Hết,,Năm,4,3,A2.301,N.H.Trung,08/09/2025--21/12/2025
,BA162IU,BA162IU, Strategy Formulation and Implementation,2,,3,3,BABA242WE01,75,8,,Bảy,7,3,A2.501,N.H.Trung,08/09/2025--21/12/2025
,BA162IU,BA162IU, Strategy Formulation and Implementation,3,,3,3,BABA242WE01,65,Hết,,Năm,4,3,C.401,N.N.A.Thư,08/09/2025--21/12/2025
,BA164IU,BA164IU, Production and Operations Management,1,,3,3,BABA242WE11,65,Hết,,Ba,1,3,A2.601,N.N.Tỷ,08/09/2025--21/12/2025
,BA164IU,BA164IU, Production and Operations Management,2,,3,3,BABA242WE11,66,Hết,,Năm,1,3,A2.302,N.N.Tung,08/09/2025--21/12/2025
,BA164IU,BA164IU, Production and Operations Management,3,,3,3,BABA242WE11,65,Hết,,Hai,1,3,A2.508,N.N.Tỷ,08/09/2025--21/12/2025
,BA164IU,BA164IU, Production and Operations Management,4,,3,3,BABA242WE11,65,3,,Hai,1,3,A2.601,N.N.Tung,08/09/2025--21/12/2025
,BA168IU,BA168IU, Quantitative Methods for Business,1,,3,3,BABA244WE41,50,5,,Hai,4,3,L108,Đ.T.U.Thảo,08/09/2025--21/12/2025
,BA168IU,BA168IU, Quantitative Methods for Business,3,,3,3,BABA244WE41,50,22,,Bảy,1,3,A2.409,Đ.T.U.Thảo,08/09/2025--21/12/2025
,BA168IU,BA168IU, Quantitative Methods for Business,4,,3,3,BABA244WE41,50,1,,Tư,1,3,A2.310,H.T.N.Hiền,08/09/2025--21/12/2025
,BA168IU,BA168IU, Quantitative Methods for Business,5,,3,3,BABA244WE41,50,17,,Năm,4,3,A2.309,H.T.N.Hiền,08/09/2025--21/12/2025
,BA168IU,BA168IU, Quantitative Methods for Business,6,,3,3,BABA244WE41,60,1,,Hai,4,3,A2.402,H.T.N.Hiền,08/09/2025--21/12/2025
,BA169IU,BA169IU, Management Information Systems,1,,3,3,BABA24AD41,60,5,,Sáu,4,3,A1.202,L.V.Phúc,08/09/2025--21/12/2025
,BA169IU,BA169IU, Management Information Systems,2,,3,3,BABA242WE41,50,21,,Ba,1,3,C.401,L.V.Phúc,08/09/2025--21/12/2025
,BA169IU,BA169IU, Management Information Systems,3,,3,3,BABA242WE41,50,29,,Ba,7,3,A1.205,N.N.T.Minh,08/09/2025--21/12/2025
,BA170IU,BA170IU, Thesis,1,,12,12,BABA24IU21,200,131,,,0,0,,H.M.Trí,08/09/2025--21/12/2025
,BA170IU,BA170IU, Thesis,2,,12,12,FAAC22IU21,180,47,,,0,0,,T.Q.Đạt,08/09/2025--21/12/2025
,BA171IU,BA171IU, Risk Management,1,,3,3,BABA24UH31,60,2,,Năm,4,3,A2.601,B.T.T.Hiền,08/09/2025--21/12/2025
,BA176IU,BA176IU, Franchising,1,,3,3,BABA22IU43,50,1,,Ba,4,3,A2.312,N.T.Mẫn,08/09/2025--21/12/2025
,BA197IU,BA197IU, Introduction to Sociology,1,,3,3,BABA244WE11,65,1,,Sáu,1,3,A2.501,T.N.N.Hân,08/09/2025--21/12/2025
,BA197IU,BA197IU, Introduction to Sociology,2,,3,3,BABA244WE11,65,Hết,,Tư,7,3,A2.501,T.N.N.Hân,08/09/2025--21/12/2025
,BA197IU,BA197IU, Introduction to Sociology,3,,3,3,BABA244WE11,65,Hết,,Sáu,1,3,A1.202,N.D.Chinh,08/09/2025--21/12/2025
,BA197IU,BA197IU, Introduction to Sociology,4,,3,3,BABA244WE11,65,1,,Hai,4,3,L207,P.T.Nhật,08/09/2025--21/12/2025
,BA197IU,BA197IU, Introduction to Sociology,5,,3,3,BABA244WE11,65,1,,Hai,1,3,L207,P.T.Nhật,08/09/2025--21/12/2025
,BA197IU,BA197IU, Introduction to Sociology,6,,3,3,BABA244WE11,50,28,,Bảy,1,3,A2.412,T.S.Đào,08/09/2025--21/12/2025
,BA197IU,BA197IU, Introduction to Sociology,7,,3,3,FAAC23IU41,51,1,,Sáu,4,3,A2.501,T.N.N.Hân,08/09/2025--21/12/2025
,BA197IU,BA197IU, Introduction to Sociology,8,,3,3,FAAC23IU41,50,1,,Sáu,1,3,A2.309,T.M.Thuận,08/09/2025--21/12/2025
,BA232IU,BA232IU, Hospitality Sales and Marketing,1,,3,3,BABA22IU43,2,1,,Tư,7,3,A2.508,L.T.P.M.Hoàng,08/09/2025--21/12/2025
,BA256IU,BA256IU, Workshop 1,1,,3,3,BABA23IU41,120,63,,Bảy,1,4,A2.407,Đ.N.Long,08/09/2025--23/11/2025
,BA256IU,BA256IU, Workshop 1,2,,3,3,BABA23IU41,120,Hết,,Bảy,1,4,A1.109,Đ.T.L.Trinh,08/09/2025--23/11/2025
,BA256IU,BA256IU, Workshop 1,3,,3,3,BABA23IU41,120,60,,Bảy,7,4,A1.109,Đ.T.L.Trinh,08/09/2025--23/11/2025
,BA256IU,BA256IU, Workshop 1,4,,3,3,FAAC22IU11,90,Hết,,Bảy,1,4,A2.301,T.N.Minh,08/09/2025--23/11/2025
,BA256IU,BA256IU, Workshop 1,5,,3,3,FAAC22IU11,50,6,,Bảy,7,4,A2.401,T.N.Minh,08/09/2025--23/11/2025
,BA273IU,BA273IU, Workshop 2 on International Business,1,,2,2,BABA23IU41,90,22,,Bảy,7,4,A1.401,T.S.Đào,08/09/2025--02/11/2025
,BA274IU,BA274IU, Workshop 2 Business Management,1,,2,2,BABA23IU41,60,17,,Sáu,7,4,A2.402,P.T.N.Minh,03/11/2025--21/12/2025
,BA275IU,BA275IU, Workshop 2 on Marketing,1,,2,2,BABA23IU41,90,26,,Bảy,7,4,A1.401,N.Q.Tiên,03/11/2025--21/12/2025
,PE007IU,PE007IU, World Economic Geography,1,,3,3,BABA24AU01,120,Hết,,Ba,1,3,A1.109,N.T.P.Châu,08/09/2025--21/12/2025
,PE007IU,PE007IU, World Economic Geography,2,,3,3,BABA24AU01,120,Hết,,Ba,4,3,A2.407,N.T.P.Châu,08/09/2025--21/12/2025
,PE010IU,PE010IU, Vietnamese History and Culture,1,,3,3,BABA24AU01,120,24,,Ba,7,3,A1.309,V.V.Sen,08/09/2025--21/12/2025
,PE010IU,PE010IU, Vietnamese History and Culture,2,,3,3,BABA24AU01,120,16,,Năm,7,3,A1.309,V.V.Sen,08/09/2025--21/12/2025
,BT009IU,BT009IU, Cell Biology,1,,3,3,BTBT21IU11,54,2,,Năm,1,3,L102,T.M.Nhựt,03/11/2025--21/12/2025
,BT009IU,BT009IU, Cell Biology,1,,3,3,BTBT21IU11,54,2,,,,,,,
,BT009IU,BT009IU, Cell Biology,1,,3,3,BTBT21IU11,54,2,,Năm,1,3,L102,L.M.Thông,08/09/2025--02/11/2025
,BT009IU,BT009IU, Cell Biology,2,,3,3,BTBT21IU11,54,14,,Sáu,7,3,L102,L.M.Thông,08/09/2025--02/11/2025
,BT009IU,BT009IU, Cell Biology,2,,3,3,BTBT21IU11,54,14,,,,,,,
,BT009IU,BT009IU, Cell Biology,2,,3,3,BTBT21IU11,54,14,,Sáu,7,3,L102,T.M.Nhựt,03/11/2025--21/12/2025
,BT010IU,BT010IU, Plant Physiology,2,,3,3,BTBT22IU11,56,13,,Hai,4,3,C.420,T.V.Minh,08/09/2025--02/11/2025
,BT010IU,BT010IU, Plant Physiology,2,,3,3,BTBT22IU11,56,13,,,,,,,
,BT010IU,BT010IU, Plant Physiology,2,,3,3,BTBT22IU11,56,13,,Hai,4,3,C.420,P.H.Điệp,03/11/2025--21/12/2025
,BT010IU,BT010IU, Plant Physiology,4,,3,3,BTBT22IU11,56,40,,Bảy,1,3,C.410,P.H.Điệp,03/11/2025--21/12/2025
,BT010IU,BT010IU, Plant Physiology,4,,3,3,BTBT22IU11,56,40,,,,,,,
,BT010IU,BT010IU, Plant Physiology,4,,3,3,BTBT22IU11,56,40,,Hai,1,3,C.420,T.V.Minh,08/09/2025--02/11/2025
,BT150IU,BT150IU, Introduction to Biotechnology,1,,2,2,BTBT22IU01,90,48,,Hai,5,2,A1.401,N.V.Thuận,08/09/2025--05/10/2025
,BT150IU,BT150IU, Introduction to Biotechnology,1,,2,2,BTBT22IU01,90,48,,,,,,,
,BT150IU,BT150IU, Introduction to Biotechnology,1,,2,2,BTBT22IU01,90,48,,Hai,5,2,A1.401,N.P.Thảo,01/12/2025--21/12/2025
,BT150IU,BT150IU, Introduction to Biotechnology,1,,2,2,BTBT22IU01,90,48,,Hai,5,2,A1.401,N.H.K.Tú,03/11/2025--30/11/2025
,BT150IU,BT150IU, Introduction to Biotechnology,1,,2,2,BTBT22IU01,90,48,,Hai,5,2,A1.401,T.T.Hằng,06/10/2025--02/11/2025
,BT179IU,BT179IU, Thesis,1,,12,12,BTBT20IU01,150,79,,,0,0,,,08/09/2025--21/12/2025
,BT207IU,BT207IU, Human Pharmacology,1,,3,3,BTBT224WE41,80,1,,Ba,1,3,A1.401,N.H.K.Tú,08/09/2025--21/12/2025
,BT210IU,BT210IU, Human Physiology,1,,3,3,BTBT21IU11,80,Hết,,Hai,1,3,A2.205,N.V.Thuận,08/09/2025--21/12/2025
,BT216IU,BT216IU, Experimental Design,1,,3,3,BTBT21IU41,50,29,,Tư,4,3,A2.312,B.H.Thủy,24/11/2025--07/12/2025
,BT216IU,BT216IU, Experimental Design,1,,3,3,BTBT21IU41,50,29,,,,,,,
,BT216IU,BT216IU, Experimental Design,1,,3,3,BTBT21IU41,50,29,,Tư,4,3,A2.312,L.M.Thông,08/12/2025--21/12/2025
,BT216IU,BT216IU, Experimental Design,1,,3,3,BTBT21IU41,50,29,,Tư,4,3,A2.312,N.T.Khôi,08/09/2025--26/10/2025
,BT216IU,BT216IU, Experimental Design,1,,3,3,BTBT21IU41,50,29,,Tư,4,3,A2.312,H.T.L.Xuân,27/10/2025--09/11/2025
,BT216IU,BT216IU, Experimental Design,1,,3,3,BTBT21IU41,50,29,,Tư,4,3,A2.312,N.H.K.Tú,10/11/2025--23/11/2025
,BT217IU,BT217IU, Molecular Genetics,1,,3,3,BTBT224WE41,70,24,,Tư,4,3,A2.401,N.M.Thành,08/09/2025--21/12/2025
,BT218IU,BT218IU, Plant Science,1,,3,3,BTBT224WE41,50,9,,Tư,7,3,A2.412,H.T.L.Xuân,08/09/2025--21/12/2025
,BT221IU,BT221IU, Internship,1,,2,2,BTBC22IU01,50,44,,,0,0,,N.V.Thuận,08/09/2025--21/12/2025
,BT306IU,BT306IU, Developmental Biology,1,,3,3,BTBT224WE41,80,1,,Sáu,7,3,A1.401,N.V.Thuận,08/09/2025--21/12/2025
,BT311IU,BT311IU, Biology,1,,3,3,BTBT254WE41,58,Hết,,Ba,7,3,A1.401,B.H.Thủy,15/09/2025--28/12/2025
,BT311IU,BT311IU, Biology,2,,3,3,BTBT22IU01,50,Hết,,Năm,1,3,A2.512,B.H.Thủy,08/09/2025--21/12/2025
,BT312IU,BT312IU, Practice in Biology,1,,1,1,BTBT22IU01,15,Hết,,Năm,7,5,LA.CNSH,P.H.Điệp,15/09/2025--26/10/2025
,BT312IU,BT312IU, Practice in Biology,2,,1,1,BTBT22IU01,15,Hết,,Tư,7,5,LA.CNSH,P.H.Điệp,15/09/2025--26/10/2025
,BT312IU,BT312IU, Practice in Biology,4,,1,1,BTBT22IU01,15,Hết,,Sáu,1,5,LA.CNSH,P.H.Điệp,15/09/2025--26/10/2025
,BT312IU,BT312IU, Practice in Biology,7,,1,1,BTBT22IU01,16,Hết,,Tư,7,5,LA.CNSH,T.T.N.Diệp,10/11/2025--21/12/2025
,BT312IU,BT312IU, Practice in Biology,8,,1,1,BTBT254WE41,0,Hết,,Hai,1,5,LA.CNSH,H.T.L.Xuân,10/11/2025--21/12/2025
,BT313IU,BT313IU, Genetics,1,,3,3,BTBT22IU11,60,4,,Sáu,7,3,A2.501,T.T.Hằng,08/09/2025--21/12/2025
,BT313IU,BT313IU, Genetics,2,,3,3,BTBT22IU11,60,4,,Hai,1,3,A1.201,T.T.Hằng,08/09/2025--21/12/2025
,BT314IU,BT314IU, Practice in Genetics,1,,1,1,BTBT22IU11,22,Hết,,Ba,7,5,LA1.701,T.T.Hằng,22/09/2025--02/11/2025
,BT314IU,BT314IU, Practice in Genetics,2,,1,1,BTBT22IU11,22,Hết,,Sáu,1,5,LA1.701,T.T.Hằng,22/09/2025--02/11/2025
,BT314IU,BT314IU, Practice in Genetics,3,,1,1,BTBT22IU11,22,Hết,,Năm,7,5,LA1.701,T.T.Hằng,22/09/2025--02/11/2025
,BT314IU,BT314IU, Practice in Genetics,4,,1,1,BTBT22IU11,22,Hết,,Bảy,1,5,LA1.701,T.T.Hằng,22/09/2025--02/11/2025
,BT315IU,BT315IU, Analytical Chemistry,1,,3,3,BTBT22IU21,60,Hết,,Tư,7,3,A1.309,N.T.Trang,08/09/2025--02/11/2025
,BT315IU,BT315IU, Analytical Chemistry,1,,3,3,BTBT22IU21,60,Hết,,,,,,,
,BT315IU,BT315IU, Analytical Chemistry,1,,3,3,BTBT22IU21,60,Hết,,Tư,7,3,A1.309,V.T.M.Thư,03/11/2025--21/12/2025
,BT315IU,BT315IU, Analytical Chemistry,2,,3,3,BTBT22IU21,50,7,,Hai,7,3,C.401,N.T.Trang,08/09/2025--02/11/2025
,BT315IU,BT315IU, Analytical Chemistry,2,,3,3,BTBT22IU21,50,7,,,,,,,
,BT315IU,BT315IU, Analytical Chemistry,2,,3,3,BTBT22IU21,50,7,,Hai,7,3,C.401,V.T.M.Thư,03/11/2025--21/12/2025
,BT316IU,BT316IU, Practice in Analytical Chemistry,1,,1,1,BTBT22IU21,20,9,,Hai,1,5,LA1.501,P.V.Tiến,03/11/2025--14/12/2025
,BT316IU,BT316IU, Practice in Analytical Chemistry,2,,1,1,BTBT22IU21,20,Hết,,Năm,1,5,LA1.501,B.X.A.Đào,03/11/2025--14/12/2025
,BT316IU,BT316IU, Practice in Analytical Chemistry,4,,1,1,BTBT22IU21,20,5,,Tư,1,5,LA1.501,B.X.A.Đào,03/11/2025--14/12/2025
,BT316IU,BT316IU, Practice in Analytical Chemistry,5,,1,1,BTBT22IU21,20,Hết,,Sáu,7,5,LA1.501,B.X.A.Đào,03/11/2025--14/12/2025
,BT317IU,BT317IU, Biostatistics,1,,2,2,BTBT22IU41,85,Hết,,Ba,7,3,A1.202,N.T.Khôi,03/11/2025--28/12/2025
,BT317IU,BT317IU, Biostatistics,1,,2,2,BTBT22IU41,85,Hết,,,,,,,
,BT317IU,BT317IU, Biostatistics,1,,2,2,BTBT22IU41,85,Hết,,Ba,7,3,A1.202,L.M.Thông,08/09/2025--26/10/2025
,BT317IU,BT317IU, Biostatistics,2,,2,2,BTBT22IU41,85,2,,Năm,7,3,A1.202,N.T.Khôi,03/11/2025--28/12/2025
,BT317IU,BT317IU, Biostatistics,2,,2,2,BTBT22IU41,85,2,,,,,,,
,BT317IU,BT317IU, Biostatistics,2,,2,2,BTBT22IU41,85,2,,Năm,7,3,A1.202,L.M.Thông,08/09/2025--26/10/2025
,BT318IU,BT318IU, Practice in Biostatistics,1,,1,1,BTBT22IU41,85,9,,Ba,7,5,A1.202,T.M.Nhựt,22/09/2025--02/11/2025
,BT318IU,BT318IU, Practice in Biostatistics,1,,1,1,BTBT22IU41,85,9,,,,,,,
,BT318IU,BT318IU, Practice in Biostatistics,1,,1,1,BTBT22IU41,85,9,,Ba,7,5,A1.202,V.T.M.Thư,17/11/2025--21/12/2025
,BT318IU,BT318IU, Practice in Biostatistics,2,,1,1,BTBT22IU41,85,23,,Năm,7,5,A1.202,V.T.M.Thư,17/11/2025--21/12/2025
,BT318IU,BT318IU, Practice in Biostatistics,2,,1,1,BTBT22IU41,85,23,,,,,,,
,BT318IU,BT318IU, Practice in Biostatistics,2,,1,1,BTBT22IU41,85,23,,Năm,7,5,A1.202,T.M.Nhựt,22/09/2025--02/11/2025
,BT319IU,BT319IU, Biochemistry,1,,3,3,BTBT21IU01,85,Hết,,Ba,4,3,A2.402,L.H.Phú,08/09/2025--02/11/2025
,BT319IU,BT319IU, Biochemistry,1,,3,3,BTBT21IU01,85,Hết,,,,,,,
,BT319IU,BT319IU, Biochemistry,1,,3,3,BTBT21IU01,85,Hết,,Ba,4,3,A2.402,L.N.T.Phúc,03/11/2025--21/12/2025
,BT319IU,BT319IU, Biochemistry,2,,3,3,BTBT21IU01,50,3,,Sáu,4,3,A2.512,L.N.T.Phúc,03/11/2025--21/12/2025
,BT319IU,BT319IU, Biochemistry,2,,3,3,BTBT21IU01,50,3,,,,,,,
,BT319IU,BT319IU, Biochemistry,2,,3,3,BTBT21IU01,50,3,,Sáu,4,3,A2.512,L.H.Phú,08/09/2025--02/11/2025
,BT320IU,BT320IU, Practice in Biochemistry,1,,1,1,BTBT21IU01,20,Hết,,Năm,7,5,LA1.501,P.V.Tiến,03/11/2025--14/12/2025
,BT320IU,BT320IU, Practice in Biochemistry,2,,1,1,BTBT21IU01,20,Hết,,Hai,7,5,LA1.502,L.N.T.Phúc,03/11/2025--14/12/2025
,BT320IU,BT320IU, Practice in Biochemistry,3,,1,1,BTBT21IU01,20,Hết,,Tư,7,5,LA1.501,L.N.T.Phúc,03/11/2025--14/12/2025
,BT320IU,BT320IU, Practice in Biochemistry,4,,1,1,BTBT21IU01,20,1,,Ba,7,5,LA1.501,P.V.Tiến,03/11/2025--14/12/2025
,BT320IU,BT320IU, Practice in Biochemistry,5,,1,1,BTBT21IU01,20,7,,Bảy,7,5,LA1.501,L.N.T.Phúc,03/11/2025--14/12/2025
,BT320IU,BT320IU, Practice in Biochemistry,6,,1,1,BTBT21IU01,20,Hết,,Bảy,1,5,LA1.501,P.V.Tiến,03/11/2025--14/12/2025
,BT321IU,BT321IU, Microbiology,1,,3,3,BTBT21IU11,50,Hết,,Ba,1,3,A2.409,N.B.Quốc,08/09/2025--21/12/2025
,BT321IU,BT321IU, Microbiology,2,,3,3,BTBT21IU11,60,Hết,,Sáu,4,3,A2.401,N.B.Quốc,08/09/2025--21/12/2025
,BT322IU,BT322IU, Practice in Microbiology,1,,1,1,BTBT21IU11,22,Hết,,Tư,1,5,LA.CNSH,N.D.Đ.Anh,22/09/2025--02/11/2025
,BT322IU,BT322IU, Practice in Microbiology,2,,1,1,BTBT21IU11,22,Hết,,Bảy,1,5,LA.CNSH,N.D.Đ.Anh,22/09/2025--02/11/2025
,BT322IU,BT322IU, Practice in Microbiology,3,,1,1,BTBT21IU11,22,Hết,,Hai,7,5,LA.CNSH,N.D.Đ.Anh,22/09/2025--02/11/2025
,BT322IU,BT322IU, Practice in Microbiology,4,,1,1,BTBT21IU11,22,Hết,,Ba,7,5,LA.CNSH,N.D.Đ.Anh,22/09/2025--02/11/2025
,BT333IU,BT333IU, Molecular Biotechnology,1,,3,3,BTBT21IU21,42,1,,Tư,1,3,L101,N.P.Thảo,08/09/2025--21/12/2025
,BT334IU,BT334IU, Practice in Molecular Biotechnology,1,,1,1,BTBT21IU21,22,Hết,,Ba,7,5,LA1.702,H.T.L.Xuân,22/09/2025--02/11/2025
,BT334IU,BT334IU, Practice in Molecular Biotechnology,2,,1,1,BTBT21IU21,22,5,,Ba,1,5,LA1.702,H.T.L.Xuân,22/09/2025--02/11/2025
,BT335IU,BT335IU, Immunology,1,,3,3,BTBT21IU21,60,4,,Tư,4,3,A2.302,N.T.Trang,03/11/2025--21/12/2025
,BT335IU,BT335IU, Immunology,1,,3,3,BTBT21IU21,60,4,,,,,,,
,BT335IU,BT335IU, Immunology,1,,3,3,BTBT21IU21,60,4,,Tư,4,3,A2.302,N.T.T.Hoài,08/09/2025--02/11/2025
,BT335IU,BT335IU, Immunology,2,,3,3,BTBT21IU21,54,1,,Năm,1,3,L103,N.T.Trang,03/11/2025--21/12/2025
,BT335IU,BT335IU, Immunology,2,,3,3,BTBT21IU21,54,1,,,,,,,
,BT335IU,BT335IU, Immunology,2,,3,3,BTBT21IU21,54,1,,Năm,1,3,L103,N.T.T.Hoài,08/09/2025--02/11/2025
,BT336IU,BT336IU, Practice in Immunology,1,,1,1,BTBT21IU21,20,1,,Năm,7,5,LA1.702,N.T.Trang,22/09/2025--02/11/2025
,BT336IU,BT336IU, Practice in Immunology,2,,1,1,BTBT21IU21,20,5,,Bảy,1,5,LA1.702,N.T.Trang,22/09/2025--02/11/2025
,BT336IU,BT336IU, Practice in Immunology,3,,1,1,BTBT21IU21,20,2,,Hai,7,5,LA1.702,T.T.H.Yến,22/09/2025--02/11/2025
,BT336IU,BT336IU, Practice in Immunology,4,,1,1,BTBT21IU21,20,3,,Tư,7,5,LA1.702,T.T.H.Yến,22/09/2025--02/11/2025
,BT336IU,BT336IU, Practice in Immunology,6,,1,1,BTBT21IU21,20,2,,Hai,1,5,LA1.702,T.T.H.Yến,22/09/2025--02/11/2025
,BT337IU,BT337IU, Bioinformatics,1,,3,3,BTBT21IU41,90,23,,Năm,1,3,A1.202,N.M.Thành,08/09/2025--21/12/2025
,BT337IU,BT337IU, Bioinformatics,2,,3,3,BTBT21IU41,50,18,,Ba,4,3,A2.310,N.M.Thành,08/09/2025--21/12/2025
,BT338IU,BT338IU, Practice in Bioinformatics,1,,1,1,BTBT21IU41,30,Hết,,Hai,7,5,LA1.302,T.M.Nhựt,03/11/2025--14/12/2025
,BT338IU,BT338IU, Practice in Bioinformatics,2,,1,1,BTBT21IU41,30,Hết,,Bảy,7,5,LA1.302,V.T.M.Thư,03/11/2025--14/12/2025
,BT338IU,BT338IU, Practice in Bioinformatics,3,,1,1,BTBT21IU41,30,2,,Sáu,7,5,LA1.302,V.T.M.Thư,03/11/2025--14/12/2025
,BT341IU,BT341IU, Bioprocess Engineering,1,,3,3,BTBT22UN41,45,1,,Sáu,1,3,A2.410,N.D.Đ.Anh,03/11/2025--16/11/2025
,BT341IU,BT341IU, Bioprocess Engineering,1,,3,3,BTBT22UN41,45,1,,,,,,,
,BT341IU,BT341IU, Bioprocess Engineering,1,,3,3,BTBT22UN41,45,1,,Sáu,1,3,A2.410,H.T.L.Xuân,17/11/2025--21/12/2025
,BT341IU,BT341IU, Bioprocess Engineering,1,,3,3,BTBT22UN41,45,1,,Sáu,1,3,A2.410,T.T.H.Yến,08/09/2025--02/11/2025
,BT342IU,BT342IU, Practice in Bioprocess Engineering,1,,1,1,BTBT22UN41,22,2,,Bảy,7,5,LA.CNSH,N.D.Đ.Anh,22/09/2025--02/11/2025
,BT342IU,BT342IU, Practice in Bioprocess Engineering,2,,1,1,BTBT22UN41,22,3,,Sáu,7,5,LA.CNSH,N.D.Đ.Anh,22/09/2025--02/11/2025
,BT343IU,BT343IU, Medical Genetics,1,,3,3,BTBT224WE41,50,Hết,,Ba,4,3,A1.603,L.M.Thông,08/09/2025--21/12/2025
,BT344IU,BT344IU, Practice in Medical Genetics,1,,1,1,BTBT224WE41,22,5,,Tư,1,5,LA1.702,Đ.T.M.Anh,22/09/2025--02/11/2025
,BT344IU,BT344IU, Practice in Medical Genetics,2,,1,1,BTBT224WE41,22,Hết,,Sáu,1,5,LA1.702,Đ.T.M.Anh,22/09/2025--02/11/2025
,BT347IU,BT347IU, Techniques in Plant Biotechnology,1,,3,3,BTBT224WE41,40,Hết,,Ba,7,3,A2.311,T.V.Minh,08/09/2025--02/11/2025
,BT347IU,BT347IU, Techniques in Plant Biotechnology,1,,3,3,BTBT224WE41,40,Hết,,,,,,,
,BT347IU,BT347IU, Techniques in Plant Biotechnology,1,,3,3,BTBT224WE41,40,Hết,,Ba,7,3,A2.311,P.H.Điệp,03/11/2025--21/12/2025
,BT348IU,BT348IU, Practice in Techniques in Plant Biotechnology,1,,1,1,BTBT224WE41,20,Hết,,Sáu,7,5,LA1.709,P.H.Điệp,15/09/2025--26/10/2025
,BT348IU,BT348IU, Practice in Techniques in Plant Biotechnology,2,,1,1,BTBT224WE41,20,6,,Tư,1,5,LA1.709,P.H.Điệp,15/09/2025--26/10/2025
,BT349IU,BT349IU, Pharmaceutical Biotechnology,1,,3,3,BTBT224WE41,40,8,,Năm,1,3,A1.205,N.H.K.Tú,08/09/2025--21/12/2025
,BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,1,,1,1,BTBT224WE41,20,6,,Bảy,1,5,LA1.701,N.H.K.Tú,03/11/2025--14/12/2025
,BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,2,,1,1,BTBT224WE41,20,5,,Sáu,7,5,LA1.701,N.H.K.Tú,03/11/2025--14/12/2025
,BT351IU,BT351IU, Molecular Diagnostics,1,,3,3,BTBT22IU41,30,4,,Tư,4,3,A2.411,L.M.Thông,08/09/2025--02/11/2025
,BT351IU,BT351IU, Molecular Diagnostics,1,,3,3,BTBT22IU41,30,4,,,,,,,
,BT351IU,BT351IU, Molecular Diagnostics,1,,3,3,BTBT22IU41,30,4,,Tư,4,3,A2.411,T.T.H.Yến,03/11/2025--21/12/2025
,BT352IU,BT352IU, Practice in Molecular Diagnostics,1,,1,1,BTBT22IU41,15,4,,Ba,1,5,LA1.702,T.T.H.Yến,03/11/2025--14/12/2025
,BT352IU,BT352IU, Practice in Molecular Diagnostics,2,,1,1,BTBT22IU41,15,Hết,,Ba,7,5,LA1.702,T.T.H.Yến,03/11/2025--14/12/2025
,BT353IU,BT353IU, Reproductive and Regenerative Biomedicine,1,,3,3,BTBT20IU11,30,7,,Tư,7,3,A2.509,N.V.Thuận,08/09/2025--21/12/2025
,BT354IU,BT354IU, Practice in Reproductive and Regenerative Biomedicine,1,,1,1,BTBT20IU11,15,1,,Năm,7,5,LA1.710,N.V.Thuận,13/10/2025--02/11/2025
,BT354IU,BT354IU, Practice in Reproductive and Regenerative Biomedicine,1,,1,1,BTBT20IU11,15,1,,,,,,,
,BT354IU,BT354IU, Practice in Reproductive and Regenerative Biomedicine,1,,1,1,BTBT20IU11,15,1,,Năm,7,5,LA1.710,B.H.Thủy,03/11/2025--23/11/2025
,BT355IU,BT355IU, Stem Cell Biology,1,,3,3,BTBT20IU01,45,3,,Hai,1,3,A2.410,B.H.Thủy,08/09/2025--21/12/2025
,BT356IU,BT356IU, Practice in Stem Cell Biology,1,,1,1,BTBT20IU01,21,Hết,,Hai,7,5,LA1.701,B.H.Thủy,03/11/2025--30/11/2025
,BT356IU,BT356IU, Practice in Stem Cell Biology,1,,1,1,BTBT20IU01,21,Hết,,,,,,,
,BT356IU,BT356IU, Practice in Stem Cell Biology,1,,1,1,BTBT20IU01,21,Hết,,Hai,7,5,LA1.710,B.H.Thủy,01/12/2025--14/12/2025
,BT356IU,BT356IU, Practice in Stem Cell Biology,2,,1,1,BTBT20IU01,21,5,,Tư,7,5,LA1.701,B.H.Thủy,03/11/2025--30/11/2025
,BT356IU,BT356IU, Practice in Stem Cell Biology,2,,1,1,BTBT20IU01,21,5,,,,,,,
,BT356IU,BT356IU, Practice in Stem Cell Biology,2,,1,1,BTBT20IU01,21,5,,Tư,7,5,LA1.710,B.H.Thủy,01/12/2025--14/12/2025
,BT357IU,BT357IU, Medical Microbiology,1,,3,3,BTBT20IU01,30,1,,Bảy,1,3,C.502,N.T.T.Hoài,08/09/2025--21/12/2025
,BT358IU,BT358IU, Practice in Medical Microbiology,1,,1,1,BTBT20IU01,15,Hết,,Bảy,7,5,LA.CNSH,Đ.T.M.Anh,03/11/2025--14/12/2025
,BT358IU,BT358IU, Practice in Medical Microbiology,2,,1,1,BTBT20IU01,15,6,,Sáu,1,5,LA.CNSH,Đ.T.M.Anh,03/11/2025--14/12/2025
,BT361IU,BT361IU, Scientific Writing Workshop,1,,3,3,BTBT224WE41,60,2,,Sáu,1,3,A2.608,N.V.Thuận,08/09/2025--21/12/2025
,BT405IU,BT405IU, Physical Chemistry,1,,3,3,BTBC22IU01,30,12,,Hai,4,3,A2.509,N.T.Khôi,08/09/2025--21/12/2025
,BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,,2,2,BTBC22IU01,30,3,,Năm,7,3,A1.205,L.Q.Phong,03/11/2025--16/11/2025
,BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,,2,2,BTBC22IU01,30,3,,,,,,,
,BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,,2,2,BTBC22IU01,30,3,,Năm,7,3,A1.205,V.T.Ngọc,20/10/2025--02/11/2025
,BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,,2,2,BTBC22IU01,30,3,,Năm,7,3,A1.205,P.T.Hoa,08/09/2025--21/09/2025
,BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,,2,2,BTBC22IU01,30,3,,Năm,7,3,A1.205,N.T.Khôi,22/09/2025--05/10/2025
,BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,,2,2,BTBC22IU01,30,3,,Năm,7,3,A1.205,L.T.H.Ngọc,06/10/2025--19/10/2025
,BTBC103IU,BTBC103IU, Inorganic Chemistry,1,,3,3,BTBC22IU01,30,7,,Sáu,7,3,L205,P.T.Hoa,08/09/2025--21/12/2025
,BTBC104IU,BTBC104IU, Inorganic Chemistry Lab,1,,1,1,BTBC22IU01,20,4,,Năm,1,5,LA1.501,L.T.H.Ngọc,15/09/2025--26/10/2025
,BTBC201IU,BTBC201IU, Organic Chemistry 1,1,,3,3,BTBC22IU01,30,3,,Sáu,1,3,C.417,L.Q.Phong,08/09/2025--21/12/2025
,BTBC209IU,BTBC209IU, Biochemistry 1,1,,3,3,BTBC22IU01,30,2,,Hai,4,3,A2.310,V.T.Ngọc,08/09/2025--21/12/2025
,BTBC213IU,BTBC213IU, Fundamentals of Analytical Chemistry,1,,3,3,BTBC22IU01,30,7,,Hai,1,3,A2.511,P.T.Hoa,08/09/2025--21/12/2025
,BTBC214IU,BTBC214IU, Fundamentals of Analytical Chemistry Lab,1,,1,1,BTBC22IU01,20,Hết,,Hai,7,5,LA1.502,P.T.Hoa,15/09/2025--26/10/2025
,BTBC215IU,BTBC215IU, Instrumental Analysis,1,,3,3,BTBC22IU01,30,12,,Tư,4,3,A2.410,P.T.Hoa,08/09/2025--21/12/2025
,BTBC216IU,BTBC216IU, Instrumental Analysis Lab,1,,1,1,BTBC22IU01,20,4,,Ba,7,5,LA1.501,P.T.Hoa,15/09/2025--26/10/2025
,BTBC304IU,BTBC304IU, Biopharmaceutics,1,,3,3,BTBC22IU01,30,5,,Hai,1,3,A2.310,N.H.K.Tú,08/09/2025--21/12/2025
,BTBC309IU,BTBC309IU, Internship,1,,2,2,BTBC22IU01,50,49,,,0,0,,L.Q.Phong,08/09/2025--21/12/2025
,BTBC313IU,BTBC313IU, Methods in Biochemistry,1,,3,3,BTBC22IU01,30,16,,Ba,1,3,A1.603,V.T.Ngọc,08/09/2025--21/12/2025
,BTBC314IU,BTBC314IU, Methods in Biochemistry Lab,1,,2,2,BTBC22IU01,20,12,,Sáu,1,5,LA1.501,L.T.H.Ngọc,15/09/2025--07/12/2025
,BTBC315IU,BTBC315IU, Enzymology,1,,3,3,BTBC22IU01,30,9,,Bảy,1,3,A1.207A,N.T.Khôi,08/09/2025--21/12/2025
,BTBC316IU,BTBC316IU, Enzymology Lab,1,,1,1,BTBC22IU01,20,Hết,,Sáu,7,5,LA1.703,L.T.H.Ngọc,15/09/2025--26/10/2025
,BTBC317IU,BTBC317IU, Nutritional Biochemistry,1,,3,3,BTBC22IU01,30,12,,Năm,4,3,A2.408,V.T.Ngọc,08/09/2025--21/12/2025
,BTBC318IU,BTBC318IU, Nutritional Biochemistry Lab,1,,1,1,BTBC22IU01,20,11,,Tư,7,5,LA1.703,L.T.H.Ngọc,15/09/2025--26/10/2025
,BTBC409IU,BTBC409IU, Cosmetics and Cosmeceuticals 1,1,,3,3,BTBC22IU01,40,10,,Ba,4,3,C.504,L.T.H.Ngọc,08/09/2025--21/12/2025
,BTBC421IU,BTBC421IU, Nutraceuticals,1,,3,3,BTBC22IU01,20,2,,Tư,1,3,A1.206,V.T.Ngọc,08/09/2025--21/12/2025
,BTBC422IU,BTBC422IU, Nutraceuticals Lab,1,,1,1,BTBC22IU01,20,3,,Tư,7,5,LA1.703,L.T.H.Ngọc,10/11/2025--21/12/2025
,BTFT156IU,BTFT156IU, Food Chemistry and Biochemistry,1,,3,3,BTFT23IU01,30,16,,Tư,1,3,A2.511,H.T.Đạt,08/09/2025--21/12/2025
,BTFT157IU,BTFT157IU, Food Sustainability,1,,2,2,BTFT23IU01,20,Hết,,Ba,7,3,A1.203,N.N.T.Tiến,08/09/2025--21/12/2025
,BTFT201IU,BTFT201IU, Introduction to Food Science and Technology,1,,3,3,BTFT23IU01,30,1,,Sáu,7,3,A2.512,N.V.H.Hà,08/09/2025--21/12/2025
,BTFT203IU,BTFT203IU, Food engineering principles,1,,4,4,BTFT23IU01,38,3,,Hai,7,4,A2.511,Đ.Q.Tuấn,08/09/2025--21/12/2025
,BTFT205IU,BTFT205IU, Nutrition and Functional Foods,1,,3,3,BTFT23IU01,32,2,,Hai,7,3,A2.510,P.V.Hùng,08/09/2025--21/12/2025
,BTFT234IU,BTFT234IU, Food microbiology,1,,3,3,BTFT23IU01,30,16,,Ba,1,3,C.504,T.T.Y.Nhi,08/09/2025--21/12/2025
,BTFT236IU,BTFT236IU, Enzyme and food fermentation,1,,3,3,BTFT23IU11,20,Hết,,Sáu,1,3,A2.512,L.H.Phú,08/09/2025--21/12/2025
,BTFT256IU,BTFT256IU, Practice in enzyme and food fermentation,1,,1,1,BTFT23IU11,20,3,,Ba,7,5,LA1.602,N.T.H.Giang,03/11/2025--23/11/2025
,BTFT256IU,BTFT256IU, Practice in enzyme and food fermentation,1,,1,1,BTFT23IU11,20,3,,,,,,,
,BTFT256IU,BTFT256IU, Practice in enzyme and food fermentation,1,,1,1,BTFT23IU11,20,3,,Ba,1,5,LA1.602,N.T.H.Giang,03/11/2025--23/11/2025
,BTFT305IU,BTFT305IU, Food quality assurance systems,1,,3,3,BTFT23IU21,37,1,,Năm,1,3,L206,N.N.T.Tiến,08/09/2025--21/12/2025
,BTFT306IU,BTFT306IU, Food Packaging and Food additives,1,,3,3,BTFT23IU11,37,Hết,,Sáu,7,3,A2.511,P.V.Hùng,08/09/2025--21/12/2025
,BTFT309IU,BTFT309IU, Food Laws and Standards,1,,3,3,BTFT23IU11,20,3,,Năm,7,3,L108,N.T.H.Giang,08/09/2025--21/12/2025
,BTFT316IU,BTFT316IU, Scientific Writing and Design of Experiments for Food Science,1,,3,3,BTFT23IU41,25,Hết,,Tư,1,3,A2.512,L.N.Liễu,08/09/2025--02/11/2025
,BTFT316IU,BTFT316IU, Scientific Writing and Design of Experiments for Food Science,1,,3,3,BTFT23IU41,25,Hết,,,,,,,
,BTFT316IU,BTFT316IU, Scientific Writing and Design of Experiments for Food Science,1,,3,3,BTFT23IU41,25,Hết,,Tư,1,3,A2.512,P.V.Hùng,03/11/2025--21/12/2025
,BTFT331IU,BTFT331IU, Food unit operations 1,1,,3,3,BTFT23IU01,20,3,,Năm,1,3,C.508,L.N.Liễu,08/09/2025--21/12/2025
,BTFT332IU,BTFT332IU, Food Analysis,1,,3,3,BTFT23IU11,30,2,,Năm,7,3,A2.510,P.V.Hùng,08/09/2025--21/12/2025
,BTFT334IU,BTFT334IU, Food unit operations 2,1,,3,3,BTFT23IU11,27,2,,Sáu,1,3,L111,Đ.Q.Tuấn,08/09/2025--21/12/2025
,BTFT337IU,BTFT337IU, Food microbiology analysis,1,,2,2,BTFT23IU21,25,2,,Hai,7,3,A2.512,N.V.H.Hà,08/09/2025--21/12/2025
,BTFT351IU,BTFT351IU, Practice in food unit operations 1,1,,1,1,BTFT23IU01,20,Hết,,Tư,7,5,LA1.102,T.T.Y.Nhi,13/10/2025--02/11/2025
,BTFT351IU,BTFT351IU, Practice in food unit operations 1,1,,1,1,BTFT23IU01,20,Hết,,,,,,,
,BTFT351IU,BTFT351IU, Practice in food unit operations 1,1,,1,1,BTFT23IU01,20,Hết,,Tư,1,5,LA1.102,T.T.Y.Nhi,13/10/2025--02/11/2025
,BTFT352IU,BTFT352IU, Practice in food analysis,1,,1,1,BTFT23IU11,15,2,,Ba,1,5,LA1.102,N.T.H.Giang,06/10/2025--26/10/2025
,BTFT352IU,BTFT352IU, Practice in food analysis,1,,1,1,BTFT23IU11,15,2,,,,,,,
,BTFT352IU,BTFT352IU, Practice in food analysis,1,,1,1,BTFT23IU11,15,2,,Ba,7,5,LA1.102,N.T.H.Giang,06/10/2025--26/10/2025
,BTFT352IU,BTFT352IU, Practice in food analysis,2,,1,1,BTFT23IU11,15,3,,Ba,7,5,LA1.102,N.T.H.Giang,24/11/2025--14/12/2025
,BTFT352IU,BTFT352IU, Practice in food analysis,2,,1,1,BTFT23IU11,15,3,,,,,,,
,BTFT352IU,BTFT352IU, Practice in food analysis,2,,1,1,BTFT23IU11,15,3,,Ba,1,5,LA1.102,N.T.H.Giang,24/11/2025--14/12/2025
,BTFT354IU,BTFT354IU, Practice in food unit operations 2,1,,1,1,BTFT23IU11,24,5,,Bảy,7,5,LA1.102,T.T.Y.Nhi,13/10/2025--02/11/2025
,BTFT354IU,BTFT354IU, Practice in food unit operations 2,1,,1,1,BTFT23IU11,24,5,,,,,,,
,BTFT354IU,BTFT354IU, Practice in food unit operations 2,1,,1,1,BTFT23IU11,24,5,,Bảy,1,5,LA1.102,T.T.Y.Nhi,13/10/2025--02/11/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Tư,1,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,,,,,,
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Bảy,1,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Ba,1,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Năm,1,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Tư,7,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Bảy,7,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Hai,7,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Sáu,7,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Ba,7,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Năm,7,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Hai,1,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,,2,2,BTFT23IU21,23,Hết,,Sáu,1,5,LA1.602,T.T.Y.Nhi,22/12/2025--28/12/2025
,BTFT409IU,BTFT409IU, Internship,1,,2,2,BTBC22IU01,50,38,,,0,0,,N.V.H.Hà,08/09/2025--21/12/2025
,BTFT411IU,BTFT411IU, Post-harvest Technologies,1,,3,3,BTFT23IU21,21,5,,Năm,7,3,A2.511,L.H.Phú,20/10/2025--09/11/2025
,BTFT411IU,BTFT411IU, Post-harvest Technologies,1,,3,3,BTFT23IU21,21,5,,,,,,,
,BTFT411IU,BTFT411IU, Post-harvest Technologies,1,,3,3,BTFT23IU21,21,5,,Năm,7,3,A2.511,Đ.Q.Tuấn,01/12/2025--21/12/2025
,BTFT411IU,BTFT411IU, Post-harvest Technologies,1,,3,3,BTFT23IU21,21,5,,Năm,7,3,A2.511,L.N.Liễu,10/11/2025--30/11/2025
,BTFT411IU,BTFT411IU, Post-harvest Technologies,1,,3,3,BTFT23IU21,21,5,,Năm,7,3,A2.511,N.V.H.Hà,08/09/2025--19/10/2025
,BTFT419IU,BTFT419IU, Internship 1,1,,3,3,BTBC22IU01,50,49,,,0,0,,N.V.H.Hà,08/09/2025--21/12/2025
,BTFT435IU,BTFT435IU, Meat Product Technology,1,,3,3,BTFT23IU41,29,Hết,,Sáu,7,3,L107,N.N.T.Tiến,08/09/2025--21/12/2025
,BTFT436IU,BTFT436IU," Technology of coffee, tea and cacao",1,,3,3,BTFT23IU41,22,5,,Ba,1,3,A2.512,L.H.Phú,08/09/2025--21/12/2025
,BTFT437IU,BTFT437IU, Food Sensory Analysis,1,,2,2,BTFT23IU21,40,3,,Hai,1,4,L111,H.K.Anh,08/09/2025--02/11/2025
,BTFT438IU,BTFT438IU, Food Product Development and Marketing,1,,2,2,BTFT23IU41,28,1,,Tư,7,4,L109,L.N.Liễu,08/09/2025--02/11/2025
,BTFT455IU,BTFT455IU, Practice in Meat Product Technology,1,,1,1,BTFT23IU41,26,2,,Ba,7,5,LA1.601,T.T.Y.Nhi,03/11/2025--14/12/2025
,BTFT457IU,BTFT457IU, Practice in Food Sensory Analysis,1,,1,1,BTFT23IU21,20,1,,Hai,1,5,LA1.601,N.T.H.Giang,03/11/2025--14/12/2025
,BTFT457IU,BTFT457IU, Practice in Food Sensory Analysis,2,,1,1,BTFT23IU21,20,6,,Bảy,1,5,LA1.601,N.N.T.Tiến,03/11/2025--14/12/2025
,BTFT458IU,BTFT458IU, Practice in Food Product Development and Marketing,1,,1,1,BTFT23IU41,25,1,,Tư,7,5,LA1.601,N.T.H.Giang,03/11/2025--14/12/2025
,BTFT469IU,BTFT469IU, Internship 2,1,,3,3,BTBC22IU01,50,50,,,0,0,,N.V.H.Hà,08/09/2025--21/12/2025
,CH009IU,CH009IU, Organic chemistry,1,,3,3,BTBT22IU01,70,38,,Tư,4,3,A1.401,L.Q.Phong,08/09/2025--21/12/2025
,CH012IU,CH012IU, Chemistry Laboratory,1,,1,1,BTBT24IU41,20,1,,Tư,7,5,LA1.502,L.N.T.Phúc,22/09/2025--02/11/2025
,CH012IU,CH012IU, Chemistry Laboratory,2,,1,1,BTBT24IU41,20,1,,Năm,7,5,LA1.502,L.N.T.Phúc,22/09/2025--02/11/2025
,CH012IU,CH012IU, Chemistry Laboratory,3,,1,1,BTBT24IU41,20,1,,Sáu,7,5,LA1.502,L.N.T.Phúc,22/09/2025--02/11/2025
,CH012IU,CH012IU, Chemistry Laboratory,4,,1,1,BTBT25WE41,18,5,,Ba,1,5,LA1.502,N.D.Đ.Anh,22/09/2025--02/11/2025
,CH012IU,CH012IU, Chemistry Laboratory,5,,1,1,BTBT24IU41,20,3,,Tư,7,5,LA1.501,Đ.T.M.Anh,22/09/2025--02/11/2025
,CH012IU,CH012IU, Chemistry Laboratory,6,,1,1,BTBT24IU41,20,Hết,,Năm,7,5,LA1.502,T.M.Nhựt,03/11/2025--14/12/2025
,CH012IU,CH012IU, Chemistry Laboratory,8,,1,1,BTBT25WE41,18,2,,Ba,1,5,LA1.502,T.M.Nhựt,03/11/2025--14/12/2025
,CH012IU,CH012IU, Chemistry Laboratory,9,,1,1,BTBT24IU41,20,1,,Tư,7,5,LA1.502,P.V.Tiến,03/11/2025--14/12/2025
,CH012IU,CH012IU, Chemistry Laboratory,10,,1,1,BTBT24IU41,20,4,,Sáu,7,5,LA1.502,N.N.T.Đạt,03/11/2025--14/12/2025
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,
,,,,,,,,,,,,,,,,,






`.trim();

