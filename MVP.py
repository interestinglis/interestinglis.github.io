import pandas as pd
from io import StringIO

# Embed the CSV data directly in the code
csv_data = """
Mã MHBĐ,Mã MH,Tên môn học,NMH,Mã lớp,Sĩ số,CL,TH,Thứ,Tiết Bắt Đầu,Số tiết,Phòng,Giảng viên
BA005IU,BA005IU, Financial Accounting,1,BABA232WE31,60,1,,Ba,4,3,A2.401,N.T.Nam
BA005IU,BA005IU, Financial Accounting,2,BABA232WE31,54,1,,Bảy,4,3,L108,N.T.L.Ha
BA005IU,BA005IU, Financial Accounting,3,BABA232WE31,60,2,,Năm,4,3,A1.402,L.N.A.Khoa
BA005IU,BA005IU, Financial Accounting,4,BABA232WE31,60,3,,Bảy,1,3,L202,T.D.Khiem
BA005IU,BA005IU, Financial Accounting,5,BABA232WE31,55,1,,Bảy,7,3,A2.301,N.T.L.Ha
BA005IU,BA005IU, Financial Accounting,6,BABA232WE31,61,Hết,,Tư,4,3,L207,L.N.A.Khoa
BA005IU,BA005IU, Financial Accounting,7,BABA24IU41,60,Hết,,Hai,1,3,A2.205,T.D.Khiem
BA005IU,BA005IU, Financial Accounting,8,FAFB22IU11,60,Hết,,Năm,4,3,A2.402,N.T.Nam
BA005IU,BA005IU, Financial Accounting,9,FAFB22IU11,61,2,,Năm,1,3,A2.401,N.T.Nam
BA005IU,BA005IU, Financial Accounting,10,FAFB22IU11,62,Hết,,Ba,1,3,A2.401,N.T.Nam
BA005IU,BA005IU, Financial Accounting,11,FAAC24IU01,66,Hết,,Tư,1,3,A2.301,N.T.L.Ha
BA005IU,BA005IU, Financial Accounting,12,FAAC24IU01,30,14,,Hai,1,3,A2.310,N.T.L.Ha
BA010IU,BA010IU, Managerial Accounting,1,BABA224WE41,50,5,,Hai,7,3,C.401,V.T.Anh
BA010IU,BA010IU, Managerial Accounting,3,FAFB23IU11,50,2,,Ba,4,3,A2.313,N.T.L.Ha
BA016IU,BA016IU, Fundamentals of Financial Management,1,BABA234WE21,60,Hết,,Ba,4,3,A2.407,L.D.T.Trang
BA016IU,BA016IU, Fundamentals of Financial Management,2,BABA234WE21,60,Hết,,Ba,4,3,A1.202,P.N.Anh
BA016IU,BA016IU, Fundamentals of Financial Management,3,BABA234WE21,60,Hết,,Ba,1,3,A1.401,V.T.M.Uyen
BA016IU,BA016IU, Fundamentals of Financial Management,4,BABA234WE21,61,Hết,,Bảy,1,3,A1.202,V.T.M.Uyen
BA016IU,BA016IU, Fundamentals of Financial Management,5,BABA234WE21,61,Hết,,Bảy,1,3,A2.307,T.N.Minh
BA016IU,BA016IU, Fundamentals of Financial Management,6,FAFB23IU21,60,Hết,,Hai,4,3,A2.501,T.N.Minh
BA051IU,BA051IU, International Financial Management,1,BABA224WE21,60,5,,Năm,4,3,A1.202,V.T.M.Uyen
BA051IU,BA051IU, International Financial Management,2,FAFB23IU41,50,20,,Bảy,4,3,A2.312,V.T.Quy
BA051IU,BA051IU, International Financial Management,3,FAFB23IU41,30,13,,Sáu,7,3,A2.311,V.T.Quy
BA051IU,BA051IU, International Financial Management,4,FAFB23IU41,50,14,,Sáu,7,3,L206,V.T.M.Uyen
BA054IU,BA054IU, Corporate Finance,1,BABA23AD31,61,8,,Ba,1,3,A2.402,T.Q.Dat
BA054IU,BA054IU, Corporate Finance,2,FAAC23IU41,50,Hết,,Năm,1,3,C.420,T.T.Nga
BA054IU,BA054IU, Corporate Finance,3,FAAC23IU41,50,Hết,,Năm,4,3,C.420,T.T.Nga
BA054IU,BA054IU, Corporate Finance,5,FAAC23IU41,30,2,,Năm,1,3,C.401,T.N.Minh
BA057IU,BA057IU, Auditing,1,FAAC23IU41,50,1,,Tư,1,3,C.420,V.T.Anh
BA057IU,BA057IU, Auditing,2,FAAC23IU41,51,Hết,,Sáu,4,3,A2.507,V.T.Anh
BA065IU,BA065IU, Business Analysis & Evaluation,1,FAFB23IU41,50,2,,Ba,1,3,C.420,N.C.Tiên
BA065IU,BA065IU, Business Analysis & Evaluation,2,FAFB23IU41,50,9,,Tư,1,3,C.501,N.C.Tiên
BA065IU,BA065IU, Business Analysis & Evaluation,3,FAFB23IU41,30,7,,Ba,4,3,C.420,N.C.Tiên
BA065IU,BA065IU, Business Analysis & Evaluation,4,FAFB23IU41,50,13,,Tư,4,3,C.501,N.C.Tiên
BA068IU,BA068IU, International Economics,1,FAAC23IU21,56,Hết,,Sáu,7,3,A2.302,H.N.Quang
BA068IU,BA068IU, International Economics,2,FAAC23IU21,57,Hết,,Ba,7,3,A1.202,H.N.Quang
BA087IU,BA087IU, Taxation,1,FAFB22IU01,52,Hết,,Năm,7,3,C.420,L.P.Thao
BA087IU,BA087IU, Taxation,2,FAFB22IU01,50,Hết,,Ba,1,3,C.501,L.P.Thao
BA087IU,BA087IU, Taxation,3,FAFB22IU01,50,6,,Sáu,7,3,C.501,L.P.Thao
BA087IU,BA087IU, Taxation,4,FAFB22IU01,51,Hết,,Ba,4,3,C.501,L.P.Thao
BA117IU,BA117IU, Introduction to Micro Economics,1,BABA24AD01,60,Hết,,Ba,1,3,A2.407,H.T.N.Hiền
BA117IU,BA117IU, Introduction to Micro Economics,2,BABA222WE31,60,3,,Hai,7,3,L207,B.T.T.Hien
BA117IU,BA117IU, Introduction to Micro Economics,3,BABA222WE31,61,1,,Hai,1,3,A1.402,L.V.Chon
BA117IU,BA117IU, Introduction to Micro Economics,4,BABA222WE31,60,Hết,,Hai,7,3,A2.307,L.V.Chon
BA117IU,BA117IU, Introduction to Micro Economics,5,BABA24IU41,61,Hết,,Ba,1,3,A2.501,T.C.Tâm
BA117IU,BA117IU, Introduction to Micro Economics,6,FAFB23IU11,60,1,,Tư,1,3,C.401,L.Q.Thái
BA117IU,BA117IU, Introduction to Micro Economics,7,FAFB23IU11,50,8,,Bảy,4,3,A2.601,L.Q.Thái
BA117IU,BA117IU, Introduction to Micro Economics,8,FAFB23IU11,60,2,,Sáu,1,3,L108,T.C.Tâm
BA117IU,BA117IU, Introduction to Micro Economics,9,FAFB23IU11,60,4,,Hai,7,3,A2.508,N.V.Phuong
BA117IU,BA117IU, Introduction to Micro Economics,10,FAFB23IU11,60,1,,Ba,7,3,A2.501,T.C.Tâm
BA117IU,BA117IU, Introduction to Micro Economics,11,FAAC24IU01,60,2,,Tư,7,3,A2.601,L.Q.Thái
BA117IU,BA117IU, Introduction to Micro Economics,12,FAAC24IU01,60,5,,Năm,1,3,A1.402,D.M.Hoang
BA119IU,BA119IU, Introduction to Macro Economics,1,BABA23AD41,60,Hết,,Tư,1,3,A2.205,B.T.T.Hien
BA119IU,BA119IU, Introduction to Macro Economics,2,BABA222WE01,60,Hết,,Ba,7,3,L202,B.T.T.Hien
BA119IU,BA119IU, Introduction to Macro Economics,3,BABA222WE01,30,6,,Bảy,4,3,L202,H.T.A.Ngoc
BA119IU,BA119IU, Introduction to Macro Economics,4,BABA222WE01,61,1,,Năm,7,3,L201,T.C.Tâm
BA119IU,BA119IU, Introduction to Macro Economics,5,BABA222WE01,60,Hết,,Năm,4,3,A2.501,H.T.A.Ngoc
BA119IU,BA119IU, Introduction to Macro Economics,6,FAFB23IU11,60,4,,Tư,7,3,A1.402,N.B.Trung
BA134IU,BA134IU, Financial Institutions and Markets,1,FAFB23IU21,50,1,,Tư,1,3,A2.407,V.T.Quy
BA134IU,BA134IU, Financial Institutions and Markets,2,FAFB23IU21,50,Hết,,Năm,7,3,L203,V.T.Quy
BA134IU,BA134IU, Financial Institutions and Markets,3,FAFB23IU21,50,1,,Năm,1,3,A1.202,V.T.Quy
BA138IU,BA138IU, Portfolio Theory and Investment Analysis,1,FAFB23IU41,50,3,,Ba,4,3,L203,L.H.Nhung
BA138IU,BA138IU, Portfolio Theory and Investment Analysis,2,FAFB23IU41,50,6,,Bảy,7,3,A1.205,L.H.Nhung
BA138IU,BA138IU, Portfolio Theory and Investment Analysis,3,FAFB23IU41,50,Hết,,Tư,1,3,A2.412,L.H.Nhung
BA138IU,BA138IU, Portfolio Theory and Investment Analysis,4,FAFB23IU41,50,Hết,,Tư,7,3,A2.402,L.H.Nhung
BA174IU,BA174IU, Econometrics with Financial Application,1,FAFB22IU01,50,Hết,,Hai,1,3,L202,N.P.Anh
BA174IU,BA174IU, Econometrics with Financial Application,2,FAFB22IU01,50,5,,Bảy,4,3,A2.411,N.B.Trung
BA185IU,BA185IU, Commercial Banking,1,FAFB22IU01,50,Hết,,Hai,7,3,A2.608,L.N.A.Khoa
BA185IU,BA185IU, Commercial Banking,2,FAFB22IU01,50,Hết,,Sáu,4,3,A1.201,L.N.A.Khoa
BA186IU,BA186IU, Investment Banking,1,FAAC23IU41,50,9,,Sáu,7,3,L108,T.T.Nga
BA186IU,BA186IU, Investment Banking,2,FAAC23IU41,50,Hết,,Bảy,4,3,A2.510,T.T.Nga
BA189IU,BA189IU, Banking Risk Management,1,FAFB22IU01,50,1,,Sáu,7,3,A2.510,N.P.Anh
BA189IU,BA189IU, Banking Risk Management,2,FAFB22IU01,50,Hết,,Sáu,1,3,A2.312,N.P.Anh
BA191IU,BA191IU, Quantitative Methods for Finance,1,FAFB23IU21,50,16,,Bảy,1,3,L103,N.P.Anh
BA191IU,BA191IU, Quantitative Methods for Finance,3,FAFB23IU21,50,2,,Hai,7,3,L206,N.P.Anh
BA192IU,BA192IU, International Finance,1,FAAC23IU41,50,12,,Hai,1,3,A2.311,T.Q.Dat
BA192IU,BA192IU, International Finance,2,FAAC23IU41,52,2,,Tư,4,3,A2.302,T.Q.Dat
BA192IU,BA192IU, International Finance,3,FAAC23IU41,50,8,,Sáu,4,3,A2.608,V.T.M.Uyen
BA192IU,BA192IU, International Finance,4,FAAC23IU41,50,9,,Sáu,7,3,A2.608,T.Q.Dat
BA213IU,BA213IU, Corporate Governance,1,BABA224WE31,60,1,,Sáu,7,3,A1.402,P.N.Anh
BA213IU,BA213IU, Corporate Governance,2,FAFB22IU01,50,1,,Bảy,4,3,A2.511,P.N.Anh
BA213IU,BA213IU, Corporate Governance,3,FAFB22IU01,50,Hết,,Tư,7,3,L201,P.N.Anh
BA214IU,BA214IU, Financial Institutions Management,1,FAFB22IU01,30,1,,Ba,4,3,L202,H.Diep
BA216IU,BA216IU, Derivatives and Risk management,1,FAFB22IU01,50,Hết,,Tư,4,3,L103,V.X.Hong
BA216IU,BA216IU, Derivatives and Risk management,2,FAFB22IU01,50,Hết,,Năm,7,3,L102,V.X.Hong
BA216IU,BA216IU, Derivatives and Risk management,3,FAFB22IU01,50,Hết,,Năm,4,3,A1.401,V.X.Hong
BA217IU,BA217IU, Behavioural Finance,1,FAFB22IU01,50,3,,Ba,7,3,C.501,V.T.M.Uyen
BA222IU,BA222IU, Management Decisions and Financial Reporting,1,FAFB22IU01,50,Hết,,Năm,4,3,A2.309,T.D.Khiem
BA257IU,BA257IU, Workshop 2 on Financial,1,FAAC23IU21,90,Hết,,Bảy,7,4,A1.401,T.N.Minh
BA257IU,BA257IU, Workshop 2 on Financial,2,FAAC23IU21,91,Hết,,Bảy,7,4,A2.205,V.K.Thiện
BA276IU,BA276IU, Cost Accounting,1,FAAC23IU21,51,Hết,,Năm,1,3,C.501,V.T.Anh
BA279IU,BA279IU, Advanced Financial Reporting and Analysis,1,FAAC23IU41,50,29,,Sáu,1,3,A2.309,N.T.N.Linh
BA280IU,BA280IU, Advanced Auditing,1,FAAC23IU21,50,Hết,,Bảy,4,3,A2.311,P.M.Vương
BA281IU,BA281IU, Workshop 2 on Accounting Issues,1,FAAC23IU21,60,6,,Bảy,7,4,A1.401,L.P.Thao
BA282IU,BA282IU, Math for Business,2,BABA222WE31,60,3,,Tư,7,4,A1.401,D.M.Hoang
BA282IU,BA282IU, Math for Business,3,BABA222WE31,60,6,,Ba,7,4,A1.402,D.M.Hoang
BA282IU,BA282IU, Math for Business,4,BABA222WE31,50,4,,Năm,7,4,A1.201,D.M.Hoang
BA282IU,BA282IU, Math for Business,5,FAFB23IU11,60,9,,Sáu,7,4,L202,L.N.A.Khoa
BA284IU,BA284IU, Financial Accounting 2,1,FAAC23IU21,30,16,,Sáu,7,3,C.420,N.T.Nam
BA284IU,BA284IU, Financial Accounting 2,2,BABA23AD41,50,11,,Hai,1,3,L103,N.T.Nam
EFA369IU,EFA369IU, Internship,1,FAFB23IU41,200,200,,,0,0,,T.Q.Dat
BM003IU,BM003IU, Pre-Thesis,1,BEBE21IU11,120,60,,,0,0,,T.L.Giang
BM004IU,BM004IU, Thesis,1,BEBE20IU31,80,52,,,0,0,,V.B.Long
BM005IU,BM005IU, Statistics for Health Science,2,BEBE21IU41,40,8,*,Ba,7,4,A2.310,N.T.Như
BM005IU,BM005IU, Statistics for Health Science,2,BEBE21IU41,40,8,*,,,,,
BM007IU,BM007IU, Introduction to Biomedical Engineering,1,BEBE23IU01,20,Hết,*,Hai,7,4,LA1.408,T.L.Giang
BM007IU,BM007IU, Introduction to Biomedical Engineering,1,BEBE23IU01,20,Hết,*,,,,,
BM007IU,BM007IU, Introduction to Biomedical Engineering,1,BEBE23IU01,20,Hết,*,Ba,7,3,A2.313,V.V.Tới
BM007IU,BM007IU, Introduction to Biomedical Engineering,1,BEBE23IU01,15,4,*,Sáu,7,4,LA1.408,T.L.Giang
BM007IU,BM007IU, Introduction to Biomedical Engineering,1,BEBE23IU01,15,4,*,,,,,
BM007IU,BM007IU, Introduction to Biomedical Engineering,1,BEBE23IU01,15,4,*,Ba,7,3,A2.313,V.V.Tới
BM007IU,BM007IU, Introduction to Biomedical Engineering,2,BEBE23IU01,20,10,*,Ba,7,4,LA1.408,T.L.Giang
BM007IU,BM007IU, Introduction to Biomedical Engineering,2,BEBE23IU01,20,10,*,,,,,
BM007IU,BM007IU, Introduction to Biomedical Engineering,2,BEBE23IU01,20,10,*,Tư,7,3,A2.313,V.V.Tới
BM008IU,BM008IU, Bioethics,1,BEBE21IU41,40,12,,Hai,7,3,A2.313,H.T.T.Huong
BM008IU,BM008IU, Bioethics,2,BEBE21IU41,40,19,,Sáu,7,3,A2.310,H.T.T.Huong
BM009IU,BM009IU, BME Capstone Design Course,1,BEBE21IU01,20,2,*,Năm,1,4,LA1.408,V.V.Tới
BM009IU,BM009IU, BME Capstone Design Course,1,BEBE21IU01,20,2,*,,,,,
BM009IU,BM009IU, BME Capstone Design Course,1,BEBE21IU01,20,2,*,Ba,1,3,A2.313,V.V.Tới
BM009IU,BM009IU, BME Capstone Design Course,1,BEBE21IU01,20,8,*,Năm,7,4,LA1.408,V.V.Tới
BM009IU,BM009IU, BME Capstone Design Course,1,BEBE21IU01,20,8,*,,,,,
BM009IU,BM009IU, BME Capstone Design Course,1,BEBE21IU01,20,8,*,Ba,1,3,A2.313,V.V.Tới
BM009IU,BM009IU, BME Capstone Design Course,2,BEBE21IU01,23,3,*,Hai,1,4,LA1.408,V.V.Tới
BM009IU,BM009IU, BME Capstone Design Course,2,BEBE21IU01,23,3,*,,,,,
BM009IU,BM009IU, BME Capstone Design Course,2,BEBE21IU01,23,3,*,Tư,1,3,A2.313,V.V.Tới
BM011IU,BM011IU, Engineering Challenges in Medicine I,1,BEBE22IU01,35,20,,Năm,4,3,A2.512,L.T.A.Thơ
BM011IU,BM011IU, Engineering Challenges in Medicine I,2,BEBE21IU01,35,1,,Năm,1,3,A2.409,L.T.A.Thơ
BM013IU,BM013IU, Entrepreneurship in Biomedical Engineering,1,BEBE21IU11,41,Hết,,Sáu,4,3,A2.512,N.T.Như
BM013IU,BM013IU, Entrepreneurship in Biomedical Engineering,2,BEBE22IU11,50,2,,Năm,4,3,A2.409,N.T.Như
BM017IU,BM017IU, Medical Design,1,BEBE22IU21,20,Hết,,Bảy,7,4,LA1.408,T.L.Giang
BM017IU,BM017IU, Medical Design,2,BEBE20IU41,20,Hết,,Bảy,1,4,LA1.408,T.L.Giang
BM017IU,BM017IU, Medical Design,3,BEBE21IU21,20,11,,Tư,1,4,LA1.408,T.L.Giang
BM030IU,BM030IU, Machine Design,1,BEBE22IU21,35,7,,Ba,7,3,L101,N.T.Quả
BM030IU,BM030IU, Machine Design,2,BEBE22IU01,47,1,,Tư,1,3,L101,N.T.Quả
BM050IU,BM050IU, Practice 1: Reverse Engineering,1,BEBE24IU21,23,Hết,,Bảy,7,4,LA1.404,N.T.Quả
BM050IU,BM050IU, Practice 1: Reverse Engineering,2,BEBE24IU21,24,4,,Bảy,1,4,LA1.404,N.T.Quả
BM052IU,BM052IU, Practice 3: Electronic Design,2,BEBE23IU01,20,1,,Tư,7,4,LA1.404,L.N.Bích
BM053IU,BM053IU, Principles of EE1,1,BEBE23IU11,30,3,,Ba,4,3,A2.312,P.T.T.Hien
BM053IU,BM053IU, Principles of EE1,2,BEBE23IU21,30,4,,Năm,1,3,L103,P.T.T.Hien
BM054IU,BM054IU, Principles of EE1 Laboratory,1,BEBE23IU11,20,6,,Hai,7,4,LA2.201,P.T.T.Hien
BM054IU,BM054IU, Principles of EE1 Laboratory,2,BEBE23IU21,20,2,,Năm,7,4,LA2.201,P.T.T.Hien
BM054IU,BM054IU, Principles of EE1 Laboratory,3,BEBE23IU21,20,2,,Bảy,1,4,LA2.201,P.T.T.Hien
BM058IU,BM058IU, Biomedical Image Processing,1,BEBE22IU01,25,3,*,Sáu,1,4,LA2.413,L.N.Bích
BM058IU,BM058IU, Biomedical Image Processing,1,BEBE22IU01,25,3,*,,,,,
BM058IU,BM058IU, Biomedical Image Processing,1,BEBE22IU01,25,3,*,Năm,1,3,L109,L.N.Bích
BM060IU,BM060IU, Digital Systems,1,BEBE22IU01,41,2,,Ba,1,3,A2.410,P.T.T.Hien
BM061IU,BM061IU, Digital Systems Lab,1,BEBE22IU01,28,1,,Tư,7,4,LA2.208,P.T.T.Hien
BM062IU,BM062IU, Micro-electronic Devices,1,BEBE22IU01,54,1,,Hai,7,3,L101,L.N.Bích
BM063IU,BM063IU, Micro-electronic Devices Laboratory,1,BEBE22IU01,20,5,,Tư,1,4,LA1.404,L.N.Bích
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,1,*,Tư,7,4,LA1.608,N.T.Lụa
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,1,,,,,,
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,1,*,Tư,7,4,LA1.608,T.L.Giang
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,1,,Sáu,4,3,A2.310,N.T.Lụa
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,1,,Sáu,4,3,A2.310,T.L.Giang
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,Hết,*,Năm,7,4,LA1.608,N.T.Lụa
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,Hết,,,,,,
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,Hết,*,Năm,7,4,LA1.608,T.L.Giang
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,Hết,,Sáu,4,3,A2.310,N.T.Lụa
BM064IU,BM064IU, Applied Informatics,2,BEBE22IU41,20,Hết,,Sáu,4,3,A2.310,T.L.Giang
BM067IU,BM067IU, Practice 2: Animal Cells and Microbiologies,1,BEBE23IU11,19,1,,Tư,7,4,LC.109,T.P.Long
BM067IU,BM067IU, Practice 2: Animal Cells and Microbiologies,2,BEBE23IU21,19,Hết,,Hai,7,4,LC.109,T.P.Long
BM067IU,BM067IU, Practice 2: Animal Cells and Microbiologies,3,BEBE23IU41,19,3,,Sáu,1,4,LC.109,T.P.Long
BM067IU,BM067IU, Practice 2: Animal Cells and Microbiologies,4,BEBE23IU41,18,Hết,,Năm,1,4,LC.109,T.P.Long
BM068IU,BM068IU, Project 1,1,BEBE22IU11,60,18,,,0,0,,H.T.T.Huong
BM069IU,BM069IU, Project 2,1,BEBE21IU41,85,26,,,0,0,,P.T.T.Hien
BM071IU,BM071IU, Computer Aided Diagnosis,1,BEBE21IU21,23,Hết,*,Bảy,7,4,A2.512,N.T.Như
BM071IU,BM071IU, Computer Aided Diagnosis,1,BEBE21IU21,23,Hết,*,,,,,
BM071IU,BM071IU, Computer Aided Diagnosis,1,BEBE21IU21,23,Hết,*,Bảy,1,3,A2.512,N.T.Như
BM074IU,BM074IU, Brain - Computer Interface,1,BEBE22IU11,20,10,*,Bảy,1,4,LA1.513,N.T.Lụa
BM074IU,BM074IU, Brain - Computer Interface,1,BEBE22IU11,20,10,,,,,,
BM074IU,BM074IU, Brain - Computer Interface,1,BEBE22IU11,20,10,*,Bảy,1,4,LA1.513,H.T.T.Huong
BM074IU,BM074IU, Brain - Computer Interface,1,BEBE22IU11,20,10,,Tư,4,3,A2.512,H.T.T.Huong
BM074IU,BM074IU, Brain - Computer Interface,1,BEBE22IU11,20,10,,Tư,4,3,A2.512,N.T.Lụa
BM078IU,BM078IU, Pharmaceutical Engineering 2,1,BEBE22IU01,20,6,*,Sáu,1,4,LA1.407,N.D.Đ.Anh
BM078IU,BM078IU, Pharmaceutical Engineering 2,1,BEBE22IU01,20,6,*,,,,,
BM078IU,BM078IU, Pharmaceutical Engineering 2,1,BEBE22IU01,20,6,*,Ba,4,3,L102,N.D.Đ.Anh
BM079IU,BM079IU, Principle of Pharmacokinetics,1,BEBE21IU21,20,6,*,Năm,7,4,LA1.407,V.B.Long
BM079IU,BM079IU, Principle of Pharmacokinetics,1,BEBE21IU21,20,6,*,,,,,
BM079IU,BM079IU, Principle of Pharmacokinetics,1,BEBE21IU21,20,6,*,Ba,7,3,A2.511,V.B.Long
BM083IU,BM083IU, Applications of Biomaterials in Regenerative Medicine,1,BEBE21IU11,20,5,*,Tư,1,4,LA2.413,N.T.Hiep
BM083IU,BM083IU, Applications of Biomaterials in Regenerative Medicine,1,BEBE21IU11,20,5,*,,,,,
BM083IU,BM083IU, Applications of Biomaterials in Regenerative Medicine,1,BEBE21IU11,20,5,*,Sáu,1,3,A2.412,N.T.Hiep
BM083IU,BM083IU, Applications of Biomaterials in Regenerative Medicine,1,BEBE21IU11,20,10,*,Tư,7,4,LA1.406,N.T.Hiep
BM083IU,BM083IU, Applications of Biomaterials in Regenerative Medicine,1,BEBE21IU11,20,10,*,,,,,
BM083IU,BM083IU, Applications of Biomaterials in Regenerative Medicine,1,BEBE21IU11,20,10,*,Sáu,1,3,A2.412,N.T.Hiep
BM086IU,BM086IU, Methods and Process in Fabrication of Scaffold,1,BEBE21IU21,20,1,*,Hai,7,4,LA2.413,Đ.N.Hoan
BM086IU,BM086IU, Methods and Process in Fabrication of Scaffold,1,BEBE21IU21,20,1,*,,,,,
BM086IU,BM086IU, Methods and Process in Fabrication of Scaffold,1,BEBE21IU21,20,1,*,Bảy,4,3,A2.512,Đ.N.Hoan
BM086IU,BM086IU, Methods and Process in Fabrication of Scaffold,1,BEBE21IU21,23,Hết,*,Tư,7,4,LA2.413,Đ.N.Hoan
BM086IU,BM086IU, Methods and Process in Fabrication of Scaffold,1,BEBE21IU21,23,Hết,*,,,,,
BM086IU,BM086IU, Methods and Process in Fabrication of Scaffold,1,BEBE21IU21,23,Hết,*,Bảy,4,3,A2.512,Đ.N.Hoan
BM090IU,BM090IU, Biology for BME,1,BEBE23IU21,20,9,*,Bảy,7,4,LC.109,V.B.Long
BM090IU,BM090IU, Biology for BME,1,BEBE23IU21,20,9,*,,,,,
BM090IU,BM090IU, Biology for BME,1,BEBE23IU21,20,9,*,Tư,7,3,A2.511,V.B.Long
BM090IU,BM090IU, Biology for BME,1,BEBE23IU21,20,9,*,Tư,7,3,A2.511,H.C.Khon
BM090IU,BM090IU, Biology for BME,1,BEBE23IU21,21,Hết,*,Tư,1,4,LC.109,V.B.Long
BM090IU,BM090IU, Biology for BME,1,BEBE23IU21,21,Hết,*,,,,,
BM090IU,BM090IU, Biology for BME,1,BEBE23IU21,21,Hết,*,Tư,7,3,A2.511,V.B.Long
BM090IU,BM090IU, Biology for BME,1,BEBE23IU21,21,Hết,*,Tư,7,3,A2.511,H.C.Khon
BM091IU,BM091IU, Human Anatomy and Physiology,1,BEBE23IU01,55,1,,Sáu,1,3,A2.608,H.T.T.Huong
BM092IU,BM092IU, Cell/Tissue - Biomaterial Interaction,1,BEBE22IU01,20,Hết,*,Sáu,7,4,LA1.210,H.C.Khon
BM092IU,BM092IU, Cell/Tissue - Biomaterial Interaction,1,BEBE22IU01,20,Hết,*,,,,,
BM092IU,BM092IU, Cell/Tissue - Biomaterial Interaction,1,BEBE22IU01,20,Hết,*,Tư,4,3,C.420,H.C.Khon
BM094IU,BM094IU, Principles of Clinical Test and Instrumentation,1,BEBE22IU21,22,Hết,*,Năm,1,4,LA1.210,H.C.Khon
BM094IU,BM094IU, Principles of Clinical Test and Instrumentation,1,BEBE22IU21,22,Hết,*,,,,,
BM094IU,BM094IU, Principles of Clinical Test and Instrumentation,1,BEBE22IU21,22,Hết,*,Ba,1,3,L101,H.C.Khon
BM096IU,BM096IU, AI for Healthcare,1,BEBE22IU01,30,5,,Ba,7,3,L103,N.T.Lụa
BM096IU,BM096IU, AI for Healthcare,2,BEBE22IU11,50,10,,Sáu,1,3,A1.201,N.T.Lụa
BM098IU,BM098IU, Chemistry for BME Laboratory,2,BEBE23IU01,20,1,,Năm,7,4,LC.109,T.P.Long
BM101IU,BM101IU, Mechanical design and Manufacturing processes in Biomedical Engineering,2,BEBE22IU41,35,Hết,,Tư,4,3,L101,N.T.Quả
BM104IU,BM104IU, Microfluidics,1,BEBE22IU11,22,2,*,Năm,7,4,LA2.413,N.T.Quả
BM104IU,BM104IU, Microfluidics,1,BEBE22IU11,22,2,,,,,,
BM104IU,BM104IU, Microfluidics,1,BEBE22IU11,22,2,*,Năm,7,4,LA2.413,H.C.Khon
BM104IU,BM104IU, Microfluidics,1,BEBE22IU11,22,2,,Sáu,4,3,L101,N.T.Quả
BM104IU,BM104IU, Microfluidics,1,BEBE22IU11,22,2,,Ba,4,3,L101,H.C.Khon
CH014IU,CH014IU, Chemistry for BME,1,BEBE22IU41,20,Hết,,Ba,4,3,A2.310,T.P.Long
CH014IU,CH014IU, Chemistry for BME,1,BEBE22IU41,20,Hết,,,,,,
CH014IU,CH014IU, Chemistry for BME,1,BEBE22IU41,20,Hết,,Ba,4,3,A2.310,Đ.N.Hoan
CH014IU,CH014IU, Chemistry for BME,2,BEBE22IU41,25,1,,Sáu,7,3,A2.410,Đ.N.Hoan
CH014IU,CH014IU, Chemistry for BME,2,BEBE22IU41,25,1,,,,,,
CH014IU,CH014IU, Chemistry for BME,2,BEBE22IU41,25,1,,Sáu,7,3,A2.410,T.P.Long
CE101IU,CE101IU, Engineering Mechanic - Statics,1,CECE24IU41,25,14,,Bảy,1,3,A2.411,P.N.Hoa
CE102IU,CE102IU, Introduction to Computing for Engineers,1,CECE23IU41,25,17,,Tư,7,3,L101,P.N.Hoa
CE103IU,CE103IU, Computer-Aided Design and Drafting (CADD),1,CECE24IU41,25,5,,Hai,1,3,A1.207B,T.T.Hà
CE104IU,CE104IU, Practice CADD,1,CECE24IU41,25,4,,Ba,7,4,LA1.505,T.T.Hà
CE105IU,CE105IU, Engineering Mechanics and Mechanics of Materials,1,CECM24IU11,25,7,,Sáu,4,3,L106,N.B.Q.Vinh
CE106IU,CE106IU, Soil mechanics and foundation,1,CECM23IU11,25,18,,Ba,1,3,L102,P.N.L.Khánh
CE205IU,CE205IU, Fluid Mechanics,1,CECE22IU41,40,14,,Năm,4,2,A2.511,P.Ngoc
CE206IU,CE206IU, Fluid Mechanics Laboratory,1,CECE22IU41,25,Hết,,Tư,7,4,LA1.103,P.Ngoc
CE208IU,CE208IU, Mechanics of Materials 2,1,CECE22IU41,25,15,,Hai,1,3,LA1.505,N.B.Q.Vinh
CE209IU,CE209IU, Structural Analysis 1,1,CECM23IU11,25,12,,Tư,4,3,A2.510,L.V.Canh
CE210IU,CE210IU, Construction Materials,1,CECE22IU41,25,11,,Bảy,1,3,LA1.505,N.Đ.Hùng
CE211IU,CE211IU, Hydrology- Hydraulics,1,CECE20IU11,25,20,,Hai,7,3,L107,C.D.Angeli
CE213IU,CE213IU, Computational Methods for Ciivil Engineering,1,CECE20IU11,25,18,,Bảy,4,3,LA1.505,N.B.Q.Vinh
CE214IU,CE214IU, Civil Architecture,1,CECE20IU41,25,13,,Sáu,5,2,L104,N.V.Tiếp
CE215IU,CE215IU, Applied Linear Algebra,1,CECE20IU11,25,9,,Hai,5,2,A2.309,T.C.T.Ngoc
CE301IU,CE301IU, Structural Analysis 2,1,CECE20IU31,25,21,,Tư,1,3,A2.310,L.V.Canh
CE302IU,CE302IU, Soil Mechanics,1,CECE20IU31,25,19,,Năm,4,3,A2.311,P.N.L.Khánh
CE303IU,CE303IU, Soil Mechanics Laboratory,1,CECE20IU31,25,21,,Sáu,7,4,LA1.104,P.N.L.Khánh
CE304IU,CE304IU, Reinforced concrete 1,1,CECM23IU11,25,6,,Hai,1,3,A1.603,T.C.T.Ngoc
CE305IU,CE305IU, Steel Structures,1,CECE20IU31,25,9,,Năm,7,3,L101,P.N.Hoa
CE306IU,CE306IU, Water Supply and Sewerage,1,CECE20IU31,25,15,,Năm,1,3,L101,C.D.Angeli
CE309IU,CE309IU, Foundation Engineering,1,CECE20IU41,6,Hết,,Sáu,4,3,A2.412,P.N.L.Khánh
CE309IU,CE309IU, Foundation Engineering,1,CECE20IU41,6,Hết,,,,,,
CE309IU,CE309IU, Foundation Engineering,1,CECE20IU41,6,Hết,,Sáu,4,3,ONLINE,P.N.L.Khánh
CE312IU,CE312IU, Steel Structure Project,1,CECE20IU41,25,22,,,0,0,,P.N.Hoa
CE313IU,CE313IU, Reinforced Concrete Project,1,CECE20IU41,25,23,,,0,0,,T.C.T.Ngoc
CE401IU,CE401IU, Construction Management,1,CECE20IU31,25,12,,Tư,4,3,L102,N.V.Tiếp
CE402IU,CE402IU, Foundation Project,1,CECE20IU41,25,17,,,0,0,,P.N.L.Khánh
CE403IU,CE403IU, Construction Project,1,CECE20IU41,25,10,,,0,0,,N.H.Nghia
CE405IU,CE405IU, Hydraulic Structures,1,CECE20IU41,25,18,,Sáu,7,3,L111,P.Ngoc
CE420IU,CE420IU, Thesis,1,CECE20IU41,25,19,,,0,0,,P.N.L.Khánh
CH011IU,CH011IU, Chemistry for Engineers,1,CHCE23IU01,50,3,,Ba,1,3,A2.509,N.T.H.Hải
CH011IU,CH011IU, Chemistry for Engineers,2,CHCE23IU01,100,1,,Tư,1,3,A1.208,N.T.Thuan
CH011IU,CH011IU, Chemistry for Engineers,3,CHCE23IU01,50,2,,Sáu,4,3,A2.501,N.T.D.Quang
CH011IU,CH011IU, Chemistry for Engineers,4,CHCE23IU01,90,15,,Ba,1,3,A2.205,P.T.Khoa
CH011IU,CH011IU, Chemistry for Engineers,5,CHCE24IU01,90,12,,Năm,7,3,A1.208,H.K.Lam
CH011IU,CH011IU, Chemistry for Engineers,6,CHCE24IU01,90,27,,Sáu,1,3,A2.205,H.K.Lam
CH011IU,CH011IU, Chemistry for Engineers,7,CHCE24IU01,45,Hết,,Sáu,7,3,A2.307,N.T.D.Quang
CHE0011IU,CHE0011IU, Applied Mechanics,1,CHCE22IU21,50,Hết,,Bảy,1,3,L102,P.T.Tùng
CHE0031IU,CHE0031IU, Research Methodology,1,BTCH21IU01,50,Hết,,Sáu,7,3,A2.509,H.K.Lam
CHE1011IU,CHE1011IU, Introduction to Chemical Engineering,1,CHCE22IU21,80,15,,Tư,4,3,A2.301,H.K.Lam
CHE1043IU,CHE1043IU, Physical Chemistry 2,1,BTCH21IU01,50,10,,Năm,4,3,L202,N.T.Thuan
CHE1044IU,CHE1044IU, Physical Chemistry 2 Lab,1,BTCH21IU01,25,13,,Bảy,1,5,LA2.502,N.T.Thuan
CHE1044IU,CHE1044IU, Physical Chemistry 2 Lab,2,BTCH21IU01,25,Hết,,Tư,7,5,LA2.502,N.T.Thuan
CHE1051IU,CHE1051IU, Analytical Chemistry 1,1,CHCE22IU21,51,Hết,,Hai,4,3,A2.412,N.T.Trang
CHE1091IU,CHE1091IU, Organic Chemistry 2,1,BTCH21IU01,50,2,,Tư,1,3,L108,L.Q.Phong
CHE1092IU,CHE1092IU, Organic Chemistry Laboratory,1,BTCH21IU01,25,3,,Sáu,1,5,LA2.502,L.Q.Phong
CHE1092IU,CHE1092IU, Organic Chemistry Laboratory,2,BTCH21IU01,25,9,,Ba,7,5,LA2.502,L.Q.Phong
CHE1104IU,CHE1104IU, Biochemistry,1,BTCH21IU01,50,22,,Tư,4,3,A2.412,N.T.Trang
CHE1105IU,CHE1105IU, Biochemistry Lab,2,BTCH21IU01,20,10,,Sáu,1,5,LA1.502,N.N.T.Đạt
CHE1105IU,CHE1105IU, Biochemistry Lab,3,BTCH21IU01,20,Hết,,Năm,7,5,LA2.502,N.N.T.Đạt
CHE1111IU,CHE1111IU, Industrial Chemistry,1,CHCE22IU21,30,6,,Bảy,7,2,L202,P.T.Khoa
CHE2041IU,CHE2041IU, Mass Transfer Operations,1,CHCE22IU21,50,2,,Bảy,4,3,L101,Đ.H.Linh
CHE2051IU,CHE2051IU, Heat Transfer Operations,1,BTCH21IU01,50,Hết,,Bảy,7,3,L101,Đ.H.Linh
CHE2061IU,CHE2061IU, Chemical Reaction Engineering,1,BTCH21IU01,60,3,,Năm,1,3,A2.507,P.T.Khoa
CHE2103IU,CHE2103IU, Inorganic Chemistry,1,CHCE22IU21,60,10,,Tư,1,3,L202,P.T.Khoa
CHE2104IU,CHE2104IU, Inorganic Chemistry Lab,1,CHCE22IU21,21,1,,Sáu,1,5,LA1.501,P.T.Khoa
CHE2104IU,CHE2104IU, Inorganic Chemistry Lab,3,CHCE22IU21,20,Hết,,Sáu,7,5,LA1.501,P.T.Khoa
CHE4012IU,CHE4012IU, Research 1,1,BTCH21IU01,30,4,,,0,0,,H.K.Lam
CHE4022IU,CHE4022IU, Research 2,1,BTCH21IU01,30,20,,,0,0,,H.K.Lam
CHE4052IU,CHE4052IU, Thesis,1,BTCH21IU01,20,15,,,0,0,,H.K.Lam
CM202IU,CM202IU, Construction Measurement and Cost Estimating,1,CECM23IU11,25,12,,Sáu,1,3,A2.311,N.H.Nghia
CM203IU,CM203IU, Construction Management Project,1,CECM23IU11,25,18,,,0,0,,T.T.Hà
CM205IU,CM205IU, Introduction to Construction Management,1,CECM23IU11,25,15,,Năm,7,2,C.501,T.T.Hà
CM301IU,CM301IU, Operation Management in Construction,1,CECM23IU11,25,16,,Hai,7,3,C.420,P.T.Tùng
CM309IU,CM309IU, Construction Economics,1,CECM23IU11,25,10,,Năm,1,3,LA1.505,N.H.Nghia
CM310IU,CM310IU, Building Information Management,1,CECM23IU11,25,16,,Tư,1,3,L102,T.T.Hà
ENEE1002IU,ENEE1002IU, Hydraulics for Environmental Engineering,1,CHEV22IU01,10,5,*,Tư,1,5,LA1.104,C.D.Angeli
ENEE1002IU,ENEE1002IU, Hydraulics for Environmental Engineering,1,CHEV22IU01,10,5,*,,,,,
ENEE1002IU,ENEE1002IU, Hydraulics for Environmental Engineering,1,CHEV22IU01,10,5,*,Sáu,4,3,C.501,C.D.Angeli
ENEE1002IU,ENEE1002IU, Hydraulics for Environmental Engineering,1,CHEV22IU01,10,5,*,Sáu,4,3,LA1.505,C.D.Angeli
ENEE1013IU,ENEE1013IU, Engineering Drawing,1,CHEV22IU01,60,13,,Bảy,4,3,A2.401,P.T.Tùng
ENEE1014IU,ENEE1014IU, Engineering Drawing Lab,1,CHEV22IU01,34,Hết,,Ba,1,5,LA1.505,P.T.Tùng
ENEE1014IU,ENEE1014IU, Engineering Drawing Lab,2,CHEV22IU01,30,24,,Tư,1,5,LA1.505,P.T.Tùng
ENEE1015IU,ENEE1015IU, Biochemistry,1,CHEV22IU01,15,9,,Năm,4,3,A2.312,N.T.Trang
ENEE1016IU,ENEE1016IU, Biochemistry Lab,1,CHEV22IU01,15,9,,Hai,1,5,LA2.502,N.N.T.Đạt
ENEE1017IU,ENEE1017IU, Fundamental of Analytical Chemistry,1,CHEV22IU01,15,9,,Bảy,7,3,L106,N.T.Thuan
ENEE1018IU,ENEE1018IU, Fundamental of Analytical Chemistry Lab,1,CHEV22IU01,15,9,,Sáu,7,5,LA2.502,N.N.T.Đạt
ENEE1019IU,ENEE1019IU, Applied Statistics in Environment,1,CHCE22IU21,50,2,,Hai,1,3,A2.507,T.T.Tu
ENEE1020IU,ENEE1020IU, Applied Statistics in Environment Lab,1,CHCE22IU21,25,2,,Năm,1,5,LA1.608,T.T.Tu
ENEE1020IU,ENEE1020IU, Applied Statistics in Environment Lab,2,CHCE22IU21,25,Hết,,Ba,7,5,LA1.607,T.T.Tu
ENEE2008IU,ENEE2008IU, Environmental Ecology,1,CHEV22IU01,15,3,,Tư,7,4,C.501,T.T.Canh
ENEE2017IU,ENEE2017IU, Introduction to Computing,1,CHEV22IU01,15,8,,Bảy,1,3,L109,L.T.Nga
ENEE2024IU,ENEE2024IU, Mechanics of Materials,1,CHEV22IU01,15,8,,Sáu,1,3,L106,P.N.Hoa
ENEE3110IU,ENEE3110IU, Project 1,1,EVEV21IU41,5,3,,,0,0,,N.T.Thủy
ENEE3111IU,ENEE3111IU, Project 2,1,EVEV21IU41,5,2,,,0,0,,N.M.Linh
ENEE3112IU,ENEE3112IU, Project 3,1,EVEV21IU41,5,2,,,0,0,,P.T.Tùng
ENEE4007IU,ENEE4007IU, Climate Change Mitigation and Adaptation,1,EVEV21IU41,15,6,,Năm,7,3,A1.603,T.T.Tu
ENEE4016IU,ENEE4016IU, Construction Measurement and Cost Estimating,1,EVEV21IU41,15,9,,Sáu,7,3,LA1.505,N.H.Nghia
ENEE5000IU,ENEE5000IU, Pre-thesis,1,EVEV21IU41,10,3,,,0,0,,H.K.Lam
ENEE5003IU,ENEE5003IU, Thesis,1,EVEV21IU41,10,9,,,0,0,,H.K.Lam
PE014IU,PE014IU, Environmental Science,1,CHCE23IU21,89,20,,Hai,4,3,A1.201,N.T.H.Hải
PE014IU,PE014IU, Environmental Science,2,CHCE23IU21,89,9,,Năm,7,3,A2.307,N.T.H.Hải
PE014IU,PE014IU, Environmental Science,3,CHCE23IU21,89,6,,Hai,1,3,A2.407,N.T.Thuan
PE014IU,PE014IU, Environmental Science,4,CHCE23IU21,89,24,,Hai,4,3,A2.307,T.T.Tu
PE014IU,PE014IU, Environmental Science,5,CHCE23IU21,89,24,,Hai,7,3,A2.407,P.T.Hoa
PE014IU,PE014IU, Environmental Science,6,CHCE23IU21,89,25,,Sáu,1,3,A1.401,N.T.Thủy
PE014IU,PE014IU, Environmental Science,7,CHCE24IU21,50,1,,Sáu,1,3,A2.407,B.X.A.Dao
PE014IU,PE014IU, Environmental Science,8,CHCE23IU21,89,1,,Bảy,1,3,A1.208,B.X.A.Dao
PE014IU,PE014IU, Environmental Science,9,CHCE23IU21,90,6,,Tư,4,3,A1.109,N.H.Lan
EE010IU,EE010IU, Electromagnetic Theory,1,EEEE22IU11,35,Hết,,Năm,1,3,A2.312,P.T.Kien
EE010IU,EE010IU, Electromagnetic Theory,2,EEEE22IU11,40,2,,Bảy,1,3,A1.401,P.T.Kien
EE049IU,EE049IU, Introduction to Electrical Engineering,1,EEEE22IU01,50,Hết,,Bảy,4,3,A2.412,T.Q.Hiển
EE050IU,EE050IU, Introduction to Computer for Engineers,1,EEEE22IU01,60,Hết,,Hai,4,3,LA1.301,T.Q.Hiển
EE050IU,EE050IU, Introduction to Computer for Engineers,2,EEEE24IU01,60,Hết,,Ba,1,3,LA1.301,T.Q.Hiển
EE051IU,EE051IU, Principles of EE1,1,EEEE22IU01,50,1,,Hai,1,3,A1.401,T.V.Su
EE051IU,EE051IU, Principles of EE1,2,EEEE22IU01,50,Hết,,Tư,1,3,A2.410,T.V.Su
EE052IU,EE052IU, Principles of EE1 Laboratory,1,EEEE22SB21,26,Hết,,Ba,7,4,LA2.201,N.M.Thiện
EE052IU,EE052IU, Principles of EE1 Laboratory,2,EEEE22SB21,26,Hết,,Sáu,7,4,LA2.201,N.M.Thiện
EE052IU,EE052IU, Principles of EE1 Laboratory,3,EEEE22SB21,26,Hết,,Tư,7,4,LA2.201,N.M.Thiện
EE052IU,EE052IU, Principles of EE1 Laboratory,4,EEEE22SB21,20,14,,Hai,1,4,LA2.201,N.M.Thiện
EE053IU,EE053IU, Digital Logic Design,1,EEEE22IU01,45,1,,Sáu,1,3,L109,V.Q.Bao
EE053IU,EE053IU, Digital Logic Design,2,EEEE22IU01,45,1,,Ba,7,3,L102,V.Q.Bao
EE054IU,EE054IU, Digital Logic Design Laboratory,1,EEEE22SB21,26,1,,Hai,7,4,LA2.208,V.Q.Bao
EE054IU,EE054IU, Digital Logic Design Laboratory,2,EEEE22SB21,22,Hết,,Ba,1,4,LA2.208,V.Q.Bao
EE054IU,EE054IU, Digital Logic Design Laboratory,3,EEEE22SB21,20,8,,Hai,1,4,LA2.208,V.Q.Bao
EE055IU,EE055IU, Principles of EE2,1,EEEE22IU41,50,29,,Năm,1,3,L102,N.L.Luật
EE056IU,EE056IU, Principles of EE2 Laboratory,1,EEEE22IU41,20,6,,Sáu,1,4,LA2.201,N.L.Luật
EE057IU,EE057IU, Programming for Engineers (C),1,EEEE22IU01,54,3,,Ba,1,3,A1.402,H.T.Quốc
EE057IU,EE057IU, Programming for Engineers (C),2,EEEE22IU01,54,Hết,,Ba,1,3,L103,N.T.Hiếu
EE058IU,EE058IU, Programming for Engineers Laboratory,1,EEEE22IU41,26,3,,Hai,1,4,LA2.207,H.T.Quốc
EE058IU,EE058IU, Programming for Engineers Laboratory,2,EEEE22IU41,26,1,,Bảy,1,4,LA2.207,N.T.Hiếu
EE058IU,EE058IU, Programming for Engineers Laboratory,3,EEEE22IU41,26,Hết,,Hai,7,4,LA2.207,N.T.Hiếu
EE058IU,EE058IU, Programming for Engineers Laboratory,4,EEEE22IU41,26,4,,Hai,7,4,LA2.210,H.T.Quốc
EE068IU,EE068IU, Principles of Communication Systems,1,EEEE22IU21,30,6,,Sáu,1,3,L205,H.V.T.Dung
EE072IU,EE072IU, Computer and Communication Networks,1,EEEE22IU21,30,1,,Sáu,4,3,L109,V.Q.Bao
EE083IU,EE083IU, Micro-processing Systems,1,EEEE22IU11,51,Hết,,Năm,4,3,L207,V.M.Thanh
EE084IU,EE084IU, Micro-processing Systems Laboratory,1,EEEE22SB41,26,Hết,,Tư,7,4,LA2.202,V.M.Thanh
EE084IU,EE084IU, Micro-processing Systems Laboratory,2,EEEE22SB41,27,Hết,,Bảy,7,4,LA2.202,V.M.Thanh
EE088IU,EE088IU, Signals & Systems,1,EEEE22SB21,50,Hết,,Tư,4,3,A2.410,D.N.Hung
EE088IU,EE088IU, Signals & Systems,2,EEEE22SB21,32,1,,Tư,1,3,LA2.207,D.N.Hung
EE089IU,EE089IU, Signals & Systems Laboratory,1,EEEE22SB21,27,Hết,,Sáu,1,4,LA2.207,D.N.Hung
EE089IU,EE089IU, Signals & Systems Laboratory,2,EEEE22SB21,26,4,,Năm,7,4,LA2.207,D.N.Hung
EE089IU,EE089IU, Signals & Systems Laboratory,3,EEEE22SB21,24,Hết,,Hai,1,4,LA2.202,D.N.Hung
EE090IU,EE090IU, Electronics Devices,1,EEEE22SB21,50,8,,Bảy,7,3,A2.309,N.B.Duong
EE091IU,EE091IU, Electronics Devices Laboratory,1,EEEE22SB21,20,9,,Sáu,7,4,LA2.202,P.T.Kien
EE091IU,EE091IU, Electronics Devices Laboratory,2,EEEE22SB21,20,2,,Ba,1,4,LA2.202,P.T.Kien
EE092IU,EE092IU, Digital Signal Processing,1,EEEE22SB41,70,4,,Bảy,1,3,A1.201,L.T.Thuong
EE093IU,EE093IU, Digital Signal Processing Laboratory,1,EEEE22SB41,24,Hết,,Ba,7,4,LA2.202,T.Q.Hiển
EE093IU,EE093IU, Digital Signal Processing Laboratory,2,EEEE22SB41,19,5,,Năm,1,4,LA2.202,T.Q.Hiển
EE097IU,EE097IU, Thesis,1,EEEE22IU41,80,66,,,0,0,,
EE102IU,EE102IU, Stochastic Signal Processing,1,EEEE22IU21,30,16,,Bảy,7,3,A2.411,D.H.Tuan
EE103IU,EE103IU, Image Processing,1,EEEE22IU41,30,22,,Sáu,7,3,A2.412,N.N.T.Minh
EE105IU,EE105IU, Antennas and Microwave Engineering,1,EEEE22IU41,13,6,,Hai,1,3,LA2.514,P.T.Kien
EE107IU,EE107IU, Senior Project,1,EEEE22IU41,80,49,,,0,0,,D.N.Hung
EE114IU,EE114IU, Entrepreneurship,1,EEEE22IU11,50,29,,Hai,7,3,A1.603,H.Diep
EE115IU,EE115IU, Principles of Communication Systems Lab,1,EEEE22SB41,26,18,,Ba,1,4,LA2.207,H.V.T.Dung
EE115IU,EE115IU, Principles of Communication Systems Lab,2,EEEE22IU11,20,6,,Năm,7,4,LA2.202,H.V.T.Dung
EE122IU,EE122IU, Image Processing Lab,1,EEEE22SB41,20,11,,Ba,7,4,LA2.207,N.N.T.Minh
EE124IU,EE124IU, Antennas and Microwave Engineering Lab,1,EEEE22SB41,13,7,,Tư,1,4,LA2.202,N.M.Thiện
EE127IU,EE127IU, Machine Learning and Artificial Intelligence,1,EEEE22IU21,30,Hết,,Sáu,7,3,LA2.207,D.N.Hung
EE130IU,EE130IU, Capstone Design 1,1,EEEE22IU11,60,4,,Bảy,5,2,A1.402,N.D.Uyen
EE131IU,EE131IU, Capstone Design 2,1,EEEE22IU41,50,30,,,0,0,,D.N.Hung
EE133IU,EE133IU, Emerging Engineering Technologies,1,EEEE22IU21,30,Hết,,Hai,1,3,A2.313,T.Q.Hiển
EE133IU,EE133IU, Emerging Engineering Technologies,1,EEEE22IU21,30,Hết,,,,,,
EE133IU,EE133IU, Emerging Engineering Technologies,1,EEEE22IU21,30,Hết,,Hai,1,3,A2.313,H.V.T.Dung
EEAC001IU,EEAC001IU, Materials Science & Engineering,1,EEAC22IU41,50,2,,Tư,7,3,L103,N.D.Uyen
EEAC001IU,EEAC001IU, Materials Science & Engineering,2,EEEE24IU01,40,5,,Sáu,1,3,A2.601,N.D.Uyen
EEAC004IU,EEAC004IU, PC Based Control and SCADA System,1,EEAC22IU41,40,Hết,,Sáu,4,3,L110,N.B.Duong
EEAC005IU,EEAC005IU, PC Based Control and SCADA System Lab,1,EEAC22IU41,26,6,,Tư,1,4,LA2.210,N.B.Duong
EEAC005IU,EEAC005IU, PC Based Control and SCADA System Lab,2,EEAC22IU41,20,1,,Năm,7,4,LA2.210,N.B.Duong
EEAC006IU,EEAC006IU, Programmable Logic Control (PLC),1,EEAC22IU41,30,Hết,,Năm,1,3,A2.511,T.T.Long
EEAC007IU,EEAC007IU, Programmable Logic Control (PLC) Lab,1,EEAC22IU41,26,1,,Hai,1,4,LA2.210,T.T.Long
EEAC015IU,EEAC015IU, Robotics,1,EEAC22IU41,32,Hết,,Ba,4,3,A2.509,H.T.Quốc
EEAC017IU,EEAC017IU, Digital Control,1,EEAC22IU41,30,Hết,,Sáu,1,3,L103,T.T.Long
EEAC020IU,EEAC020IU, Theory of Automatic Control,1,EEEE22IU11,50,20,,Sáu,7,4,L101,N.V.Bình
EEAC021IU,EEAC021IU, Mathematics for Engineers,1,EEAC22IU41,50,Hết,,Sáu,7,4,L103,H.V.T.Dung
PE015IU,PE015IU, Philosophy of Marxism and Leninism,1,MAST23IU41,50,10,,Bảy,7,3,A2.511,T.T.Thanh
PE015IU,PE015IU, Philosophy of Marxism and Leninism,2,MAST23IU41,90,28,,Tư,4,3,L201,L.D.Son
PE015IU,PE015IU, Philosophy of Marxism and Leninism,3,MAST23IU41,90,17,,Năm,7,3,A2.402,N.T.M.Huong
PE015IU,PE015IU, Philosophy of Marxism and Leninism,4,MAST23IU41,90,4,,Sáu,1,3,A2.508,V.T.T.Thảo
PE015IU,PE015IU, Philosophy of Marxism and Leninism,5,MAST24IU01,90,Hết,,Tư,1,3,A2.501,M.T.K.Trinh
PE015IU,PE015IU, Philosophy of Marxism and Leninism,6,MAST24IU01,110,13,,Tư,7,3,A1.309,L.D.Son
PE015IU,PE015IU, Philosophy of Marxism and Leninism,7,MAST24IU01,110,5,,Năm,1,3,A2.307,N.T.H.Hoa
PE015IU,PE015IU, Philosophy of Marxism and Leninism,8,MAST24IU01,90,27,,Hai,1,3,A1.309,N.T.T.Duyen
PE015IU,PE015IU, Philosophy of Marxism and Leninism,9,MAST24IU01,80,15,,Ba,1,3,L108,N.T.H.Hoa
PE015IU,PE015IU, Philosophy of Marxism and Leninism,10,MAST24IU01,50,3,,Bảy,7,3,A2.311,L.N.LINH
PE015IU,PE015IU, Philosophy of Marxism and Leninism,10,MAST24IU01,50,3,,,,,,
PE015IU,PE015IU, Philosophy of Marxism and Leninism,10,MAST24IU01,50,3,,Bảy,7,3,A2.311,L.T.T.VIỆT
PE016IU,PE016IU, Political economics of Marxism and Leninism,1,MAST23IU41,90,3,,Bảy,5,2,A1.201,H.T.V.Thuý
PE016IU,PE016IU, Political economics of Marxism and Leninism,2,MAST23IU41,90,4,,Hai,5,2,L201,L.V.Đại
PE016IU,PE016IU, Political economics of Marxism and Leninism,3,MAST23IU41,120,3,,Ba,5,2,A2.307,Q.T.M.TRANG
PE016IU,PE016IU, Political economics of Marxism and Leninism,4,MAST23IU41,50,1,,Sáu,5,2,L203,N.T.LONG
PE016IU,PE016IU, Political economics of Marxism and Leninism,5,MAST24IU01,50,7,,Sáu,7,2,A2.501,N.T.LONG
PE016IU,PE016IU, Political economics of Marxism and Leninism,6,MAST24IU01,50,21,,Sáu,9,2,A2.501,N.T.LONG
PE016IU,PE016IU, Political economics of Marxism and Leninism,7,MAST24IU01,50,20,,Năm,9,2,A2.311,P.T.T.Linh
PE016IU,PE016IU, Political economics of Marxism and Leninism,10,MAST24IU01,50,19,,Bảy,1,2,A2.501,H.T.V.Thuý
PE017IU,PE017IU, Scientific socialism,1,MAST23IU11,90,9,,Bảy,5,2,L207,Đ.K.Diễm
PE017IU,PE017IU, Scientific socialism,2,MAST23IU11,130,Hết,,Bảy,9,2,A2.307,B.V.Tuyển
PE017IU,PE017IU, Scientific socialism,2,MAST23IU11,130,Hết,,,,,,
PE017IU,PE017IU, Scientific socialism,2,MAST23IU11,130,Hết,,Bảy,9,2,A2.307,N.T.H.Như
PE017IU,PE017IU, Scientific socialism,3,MAST23IU11,50,Hết,,Năm,5,2,L110,N.T.H.Như
PE017IU,PE017IU, Scientific socialism,3,MAST23IU11,50,Hết,,,,,,
PE017IU,PE017IU, Scientific socialism,3,MAST23IU11,50,Hết,,Năm,5,2,L110,B.V.Tuyển
PE017IU,PE017IU, Scientific socialism,4,MAST23IU11,130,Hết,,Bảy,7,2,A2.307,B.V.Tuyển
PE017IU,PE017IU, Scientific socialism,4,MAST23IU11,130,Hết,,,,,,
PE017IU,PE017IU, Scientific socialism,4,MAST23IU11,130,Hết,,Bảy,7,2,A2.307,N.T.H.Như
PE017IU,PE017IU, Scientific socialism,5,MAST23IU11,50,Hết,,Bảy,5,2,L203,B.V.Tuyển
PE017IU,PE017IU, Scientific socialism,6,MAST23IU11,50,Hết,,Ba,5,2,L205,N.T.H.Như
PE017IU,PE017IU, Scientific socialism,6,MAST23IU11,50,Hết,,,,,,
PE017IU,PE017IU, Scientific socialism,6,MAST23IU11,50,Hết,,Ba,5,2,L205,B.V.Tuyển
PE017IU,PE017IU, Scientific socialism,7,MAST23IU11,50,Hết,,Tư,5,2,L110,B.V.Tuyển
PE017IU,PE017IU, Scientific socialism,8,MAST23IU11,50,Hết,,Hai,5,2,L110,B.V.Tuyển
PE017IU,PE017IU, Scientific socialism,9,MAST23IU11,50,Hết,,Hai,5,2,L204,Đ.K.Diễm
PE017IU,PE017IU, Scientific socialism,10,MAST23IU11,50,1,,Sáu,5,2,L206,B.V.Tuyển
PE017IU,PE017IU, Scientific socialism,10,MAST23IU11,50,1,,,,,,
PE017IU,PE017IU, Scientific socialism,10,MAST23IU11,50,1,,Sáu,5,2,L206,N.T.H.Như
PE018IU,PE018IU, History of Vietnamese Communist Party,1,MAST23IU11,50,1,,Bảy,7,2,A1.207A,T.T.Phượng
PE018IU,PE018IU, History of Vietnamese Communist Party,2,MAST23IU11,90,Hết,,Sáu,5,2,L207,N.V.That
PE018IU,PE018IU, History of Vietnamese Communist Party,3,MAST23IU11,50,1,,Hai,5,2,L203,T.T.Phượng
PE018IU,PE018IU, History of Vietnamese Communist Party,4,MAST23IU11,90,Hết,,Bảy,5,2,L201,T.T.Phượng
PE018IU,PE018IU, History of Vietnamese Communist Party,5,MAST23IU11,50,Hết,,Năm,5,2,L206,N.V.That
PE018IU,PE018IU, History of Vietnamese Communist Party,6,MAST23IU11,50,1,,Bảy,9,2,A1.207A,T.T.Phượng
PE018IU,PE018IU, History of Vietnamese Communist Party,7,MAST23IU11,50,1,,Bảy,7,2,A1.206,H.Y.Linh
PE018IU,PE018IU, History of Vietnamese Communist Party,8,MAST23IU11,50,Hết,,Bảy,9,2,A1.204,H.Y.Linh
PE018IU,PE018IU, History of Vietnamese Communist Party,9,MAST23IU11,50,Hết,,Hai,5,2,L206,L.K.Cương
PE018IU,PE018IU, History of Vietnamese Communist Party,10,MAST23IU11,50,Hết,,Năm,5,2,L203,H.Y.Linh
PE019IU,PE019IU, Ho Chi Minh's Thoughts,1,MAST23IU01,50,Hết,,Tư,5,2,L206,P.T.T.Huong
PE019IU,PE019IU, Ho Chi Minh's Thoughts,7,MAST23IU01,130,5,,Bảy,7,2,A2.407,L.T.Sáu
PE019IU,PE019IU, Ho Chi Minh's Thoughts,8,MAST23IU01,130,9,,Bảy,9,2,A2.407,L.T.Sáu
PE019IU,PE019IU, Ho Chi Minh's Thoughts,9,MAST23IU01,50,Hết,,Ba,5,2,L204,N.V.That
PE019IU,PE019IU, Ho Chi Minh's Thoughts,10,MAST23IU01,50,Hết,,Năm,5,2,L205,P.T.T.Huong
PE019IU,PE019IU, Ho Chi Minh's Thoughts,11,MAST23IU01,50,Hết,,Bảy,5,2,L206,L.T.Sáu
PE019IU,PE019IU, Ho Chi Minh's Thoughts,12,MAST23IU01,50,Hết,,Tư,5,2,L203,N.T.V.Ha
PE020IU,PE020IU, Engineering Ethics and Professional Skills,1,EEEE23WE41,50,14,,Năm,7,3,A1.402,N.H.Nghia
PE020IU,PE020IU, Engineering Ethics and Professional Skills,2,EEEE23WE41,51,Hết,,Tư,7,3,A2.401,P.T.Kien
PE020IU,PE020IU, Engineering Ethics and Professional Skills,3,EEEE23WE41,50,18,,Hai,1,3,A2.412,N.H.Nghia
PE020IU,PE020IU, Engineering Ethics and Professional Skills,4,EEEE23WE41,54,1,,Hai,7,3,A2.601,H.V.T.Dung
PE020IU,PE020IU, Engineering Ethics and Professional Skills,5,CECE20IU41,50,30,,Hai,7,3,A2.408,N.H.Nghia
PE021IU,PE021IU, General Law,1,BABA244WE01,50,14,,Năm,1,3,A2.601,N.M.Quân
PE021IU,PE021IU, General Law,2,BABA234WE01,130,1,,Tư,4,3,A2.307,N.Đ.Hiếu
PE021IU,PE021IU, General Law,3,BABA234WE01,126,3,,Bảy,4,3,A2.307,N.Đ.Hiếu
PE021IU,PE021IU, General Law,4,BABA234WE01,128,2,,Tư,4,3,A2.407,N.M.Quân
PE021IU,PE021IU, General Law,5,BABA234WE01,126,6,,Bảy,4,3,A2.407,N.M.Quân
PT001IU,PT001IU, Physical Training 1,1,EEEE23WE01,45,2,,Hai,7,3,MARTIAL.,T.T.T.My
PT001IU,PT001IU, Physical Training 1,2,EEEE23WE01,45,Hết,,Hai,2,3,TABLE TEN.,N.Đ.Thịnh
PT001IU,PT001IU, Physical Training 1,3,EEEE23WE01,47,Hết,,Năm,7,3,VOLLEYBALL,N.Đ.Thịnh
PT001IU,PT001IU, Physical Training 1,4,EEEE23WE01,45,3,,Tư,7,3,BASKETBALL,L.X.An
PT001IU,PT001IU, Physical Training 1,5,EEEE23WE01,40,11,,Sáu,7,3,SWIMMING,P.T.Dịu
PT001IU,PT001IU, Physical Training 1,6,EEEE24WE01,50,12,,Hai,2,3,MARTIAL.,T.T.T.My
PT001IU,PT001IU, Physical Training 1,7,EEEE24WE01,50,12,,Ba,7,3,MARTIAL.,T.T.T.My
PT001IU,PT001IU, Physical Training 1,8,EEEE24WE01,50,11,,Tư,7,3,MARTIAL.,T.T.T.My
PT001IU,PT001IU, Physical Training 1,9,EEEE24WE01,50,15,,Sáu,7,3,MARTIAL.,T.T.T.My
PT001IU,PT001IU, Physical Training 1,10,EEEE24WE01,50,11,,Bảy,7,3,MARTIAL.,V.N.Thanh
PT001IU,PT001IU, Physical Training 1,11,EEEE24WE01,42,1,,Năm,7,3,TABLE TEN.,H.M.Hung
PT001IU,PT001IU, Physical Training 1,12,EEEE24WE01,42,2,,Năm,2,3,TABLE TEN.,H.M.Hung
PT001IU,PT001IU, Physical Training 1,13,EEEE24WE01,43,Hết,,Bảy,2,3,TABLE TEN.,H.M.Hung
PT001IU,PT001IU, Physical Training 1,14,EEEE24WE01,40,Hết,,Bảy,7,3,TABLE TEN.,H.Q.Khánh
PT001IU,PT001IU, Physical Training 1,15,EEEE24WE01,40,4,,Ba,2,3,VOLLEYBALL,C.H.Châu
PT001IU,PT001IU, Physical Training 1,16,EEEE24WE01,40,2,,Tư,2,3,VOLLEYBALL,L.X.An
PT001IU,PT001IU, Physical Training 1,17,EEEE24WE01,40,1,,Sáu,7,3,VOLLEYBALL,L.X.An
PT001IU,PT001IU, Physical Training 1,18,EEEE24WE01,42,1,,Hai,7,3,BASKETBALL,L.X.An
PT001IU,PT001IU, Physical Training 1,19,EEEE24WE01,42,Hết,,Năm,2,3,BASKETBALL,N.Đ.Thịnh
PT001IU,PT001IU, Physical Training 1,20,EEEE24WE01,41,Hết,,Sáu,2,3,BASKETBALL,L.X.An
PT001IU,PT001IU, Physical Training 1,21,EEEE24WE01,40,5,,Hai,7,3,SWIMMING,P.T.Dịu
PT001IU,PT001IU, Physical Training 1,22,EEEE24WE01,37,1,,Bảy,2,3,SWIMMING,P.T.Dịu
PT001IU,PT001IU, Physical Training 1,23,EEEE23WE01,1,Hết,,Bảy,7,5,A2.409,H.M.Hung
PT001IU,PT001IU, Physical Training 1,24,EEEE24WE01,40,5,,Tư,2,3,SWIMMING,P.T.Dịu
PT001IU,PT001IU, Physical Training 1,25,EEEE24WE01,40,4,,Tư,7,3,SWIMMING,P.T.Dịu
PT001IU,PT001IU, Physical Training 1,26,EEEE24WE01,40,1,,Tư,7,3,TABLE TEN.,N.Đ.Thịnh
PT001IU,PT001IU, Physical Training 1,27,EEEE24WE01,40,4,,Bảy,2,3,VOLLEYBALL,L.X.An
PT002IU,PT002IU, Physical Training 2,1,EEEE23WE01,49,1,,Tư,2,3,MARTIAL.,T.T.T.My
PT002IU,PT002IU, Physical Training 2,2,EEEE23WE01,50,Hết,,Năm,2,3,MARTIAL.,T.T.T.My
PT002IU,PT002IU, Physical Training 2,3,EEEE23WE01,47,Hết,,Hai,7,3,TABLE TEN.,N.Đ.Thịnh
PT002IU,PT002IU, Physical Training 2,4,EEEE23WE01,49,1,,Hai,2,3,VOLLEYBALL,L.X.An
PT002IU,PT002IU, Physical Training 2,5,EEEE23WE01,49,2,,Ba,7,3,VOLLEYBALL,C.H.Châu
PT002IU,PT002IU, Physical Training 2,6,EEEE23WE01,49,2,,Bảy,2,3,BASKETBALL,H.Q.Khánh
PT002IU,PT002IU, Physical Training 2,7,EEEE23WE01,39,2,,Sáu,2,3,SWIMMING,P.T.Dịu
IT013IU,IT013IU, Algorithms & Data Structures,1,ITIT23UN01,61,Hết,*,Tư,7,3,LA1.302,T.T.Tín
IT013IU,IT013IU, Algorithms & Data Structures,1,ITIT23UN01,61,Hết,*,,,,,
IT013IU,IT013IU, Algorithms & Data Structures,1,ITIT23UN01,61,Hết,*,Ba,1,3,A2.608,T.T.Tung
IT013IU,IT013IU, Algorithms & Data Structures,1,ITIT23UN01,30,Hết,*,Năm,4,3,LA1.604,T.T.Tín
IT013IU,IT013IU, Algorithms & Data Structures,1,ITIT23UN01,30,Hết,*,,,,,
IT013IU,IT013IU, Algorithms & Data Structures,1,ITIT23UN01,30,Hết,*,Ba,1,3,A2.608,T.T.Tung
IT013IU,IT013IU, Algorithms & Data Structures,2,ITIT23UN01,61,Hết,*,Hai,7,3,LA1.302,T.T.Tín
IT013IU,IT013IU, Algorithms & Data Structures,2,ITIT23UN01,61,Hết,*,,,,,
IT013IU,IT013IU, Algorithms & Data Structures,2,ITIT23UN01,61,Hết,*,Ba,4,3,A2.507,V.C.Thành
IT013IU,IT013IU, Algorithms & Data Structures,2,ITIT23UN01,30,Hết,*,Bảy,4,3,LA1.607,T.T.Tín
IT013IU,IT013IU, Algorithms & Data Structures,2,ITIT23UN01,30,Hết,*,,,,,
IT013IU,IT013IU, Algorithms & Data Structures,2,ITIT23UN01,30,Hết,*,Ba,4,3,A2.507,V.C.Thành
IT013IU,IT013IU, Algorithms & Data Structures,3,ITIT23UN01,30,1,*,Năm,7,3,LA1.604,T.T.Tín
IT013IU,IT013IU, Algorithms & Data Structures,3,ITIT23UN01,30,1,*,,,,,
IT013IU,IT013IU, Algorithms & Data Structures,3,ITIT23UN01,30,1,*,Sáu,4,3,L201,V.C.Thành
IT013IU,IT013IU, Algorithms & Data Structures,3,ITIT23UN01,30,Hết,*,Hai,1,3,LA1.608,T.T.Tín
IT013IU,IT013IU, Algorithms & Data Structures,3,ITIT23UN01,30,Hết,,,,,,
IT013IU,IT013IU, Algorithms & Data Structures,3,ITIT23UN01,30,Hết,*,Hai,1,3,ONLINE2,T.T.Tín
IT013IU,IT013IU, Algorithms & Data Structures,3,ITIT23UN01,30,Hết,,Sáu,4,3,L201,V.C.Thành
IT013IU,IT013IU, Algorithms & Data Structures,3,ITIT23UN01,30,Hết,*,Tư,4,3,LA1.608,T.T.Tín
IT013IU,IT013IU, Algorithms & Data Structures,3,ITIT23UN01,30,Hết,*,Tư,4,3,ONLINE,T.T.Tín
IT017IU,IT017IU, Operating Systems,1,ITIT23IU21,31,2,*,Hai,1,3,LA1.604,Đ.T.Nhân
IT017IU,IT017IU, Operating Systems,1,ITIT23IU21,31,2,*,,,,,
IT017IU,IT017IU, Operating Systems,1,ITIT23IU21,31,2,*,Bảy,1,3,A2.407,T.M.Ha
IT017IU,IT017IU, Operating Systems,1,ITIT23IU21,35,Hết,*,Tư,1,3,LA1.604,Đ.T.Nhân
IT017IU,IT017IU, Operating Systems,1,ITIT23IU21,35,Hết,*,,,,,
IT017IU,IT017IU, Operating Systems,1,ITIT23IU21,35,Hết,*,Bảy,1,3,A2.407,T.M.Ha
IT017IU,IT017IU, Operating Systems,1,ITIT23IU21,35,Hết,*,Tư,4,3,LA1.604,Đ.T.Nhân
IT017IU,IT017IU, Operating Systems,2,ITIT23IU21,65,1,*,Sáu,7,3,LA1.301,T.M.Ha
IT017IU,IT017IU, Operating Systems,2,ITIT23IU21,65,1,*,,,,,
IT017IU,IT017IU, Operating Systems,2,ITIT23IU21,65,1,*,Sáu,1,3,A2.104,T.M.Ha
IT017IU,IT017IU, Operating Systems,2,ITIT23IU21,35,2,*,Bảy,1,3,LA1.607,Đ.T.Nhân
IT017IU,IT017IU, Operating Systems,2,ITIT23IU21,35,2,*,,,,,
IT017IU,IT017IU, Operating Systems,2,ITIT23IU21,35,2,*,Sáu,1,3,A2.104,T.M.Ha
IT024IU,IT024IU, Computer Graphics,1,ITIT22IU41,60,40,*,Bảy,7,4,LA1.301,T.K.Minh
IT024IU,IT024IU, Computer Graphics,1,ITIT22IU41,60,40,*,,,,,
IT024IU,IT024IU, Computer Graphics,1,ITIT22IU41,60,40,*,Sáu,1,3,A2.301,N.V.Sinh
IT058IU,IT058IU, Thesis,1,ITIT22IU41,100,22,,,0,0,,N.V.Sinh
IT064IU,IT064IU, Introduction to Computing,1,ITIT24WE31,110,3,,Ba,1,3,A1.208,H.K.Tu
IT067IU,IT067IU, Digital Logic Design,1,ITIT23WE01,100,5,,Tư,1,3,A1.109,Đ.Đ.A.Vũ
IT068IU,IT068IU, Principles of EE1,1,ITIT23WE01,20,Hết,,Sáu,7,3,A2.313,T.V.Su
IT069IU,IT069IU, Object-Oriented Programming,1,ITIT23UN41,35,Hết,*,Hai,4,3,LA1.604,N.T.Nghĩa
IT069IU,IT069IU, Object-Oriented Programming,1,ITIT23UN41,35,Hết,*,,,,,
IT069IU,IT069IU, Object-Oriented Programming,1,ITIT23UN41,35,Hết,*,Sáu,4,3,A2.401,T.T.Tung
IT069IU,IT069IU, Object-Oriented Programming,1,ITIT23UN41,35,Hết,*,Ba,4,3,LA1.604,N.T.Nghĩa
IT069IU,IT069IU, Object-Oriented Programming,2,ITIT23UN41,35,6,*,Tư,4,3,LA1.607,N.T.Nghĩa
IT069IU,IT069IU, Object-Oriented Programming,2,ITIT23UN41,35,6,*,,,,,
IT069IU,IT069IU, Object-Oriented Programming,2,ITIT23UN41,35,6,*,Hai,1,3,A2.401,L.D.Tân
IT069IU,IT069IU, Object-Oriented Programming,2,ITIT23UN41,35,7,*,Tư,1,3,LA1.605,N.T.Nghĩa
IT069IU,IT069IU, Object-Oriented Programming,2,ITIT23UN41,35,7,*,,,,,
IT069IU,IT069IU, Object-Oriented Programming,2,ITIT23UN41,35,7,*,Hai,1,3,A2.401,L.D.Tân
IT074IU,IT074IU, Electronics Devices,1,ITIT23SB31,15,3,,Ba,1,3,A2.310,N.B.Duong
IT076IU,IT076IU, Software Engineering,1,ITIT23IU21,55,6,*,Bảy,7,4,ONLINE,N.Q.Phú
IT076IU,IT076IU, Software Engineering,1,ITIT23IU21,55,6,*,,,,,
IT076IU,IT076IU, Software Engineering,1,ITIT23IU21,55,6,*,Ba,1,3,A1.109,N.T.T.Loan
IT076IU,IT076IU, Software Engineering,1,ITIT23IU21,55,5,*,Hai,7,4,ONLINE,N.Q.Phú
IT076IU,IT076IU, Software Engineering,1,ITIT23IU21,55,5,*,,,,,
IT076IU,IT076IU, Software Engineering,1,ITIT23IU21,55,5,*,Ba,1,3,A1.109,N.T.T.Loan
IT076IU,IT076IU, Software Engineering,2,ITIT23IU21,30,3,*,Ba,1,4,ONLINE,N.Q.Phú
IT076IU,IT076IU, Software Engineering,2,ITIT23IU21,30,3,*,,,,,
IT076IU,IT076IU, Software Engineering,2,ITIT23IU21,30,3,*,Hai,7,3,A2.509,N.T.T.Loan
IT079IU,IT079IU, Principles of Database Management,1,ITIT23UN31,60,Hết,*,Năm,7,3,LA1.302,N.T.Nghĩa
IT079IU,IT079IU, Principles of Database Management,1,ITIT23UN31,60,Hết,*,,,,,
IT079IU,IT079IU, Principles of Database Management,1,ITIT23UN31,60,Hết,*,Tư,7,3,A1.208,N.T.T.Loan
IT079IU,IT079IU, Principles of Database Management,1,ITIT23UN31,35,6,*,Năm,1,3,LA1.607,N.Q.Phú
IT079IU,IT079IU, Principles of Database Management,1,ITIT23UN31,35,6,*,,,,,
IT079IU,IT079IU, Principles of Database Management,1,ITIT23UN31,35,6,*,Tư,7,3,A1.208,N.T.T.Loan
IT079IU,IT079IU, Principles of Database Management,2,ITIT23UN31,60,7,*,Sáu,7,3,LA1.302,N.T.Nghĩa
IT079IU,IT079IU, Principles of Database Management,2,ITIT23UN31,60,7,*,,,,,
IT079IU,IT079IU, Principles of Database Management,2,ITIT23UN31,60,7,*,Sáu,1,3,A1.208,N.T.T.Loan
IT079IU,IT079IU, Principles of Database Management,3,ITIT23UN31,35,5,*,Tư,1,3,LA1.607,N.Q.Phú
IT079IU,IT079IU, Principles of Database Management,3,ITIT23UN31,35,5,*,,,,,
IT079IU,IT079IU, Principles of Database Management,3,ITIT23UN31,35,5,*,Ba,7,3,A2.402,N.T.T.Loan
IT079IU,IT079IU, Principles of Database Management,3,ITIT23UN31,35,8,*,Tư,7,3,LA1.607,N.Q.Phú
IT079IU,IT079IU, Principles of Database Management,3,ITIT23UN31,35,8,*,,,,,
IT079IU,IT079IU, Principles of Database Management,3,ITIT23UN31,35,8,*,Ba,7,3,A2.402,N.T.T.Loan
IT082IU,IT082IU, Internship,1,ITIT22IU41,150,104,,,0,0,,N.V.Sinh
IT083IU,IT083IU, Special Study of the Field,1,ITIT22IU41,200,59,,,0,0,,N.V.Sinh
IT089IU,IT089IU, Computer Architecture,1,ITIT23IU01,35,1,*,Năm,7,3,LA1.607,L.T.Nga
IT089IU,IT089IU, Computer Architecture,1,ITIT23IU01,35,1,*,,,,,
IT089IU,IT089IU, Computer Architecture,1,ITIT23IU01,35,1,*,Ba,4,3,A1.109,P.Q.Cường
IT089IU,IT089IU, Computer Architecture,1,ITIT23IU01,37,Hết,*,Hai,1,3,LA1.605,L.T.Nga
IT089IU,IT089IU, Computer Architecture,1,ITIT23IU01,37,Hết,*,,,,,
IT089IU,IT089IU, Computer Architecture,1,ITIT23IU01,37,Hết,*,Ba,4,3,A1.109,P.Q.Cường
IT089IU,IT089IU, Computer Architecture,1,ITIT23IU01,35,Hết,*,Sáu,7,3,LA1.607,L.T.Nga
IT089IU,IT089IU, Computer Architecture,1,ITIT23IU01,35,Hết,*,,,,,
IT089IU,IT089IU, Computer Architecture,1,ITIT23IU01,35,Hết,*,Ba,4,3,A1.109,P.Q.Cường
IT090IU,IT090IU, Object-Oriented Analysis and Design,1,ITIT23SB21,50,4,*,Ba,7,3,LA1.302,T.T.Tín
IT090IU,IT090IU, Object-Oriented Analysis and Design,1,ITIT23SB21,50,4,*,,,,,
IT090IU,IT090IU, Object-Oriented Analysis and Design,1,ITIT23SB21,50,4,*,Tư,1,3,L109,L.T.N.Hạnh
IT090IU,IT090IU, Object-Oriented Analysis and Design,2,ITIT23SB21,35,2,*,Sáu,7,3,LA1.604,T.T.Tín
IT090IU,IT090IU, Object-Oriented Analysis and Design,2,ITIT23SB21,35,2,*,,,,,
IT090IU,IT090IU, Object-Oriented Analysis and Design,2,ITIT23SB21,35,2,*,Tư,4,3,L108,L.T.N.Hạnh
IT090IU,IT090IU, Object-Oriented Analysis and Design,2,ITIT23SB21,35,16,*,Ba,1,3,LA1.604,T.T.Tín
IT090IU,IT090IU, Object-Oriented Analysis and Design,2,ITIT23SB21,35,16,*,,,,,
IT090IU,IT090IU, Object-Oriented Analysis and Design,2,ITIT23SB21,35,16,*,Tư,4,3,L108,L.T.N.Hạnh
IT091IU,IT091IU, Computer Networks,1,ITIT23WE01,37,1,*,Bảy,7,3,LA1.607,V.T.L.Phuong
IT091IU,IT091IU, Computer Networks,1,ITIT23WE01,37,1,*,,,,,
IT091IU,IT091IU, Computer Networks,1,ITIT23WE01,37,1,*,Tư,4,3,A2.608,V.T.L.Phuong
IT091IU,IT091IU, Computer Networks,1,ITIT23WE01,35,1,*,Ba,7,3,LA1.608,V.T.L.Phuong
IT091IU,IT091IU, Computer Networks,1,ITIT23WE01,35,1,,,,,,
IT091IU,IT091IU, Computer Networks,1,ITIT23WE01,35,1,*,Ba,7,3,ONLINE3,V.T.L.Phuong
IT091IU,IT091IU, Computer Networks,1,ITIT23WE01,35,1,,Tư,4,3,A2.608,V.T.L.Phuong
IT091IU,IT091IU, Computer Networks,2,ITIT23WE01,35,1,*,Sáu,7,3,LA1.608,Đ.T.Nhân
IT091IU,IT091IU, Computer Networks,2,ITIT23WE01,35,1,,,,,,
IT091IU,IT091IU, Computer Networks,2,ITIT23WE01,35,1,*,Sáu,7,3,ONLINE1,Đ.T.Nhân
IT091IU,IT091IU, Computer Networks,2,ITIT23WE01,35,1,,Hai,4,3,A1.109,V.T.L.Phuong
IT091IU,IT091IU, Computer Networks,2,ITIT23WE01,65,Hết,*,Ba,1,3,LA1.302,Đ.T.Nhân
IT091IU,IT091IU, Computer Networks,2,ITIT23WE01,65,Hết,*,,,,,
IT091IU,IT091IU, Computer Networks,2,ITIT23WE01,65,Hết,*,Hai,4,3,A1.109,V.T.L.Phuong
IT091IU,IT091IU, Computer Networks,3,ITIT23WE01,35,1,*,Bảy,4,3,ONLINE,Đ.T.Nhân
IT091IU,IT091IU, Computer Networks,3,ITIT23WE01,35,1,,,,,,
IT091IU,IT091IU, Computer Networks,3,ITIT23WE01,35,1,*,Bảy,4,3,LA1.608,Đ.T.Nhân
IT091IU,IT091IU, Computer Networks,3,ITIT23WE01,35,1,,Hai,1,3,A1.208,T.T.Dung
IT091IU,IT091IU, Computer Networks,3,ITIT23WE01,65,Hết,*,Tư,7,3,LA1.301,Đ.T.Nhân
IT091IU,IT091IU, Computer Networks,3,ITIT23WE01,65,Hết,*,,,,,
IT091IU,IT091IU, Computer Networks,3,ITIT23WE01,65,Hết,*,Hai,1,3,A1.208,T.T.Dung
IT092IU,IT092IU, Principles of Programming Languages,1,ITIT22IU11,35,13,*,Năm,1,4,LA1.605,L.T.N.Hạnh
IT092IU,IT092IU, Principles of Programming Languages,1,ITIT22IU11,35,13,*,,,,,
IT092IU,IT092IU, Principles of Programming Languages,1,ITIT22IU11,35,13,*,Ba,1,3,L204,L.T.N.Hạnh
IT093IU,IT093IU, Web Application Development,1,ITIT22IU11,35,1,*,Hai,7,4,LA1.605,N.T.Nghĩa
IT093IU,IT093IU, Web Application Development,1,ITIT22IU11,35,1,*,,,,,
IT093IU,IT093IU, Web Application Development,1,ITIT22IU11,35,1,*,Hai,4,3,A2.301,N.V.Sinh
IT093IU,IT093IU, Web Application Development,1,ITIT22IU11,35,Hết,*,Sáu,1,4,LA1.605,N.T.Nghĩa
IT093IU,IT093IU, Web Application Development,1,ITIT22IU11,35,Hết,*,,,,,
IT093IU,IT093IU, Web Application Development,1,ITIT22IU11,35,Hết,*,Hai,4,3,A2.301,N.V.Sinh
IT093IU,IT093IU, Web Application Development,2,ITIT22IU11,65,2,*,Bảy,1,4,LA1.301,T.K.Minh
IT093IU,IT093IU, Web Application Development,2,ITIT22IU11,65,2,*,,,,,
IT093IU,IT093IU, Web Application Development,2,ITIT22IU11,65,2,*,Hai,1,3,A2.307,N.V.Sinh
IT094IU,IT094IU, Information System Management,1,ITIT22IU01,100,1,*,Bảy,7,4,ONLINE1,N.D.Thai
IT094IU,IT094IU, Information System Management,1,ITIT22IU01,100,1,*,,,,,
IT094IU,IT094IU, Information System Management,1,ITIT22IU01,100,1,*,Năm,4,3,A1.309,N.D.Thai
IT096IU,IT096IU, Net-Centric Programming,1,ITIT22IU01,35,1,*,Ba,1,4,LA1.605,L.T.Son
IT096IU,IT096IU, Net-Centric Programming,1,ITIT22IU01,35,1,*,,,,,
IT096IU,IT096IU, Net-Centric Programming,1,ITIT22IU01,35,1,*,Ba,7,3,A2.307,L.T.Son
IT096IU,IT096IU, Net-Centric Programming,1,ITIT22IU01,45,1,*,Bảy,7,4,ONLINE2,L.T.Son
IT096IU,IT096IU, Net-Centric Programming,1,ITIT22IU01,45,1,*,,,,,
IT096IU,IT096IU, Net-Centric Programming,1,ITIT22IU01,45,1,*,Ba,7,3,A2.307,L.T.Son
IT098IU,IT098IU, Principles of EE1 Laboratory,1,ITIT23WE01,20,2,,Năm,1,4,LA2.201,N.M.Thiện
IT099IU,IT099IU, Digital Logic Design Laboratory,1,ITIT23WE31,20,6,,Sáu,1,4,LA2.208,L.T.Nga
IT099IU,IT099IU, Digital Logic Design Laboratory,2,ITIT23WE31,20,Hết,,Năm,1,4,LA2.208,L.T.Nga
IT099IU,IT099IU, Digital Logic Design Laboratory,4,ITIT23WE31,20,7,,Bảy,7,4,LA2.208,N.M.Thiện
IT099IU,IT099IU, Digital Logic Design Laboratory,5,ITIT23WE31,20,Hết,,Bảy,1,4,LA2.208,N.M.Thiện
IT101IU,IT101IU, Electronics Devices Laboratory,1,ITIT23SB31,15,3,,Bảy,1,4,LA2.202,N.B.Duong
IT103IU,IT103IU, Digital Signal Processing,1,ITIT23SB21,15,Hết,*,Tư,7,4,LA1.604,V.C.Thành
IT103IU,IT103IU, Digital Signal Processing,1,ITIT23SB21,15,Hết,*,,,,,
IT103IU,IT103IU, Digital Signal Processing,1,ITIT23SB21,15,Hết,*,Hai,4,3,L205,V.C.Thành
IT105IU,IT105IU, Digital System Design,1,ITIT23IU41,30,10,,Năm,1,3,L203,V.M.Thanh
IT106IU,IT106IU, Digital System Design Laboratory,2,ITIT23IU41,20,7,,Sáu,1,3,LA1.606,V.M.Thanh
IT110IU,IT110IU, Concepts in VLSI Design,1,ITIT23IU41,25,Hết,,Ba,4,3,A2.512,K.Ishibashi
IT110IU,IT110IU, Concepts in VLSI Design,1,ITIT23IU41,25,Hết,,,,,,
IT110IU,IT110IU, Concepts in VLSI Design,1,ITIT23IU41,25,Hết,,Ba,4,3,A2.512,N.B.Duong
IT115IU,IT115IU, Embedded Systems,1,ITIT23IU41,41,26,,Năm,4,3,L101,N.L.Luật
IT116IU,IT116IU, C/C++ Programming,1,ITIT23WE31,38,Hết,*,Năm,1,4,LA1.606,Đ.T.Nhân
IT116IU,IT116IU, C/C++ Programming,1,ITIT23WE31,38,Hết,*,,,,,
IT116IU,IT116IU, C/C++ Programming,1,ITIT23WE31,38,Hết,*,Hai,1,3,A1.109,L.T.Son
IT116IU,IT116IU, C/C++ Programming,1,ITIT24WE31,35,1,*,Bảy,7,4,LA1.604,Đ.T.Nhân
IT116IU,IT116IU, C/C++ Programming,1,ITIT24WE31,35,1,*,,,,,
IT116IU,IT116IU, C/C++ Programming,1,ITIT24WE31,35,1,*,Hai,1,3,A1.109,L.T.Son
IT116IU,IT116IU, C/C++ Programming,1,ITIT24WE31,35,1,*,Ba,7,4,LA1.606,Đ.T.Nhân
IT117IU,IT117IU, System and Network Security,1,ITIT22IU41,36,Hết,*,Bảy,1,3,ONLINE,L.H.Duong
IT117IU,IT117IU, System and Network Security,1,ITIT22IU41,36,Hết,,,,,,
IT117IU,IT117IU, System and Network Security,1,ITIT22IU41,36,Hết,*,Bảy,1,3,LA1.608,L.H.Duong
IT117IU,IT117IU, System and Network Security,1,ITIT22IU41,36,Hết,,Hai,7,3,L102,L.H.Duong
IT120IU,IT120IU, Entrepreneurship,1,ITIT22IU41,110,Hết,,Tư,7,3,ONLINE,N.T.Tuan
IT120IU,IT120IU, Entrepreneurship,2,ITIT22IU41,118,1,,Sáu,7,3,ONLINE,N.T.Tuan
IT120IU,IT120IU, Entrepreneurship,3,ITIT22IU41,110,14,,Tư,7,3,ONLINE3,W.Krystian
IT125IU,IT125IU, System & Network Administration,1,ITIT23SB21,51,Hết,*,Bảy,7,4,LA1.302,L.H.Duong
IT125IU,IT125IU, System & Network Administration,1,ITIT23SB21,51,Hết,*,,,,,
IT125IU,IT125IU, System & Network Administration,1,ITIT23SB21,51,Hết,*,Năm,7,3,L205,L.H.Duong
IT126IU,IT126IU, Concepts in VLSI Design Laboratory,1,ITIT23IU41,24,Hết,,Tư,7,4,LA2.207,N.B.Duong
IT126IU,IT126IU, Concepts in VLSI Design Laboratory,1,ITIT23IU41,24,Hết,,,,,,
IT126IU,IT126IU, Concepts in VLSI Design Laboratory,1,ITIT23IU41,24,Hết,,Tư,7,4,LA2.207,L.T.Nga
IT127IU,IT127IU, Embedded Systems Laboratory,1,ITIT23IU41,41,27,,Tư,1,3,LA1.301,N.L.Luật
IT128IU,IT128IU, Micro-processing Systems,1,ITIT23SB21,20,Hết,,Hai,1,3,L205,V.M.Thanh
IT129IU,IT129IU, Micro-processing Systems Laboratory,1,ITIT23SB21,20,1,,Hai,7,4,LA2.202,V.M.Thanh
IT131IU,IT131IU, Theoretical Models in Computing,1,ITIT23IU01,45,3,*,Ba,7,4,ONLINE1,L.T.Nga
IT131IU,IT131IU, Theoretical Models in Computing,1,ITIT23IU01,45,3,*,,,,,
IT131IU,IT131IU, Theoretical Models in Computing,1,ITIT23IU01,45,3,*,Ba,1,3,A1.309,H.V.U.Synh
IT131IU,IT131IU, Theoretical Models in Computing,1,ITIT23IU01,45,Hết,*,Hai,7,4,ONLINE2,H.V.U.Synh
IT131IU,IT131IU, Theoretical Models in Computing,1,ITIT23IU01,45,Hết,*,,,,,
IT131IU,IT131IU, Theoretical Models in Computing,1,ITIT23IU01,45,Hết,*,Ba,1,3,A1.309,H.V.U.Synh
IT131IU,IT131IU, Theoretical Models in Computing,2,ITIT23IU01,90,2,*,Sáu,1,4,ONLINE1,H.V.U.Synh
IT131IU,IT131IU, Theoretical Models in Computing,2,ITIT23IU01,90,2,*,,,,,
IT131IU,IT131IU, Theoretical Models in Computing,2,ITIT23IU01,90,2,*,Năm,4,3,A1.109,H.V.U.Synh
IT133IU,IT133IU, Mobile Application Development,1,ITIT22IU41,35,1,*,Hai,4,3,LA1.607,L.D.Tân
IT133IU,IT133IU, Mobile Application Development,1,ITIT22IU41,35,1,*,,,,,
IT133IU,IT133IU, Mobile Application Development,1,ITIT22IU41,35,1,*,Ba,1,3,A2.301,L.D.Tân
IT133IU,IT133IU, Mobile Application Development,1,ITIT22IU41,35,Hết,*,Ba,4,3,LA1.607,L.D.Tân
IT133IU,IT133IU, Mobile Application Development,1,ITIT22IU41,35,Hết,*,,,,,
IT133IU,IT133IU, Mobile Application Development,1,ITIT22IU41,35,Hết,*,Ba,1,3,A2.301,L.D.Tân
IT135IU,IT135IU, Introduction to Data Science,1,ITIT24WE31,50,19,,Ba,7,3,ONLINE,M.Marcin
IT138IU,IT138IU, Data Science and Data Visualization,1,ITIT23SB31,60,36,*,Hai,1,4,ONLINE,T.T.Tung
IT138IU,IT138IU, Data Science and Data Visualization,1,ITIT23SB31,60,36,*,,,,,
IT138IU,IT138IU, Data Science and Data Visualization,1,ITIT23SB31,60,36,*,Ba,4,3,A2.608,T.T.Tung
IT139IU,IT139IU, Scalable and Distributed Computing,1,ITIT23IU21,110,12,*,Ba,7,4,ONLINE2,M.H.B.Ân
IT139IU,IT139IU, Scalable and Distributed Computing,1,ITIT23IU21,110,12,*,,,,,
IT139IU,IT139IU, Scalable and Distributed Computing,1,ITIT23IU21,110,12,*,Năm,1,3,A1.109,M.H.B.Ân
IT140IU,IT140IU, Fundamental Concepts of Data Security,1,ITIT23WE41,70,24,*,Năm,1,4,ONLINE,L.H.Duong
IT140IU,IT140IU, Fundamental Concepts of Data Security,1,ITIT23WE41,70,24,*,,,,,
IT140IU,IT140IU, Fundamental Concepts of Data Security,1,ITIT23WE41,70,24,*,Hai,1,3,A1.201,L.H.Duong
IT142IU,IT142IU, Analytics for Observational Data,1,ITIT23IU41,60,Hết,*,Hai,1,4,ONLINE1,N.T.T.Sang
IT142IU,IT142IU, Analytics for Observational Data,1,ITIT23IU41,60,Hết,*,,,,,
IT142IU,IT142IU, Analytics for Observational Data,1,ITIT23IU41,60,Hết,*,Hai,7,3,A2.501,N.T.T.Sang
IT149IU,IT149IU, Fundamentals of Programming,1,ITIT23WE31,30,21,*,Tư,1,4,LA1.606,L.T.Nga
IT149IU,IT149IU, Fundamentals of Programming,1,ITIT23WE31,30,21,*,,,,,
IT149IU,IT149IU, Fundamentals of Programming,1,ITIT23WE31,30,21,*,Sáu,1,3,A2.401,L.T.Son
IT149IU,IT149IU, Fundamentals of Programming,1,ITIT24WE31,26,1,*,Hai,7,4,LA1.606,L.T.Nga
IT149IU,IT149IU, Fundamentals of Programming,1,ITIT24WE31,26,1,*,,,,,
IT149IU,IT149IU, Fundamentals of Programming,1,ITIT24WE31,26,1,*,Sáu,1,3,A2.401,L.T.Son
IT151IU,IT151IU, Statistical Methods,1,ITIT23SB31,30,3,,Ba,7,3,L205,P.H.Hà
IT153IU,IT153IU, Discrete Mathematics,1,ITIT23UN41,60,Hết,,Bảy,1,3,A1.309,T.A.Tuấn
IT153IU,IT153IU, Discrete Mathematics,2,ITIT23UN41,30,6,,Bảy,4,3,A2.408,T.A.Tuấn
IT154IU,IT154IU, Linear Algebra,1,ITIT23SB31,90,Hết,,Sáu,1,3,L207,T.V.Khanh
IT157IU,IT157IU, Deep Learning,1,ITIT23WE31,70,16,*,Hai,7,4,ONLINE3,M.H.B.Ân
IT157IU,IT157IU, Deep Learning,1,ITIT23WE31,70,16,*,,,,,
IT157IU,IT157IU, Deep Learning,1,ITIT23WE31,70,16,*,Ba,4,3,A2.501,M.H.B.Ân
IT159IU,IT159IU, Artificial Intelligence,1,ITIT22IU01,35,Hết,*,Bảy,1,3,LA1.606,N.T.Kỳ
IT159IU,IT159IU, Artificial Intelligence,1,ITIT22IU01,35,Hết,*,,,,,
IT159IU,IT159IU, Artificial Intelligence,1,ITIT22IU01,35,Hết,*,Năm,1,3,L108,N.T.Kỳ
IT159IU,IT159IU, Artificial Intelligence,1,ITIT22IU01,35,Hết,*,Hai,1,3,LA1.606,N.T.Kỳ
IT159IU,IT159IU, Artificial Intelligence,2,ITIT22IU01,35,Hết,*,Hai,4,3,LA1.606,N.T.Kỳ
IT159IU,IT159IU, Artificial Intelligence,2,ITIT22IU01,35,Hết,*,,,,,
IT159IU,IT159IU, Artificial Intelligence,2,ITIT22IU01,35,Hết,*,Năm,7,3,L108,N.T.Kỳ
IT159IU,IT159IU, Artificial Intelligence,2,ITIT22IU01,36,Hết,*,Bảy,4,3,LA1.606,N.T.Kỳ
IT159IU,IT159IU, Artificial Intelligence,2,ITIT22IU01,36,Hết,*,,,,,
IT159IU,IT159IU, Artificial Intelligence,2,ITIT22IU01,36,Hết,*,Năm,7,3,L108,N.T.Kỳ
IT160IU,IT160IU, Data Mining,1,ITIT22IU11,35,1,*,Ba,7,4,LA1.605,N.Q.Phú
IT160IU,IT160IU, Data Mining,1,ITIT22IU11,35,1,*,,,,,
IT160IU,IT160IU, Data Mining,1,ITIT22IU11,35,1,*,Ba,4,3,L207,N.T.T.Sang
IT160IU,IT160IU, Data Mining,1,ITIT22IU11,55,Hết,*,Sáu,1,4,ONLINE2,N.Q.Phú
IT160IU,IT160IU, Data Mining,1,ITIT22IU11,55,Hết,*,,,,,
IT160IU,IT160IU, Data Mining,1,ITIT22IU11,55,Hết,*,Ba,4,3,L207,N.T.T.Sang
IT161IU,IT161IU, Big Data Technology,1,ITIT23IU21,35,22,*,Tư,7,4,LA1.605,H.L.Vân
IT161IU,IT161IU, Big Data Technology,1,ITIT23IU21,35,22,*,,,,,
IT161IU,IT161IU, Big Data Technology,1,ITIT23IU21,35,22,*,Sáu,1,3,A2.302,H.L.Vân
IT161IU,IT161IU, Big Data Technology,1,ITIT23IU21,35,1,*,Sáu,7,4,LA1.605,H.L.Vân
IT161IU,IT161IU, Big Data Technology,1,ITIT23IU21,35,1,*,,,,,
IT161IU,IT161IU, Big Data Technology,1,ITIT23IU21,35,1,*,Sáu,1,3,A2.302,H.L.Vân
IT162IU,IT162IU, Machine Learning Platforms,1,ITIT23WE31,35,1,*,Bảy,1,4,LA1.605,H.L.Vân
IT162IU,IT162IU, Machine Learning Platforms,1,ITIT23WE31,35,1,*,,,,,
IT162IU,IT162IU, Machine Learning Platforms,1,ITIT23WE31,35,1,*,Bảy,7,3,A2.313,H.L.Vân
MA001IU,MA001IU, Calculus 1,1,BABA23AD41,119,2,,Ba,7,4,A2.205,N.A.Tú
MA001IU,MA001IU, Calculus 1,2,MAMA23IU41,120,Hết,,Hai,7,4,A1.109,M.D.Thanh
MA001IU,MA001IU, Calculus 1,3,MAMA23IU41,89,3,,Bảy,7,4,A2.401,N.A.Tú
MA001IU,MA001IU, Calculus 1,4,MAMA23IU41,89,5,,Bảy,1,4,A1.402,M.D.Thanh
MA001IU,MA001IU, Calculus 1,5,BABA24AD01,100,2,,Bảy,7,4,A1.208,N.Dinh
MA001IU,MA001IU, Calculus 1,6,MAMA24IU01,100,10,,Tư,7,4,A2.205,N.M.Quan
MA001IU,MA001IU, Calculus 1,7,MAMA24IU01,100,9,,Ba,7,4,A1.309,N.Dinh
MA001IU,MA001IU, Calculus 1,8,MAMA24IU01,110,1,,Sáu,1,4,A1.309,N.T.T.Van
MA001IU,MA001IU, Calculus 1,9,MAMA24IU01,100,10,,Sáu,7,4,A1.309,N.T.T.Van
MA003IU,MA003IU, Calculus 2,1,MAMA23IU41,124,2,,Ba,7,4,A1.208,T.Q.Bảo
MA003IU,MA003IU, Calculus 2,2,MAMA23IU41,125,Hết,,Năm,1,4,A2.205,T.V.Khanh
MA003IU,MA003IU, Calculus 2,3,MAMA23IU41,90,Hết,,Ba,1,4,A2.508,T.V.Khanh
MA023IU,MA023IU, Calculus 3,1,MAMA23IU41,100,Hết,,Năm,7,4,A2.205,N.N.Hai
MA023IU,MA023IU, Calculus 3,2,MAMA23IU41,100,Hết,,Tư,1,4,A1.309,N.N.Hai
MA023IU,MA023IU, Calculus 3,3,MAMA23IU41,89,1,,Sáu,7,4,A2.508,N.N.Hai
MA024IU,MA024IU, Differential Equations,1,MAMA23IU21,29,1,*,Năm,7,4,LA1.605,T.Q.Bảo
MA024IU,MA024IU, Differential Equations,1,MAMA23IU21,29,1,*,,,,,
MA024IU,MA024IU, Differential Equations,1,MAMA23IU21,29,1,*,Sáu,7,3,A2.407,P.H.A.Ngoc
MA024IU,MA024IU, Differential Equations,1,MAMA23IU21,80,Hết,*,Năm,7,4,ONLINE,P.H.Hà
MA024IU,MA024IU, Differential Equations,1,MAMA23IU21,80,Hết,*,,,,,
MA024IU,MA024IU, Differential Equations,1,MAMA23IU21,80,Hết,*,Sáu,7,3,A2.407,P.H.A.Ngoc
MA026IU,MA026IU," Probability, Statistic & Random Process",1,MAMA23IU21,91,Hết,,Năm,1,3,A1.201,P.H.Hà
MA026IU,MA026IU," Probability, Statistic & Random Process",2,MAMA23IU21,90,Hết,,Ba,1,3,L207,P.H.Hà
MA027IU,MA027IU, Applied Linear Algebra,1,MAMA23IU21,89,32,,Bảy,9,2,A1.201,T.Q.Bảo
MA027IU,MA027IU, Applied Linear Algebra,2,MAMA23IU21,89,3,,Sáu,5,2,A1.309,M.D.Thanh
MA027IU,MA027IU, Applied Linear Algebra,3,MAMA23IU21,89,1,,Bảy,7,2,A1.201,T.Q.Bảo
MAAS220IU,MAAS220IU, Introduction to Statistics,1,MAMA22IU21,10,2,,Sáu,4,2,L103,T.Q.Bảo
MAFE101IU,MAFE101IU, Analysis 1,1,MAMA22IU21,50,20,,Hai,1,4,A2.411,P.H.A.Ngoc
MAFE101IU,MAFE101IU, Analysis 1,2,MAMA24IU21,50,3,,Hai,7,4,A2.302,N.M.Quan
MAFE103IU,MAFE103IU, Analysis 2,1,MAMA22IU21,50,30,,Sáu,7,4,L205,N.A.Tú
MAFE104IU,MAFE104IU, Linear Algebra,1,MAMA22IU21,50,2,,Sáu,1,4,A2.511,P.H.A.Ngoc
MAFE104IU,MAFE104IU, Linear Algebra,2,MAMA22IU21,50,27,,Sáu,7,4,L110,P.H.Hà
MAFE109IU,MAFE109IU, Introduction to Python,1,MAMA24IU11,70,21,*,Sáu,5,2,A1.208,T.V.Khanh
MAFE109IU,MAFE109IU, Introduction to Python,1,MAMA24IU11,70,21,*,,,,,
MAFE109IU,MAFE109IU, Introduction to Python,1,MAMA24IU11,70,21,*,Tư,4,3,A2.507,T.V.Khanh
MAFE201IU,MAFE201IU, Real Analysis,1,MAMA22IU21,50,1,,Ba,7,4,L207,N.N.Hai
MAFE202IU,MAFE202IU, Differential Equations,1,MAMA22IU11,50,36,,Ba,7,4,A2.312,P.H.A.Ngoc
MAFE203IU,MAFE203IU, Analysis 3,1,MAMA22IU21,50,5,,Tư,1,3,A2.509,T.V.Khanh
MAFE204IU,MAFE204IU, Database Management system,1,MAMA22IU01,35,1,*,Năm,7,4,LA1.606,T.M.Ha
MAFE204IU,MAFE204IU, Database Management system,1,MAMA22IU01,35,1,*,,,,,
MAFE206IU,MAFE206IU, Probability,1,MAMA22IU21,50,5,,Ba,4,3,A2.412,N.M.Quan
MAFE208IU,MAFE208IU, Numerical Analysis,1,MAMA22IU11,50,24,,Tư,7,4,A2.311,M.D.Thanh
MAFE209IU,MAFE209IU, Financial markets,1,MAMA22IU01,50,14,,Hai,4,3,A2.509,L.N.A.Khoa
MAFE212IU,MAFE212IU, Financial Accounting,1,MAMA22IU01,50,10,,Hai,7,4,L109,T.D.Khiem
MAFE212IU,MAFE212IU, Financial Accounting,2,MAMA22IU01,50,18,,Bảy,7,4,A1.207B,T.D.Khiem
MAFE215IU,MAFE215IU, Financial Management,1,MAMA22IU01,50,15,,Năm,4,3,A2.412,L.D.T.Trang
MAFE302IU,MAFE302IU, Random Processes,1,MAMA22IU11,50,21,,Sáu,4,3,L102,P.H.Hà
MAFE303IU,MAFE303IU, Optimization 1,1,MAMA22IU11,50,24,,Hai,7,4,L103,N.N.Hai
MAFE306IU,MAFE306IU, Financial Mathematics 1,1,MAMA22IU11,50,29,,Bảy,7,3,A2.410,L.N.Tan
MAFE307IU,MAFE307IU, Optimization 2,1,MAMA22IU11,50,1,,Hai,4,3,A2.508,N.Dinh
MAFE308IU,MAFE308IU, Financial Risk Management 1,1,MAMA22IU11,50,31,,Sáu,1,3,L102,T.Q.Bảo
MAFE309IU,MAFE309IU, Software Engineering,1,MAMA22IU01,39,Hết,*,Năm,1,3,LA1.604,T.M.Ha
MAFE309IU,MAFE309IU, Software Engineering,1,MAMA22IU01,39,Hết,*,,,,,
MAFE309IU,MAFE309IU, Software Engineering,1,MAMA22IU01,39,Hết,*,Bảy,4,3,A2.402,T.M.Ha
MAFE312IU,MAFE312IU, Data mining,1,MAMA22IU01,35,18,*,Tư,7,4,LA1.606,T.M.Ha
MAFE312IU,MAFE312IU, Data mining,1,MAMA22IU01,35,18,*,,,,,
MAFE312IU,MAFE312IU, Data mining,1,MAMA22IU01,35,18,*,Bảy,7,3,A1.203,T.M.Ha
MAFE316IU,MAFE316IU, Statistics,1,MAMA22IU11,50,30,,Sáu,7,4,A2.512,N.M.Quan
MAFE401IU,MAFE401IU, Financial Mathematics 2,1,MAMA22IU11,50,27,,Bảy,1,3,A2.301,L.N.Tan
MAFE402IU,MAFE402IU, Portfolio Management,1,MAMA22IU01,50,27,,Ba,4,3,L206,V.X.Hong
MAFE403IU,MAFE403IU, Research Methods in Finance,1,MAMA22IU01,50,36,,Ba,1,3,L109,N.P.Anh
MAFE404IU,MAFE404IU, Financial Risk Management 2,1,MAMA22IU01,50,36,,Sáu,7,3,L102,T.Q.Bảo
MAFE409IU,MAFE409IU, Graduation Thesis,1,MAMA22IU01,35,19,,,0,0,,P.H.A.Ngoc
IS001IU,IS001IU, Introduction to Industrial Engineering,1,IEIE23IU11,25,5,*,Hai,7,3,LA2.201,N.M.Thiện
IS001IU,IS001IU, Introduction to Industrial Engineering,1,IEIE23IU11,25,10,*,Hai,1,3,LA2.202,N.M.Thiện
IS004IU,IS004IU, Engineering Probability & Statistics,1,IEIE23IU01,60,Hết,,Hai,7,4,L201,Đ.H.Phương
IS004IU,IS004IU, Engineering Probability & Statistics,2,IEIE23IU01,60,Hết,,Ba,7,4,L108,Đ.H.Phương
IS004IU,IS004IU, Engineering Probability & Statistics,3,IEIE23IU01,60,1,,Bảy,1,4,L201,Đ.H.Phương
IS004IU,IS004IU, Engineering Probability & Statistics,4,IEIE23IU01,60,43,,Bảy,7,4,L201,Đ.H.Phương
IS019IU,IS019IU, Production Management,1,IEIE22SB21,90,9,,Sáu,4,3,A2.205,T.V.Ly
IS019IU,IS019IU, Production Management,2,IEIE22SB21,90,54,,Hai,4,3,A2.402,T.V.Ly
IS019IU,IS019IU, Production Management,3,IEIE22SB21,90,Hết,,Hai,1,3,A2.402,T.V.Ly
IS023IU,IS023IU, Inventory Management,1,IEIE22IU01,90,1,,Sáu,1,3,A2.402,N.V.Hop
IS023IU,IS023IU, Inventory Management,2,IEIE22IU01,50,19,,Hai,1,3,A2.509,N.V.Hop
IS023IU,IS023IU, Inventory Management,3,IEIE22IU01,90,9,,Tư,7,3,A2.507,N.V.Hop
IS024IU,IS024IU, Probabilistic Models in Opeations Research,1,IEIE22SB31,90,19,,Sáu,4,3,A2.301,P.N.K.Phuc
IS025IU,IS025IU, Quality Management,1,IEIE22IU21,90,5,,Bảy,1,3,A2.507,D.V.N.Anh
IS025IU,IS025IU, Quality Management,2,IEIE22IU21,90,Hết,,Bảy,4,3,A2.507,D.V.N.Anh
IS025IU,IS025IU, Quality Management,3,IEIE22IU21,30,9,,Bảy,7,3,A2.312,D.V.N.Anh
IS026IU,IS026IU, Project Management,1,IEIE22IU21,100,2,,Hai,4,3,A2.205,P.H.Tram
IS026IU,IS026IU, Project Management,2,IEIE22IU21,50,2,,Ba,7,3,A2.409,P.H.Tram
IS026IU,IS026IU, Project Management,3,IEIE22IU21,90,21,,Tư,7,3,A2.608,P.H.Tram
IS032IU,IS032IU, Facility Layout,1,IEIE22IU41,90,Hết,,Ba,4,3,L201,T.V.Ly
IS033IU,IS033IU, Multi-Criteria Decision Making,1,IEIE22IU11,90,Hết,,Bảy,7,3,A2.501,P.N.K.Phuc
IS033IU,IS033IU, Multi-Criteria Decision Making,2,IEIE22IU11,90,2,,Sáu,1,3,A2.507,P.N.K.Phuc
IS033IU,IS033IU, Multi-Criteria Decision Making,3,IEIE22IU11,90,33,,Năm,4,3,A1.201,H.T.X.Chi
IS033IU,IS033IU, Multi-Criteria Decision Making,4,IEIE22IU11,90,58,,Ba,7,3,A1.201,H.T.X.Chi
IS035IU,IS035IU, Systems Engineering,1,IEIE22SB31,90,32,,Tư,1,3,A2.302,P.H.Tram
IS043IU,IS043IU, Flexible Manufacturing Systems,1,IEIE22IU11,30,13,,Sáu,1,3,A2.310,N.V.Chung
IS045IU,IS045IU, Leadership,1,IEIE22SB31,30,3,,Sáu,1,3,A1.402,T.Đ.Vĩ
IS048IU,IS048IU, Thesis,1,IEIE23IU01,80,44,,,0,0,,N.V.Hop
IS050IU,IS050IU, Project Management,1,BTBT234WE21,50,7,,Bảy,1,3,L206,T.V.Ly
IS053IU,IS053IU, Internship 2,1,IEIE23IU01,50,32,,,0,0,,N.V.Hop
IS054IU,IS054IU, Engineering Drawing,1,IEIE22IU41,90,36,,Bảy,1,3,A2.401,H.T.Phát
IS055IU,IS055IU, Principles of Logistics and Supply Chain Management,1,IEIE22SB21,90,1,,Hai,4,3,A1.309,N.H.G.Anh
IS055IU,IS055IU, Principles of Logistics and Supply Chain Management,3,IEIE22SB21,75,56,,Tư,7,3,L207,N.T.B.Hà
IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,1,IEIE23IU11,25,5,*,Ba,7,3,LA2.201,N.M.Thiện
IS056IU,IS056IU, Introduction to Logistics and Supply Chain Management,1,IEIE23IU11,25,5,*,Ba,1,3,LA2.202,N.M.Thiện
IS058IU,IS058IU, Time Series & forecasting techniques,1,IEIE22IU11,90,14,,Tư,7,3,A1.201,H.T.X.Chi
IS058IU,IS058IU, Time Series & forecasting techniques,2,IEIE22IU11,90,Hết,,Năm,1,3,A2.608,H.T.X.Chi
IS059IU,IS059IU, Materials Handling Systems,1,IEIE22IU01,90,Hết,,Ba,1,3,A2.507,N.V.Chung
IS059IU,IS059IU, Materials Handling Systems,2,IEIE22IU01,90,Hết,,Năm,7,3,A2.507,N.V.Chung
IS059IU,IS059IU, Materials Handling Systems,3,IEIE22IU01,50,16,,Ba,7,3,A2.410,N.V.Chung
IS062IU,IS062IU, E-Logistics in Supply Chain Management,1,IEIE22IU01,30,6,,Tư,1,3,A2.511,N.V.Hop
IS067IU,IS067IU, International transportation & Logistics,1,IEIE22IU01,90,Hết,,Hai,1,3,A2.302,H.T.T.Hòa
IS067IU,IS067IU, International transportation & Logistics,2,IEIE22IU01,90,60,,Hai,4,3,A2.302,H.T.T.Hòa
IS067IU,IS067IU, International transportation & Logistics,3,IEIE22IU01,90,2,,Năm,1,3,A1.309,H.T.T.Hòa
IS070IU,IS070IU, Internship 2,1,IEIE23IU01,50,31,,,0,0,,N.V.Hop
IS071IU,IS071IU, Thesis,1,IEIE23IU01,150,51,,,0,0,,N.V.Hop
IS073IU,IS073IU, Business Law,1,IEIE22IU41,90,4,,Tư,1,3,A2.307,T.T.Long
IS073IU,IS073IU, Business Law,3,IEIE22IU41,90,28,,Ba,1,3,A1.201,T.T.Long
IS082IU,IS082IU, Retail management,1,IEIE22SB31,90,30,,Bảy,4,3,A2.508,N.H.G.Anh
IS082IU,IS082IU, Retail management,2,IEIE22SB31,90,25,,Năm,7,3,A2.601,N.H.G.Anh
IS082IU,IS082IU, Retail management,3,IEIE22SB31,90,44,,Bảy,1,3,A2.508,N.H.G.Anh
IS082IU,IS082IU, Retail management,4,IEIE22SB31,50,2,,Năm,4,3,L109,N.H.G.Anh
IS083IU,IS083IU, Capstone Design,1,IEIE23IU01,250,38,,,0,0,,P.H.A.Ngoc
IS086IU,IS086IU, Introduction to Computing,1,IEIE22SB41,60,Hết,,Hai,1,3,LA1.301,N.L.Luật
IS086IU,IS086IU, Introduction to Computing,2,IEIE22SB41,60,Hết,,Tư,4,3,LA1.301,N.L.Luật
IS086IU,IS086IU, Introduction to Computing,3,IEIE22SB41,60,30,,Sáu,4,3,LA1.301,N.D.Uyen
IS086IU,IS086IU, Introduction to Computing,4,IEIE22SB41,60,6,,Ba,4,3,LA1.301,N.D.Uyen
IS087IU,IS087IU, Manufacturing Processes,1,IEIE22IU11,50,22,,Hai,7,3,A2.309,N.V.Chung
IS089IU,IS089IU, Numerical Methods,1,IEIE22IU41,90,14,,Bảy,1,3,A2.205,D.V.T.Son
IS089IU,IS089IU, Numerical Methods,2,IEIE22IU41,100,6,,Bảy,4,3,A2.205,D.V.T.Son
IS089IU,IS089IU, Numerical Methods,3,IEIE22IU41,60,5,,Bảy,7,3,A1.202,D.V.T.Son
IS090IU,IS090IU, Engineering Mechanics- Dynamics,1,IEIE22IU41,90,50,,Hai,4,3,A2.608,D.V.T.Son
IS091IU,IS091IU, Management Information Systems with ERP Application,1,IEIE22SB21,90,Hết,,Ba,7,3,L201,T.Đ.Vĩ
IS091IU,IS091IU, Management Information Systems with ERP Application,2,IEIE22SB21,90,Hết,,Sáu,4,3,A1.402,T.Đ.Vĩ
IS091IU,IS091IU, Management Information Systems with ERP Application,3,IEIE22SB21,50,10,,Năm,7,3,A2.302,T.Đ.Vĩ
IS091IU,IS091IU, Management Information Systems with ERP Application,4,IEIE22SB21,50,20,,Bảy,4,3,A2.509,T.Đ.Vĩ
EL001IU,EL001IU, Reading 1 (B2-C1),1,ENEL24IU21,55,2,,Năm,7,3,A2.608,M.H.Quan
EL001IU,EL001IU, Reading 1 (B2-C1),2,ENEL24IU21,56,2,,Tư,7,3,A2.501,N.T.M.Tram
EL001IU,EL001IU, Reading 1 (B2-C1),3,ENEL24IU21,52,Hết,,Tư,1,3,A2.507,M.H.Quan
EL002IU,EL002IU, Writing 1 (B2-C1),1,ENEL24IU21,32,3,,Bảy,7,3,L102,N.H.P.Mai
EL002IU,EL002IU, Writing 1 (B2-C1),2,ENEL24IU21,32,Hết,,Bảy,1,3,A2.510,T.T.Hang
EL002IU,EL002IU, Writing 1 (B2-C1),3,ENEL24IU21,32,Hết,,Bảy,7,3,A2.510,T.T.Hang
EL002IU,EL002IU, Writing 1 (B2-C1),4,ENEL24IU21,32,1,,Năm,1,3,A2.310,N.H.P.Mai
EL002IU,EL002IU, Writing 1 (B2-C1),5,ENEL24IU21,31,1,,Sáu,1,3,A2.410,D.T.D.Ngoc
EL003IU,EL003IU, Listening 1 (B2-C1),1,ENEL24IU21,56,2,,Hai,7,3,A2.402,D.H.Nga
EL003IU,EL003IU, Listening 1 (B2-C1),2,ENEL24IU21,50,Hết,,Sáu,3,3,A2.408,B.D.B.Huyen
EL003IU,EL003IU, Listening 1 (B2-C1),3,ENEL24IU21,50,1,,Hai,1,3,A2.510,B.D.B.Huyen
EL004IU,EL004IU, Speaking 1 (B2-C1),1,ENEL22IU11,30,3,,Sáu,4,3,A2.410,N.T.M.Tram
EL004IU,EL004IU, Speaking 1 (B2-C1),2,ENEL24IU21,32,Hết,,Ba,7,3,A2.510,N.H.Duc
EL004IU,EL004IU, Speaking 1 (B2-C1),3,ENEL24IU21,32,Hết,,Ba,1,3,A2.510,N.H.Duc
EL004IU,EL004IU, Speaking 1 (B2-C1),4,ENEL24IU21,31,1,,Năm,7,3,A2.313,D.H.Nga
EL004IU,EL004IU, Speaking 1 (B2-C1),5,ENEL24IU21,33,1,,Bảy,1,3,A2.312,D.H.Nga
EL005IU,EL005IU, Advanced Grammar,1,ENEL22IU21,50,5,,Hai,4,2,A1.207B,N.T.N.Chau
EL005IU,EL005IU, Advanced Grammar,2,ENEL24IU21,50,1,,Sáu,1,2,A2.408,T.D.Thu
EL005IU,EL005IU, Advanced Grammar,3,ENEL24IU21,50,5,,Hai,7,2,A1.201,N.T.N.Chau
EL005IU,EL005IU, Advanced Grammar,4,ENEL24IU21,50,8,,Hai,9,2,A1.201,N.T.N.Chau
EL006IU,EL006IU, Presentation Skills,1,ENEL223WE21,30,7,,Hai,5,2,A2.411,N.H.Duc
EL006IU,EL006IU, Presentation Skills,2,ENEL223WE21,30,1,,Tư,5,2,A2.311,N.H.Duc
EL007IU,EL007IU, Reading 2 (C1-C2),1,ENEL223WE21,50,11,,Ba,4,3,A1.603,M.H.Quan
EL008IU,EL008IU, Writing 2 (C1-C2),2,ENEL223WE21,48,6,,Sáu,4,3,A1.603,N.L.B.Ngoc
EL009IU,EL009IU, Listening 2 (C1-C2),1,ENEL223WE21,50,7,,Bảy,4,3,A2.409,N.H.P.Mai
EL010IU,EL010IU, Speaking 2 (C1-C2),1,ENEL223WE21,30,15,,Bảy,1,3,A2.511,N.T.M.Tram
EL010IU,EL010IU, Speaking 2 (C1-C2),2,ENEL223WE21,30,Hết,,Tư,1,3,A1.603,N.T.M.Tram
EL012IU,EL012IU, Research Methodology,1,ENEL223WE21,50,Hết,,Sáu,1,3,A1.603,N.H.Cuong
EL012IU,EL012IU, Research Methodology,2,ENEL223WE21,50,Hết,,Ba,1,3,A1.603,N.H.Cuong
EL012IU,EL012IU, Research Methodology,3,ENEL223WE21,50,Hết,,Hai,1,3,A2.511,Đ.N.A.Đức
EL012IU,EL012IU, Research Methodology,4,ENEL223WE21,50,1,,Năm,4,3,L103,Đ.N.A.Đức
EL012IU,EL012IU, Research Methodology,5,ENEL223WE21,65,Hết,,Năm,1,3,A2.402,N.H.Cuong
EL013IU,EL013IU, Introduction to Linguistics,1,ENEL22IU21,45,6,,Năm,4,3,A2.310,N.T.Quyên
EL013IU,EL013IU, Introduction to Linguistics,2,ENEL22IU21,45,Hết,,Hai,1,3,A2.608,V.H.Ngan
EL014IU,EL014IU, Introduction to English Teaching Methodology,1,ENEL22IU21,45,1,,Sáu,4,3,A2.312,Đ.N.A.Đức
EL014IU,EL014IU, Introduction to English Teaching Methodology,2,ENEL22IU21,45,15,,Bảy,4,3,A2.410,D.H.Nga
EL016IU,EL016IU, Introduction to Translation,1,ENEL22IU21,50,15,,Bảy,1,3,A2.310,D.T.D.Ngoc
EL016IU,EL016IU, Introduction to Translation,2,ENEL22IU21,54,Hết,,Tư,7,3,L102,P.H.Duc
EL016IU,EL016IU, Introduction to Translation,3,ENEL22IU21,50,Hết,,Ba,4,3,A2.510,D.T.D.Ngoc
EL019IU,EL019IU, British Civilization,1,ENEL22IU21,50,7,,Tư,5,2,A2.411,M.H.Quan
EL019IU,EL019IU, British Civilization,2,ENEL22IU21,50,Hết,,Sáu,5,2,A1.207B,M.H.Quan
EL022IU,EL022IU, Phonetics and Phonology,1,ENEL22IU01,50,Hết,,Hai,4,3,A2.310,V.H.Ngan
EL022IU,EL022IU, Phonetics and Phonology,2,ENEL22IU01,50,1,,Bảy,4,3,A2.501,N.L.B.Ngoc
EL022IU,EL022IU, Phonetics and Phonology,3,ENEL22IU01,50,2,,Bảy,4,3,A2.310,V.T.Nga
EL022IU,EL022IU, Phonetics and Phonology,4,ENEL22IU01,50,Hết,,Bảy,4,3,L110,T.D.Thu
EL022IU,EL022IU, Phonetics and Phonology,5,ENEL22IU01,45,28,,Hai,4,3,A1.603,N.H.Khánh
EL023IU,EL023IU, Morphology,1,ENEL22IU01,50,Hết,,Sáu,4,3,A2.313,V.T.Nga
EL023IU,EL023IU, Morphology,2,ENEL22IU01,50,1,,Bảy,1,3,A2.311,N.H.Khánh
EL023IU,EL023IU, Morphology,3,ENEL22IU01,50,Hết,,Sáu,4,3,A2.309,T.D.Thu
EL023IU,EL023IU, Morphology,4,ENEL22IU01,50,17,,Bảy,1,3,L204,L.M.Thu
EL024IU,EL024IU, Syntax,1,ENEL22IU01,45,Hết,,Bảy,7,3,A1.603,N.L.B.Ngoc
EL024IU,EL024IU, Syntax,2,ENEL22IU01,46,Hết,,Tư,4,3,A1.603,N.L.B.Ngoc
EL024IU,EL024IU, Syntax,3,ENEL22IU01,45,2,,Bảy,7,3,L206,N.T.Quyên
EL024IU,EL024IU, Syntax,4,ENEL22IU01,46,Hết,,Ba,4,3,L110,N.H.Khánh
EL024IU,EL024IU, Syntax,5,ENEL22IU01,40,Hết,,Tư,4,3,L111,V.T.Nga
EL025IU,EL025IU, Semantics,1,ENEL223WE41,56,1,,Bảy,1,3,A2.402,V.T.Nga
EL025IU,EL025IU, Semantics,2,ENEL223WE41,54,Hết,,Tư,4,3,L109,N.T.Quyên
EL025IU,EL025IU, Semantics,3,ENEL223WE41,54,6,,Bảy,7,3,L109,N.H.Khánh
EL025IU,EL025IU, Semantics,4,ENEL223WE41,55,Hết,,Bảy,1,3,L108,T.D.Thu
EL026IU,EL026IU, Translation 1 (English- Vietnamese),1,ENEL223WE41,50,Hết,,Ba,4,3,A2.311,P.H.Duc
EL026IU,EL026IU, Translation 1 (English- Vietnamese),2,ENEL223WE41,50,1,,Năm,1,3,A2.412,N.T.N.Chau
EL026IU,EL026IU, Translation 1 (English- Vietnamese),3,ENEL223WE41,50,Hết,,Hai,7,3,A2.401,P.H.Duc
EL026IU,EL026IU, Translation 1 (English- Vietnamese),4,ENEL223WE41,50,6,,Sáu,4,3,A2.311,D.T.D.Ngoc
EL029IU,EL029IU, Pragmatics,1,ENEL223WE41,50,Hết,,Năm,7,3,L109,L.M.Thu
EL029IU,EL029IU, Pragmatics,2,ENEL223WE41,50,1,,Hai,4,3,A2.510,L.M.Thu
EL029IU,EL029IU, Pragmatics,3,ENEL223WE41,50,22,,Bảy,7,3,L204,L.M.Thu
EL030IU,EL030IU, Discourse Analysis,1,ENEL223WE31,60,3,,Sáu,4,3,A2.302,V.H.Ngan
EL030IU,EL030IU, Discourse Analysis,2,ENEL223WE31,50,1,,Năm,4,3,A2.601,V.H.Ngan
EL030IU,EL030IU, Discourse Analysis,3,ENEL223WE31,50,6,,Năm,1,3,A2.508,V.H.Ngan
EL034IU,EL034IU, ELT methods and techniques - Teaching Reading & Writing,1,ENEL223WE31,50,Hết,,Năm,1,3,A2.311,T.T.Hang
EL035IU,EL035IU, ELT methods and techniques - Teaching Vocabulary & Grammar,1,ENEL223WE31,50,Hết,,Ba,7,3,L203,N.H.P.Mai
EL036IU,EL036IU, Language Assessment and Testing,1,ENEL223WE31,50,Hết,,Tư,4,3,A2.501,B.D.B.Huyen
EL039IU,EL039IU, Interpreting 1,1,ENEL223WE31,30,7,,Năm,7,3,A2.312,N.T.N.Chau
EL041IU,EL041IU, Advanced Translation,1,ENEL223WE31,50,22,,Năm,7,3,A2.410,P.H.Duc
EL043IU,EL043IU, Translation in Journalism,1,ENEL223WE31,50,Hết,,Tư,1,3,A2.402,P.H.Duc
EL044IU,EL044IU, Internship 1,1,ENEL223WE31,20,Hết,,,0,0,,V.H.Ngan
EL044IU,EL044IU, Internship 1,2,ENEL223WE31,20,Hết,,,0,0,,V.H.Ngan
EL044IU,EL044IU, Internship 1,3,ENEL223WE31,20,Hết,,,0,0,,V.H.Ngan
EL044IU,EL044IU, Internship 1,4,ENEL223WE31,20,1,,,0,0,,V.H.Ngan
EL045IU,EL045IU, Internship 2,1,ENEL223WE31,100,73,,,0,0,,V.H.Ngan
EL046IU,EL046IU, Thesis,1,ENEL22IU41,50,11,,,0,0,,V.H.Ngan
EN007IU,EN007IU, Writing AE1,1,ENEL234WE31,35,2,,Bảy,1,2,L105,D.V.Đ.Quang
EN007IU,EN007IU, Writing AE1,2,ENEL234WE31,35,1,,Bảy,3,2,L104,D.V.Đ.Quang
EN007IU,EN007IU, Writing AE1,3,ENEL234WE31,35,3,,Hai,7,2,L104,P.T.H.An
EN007IU,EN007IU, Writing AE1,4,ENEL234WE31,35,Hết,,Hai,9,2,L105,P.T.H.An
EN007IU,EN007IU, Writing AE1,5,ENEL234WE31,35,Hết,,Ba,7,2,L104,N.A.Vu
EN007IU,EN007IU, Writing AE1,6,ENEL234WE31,35,1,,Ba,9,2,L105,N.A.Vu
EN007IU,EN007IU, Writing AE1,7,ENEL244WE21,32,2,,Năm,1,2,L104,D.V.Đ.Quang
EN007IU,EN007IU, Writing AE1,8,ENEL244WE21,32,1,,Năm,3,2,L104,D.V.Đ.Quang
EN007IU,EN007IU, Writing AE1,9,ENEL244WE21,32,2,,Sáu,1,2,L104,N.T.T.Anh
EN007IU,EN007IU, Writing AE1,10,ENEL244WE21,34,Hết,,Sáu,3,2,L105,N.T.T.Anh
EN007IU,EN007IU, Writing AE1,11,ENEL244WE21,34,Hết,,Sáu,7,2,L104,L.P.Ky
EN007IU,EN007IU, Writing AE1,12,ENEL244WE21,34,6,,Sáu,9,2,L105,L.P.Ky
EN007IU,EN007IU, Writing AE1,13,ENEL244WE21,34,11,,Tư,1,2,L104,T.K.Hòa
EN007IU,EN007IU, Writing AE1,14,ENEL244WE21,34,Hết,,Tư,3,2,L105,T.K.Hòa
EN007IU,EN007IU, Writing AE1,15,ENEL244WE21,34,5,,Tư,7,2,L105,N.D.Phong
EN007IU,EN007IU, Writing AE1,16,ENEL244WE21,34,1,,Tư,9,2,L104,N.D.Phong
EN007IU,EN007IU, Writing AE1,17,ENEL234WE31,35,3,,Hai,1,2,L104,N.D.Phong
EN007IU,EN007IU, Writing AE1,18,ENEL234WE31,35,4,,Hai,3,2,L105,N.D.Phong
EN007IU,EN007IU, Writing AE1,19,ENEL244WE21,34,9,,Ba,1,2,L104,N.T.T.Anh
EN007IU,EN007IU, Writing AE1,20,ENEL244WE21,34,8,,Ba,3,2,L105,N.T.T.Anh
EN007IU,EN007IU, Writing AE1,21,ENEL244WE21,34,Hết,,Năm,1,2,L106,D.D.Dung
EN007IU,EN007IU, Writing AE1,22,ENEL244WE21,34,Hết,,Năm,3,2,L107,D.D.Dung
EN007IU,EN007IU, Writing AE1,23,ENEL244WE21,34,7,,Năm,7,2,L104,D.D.Dung
EN007IU,EN007IU, Writing AE1,24,ENEL244WE21,34,4,,Năm,9,2,L105,D.D.Dung
EN007IU,EN007IU, Writing AE1,25,ENEL244WE21,34,Hết,,Hai,1,2,L106,L.T.K.Nhật
EN007IU,EN007IU, Writing AE1,26,ENEL244WE21,34,7,,Hai,3,2,L107,L.T.K.Nhật
EN007IU,EN007IU, Writing AE1,27,ENEL244WE21,34,13,,Tư,1,2,L106,L.T.K.Nhật
EN007IU,EN007IU, Writing AE1,28,ENEL244WE21,34,Hết,,Tư,3,2,L107,L.T.K.Nhật
EN007IU,EN007IU, Writing AE1,29,ENEL244WE21,34,6,,Bảy,1,2,L106,D.D.Dung
EN007IU,EN007IU, Writing AE1,30,ENEL244WE21,34,6,,Bảy,7,2,L104,D.D.Dung
EN008IU,EN008IU, Listening AE1,1,ENEL234WE31,35,Hết,,Bảy,3,2,L105,N.T.M.Nguyet
EN008IU,EN008IU, Listening AE1,2,ENEL234WE31,35,Hết,,Bảy,1,2,L104,N.T.M.Nguyet
EN008IU,EN008IU, Listening AE1,3,ENEL234WE31,35,2,,Hai,9,2,L104,N.T.Tuan
EN008IU,EN008IU, Listening AE1,4,ENEL234WE31,35,Hết,,Hai,7,2,L105,N.T.Tuan
EN008IU,EN008IU, Listening AE1,5,ENEL234WE31,35,1,,Ba,9,2,L104,L.T.K.Nhật
EN008IU,EN008IU, Listening AE1,6,ENEL234WE31,36,Hết,,Ba,7,2,L105,L.T.K.Nhật
EN008IU,EN008IU, Listening AE1,7,ENEL244WE21,32,1,,Năm,1,2,L105,B.N.M.Thanh
EN008IU,EN008IU, Listening AE1,8,ENEL244WE21,32,2,,Năm,3,2,L105,B.N.M.Thanh
EN008IU,EN008IU, Listening AE1,9,ENEL244WE21,32,2,,Sáu,3,2,L104,N.D.Phong
EN008IU,EN008IU, Listening AE1,10,ENEL244WE21,34,Hết,,Sáu,1,2,L105,N.D.Phong
EN008IU,EN008IU, Listening AE1,11,ENEL244WE21,34,Hết,,Sáu,9,2,L104,N.D.Phong
EN008IU,EN008IU, Listening AE1,12,ENEL244WE21,34,6,,Sáu,7,2,L105,N.D.Phong
EN008IU,EN008IU, Listening AE1,13,ENEL244WE21,34,11,,Tư,3,2,L104,N.D.Phong
EN008IU,EN008IU, Listening AE1,14,ENEL244WE21,34,Hết,,Tư,1,2,L105,N.D.Phong
EN008IU,EN008IU, Listening AE1,15,ENEL244WE21,34,5,,Tư,9,2,L105,L.T.K.Nhật
EN008IU,EN008IU, Listening AE1,16,ENEL244WE21,34,1,,Tư,7,2,L104,L.T.K.Nhật
EN008IU,EN008IU, Listening AE1,17,ENEL234WE31,35,Hết,,Hai,3,2,L104,T.T.Hang
EN008IU,EN008IU, Listening AE1,18,ENEL234WE31,35,5,,Hai,1,2,L105,T.T.Hang
EN008IU,EN008IU, Listening AE1,19,ENEL244WE21,34,9,,Ba,3,2,L104,T.T.Hang
EN008IU,EN008IU, Listening AE1,20,ENEL244WE21,34,8,,Ba,1,2,L105,T.T.Hang
EN008IU,EN008IU, Listening AE1,21,ENEL244WE21,34,Hết,,Năm,3,2,L106,L.N.Thien
EN008IU,EN008IU, Listening AE1,22,ENEL244WE21,34,Hết,,Năm,1,2,L107,L.N.Thien
EN008IU,EN008IU, Listening AE1,23,ENEL244WE21,32,5,,Năm,9,2,L104,L.N.Thien
EN008IU,EN008IU, Listening AE1,24,ENEL244WE21,34,4,,Năm,7,2,L105,L.N.Thien
EN008IU,EN008IU, Listening AE1,25,ENEL244WE21,34,Hết,,Hai,3,2,L106,D.H.Nga
EN008IU,EN008IU, Listening AE1,26,ENEL244WE21,34,7,,Hai,1,2,L107,D.H.Nga
EN008IU,EN008IU, Listening AE1,27,ENEL244WE21,34,14,,Tư,3,2,L106,D.D.Dung
EN008IU,EN008IU, Listening AE1,28,ENEL244WE21,34,Hết,,Tư,1,2,L107,D.D.Dung
EN008IU,EN008IU, Listening AE1,29,ENEL244WE21,34,6,,Bảy,3,2,L106,D.D.Dung
EN008IU,EN008IU, Listening AE1,30,ENEL244WE21,34,6,,Bảy,9,2,L105,D.D.Dung
EN011IU,EN011IU, Writing AE2,1,ENEL234WE21,30,Hết,,Ba,1,2,L110,N.A.Vu
EN011IU,EN011IU, Writing AE2,2,ENEL234WE21,30,Hết,,Ba,3,2,L111,N.A.Vu
EN011IU,EN011IU, Writing AE2,3,ENEL234WE21,31,Hết,,Sáu,7,2,L107,N.T.T.Anh
EN011IU,EN011IU, Writing AE2,4,ENEL234WE21,30,Hết,,Sáu,9,2,L107,N.T.T.Anh
EN011IU,EN011IU, Writing AE2,5,ENEL234WE21,30,Hết,,Tư,7,2,L106,L.M.Ha
EN011IU,EN011IU, Writing AE2,6,ENEL234WE21,30,Hết,,Tư,9,2,L106,L.M.Ha
EN011IU,EN011IU, Writing AE2,7,ENEL234WE21,30,Hết,,Bảy,1,2,L111,L.M.Ha
EN011IU,EN011IU, Writing AE2,8,ENEL234WE21,30,3,,Bảy,3,2,L111,L.M.Ha
EN011IU,EN011IU, Writing AE2,9,ENEL234WE21,30,Hết,,Tư,7,2,L111,D.D.Dung
EN011IU,EN011IU, Writing AE2,10,ENEL234WE21,30,2,,Tư,9,2,L110,D.D.Dung
EN011IU,EN011IU, Writing AE2,11,ENEL234WE21,30,Hết,,Năm,7,2,L106,D.V.Đ.Quang
EN011IU,EN011IU, Writing AE2,12,ENEL234WE21,30,2,,Năm,9,2,L106,D.V.Đ.Quang
EN011IU,EN011IU, Writing AE2,13,ENEL234WE21,30,Hết,,Tư,1,2,L203,D.V.Đ.Quang
EN011IU,EN011IU, Writing AE2,14,ENEL234WE21,30,3,,Tư,3,2,L203,D.V.Đ.Quang
EN011IU,EN011IU, Writing AE2,15,ENEL234WE21,30,Hết,,Hai,1,2,L110,D.V.Đ.Quang
EN011IU,EN011IU, Writing AE2,16,ENEL234WE21,30,Hết,,Hai,3,2,L110,D.V.Đ.Quang
EN011IU,EN011IU, Writing AE2,17,ENEL234WE21,30,1,,Năm,7,2,L111,L.M.Ha
EN011IU,EN011IU, Writing AE2,18,ENEL234WE21,30,2,,Năm,9,2,L111,L.M.Ha
EN011IU,EN011IU, Writing AE2,19,ENEL234WE21,30,Hết,,Năm,1,2,L111,L.M.Ha
EN011IU,EN011IU, Writing AE2,20,ENEL234WE21,30,Hết,,Năm,3,2,L111,L.M.Ha
EN011IU,EN011IU, Writing AE2,21,ENEL234WE21,30,Hết,,Ba,1,2,L107,D.V.Đ.Quang
EN011IU,EN011IU, Writing AE2,22,ENEL234WE21,30,18,,Ba,3,2,L107,D.V.Đ.Quang
EN011IU,EN011IU, Writing AE2,23,ENEL234WE21,30,6,,Hai,1,2,L204,D.D.Dung
EN011IU,EN011IU, Writing AE2,24,ENEL234WE21,30,Hết,,Hai,3,2,L204,D.D.Dung
EN011IU,EN011IU, Writing AE2,25,ENEL234WE21,30,3,,Hai,7,2,L111,D.D.Dung
EN011IU,EN011IU, Writing AE2,26,ENEL234WE21,30,5,,Hai,9,2,L111,D.D.Dung
EN012IU,EN012IU, Speaking AE2,1,ENEL234WE21,30,1,,Ba,7,2,L111,N.T.M.Tram
EN012IU,EN012IU, Speaking AE2,2,ENEL234WE21,30,2,,Ba,9,2,L111,N.T.M.Tram
EN012IU,EN012IU, Speaking AE2,3,ENEL234WE21,30,2,,Sáu,7,2,L106,N.T.Tuan
EN012IU,EN012IU, Speaking AE2,4,ENEL234WE21,30,7,,Sáu,9,2,L106,N.T.Tuan
EN012IU,EN012IU, Speaking AE2,5,ENEL234WE21,31,Hết,,Tư,7,2,L110,H.T.B.Phuong
EN012IU,EN012IU, Speaking AE2,6,ENEL234WE21,30,Hết,,Tư,9,2,L111,H.T.B.Phuong
EN012IU,EN012IU, Speaking AE2,7,ENEL234WE21,32,2,,Bảy,1,2,L107,B.N.M.Thanh
EN012IU,EN012IU, Speaking AE2,9,ENEL234WE21,30,3,,Tư,7,2,L107,B.N.M.Thanh
EN012IU,EN012IU, Speaking AE2,11,ENEL234WE21,30,2,,Năm,7,2,L107,B.N.M.Thanh
EN012IU,EN012IU, Speaking AE2,13,ENEL234WE21,30,6,,Tư,1,2,L111,B.N.M.Thanh
EN012IU,EN012IU, Speaking AE2,15,ENEL234WE21,31,Hết,,Hai,1,2,L203,L.M.Ha
EN012IU,EN012IU, Speaking AE2,16,ENEL234WE21,30,1,,Hai,3,2,L203,L.M.Ha
EN012IU,EN012IU, Speaking AE2,17,ENEL234WE21,30,5,,Bảy,7,2,L111,B.N.M.Thanh
EN012IU,EN012IU, Speaking AE2,19,ENEL234WE21,30,Hết,,Năm,1,2,L110,D.H.Nga
EN012IU,EN012IU, Speaking AE2,20,ENEL234WE21,30,Hết,,Năm,3,2,L110,D.H.Nga
EN012IU,EN012IU, Speaking AE2,21,ENEL234WE21,30,Hết,,Ba,1,2,L106,D.H.Nga
EN012IU,EN012IU, Speaking AE2,22,ENEL234WE21,30,Hết,,Ba,3,2,L106,D.H.Nga
EN012IU,EN012IU, Speaking AE2,23,ENEL234WE21,30,1,,Hai,1,2,L111,M.H.Quan
EN012IU,EN012IU, Speaking AE2,24,ENEL234WE21,30,1,,Hai,3,2,L111,M.H.Quan
EN012IU,EN012IU, Speaking AE2,25,ENEL234WE21,30,1,,Hai,7,2,L106,D.T.D.Ngoc
EN012IU,EN012IU, Speaking AE2,26,ENEL234WE21,30,4,,Hai,9,2,L106,D.T.D.Ngoc
PE008IU,PE008IU, Critical Thinking,1,ENEL234WE11,110,4,,Bảy,7,3,A1.309,D.T.D.Ngoc
PE008IU,PE008IU, Critical Thinking,2,ENEL234WE11,110,1,,Năm,1,3,A2.407,N.T.Thủy
PE008IU,PE008IU, Critical Thinking,3,ENEL234WE11,90,1,,Sáu,4,3,A2.407,N.T.Thủy
PE008IU,PE008IU, Critical Thinking,4,ENEL234WE11,90,Hết,,Năm,7,3,A2.401,N.V.Tiếp
PE008IU,PE008IU, Critical Thinking,5,ENEL234WE11,90,2,,Ba,4,3,A2.302,P.Ngoc
PE008IU,PE008IU, Critical Thinking,6,ENEL234WE11,111,3,,Tư,7,3,A2.407,T.T.Tu
PE008IU,PE008IU, Critical Thinking,7,ENEL234WE11,90,1,,Sáu,7,3,A2.601,T.T.Tu
PE008IU,PE008IU, Critical Thinking,8,ENEL244WE11,50,5,,Năm,7,3,A2.301,D.T.D.Ngoc
PE008IU,PE008IU, Critical Thinking,9,ENEL244WE11,50,19,,Ba,7,3,A2.401,N.V.Tiếp
PE008IU,PE008IU, Critical Thinking,10,ENEL244WE11,50,20,,Bảy,7,3,A2.310,P.T.Tùng
PH012IU,PH012IU, Physics 4,1,PHSE23IU01,126,Hết,,Hai,9,2,A1.208,Đ.X.Hội
PH013IU,PH013IU, Physics 1,1,PHSE23IU01,50,2,,Tư,7,2,A2.409,P.B.Ngọc
PH013IU,PH013IU, Physics 1,2,PHSE23IU01,120,15,,Năm,7,2,A1.309,Đ.X.Hội
PH013IU,PH013IU, Physics 1,3,PHSE23IU01,120,2,,Sáu,7,2,A2.205,P.H.Vũ
PH013IU,PH013IU, Physics 1,4,PHSE24IU01,110,9,,Sáu,7,2,A1.208,P.B.Ngọc
PH013IU,PH013IU, Physics 1,5,PHSE24IU01,125,4,,Hai,7,2,A1.208,Đ.X.Hội
PH013IU,PH013IU, Physics 1,6,PHSE24IU01,110,18,,Ba,1,2,A2.307,Đ.X.Hội
PH014IU,PH014IU, Physics 2,1,PHSE23IU01,50,Hết,,Ba,7,2,A2.608,P.B.Ngọc
PH014IU,PH014IU, Physics 2,2,PHSE23IU01,90,17,,Năm,9,2,A1.309,Đ.X.Hội
PH014IU,PH014IU, Physics 2,3,PHSE23IU01,50,Hết,,Năm,1,2,L204,P.H.Vũ
PH014IU,PH014IU, Physics 2,4,PHSE23IU01,89,21,,Ba,7,2,A2.104,Đ.X.Hội
PH014IU,PH014IU, Physics 2,5,PHSE23IU01,90,Hết,,Sáu,9,2,A2.205,P.H.Vũ
PH014IU,PH014IU, Physics 2,6,PHSE24IU01,90,15,,Hai,7,2,A1.309,P.B.Ngọc
PH014IU,PH014IU, Physics 2,7,PHSE24IU01,46,Hết,,Ba,3,2,A2.307,Đ.X.Hội
PH014IU,PH014IU, Physics 2,8,PHSE24IU01,45,Hết,,Hai,1,2,A2.508,N.Quang
PH015IU,PH015IU, Physics 3,1,PHSE23IU41,90,5,,Sáu,1,3,A1.109,P.H.Vũ
PH015IU,PH015IU, Physics 3,2,PHSE23IU41,50,6,,Năm,4,3,A2.401,N.Quang
PH015IU,PH015IU, Physics 3,3,PHSE23IU41,50,18,,Năm,4,3,A2.313,P.T.Kien
PH016IU,PH016IU, Physics 3 Laboratory,2,PHSE23IU41,15,6,,Tư,1,4,LA1.403,L.T.Que
PH016IU,PH016IU, Physics 3 Laboratory,3,PHSE23IU41,15,1,,Năm,7,4,LA1.403,T.T.Thuy
PH016IU,PH016IU, Physics 3 Laboratory,4,PHSE23IU41,15,Hết,,Ba,7,4,LA1.403,T.T.Thuy
PH016IU,PH016IU, Physics 3 Laboratory,9,PHSE23IU41,15,4,,Tư,7,4,LA1.403,L.T.Que
PH016IU,PH016IU, Physics 3 Laboratory,10,PHSE23IU41,15,2,,Năm,1,4,LA1.403,T.T.Thuy
PH016IU,PH016IU, Physics 3 Laboratory,11,PHSE23IU41,15,Hết,,Sáu,7,4,LA1.403,T.T.Thuy
PH016IU,PH016IU, Physics 3 Laboratory,12,PHSE23IU41,18,Hết,,Bảy,1,4,LA1.403,L.T.Que
PH018IU,PH018IU, Introduction to Space Engineering,1,PHSE24IU01,30,16,,Sáu,1,2,A2.313,P.B.Ngọc
PH020IU,PH020IU, General Physics 1 Laboratory,1,PHSE24IU41,18,4,,Tư,7,5,LA2.514,T.T.Thuy
PH024IU,PH024IU, General Physics 3 Laboratory,1,PHSE22IU41,18,13,,Ba,7,4,LA2.203,L.T.Que
PH029IU,PH029IU, Introduction to Relativity and Modern Physics,1,PHSE22IU41,18,12,,Tư,1,3,A2.510,P.B.Ngọc
PH030IU,PH030IU, Probability and Statistics for Engineers,1,PHSE22IU41,18,8,,Bảy,1,3,A2.410,N.Quang
PH035IU,PH035IU, Introduction to Space Communications,1,PHSE22IU41,18,4,,Sáu,1,3,L206,N.N.T.Minh
PH038IU,PH038IU, Introduction to Digital Image Processing,1,PHSE22IU41,18,8,,Năm,7,2,LA1.504,H.Đ.Duẫn
PH039IU,PH039IU, Digital Image Processing Laboratory,1,PHSE22IU21,18,8,,Năm,1,4,LA1.504,H.Đ.Duẫn
PH042IU,PH042IU, Research Project,1,PHSE22IU21,18,14,,,0,0,,
PH045IU,PH045IU, Fundamentals of Surveying,1,PHSE22IU21,18,13,,Ba,7,4,L106,C.D.Angeli
PH046IU,PH046IU, Geographic Information Systems (GIS) and Spatial Analysis,1,PHSE22IU21,18,9,,Tư,7,4,LA1.504,P.H.Vũ
PH047IU,PH047IU, Navigation Systems,1,PHSE22IU21,18,8,,Sáu,7,3,LA2.203,L.B.Bình
PH049IU,PH049IU, Advanced Remote Sensing,1,PHSE22IU21,18,11,,Năm,7,3,A2.509,P.H.Vũ
PH057IU,PH057IU, Geolocation App Development for iOS,1,PHSE22IU21,18,14,,Ba,1,5,LA1.504,T.T.N.Phượng
PH068IU,PH068IU, Business Analytics with Big Data,1,PHSE22IU21,18,11,,Bảy,7,2,A1.204,N.Quang
BA003IU,BA003IU, Principles of Marketing,1,BABA222WE11,61,Hết,,Bảy,4,3,A2.301,B.T.Thanh
BA003IU,BA003IU, Principles of Marketing,2,BABA23AD31,60,Hết,,Năm,4,3,L201,N.T.Mẫn
BA003IU,BA003IU, Principles of Marketing,3,BABA222WE11,60,Hết,,Hai,1,3,C.401,N.T.Mẫn
BA003IU,BA003IU, Principles of Marketing,4,BABA222WE11,60,1,,Sáu,7,3,A1.201,D.T.U.Thao
BA003IU,BA003IU, Principles of Marketing,5,BABA222WE11,60,2,,Hai,7,3,A2.507,T.T.Khoa
BA003IU,BA003IU, Principles of Marketing,6,BABA222WE11,60,Hết,,Hai,1,3,A2.501,T.T.Khoa
BA003IU,BA003IU, Principles of Marketing,7,BABA24IU41,60,1,,Năm,7,3,A2.501,T.T.Khoa
BA003IU,BA003IU, Principles of Marketing,8,FAAC23IU11,60,1,,Năm,4,3,C.401,H.Đ.Sinh
BA003IU,BA003IU, Principles of Marketing,9,FAAC23IU11,60,Hết,,Sáu,7,3,A1.202,B.T.Thanh
BA006IU,BA006IU, Business Communication,1,BABA234WE31,66,Hết,,Tư,1,3,A1.201,P.T.Huyen
BA006IU,BA006IU, Business Communication,2,BABA234WE31,60,1,,Ba,4,3,A1.201,P.T.Huyen
BA006IU,BA006IU, Business Communication,3,BABA234WE31,60,Hết,,Hai,1,3,L201,P.T.Huyen
BA006IU,BA006IU, Business Communication,4,BABA234WE31,60,3,,Tư,1,3,L201,P.T.N.Minh
BA006IU,BA006IU, Business Communication,5,BABA234WE31,61,Hết,,Tư,7,3,L108,B.T.T.Hien
BA006IU,BA006IU, Business Communication,6,BABA234WE31,60,Hết,,Hai,1,3,L108,N.T.Minh
BA006IU,BA006IU, Business Communication,7,BABA24IU41,30,14,,Bảy,7,3,A2.509,P.T.N.Minh
BA018IU,BA018IU, Quality Management,1,BABA232WE41,60,2,,Sáu,1,3,L202,D.V.N.Anh
BA020IU,BA020IU, Business Ethics,1,BABA224WE01,60,Hết,,Sáu,7,3,A1.401,C.M.Man
BA020IU,BA020IU, Business Ethics,2,BABA224WE01,61,Hết,,Ba,4,3,A1.402,C.M.Man
BA020IU,BA020IU, Business Ethics,3,BABA224WE01,60,Hết,,Bảy,4,3,A1.401,C.M.Man
BA020IU,BA020IU, Business Ethics,4,BABA224WE01,60,Hết,,Năm,4,3,A2.608,C.M.Man
BA020IU,BA020IU, Business Ethics,5,BABA224WE01,30,5,,Năm,4,3,L102,T.N.N.Hân
BA020IU,BA020IU, Business Ethics,6,BABA224WE01,60,2,,Ba,4,3,C.401,N.T.Mẫn
BA020IU,BA020IU, Business Ethics,7,FAAC23IU11,50,11,,Ba,1,3,A2.311,M.N.Khuong
BA020IU,BA020IU, Business Ethics,8,FAAC23IU11,60,4,,Năm,1,3,A1.401,N.N.Ty
BA022IU,BA022IU, Logistic and Supply Chain Management,1,BABA234WE01,30,7,,Hai,4,3,L108,N.T.B.Hà
BA022IU,BA022IU, Logistic and Supply Chain Management,3,BABA234WE01,60,4,,Tư,1,3,L207,N.T.B.Hà
BA023IU,BA023IU, Project Management,1,BABA234WE31,60,1,,Tư,4,3,A1.202,N.N.Tung
BA023IU,BA023IU, Project Management,2,BABA234WE31,30,6,,Hai,4,3,A2.311,N.N.Tung
BA023IU,BA023IU, Project Management,3,BABA234WE31,30,7,,Hai,4,3,A2.401,N.N.Ty
BA027IU,BA027IU, E - Commerce,1,BABA224WE11,60,8,,Ba,1,3,ONLINE1,N.H.Anh
BA027IU,BA027IU, E - Commerce,1,BABA224WE11,60,8,,,,,,
BA027IU,BA027IU, E - Commerce,1,BABA224WE11,60,8,,Ba,1,3,A2.302,N.H.Anh
BA027IU,BA027IU, E - Commerce,2,BABA224WE11,30,13,,Năm,1,3,ONLINE1,N.H.Anh
BA027IU,BA027IU, E - Commerce,2,BABA224WE11,30,13,,,,,,
BA027IU,BA027IU, E - Commerce,2,BABA224WE11,30,13,,Năm,1,3,A2.512,N.H.Anh
BA027IU,BA027IU, E - Commerce,3,BABA224WE11,50,19,,Ba,7,3,A1.401,N.H.Anh
BA027IU,BA027IU, E - Commerce,3,BABA224WE11,50,19,,,,,,
BA027IU,BA027IU, E - Commerce,3,BABA224WE11,50,19,,Ba,7,3,ONLINE3,N.H.Anh
BA027IU,BA027IU, E - Commerce,4,BABA224WE11,60,5,,Năm,7,3,ONLINE1,N.H.Anh
BA027IU,BA027IU, E - Commerce,4,BABA224WE11,60,5,,,,,,
BA027IU,BA027IU, E - Commerce,4,BABA224WE11,60,5,,Năm,7,3,A1.401,N.H.Anh
BA032IU,BA032IU, Sales Management,1,BABA224WE21,50,11,,Bảy,1,3,C.401,L.V.Phúc
BA032IU,BA032IU, Sales Management,2,BABA224WE21,30,6,,Bảy,4,3,C.401,L.V.Phúc
BA035IU,BA035IU, Marketing Research,1,BABA224WE21,51,Hết,,Ba,1,3,ONLINE2,A.Thớ
BA035IU,BA035IU, Marketing Research,1,BABA224WE21,51,Hết,,,,,,
BA035IU,BA035IU, Marketing Research,1,BABA224WE21,51,Hết,,Ba,1,3,A2.512,A.Thớ
BA080IU,BA080IU, Statistics for Business,1,BABA23AD41,60,1,,Năm,4,3,L108,N.H.Phu
BA080IU,BA080IU, Statistics for Business,2,BABA222WE11,60,Hết,,Năm,7,3,L202,N.H.Phu
BA080IU,BA080IU, Statistics for Business,3,BABA222WE11,60,Hết,,Tư,1,3,A2.601,L.V.Chon
BA080IU,BA080IU, Statistics for Business,4,BABA222WE11,60,Hết,,Năm,4,3,A1.208,N.B.Trung
BA080IU,BA080IU, Statistics for Business,5,BABA222WE11,60,Hết,,Hai,4,3,A1.208,N.B.Trung
BA080IU,BA080IU, Statistics for Business,6,BABA222WE11,60,Hết,,Năm,1,3,A2.501,N.B.Trung
BA080IU,BA080IU, Statistics for Business,7,FAFB22IU11,60,Hết,,Ba,4,3,A1.401,H.T.A.Ngoc
BA080IU,BA080IU, Statistics for Business,8,FAFB22IU11,60,Hết,,Sáu,7,3,A2.402,H.T.A.Ngoc
BA080IU,BA080IU, Statistics for Business,9,FAFB22IU11,50,3,,Sáu,7,3,C.401,L.Q.Thái
BA080IU,BA080IU, Statistics for Business,10,FAFB22IU11,60,1,,Tư,4,3,C.401,L.V.Chon
BA081IU,BA081IU, Business Law,1,BABA23AD41,95,Hết,,Tư,4,3,A2.205,M.T.Kien
BA081IU,BA081IU, Business Law,2,BABA234WE41,95,Hết,,Bảy,1,3,A2.104,M.T.Kien
BA081IU,BA081IU, Business Law,3,BABA234WE41,95,1,,Bảy,4,3,A1.309,M.T.Kien
BA081IU,BA081IU, Business Law,4,BABA234WE41,30,7,,Bảy,1,3,A2.408,N.Đ.Hiếu
BA081IU,BA081IU, Business Law,5,FAAC23IU11,90,4,,Năm,4,3,A2.407,N.Đ.Hiếu
BA082IU,BA082IU, Brand Management,1,BABA234WE41,67,Hết,,Tư,7,3,A2.301,B.T.Thanh
BA083IU,BA083IU, Consumer Behavior,1,BABA222WE11,61,Hết,,Ba,7,3,C.401,H.Đ.Sinh
BA084IU,BA084IU, Import Export Management,1,BABA232WE41,60,Hết,,Năm,4,3,A2.301,N.T.H.An
BA094IU,BA094IU, Advertising and PR,1,BABA224WE31,60,3,,Hai,4,3,C.401,H.Đ.Sinh
BA094IU,BA094IU, Advertising and PR,1,BABA224WE31,60,3,,,,,,
BA094IU,BA094IU, Advertising and PR,1,BABA224WE31,60,3,,Hai,4,3,ONLINE2,H.Đ.Sinh
BA098IU,BA098IU, Leadership,1,BABA234WE41,62,Hết,,Ba,7,3,A2.601,M.N.Khuong
BA115IU,BA115IU, Introduction to Business Administration,1,BABA222WE01,50,5,,Tư,4,3,L202,P.V.Hanh
BA115IU,BA115IU, Introduction to Business Administration,2,BABA222WE01,60,1,,Sáu,1,3,A2.307,Đ.T.L.Trinh
BA115IU,BA115IU, Introduction to Business Administration,3,BABA222WE01,60,1,,Tư,7,3,L202,Đ.T.L.Trinh
BA115IU,BA115IU, Introduction to Business Administration,4,BABA24IU41,50,5,,Sáu,1,3,A2.501,P.V.Hanh
BA115IU,BA115IU, Introduction to Business Administration,5,FAAC23IU21,60,4,,Ba,4,3,A1.309,L.T.K.Trang
BA115IU,BA115IU, Introduction to Business Administration,6,FAAC24IU01,60,Hết,,Năm,7,3,A2.407,N.Đ.T.An
BA118IU,BA118IU, Introduction to Psychology,1,BABA234WE11,60,Hết,,Tư,7,3,A2.302,N.H.Trung
BA118IU,BA118IU, Introduction to Psychology,2,BABA234WE11,65,2,,Ba,4,3,A2.402,N.H.Trung
BA118IU,BA118IU, Introduction to Psychology,3,BABA234WE11,61,6,,Năm,4,3,A2.307,N.H.Trung
BA118IU,BA118IU, Introduction to Psychology,4,BABA234WE11,30,8,,Bảy,4,3,L205,N.D.Danh
BA118IU,BA118IU, Introduction to Psychology,5,BABA234WE11,60,Hết,,Sáu,4,3,A2.508,N.D.Danh
BA118IU,BA118IU, Introduction to Psychology,6,FAAC23IU21,60,Hết,,Hai,7,3,L202,N.D.Danh
BA120IU,BA120IU, Business Computing Skills,1,BABA23AD31,50,3,,Bảy,4,3,LA1.302,N.V.Bình
BA120IU,BA120IU, Business Computing Skills,2,BABA222WE31,60,Hết,,Năm,4,3,LA1.302,T.T.Long
BA120IU,BA120IU, Business Computing Skills,3,BABA222WE31,60,2,,Sáu,4,3,LA1.302,H.T.Quốc
BA120IU,BA120IU, Business Computing Skills,4,BABA222WE31,60,3,,Tư,1,3,LA1.302,N.V.Bình
BA120IU,BA120IU, Business Computing Skills,5,BABA24IU41,61,Hết,,Sáu,1,3,LA1.302,H.T.Quốc
BA120IU,BA120IU, Business Computing Skills,6,FAAC23IU01,40,5,,Ba,4,3,LA1.302,D.N.Hung
BA120IU,BA120IU, Business Computing Skills,7,FAAC23IU01,40,1,,Hai,1,3,LA1.302,N.N.T.Minh
BA120IU,BA120IU, Business Computing Skills,8,FAAC23IU01,40,Hết,,Tư,4,3,LA1.302,V.Q.Bao
BA120IU,BA120IU, Business Computing Skills,9,FAAC23IU01,40,2,,Hai,4,3,LA1.302,P.T.Kien
BA120IU,BA120IU, Business Computing Skills,10,FAAC24IU01,60,Hết,,Năm,1,3,LA1.302,H.V.T.Dung
BA120IU,BA120IU, Business Computing Skills,11,BABA24IU41,60,Hết,,Sáu,1,3,LA1.301,N.V.Bình
BA120IU,BA120IU, Business Computing Skills,12,BABA24IU41,60,13,,Bảy,1,3,LA1.302,H.T.Quốc
BA123IU,BA123IU, Principles of Management,1,BABA222WE11,61,1,,Ba,4,3,A1.208,A.Thớ
BA123IU,BA123IU, Principles of Management,2,BABA222WE11,60,2,,Sáu,4,3,L202,A.Thớ
BA123IU,BA123IU, Principles of Management,3,BABA222WE11,60,7,,Bảy,1,3,L207,N.T.Minh
BA123IU,BA123IU, Principles of Management,4,FAAC23IU11,60,18,,Ba,7,3,A2.301,N.Đ.T.An
BA123IU,BA123IU, Principles of Management,5,FAAC23IU11,60,6,,Sáu,4,3,A2.601,P.V.Hanh
BA130IU,BA130IU, Organizational Behavior,1,BABA234WE21,62,3,,Tư,4,3,A2.508,N.T.Minh
BA130IU,BA130IU, Organizational Behavior,2,BABA234WE21,60,2,,Sáu,7,3,A2.401,N.T.Minh
BA130IU,BA130IU, Organizational Behavior,3,BABA234WE21,61,2,,Tư,1,3,A2.508,N.T.Minh
BA130IU,BA130IU, Organizational Behavior,4,BABA234WE21,50,2,,Sáu,4,3,L108,P.T.N.Minh
BA130IU,BA130IU, Organizational Behavior,5,FAAC23IU11,50,1,,Ba,1,3,A1.202,P.T.N.Minh
BA140IU,BA140IU, Business Game,1,BABA224WE31,41,Hết,,Năm,1,3,LA1.301,B.Q.Thong
BA140IU,BA140IU, Business Game,1,BABA224WE31,41,Hết,,,,,,
BA140IU,BA140IU, Business Game,1,BABA224WE31,41,Hết,,Năm,1,3,ONLINE2,B.Q.Thong
BA140IU,BA140IU, Business Game,2,BABA224WE31,45,2,,Năm,4,3,ONLINE1,B.Q.Thong
BA140IU,BA140IU, Business Game,2,BABA224WE31,45,2,,,,,,
BA140IU,BA140IU, Business Game,2,BABA224WE31,45,2,,Năm,4,3,LA1.301,B.Q.Thong
BA142IU,BA142IU, Marketing Strategy,1,BABA224WE31,60,1,,Bảy,7,3,C.401,N.T.Mẫn
BA145IU,BA145IU, International Marketing,1,BABA224WE21,63,2,,Tư,1,3,A1.202,L.N.N.Quế
BA145IU,BA145IU, International Marketing,2,BABA224WE21,60,11,,Bảy,1,3,A2.302,L.T.P.M.Hoàng
BA145IU,BA145IU, International Marketing,3,BABA224WE21,60,1,,Tư,1,3,A1.402,L.T.P.M.Hoàng
BA151IU,BA151IU, International Business Management,1,BABA224WE21,61,1,,Tư,4,3,A2.402,P.T.Anh
BA151IU,BA151IU, International Business Management,2,BABA224WE21,60,11,,Ba,4,3,A2.301,P.T.Anh
BA153IU,BA153IU, Internship,1,BABA222WE11,200,125,,,0,0,,H.M.Tri
BA153IU,BA153IU, Internship,2,FAFB23IU41,200,185,,,0,0,,T.Q.Dat
BA154IU,BA154IU, Entrepreneurship and Small Business Management,1,BABA224WE21,60,9,,Năm,1,3,L202,N.V.H.Chau
BA154IU,BA154IU, Entrepreneurship and Small Business Management,2,BABA224WE21,60,3,,Năm,1,3,L201,N.H.Phu
BA156IU,BA156IU, Human Resources Management,1,BABA224WE31,62,Hết,,Tư,7,3,A1.109,P.T.Nhật
BA161IU,BA161IU, Business Research Methods,1,BABA224WE11,60,Hết,,Năm,1,3,A2.301,C.M.Man
BA161IU,BA161IU, Business Research Methods,3,BABA224WE11,50,5,,Hai,7,3,A2.301,Đ.T.L.Trinh
BA161IU,BA161IU, Business Research Methods,3,BABA224WE11,50,5,,,,,,
BA161IU,BA161IU, Business Research Methods,3,BABA224WE11,50,5,,Hai,7,3,A2.301,L.D.M.Tri
BA161IU,BA161IU, Business Research Methods,4,BABA224WE11,30,4,,Sáu,7,3,A2.301,H.M.Tri
BA161IU,BA161IU, Business Research Methods,5,BABA224WE11,50,3,,Hai,7,3,A1.401,H.M.Tri
BA161IU,BA161IU, Business Research Methods,6,FAFB22IU11,55,Hết,,Hai,1,3,A2.301,N.N.D.Phuong
BA161IU,BA161IU, Business Research Methods,7,FAFB22IU11,50,2,,Tư,1,3,A1.401,N.N.D.Phuong
BA162IU,BA162IU, Strategy Formulation and Implementation,1,BABA234WE41,60,Hết,,Hai,4,3,A1.401,N.H.Trung
BA162IU,BA162IU, Strategy Formulation and Implementation,2,BABA234WE41,61,Hết,,Năm,1,3,A2.104,N.H.Trung
BA164IU,BA164IU, Production and Operations Management,1,BABA224WE01,60,Hết,,Năm,1,3,A2.302,N.N.Tung
BA164IU,BA164IU, Production and Operations Management,2,BABA224WE01,62,1,,Tư,4,3,A2.401,N.N.Ty
BA164IU,BA164IU, Production and Operations Management,3,BABA224WE01,50,9,,Tư,7,3,A1.603,N.N.Ty
BA164IU,BA164IU, Production and Operations Management,4,BABA224WE01,60,2,,Bảy,4,3,A2.302,N.N.Tung
BA167IU,BA167IU, Introduction to Vietnamese Legal System,1,BABA232WE31,60,1,,Tư,7,3,A2.307,V.T.Huan
BA167IU,BA167IU, Introduction to Vietnamese Legal System,2,BABA232WE31,50,14,,Hai,7,3,A1.402,V.T.Huan
BA167IU,BA167IU, Introduction to Vietnamese Legal System,6,FAAC23IU11,80,14,,Tư,1,3,A2.401,V.T.Huan
BA168IU,BA168IU, Quantitative Methods for Business,1,BABA232WE41,61,2,,Tư,7,3,A2.508,D.T.U.Thao
BA168IU,BA168IU, Quantitative Methods for Business,2,BABA232WE41,60,6,,Hai,4,3,A1.402,D.T.U.Thao
BA168IU,BA168IU, Quantitative Methods for Business,3,BABA232WE41,50,16,,Bảy,4,3,A1.202,D.T.U.Thao
BA168IU,BA168IU, Quantitative Methods for Business,4,BABA232WE41,30,2,,Sáu,7,3,A1.603,H.T.N.Hiền
BA168IU,BA168IU, Quantitative Methods for Business,5,BABA232WE41,60,Hết,,Sáu,4,3,A1.202,H.T.N.Hiền
BA168IU,BA168IU, Quantitative Methods for Business,6,BABA232WE41,50,Hết,,Hai,4,3,A2.507,H.T.N.Hiền
BA169IU,BA169IU, Management Information Systems,1,BABA23AD31,60,3,,Hai,4,3,L202,L.V.Phúc
BA169IU,BA169IU, Management Information Systems,2,BABA234WE41,60,Hết,,Năm,7,3,C.401,L.V.Phúc
BA169IU,BA169IU, Management Information Systems,3,BABA234WE41,60,Hết,,Ba,1,3,C.401,L.V.Phúc
BA169IU,BA169IU, Management Information Systems,4,FAAC23IU01,30,2,,Ba,1,3,L202,N.N.T.Minh
BA170IU,BA170IU, Thesis,1,BABA222WE11,200,110,,,0,0,,H.M.Tri
BA170IU,BA170IU, Thesis,2,FAFB23IU41,200,107,,,0,0,,T.Q.Dat
BA171IU,BA171IU, Risk Management,1,BABA232WE41,62,Hết,,Tư,7,3,A1.202,H.N.Quang
BA197IU,BA197IU, Introduction to Sociology,1,BABA234WE11,60,Hết,,Tư,4,3,A1.401,P.T.Nhật
BA197IU,BA197IU, Introduction to Sociology,2,BABA234WE11,60,Hết,,Bảy,7,3,A1.402,P.T.Nhật
BA197IU,BA197IU, Introduction to Sociology,3,BABA234WE11,60,1,,Tư,1,3,A2.608,T.N.N.Hân
BA197IU,BA197IU, Introduction to Sociology,4,BABA234WE11,60,Hết,,Tư,4,3,A1.402,T.N.N.Hân
BA197IU,BA197IU, Introduction to Sociology,5,BABA234WE11,60,1,,Sáu,4,3,C.401,T.M.Thuận
BA197IU,BA197IU, Introduction to Sociology,6,BABA234WE11,60,5,,Sáu,1,3,C.401,T.M.Thuận
BA198IU,BA198IU, Introduction to Hospitality Industry,1,BABA224WE31,30,3,,Hai,1,3,L101,H.T.Hieu
BA206IU,BA206IU, Hospitality Legal Issues,1,BABA224WE41,30,24,,Tư,1,3,L103,N.Đ.Hiếu
BA207IU,BA207IU," Safety, Sanitation and Security",1,BABA224WE41,30,23,,Hai,4,3,ONLINE3,H.T.Hieu
BA207IU,BA207IU," Safety, Sanitation and Security",1,BABA224WE41,30,23,,,,,,
BA207IU,BA207IU," Safety, Sanitation and Security",1,BABA224WE41,30,23,,Hai,4,3,L109,H.T.Hieu
BA228IU,BA228IU, Food and Beverage Management,1,BABA224WE31,30,24,,Ba,4,3,L103,N.D.Y.Linh
BA256IU,BA256IU, Workshop 1,1,BABA224WE41,100,Hết,,Bảy,7,4,A1.109,Đ.T.L.Trinh
BA256IU,BA256IU, Workshop 1,2,BABA224WE41,100,3,,Sáu,7,4,A1.109,Đ.T.L.Trinh
BA256IU,BA256IU, Workshop 1,3,BABA224WE41,90,31,,Bảy,1,4,A1.109,Đ.T.L.Trinh
BA256IU,BA256IU, Workshop 1,4,FAFB23IU21,100,1,,Bảy,4,3,ONLINE,T.N.Minh
BA256IU,BA256IU, Workshop 1,4,FAFB23IU21,100,1,,,,,,
BA256IU,BA256IU, Workshop 1,4,FAFB23IU21,100,1,,Bảy,4,3,A1.208,T.N.Minh
BA256IU,BA256IU, Workshop 1,5,FAFB23IU21,100,Hết,,Tư,4,3,ONLINE,T.N.Minh
BA256IU,BA256IU, Workshop 1,5,FAFB23IU21,100,Hết,,,,,,
BA256IU,BA256IU, Workshop 1,5,FAFB23IU21,100,Hết,,Tư,4,3,A1.208,T.N.Minh
BA272IU,BA272IU, Workshop 2 on Hospitality Management,1,BABA22UH01,30,16,,Bảy,7,4,L207,N.Đ.T.An
BA273IU,BA273IU, Workshop 2 on International Business,1,BABA22UH01,68,Hết,,Bảy,7,4,A2.608,N.T.H.An
BA274IU,BA274IU, Workshop 2 Business Management,1,BABA22UH01,67,3,,Bảy,1,4,A2.608,P.T.N.Minh
BA275IU,BA275IU, Workshop 2 on Marketing,1,BABA22UH01,71,1,,Bảy,7,4,A2.302,H.Đ.Sinh
BA275IU,BA275IU, Workshop 2 on Marketing,2,BABA22UH01,50,4,,Bảy,1,4,A1.206,H.Đ.Sinh
PE007IU,PE007IU, World Economic Geography,2,BABA22UH01,112,Hết,,Ba,4,3,A2.205,N.T.P.Chau
PE007IU,PE007IU, World Economic Geography,3,BABA22UH01,51,Hết,,Ba,7,3,A2.508,N.T.P.Chau
PE010IU,PE010IU, Vietnamese History and Culture,1,BABA24UH01,110,23,,Năm,7,3,A1.109,V.V.Sen
PE010IU,PE010IU, Vietnamese History and Culture,2,BABA22UH01,111,1,,Ba,7,3,A1.109,V.V.Sen
BT009IU,BT009IU, Cell Biology,1,BTBT23IU01,81,Hết,,Bảy,7,3,A2.402,L.M.Thong
BT010IU,BT010IU, Plant Physiology,1,BTBT234WE21,90,4,,Sáu,1,3,A1.202,T.V.Minh
BT150IU,BT150IU, Introduction to Biotechnology,1,BTBT234WE11,70,5,,Hai,4,2,A2.601,N.P.Thao
BT150IU,BT150IU, Introduction to Biotechnology,1,BTBT234WE11,70,5,,,,,,
BT150IU,BT150IU, Introduction to Biotechnology,1,BTBT234WE11,70,5,,Hai,4,2,A2.601,N.H.K.Tu
BT150IU,BT150IU, Introduction to Biotechnology,1,BTBT234WE11,70,5,,Hai,4,2,A2.601,T.T.Hang
BT150IU,BT150IU, Introduction to Biotechnology,1,BTBT234WE11,70,5,,Hai,4,2,A2.601,N.V.Thuan
BT179IU,BT179IU, Thesis,1,BTBT234WE01,150,94,,,0,0,,N.V.Thuan
BT200IU,BT200IU, Scientific Writing Workshop,1,BTBT23IU11,90,25,,Ba,1,3,A2.601,N.V.Thuan
BT207IU,BT207IU, Human Pharmacology,1,BTBT23IU11,83,1,,Năm,1,3,A1.208,N.H.K.Tu
BT210IU,BT210IU, Human Physiology,1,BTBT23IU01,90,1,,Sáu,4,3,A1.109,N.V.Thuan
BT216IU,BT216IU, Experimental Design,1,BTBT23IU11,75,9,,Hai,7,3,A2.205,L.M.Thong
BT216IU,BT216IU, Experimental Design,1,BTBT23IU11,75,9,,,,,,
BT216IU,BT216IU, Experimental Design,1,BTBT23IU11,75,9,,Hai,7,3,A2.205,N.H.K.Tu
BT216IU,BT216IU, Experimental Design,1,BTBT23IU11,75,9,,Hai,7,3,A2.205,B.H.Thuy
BT216IU,BT216IU, Experimental Design,1,BTBT23IU11,75,9,,Hai,7,3,A2.205,N.T.Khoi
BT217IU,BT217IU, Molecular Genetics,1,BTBT23IU11,50,25,,Tư,4,3,A2.509,N.M.Thanh
BT221IU,BT221IU, Internship,1,BTBT234WE01,100,96,,,0,0,,N.V.Thuan
BT306IU,BT306IU, Developmental Biology,1,BTBT23IU21,70,13,,Tư,4,3,A1.201,N.V.Thuan
BT311IU,BT311IU, Biology,1,BTBT244WE01,100,18,,Ba,7,3,A2.407,B.H.Thuy
BT311IU,BT311IU, Biology,2,BTBT234WE01,90,Hết,,Hai,1,3,A2.601,B.H.Thuy
BT312IU,BT312IU, Practice in Biology,1,BTBT234WE01,21,4,,Tư,1,5,LA.CNSH,P.H.Điệp
BT312IU,BT312IU, Practice in Biology,2,BTBT234WE01,21,1,,Ba,1,5,LA.CNSH,P.H.Điệp
BT312IU,BT312IU, Practice in Biology,3,BTBT244WE01,21,3,,Hai,1,5,LA.CNSH,P.H.Điệp
BT312IU,BT312IU, Practice in Biology,4,BTBT234WE01,21,1,,Tư,7,5,LA.CNSH,P.H.Điệp
BT312IU,BT312IU, Practice in Biology,5,BTBT244WE01,21,Hết,,Năm,7,5,LA.CNSH,P.H.Điệp
BT312IU,BT312IU, Practice in Biology,6,BTBT244WE01,21,2,,Sáu,1,5,LA.CNSH,P.H.Điệp
BT312IU,BT312IU, Practice in Biology,7,BTBT234WE01,21,2,,Sáu,7,5,LA.CNSH,P.H.Điệp
BT312IU,BT312IU, Practice in Biology,9,BTBT234WE01,21,8,,Năm,1,5,LA.CNSH,T.T.N.Diep
BT313IU,BT313IU, Genetics,1,BTBT234WE21,90,1,,Năm,4,3,A2.508,T.T.Hang
BT314IU,BT314IU, Practice in Genetics,1,BTBT234WE21,22,Hết,,Ba,1,5,LA1.701,T.T.Hang
BT314IU,BT314IU, Practice in Genetics,2,BTBT234WE21,22,5,,Bảy,1,5,LA1.701,T.T.Hang
BT314IU,BT314IU, Practice in Genetics,3,BTBT234WE21,22,5,,Hai,7,5,LA1.701,T.T.Hang
BT314IU,BT314IU, Practice in Genetics,4,BTBT234WE21,22,Hết,,Tư,7,5,LA1.701,T.T.Hang
BT315IU,BT315IU, Analytical Chemistry,1,BTBT234WE31,80,1,,Sáu,4,3,A2.307,N.T.Trang
BT316IU,BT316IU, Practice in Analytical Chemistry,1,BTBT234WE31,23,Hết,,Ba,7,5,LA1.502,B.X.A.Dao
BT316IU,BT316IU, Practice in Analytical Chemistry,2,BTBT234WE31,21,Hết,,Ba,1,5,LA1.502,B.X.A.Dao
BT317IU,BT317IU, Biostatistics,1,BTBT234WE31,75,2,,Bảy,7,4,A2.508,N.T.Khoi
BT317IU,BT317IU, Biostatistics,2,BTBT234WE31,75,Hết,,Năm,7,4,A2.508,N.T.Khoi
BT318IU,BT318IU, Practice in Biostatistics,1,BTBT234WE31,75,Hết,,Hai,1,5,A1.202,D.N.P.Chau
BT318IU,BT318IU, Practice in Biostatistics,2,BTBT234WE31,75,12,,Hai,7,5,A1.202,D.N.P.Chau
BT319IU,BT319IU, Biochemistry,1,BTBT234WE41,80,Hết,,Tư,4,3,A2.601,L.H.Phu
BT320IU,BT320IU, Practice in Biochemistry,1,BTBT234WE41,23,2,,Năm,1,5,LA1.501,N.H.Lan
BT320IU,BT320IU, Practice in Biochemistry,2,BTBT234WE41,23,Hết,,Tư,7,5,LA1.501,N.H.Lan
BT320IU,BT320IU, Practice in Biochemistry,3,BTBT234WE41,23,1,,Ba,1,5,LA1.501,N.H.Lan
BT320IU,BT320IU, Practice in Biochemistry,4,BTBT234WE41,23,11,,Sáu,1,5,LA1.501,N.H.Lan
BT321IU,BT321IU, Microbiology,1,BTBT234WE41,90,Hết,,Sáu,7,3,L201,N.B.Quốc
BT322IU,BT322IU, Practice in Microbiology,1,BTBT234WE41,20,7,,Hai,1,5,LA.CNSH,H.T.L.Xuan
BT322IU,BT322IU, Practice in Microbiology,2,BTBT234WE41,20,Hết,,Ba,1,5,LA.CNSH,H.T.L.Xuan
BT322IU,BT322IU, Practice in Microbiology,3,BTBT234WE41,20,Hết,,Năm,7,5,LA.CNSH,H.T.L.Xuan
BT322IU,BT322IU, Practice in Microbiology,4,BTBT234WE41,20,3,,Ba,7,5,LA.CNSH,H.T.L.Xuan
BT333IU,BT333IU, Molecular Biotechnology,1,BTBT23IU01,44,4,,Tư,4,3,A2.313,N.P.Thao
BT334IU,BT334IU, Practice in Molecular Biotechnology,1,BTBT23IU01,24,Hết,,Ba,7,5,LA1.702,H.T.L.Xuan
BT334IU,BT334IU, Practice in Molecular Biotechnology,2,BTBT23IU01,22,Hết,,Sáu,7,5,LA1.702,H.T.L.Xuan
BT335IU,BT335IU, Immunology,1,BTBT23IU01,86,1,,Bảy,1,3,A2.601,N.T.T.Hoai
BT336IU,BT336IU, Practice in Immunology,1,BTBT23IU01,20,1,,Ba,1,5,LA1.702,T.T.H.Yen
BT336IU,BT336IU, Practice in Immunology,2,BTBT23IU01,20,7,,Hai,7,5,LA1.702,T.T.H.Yen
BT336IU,BT336IU, Practice in Immunology,3,BTBT23IU01,20,2,,Năm,7,5,LA1.702,T.T.H.Yen
BT336IU,BT336IU, Practice in Immunology,4,BTBT23IU01,20,1,,Tư,7,5,LA1.702,T.T.H.Yen
BT337IU,BT337IU, Bioinformatics,1,BTBT23IU11,60,3,,Sáu,4,3,A1.401,N.M.Thanh
BT338IU,BT338IU, Practice in Bioinformatics,1,BTBT23IU11,50,28,,Ba,7,5,LA1.301,D.N.P.Chau
BT338IU,BT338IU, Practice in Bioinformatics,2,BTBT23IU11,50,35,,Năm,7,5,LA1.301,D.N.P.Chau
BT339IU,BT339IU, Protein Biotechnology,1,BTBT23IU21,60,2,,Sáu,4,3,A2.402,N.H.K.Tu
BT340IU,BT340IU, Practice in Protein Biotechnology,1,BTBT23IU21,20,2,,Tư,1,5,LA1.701,T.T.H.Yen
BT340IU,BT340IU, Practice in Protein Biotechnology,2,BTBT23IU21,20,Hết,,Năm,1,5,LA1.701,T.T.H.Yen
BT340IU,BT340IU, Practice in Protein Biotechnology,3,BTBT23IU21,21,5,,Hai,1,5,LA1.701,T.T.H.Yen
BT343IU,BT343IU, Medical Genetics,1,BTBT23IU21,50,Hết,,Bảy,1,3,A2.509,L.M.Thong
BT344IU,BT344IU, Practice in Medical Genetics,1,BTBT23IU21,26,Hết,,Ba,7,5,LA1.702,L.M.Thong
BT344IU,BT344IU, Practice in Medical Genetics,2,BTBT23IU21,26,Hết,,Tư,7,5,LA1.702,L.M.Thong
BT347IU,BT347IU, Techniques in Plant Biotechnology,1,BTBT23IU41,62,Hết,,Ba,4,3,A2.601,T.V.Minh
BT348IU,BT348IU, Practice in Techniques in Plant Biotechnology,1,BTBT23IU41,20,1,,Hai,7,5,LA1.709,H.T.L.Xuan
BT348IU,BT348IU, Practice in Techniques in Plant Biotechnology,2,BTBT23IU41,21,Hết,,Bảy,7,5,LA1.709,H.T.L.Xuan
BT348IU,BT348IU, Practice in Techniques in Plant Biotechnology,3,BTBT23IU41,21,Hết,,Bảy,1,5,LA1.709,P.H.Điệp
BT349IU,BT349IU, Pharmaceutical Biotechnology,1,BTBT23IU41,41,1,,Ba,7,3,A2.509,N.H.K.Tu
BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,1,BTBT23IU41,20,Hết,,Bảy,1,5,LA1.701,N.H.K.Tu
BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,2,BTBT23IU41,20,Hết,,Hai,1,5,LA1.701,N.H.K.Tu
BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,2,BTBT23IU41,20,Hết,,,,,,
BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,2,BTBT23IU41,20,Hết,,Năm,7,5,LA1.701,N.H.K.Tu
BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,2,BTBT23IU41,20,Hết,,Hai,7,5,LA1.701,N.H.K.Tu
BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,2,BTBT23IU41,20,Hết,,Ba,1,5,LA1.701,N.H.K.Tu
BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,2,BTBT23IU41,20,Hết,,Ba,7,5,LA1.701,N.H.K.Tu
BT350IU,BT350IU, Practice in Pharmaceutical Biotechnology,2,BTBT23IU41,20,Hết,,Năm,1,5,LA1.701,N.H.K.Tu
BT355IU,BT355IU, Stem Cell Biology,1,BTBT23WE01,70,2,,Năm,7,3,L207,B.H.Thuy
BT356IU,BT356IU, Practice in Stem Cell Biology,1,BTBT23WE01,23,1,,Ba,1,5,LA1.702,B.H.Thuy
BT356IU,BT356IU, Practice in Stem Cell Biology,1,BTBT23WE01,23,1,,,,,,
BT356IU,BT356IU, Practice in Stem Cell Biology,1,BTBT23WE01,23,1,,Ba,1,5,LA1.710,B.H.Thuy
BT356IU,BT356IU, Practice in Stem Cell Biology,1,BTBT23WE01,23,1,,Ba,1,5,LA1.701,B.H.Thuy
BT356IU,BT356IU, Practice in Stem Cell Biology,2,BTBT23WE01,23,Hết,,Tư,1,5,LA1.702,B.H.Thuy
BT356IU,BT356IU, Practice in Stem Cell Biology,2,BTBT23WE01,23,Hết,,,,,,
BT356IU,BT356IU, Practice in Stem Cell Biology,2,BTBT23WE01,23,Hết,,Tư,1,5,LA1.710,B.H.Thuy
BT356IU,BT356IU, Practice in Stem Cell Biology,2,BTBT23WE01,23,Hết,,Tư,1,5,LA1.701,B.H.Thuy
BT356IU,BT356IU, Practice in Stem Cell Biology,3,BTBT23WE01,23,1,,Sáu,7,5,LA1.710,B.H.Thuy
BT356IU,BT356IU, Practice in Stem Cell Biology,3,BTBT23WE01,23,1,,,,,,
BT356IU,BT356IU, Practice in Stem Cell Biology,3,BTBT23WE01,23,1,,Sáu,7,5,LA1.701,B.H.Thuy
BT356IU,BT356IU, Practice in Stem Cell Biology,3,BTBT23WE01,23,1,,Sáu,7,5,LA1.702,B.H.Thuy
BT405IU,BT405IU, Physical Chemistry,1,BTBC23IU21,30,14,,Tư,7,3,L206,N.T.Khoi
BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,BTBC23IU01,40,23,,Ba,7,3,A2.311,N.T.Khoi
BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,BTBC23IU01,40,23,,,,,,
BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,BTBC23IU01,40,23,,Ba,7,3,A2.311,L.Q.Phong
BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,BTBC23IU01,40,23,,Ba,7,3,A2.311,V.T.Ngọc
BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,BTBC23IU01,40,23,,Ba,7,3,A2.311,H.L.Son
BTBC102IU,BTBC102IU, Introduction to Biochemistry,1,BTBC23IU01,40,23,,Ba,7,3,A2.311,P.T.Hoa
BTBC201IU,BTBC201IU, Organic Chemistry 1,1,BTBC23IU11,40,11,,Sáu,7,3,A2.409,L.Q.Phong
BTBC207IU,BTBC207IU, Organic Chemistry Lab,1,BTBC23IU11,20,12,,Tư,7,5,LA1.502,L.Q.Phong
BTBC209IU,BTBC209IU, Biochemistry 1,1,BTBC23IU11,30,3,,Sáu,1,3,L110,V.T.Ngọc
BTBC213IU,BTBC213IU, Fundamentals of Analytical Chemistry,1,BTBC23IU11,20,Hết,,Sáu,4,3,L111,P.T.Hoa
BTBC214IU,BTBC214IU, Fundamentals of Analytical Chemistry Lab,1,BTBC23IU11,20,3,,Năm,1,5,LA1.502,P.T.Hoa
BTBC217IU,BTBC217IU, Experimental design and technical communication,1,BTBC23IU11,30,21,,Bảy,1,3,A2.412,N.T.Khoi
BTBC304IU,BTBC304IU, Biopharmaceutics,1,BTBC23IU11,20,7,,Hai,7,3,A2.312,H.L.Son
BTBC313IU,BTBC313IU, Methods in Biochemistry,1,BTBC23IU11,20,5,,Năm,1,3,A2.309,V.T.Ngọc
BTBC314IU,BTBC314IU, Methods in Biochemistry Lab,1,BTBC23IU11,23,Hết,,Ba,7,5,LA1.501,L.T.H.Ngoc
BTBC315IU,BTBC315IU, Enzymology,1,BTBC23IU11,25,1,,Hai,4,3,L102,N.T.Khoi
BTBC316IU,BTBC316IU, Enzymology Lab,1,BTBC23IU11,23,3,,Sáu,1,5,LA1.703,L.T.H.Ngoc
BTBC317IU,BTBC317IU, Nutritional Biochemistry,1,BTBC23IU21,20,4,,Tư,7,3,A2.412,V.T.Ngọc
BTBC318IU,BTBC318IU, Nutritional Biochemistry Lab,1,BTBC23IU21,20,8,,Tư,1,5,LA1.703,L.T.H.Ngoc
BTBC409IU,BTBC409IU, Cosmetics and Cosmeceuticals 1,1,BTBC23IU21,20,2,,Năm,1,3,A2.313,H.L.Son
BTFT156IU,BTFT156IU, Food Chemistry and Biochemistry,1,BTFT23IU01,45,1,,Tư,1,3,L110,N.V.Toan
BTFT201IU,BTFT201IU, Introduction to Food Science and Technology,1,BTFT23IU01,40,1,,Sáu,7,3,A2.309,N.V.H.Ha
BTFT203IU,BTFT203IU, Food engineering principles,1,BTFT23IU01,40,2,,Hai,7,4,L110,D.Q.Tuan
BTFT205IU,BTFT205IU, Nutrition and Functional Foods,1,BTFT23IU01,40,28,,Hai,1,3,L109,N.V.Toan
BTFT234IU,BTFT234IU, Food microbiology,1,BTFT23IU01,30,Hết,,Ba,1,3,L203,N.N.T.Tiến
BTFT236IU,BTFT236IU, Enzyme and food fermentation,1,BTFT23IU11,25,3,,Ba,7,3,A2.408,L.H.Phu
BTFT254IU,BTFT254IU, Practice in food microbiology,1,BTFT23IU01,20,6,,Năm,1,5,LA1.602,N.T.H.Giang
BTFT254IU,BTFT254IU, Practice in food microbiology,1,BTFT23IU01,20,6,,,,,,
BTFT254IU,BTFT254IU, Practice in food microbiology,1,BTFT23IU01,20,6,,Năm,7,5,LA1.602,N.T.H.Giang
BTFT254IU,BTFT254IU, Practice in food microbiology,2,BTFT23IU01,20,4,,Năm,1,5,LA1.602,N.T.H.Giang
BTFT254IU,BTFT254IU, Practice in food microbiology,2,BTFT23IU01,20,4,,,,,,
BTFT254IU,BTFT254IU, Practice in food microbiology,2,BTFT23IU01,20,4,,Năm,7,5,LA1.602,N.T.H.Giang
BTFT256IU,BTFT256IU, Practice in enzyme and food fermentation,1,BTFT23IU11,20,2,,Bảy,7,5,LA1.602,T.T.Y.Nhi
BTFT256IU,BTFT256IU, Practice in enzyme and food fermentation,1,BTFT23IU11,20,2,,,,,,
BTFT256IU,BTFT256IU, Practice in enzyme and food fermentation,1,BTFT23IU11,20,2,,Bảy,1,5,LA1.602,T.T.Y.Nhi
BTFT303IU,BTFT303IU, Toxicology and food safety,1,BTFT23IU11,40,8,,Tư,7,3,A2.509,N.V.H.Ha
BTFT305IU,BTFT305IU, Food quality assurance systems,1,BTFT23IU11,40,22,,Sáu,7,3,L109,D.Q.Tuan
BTFT306IU,BTFT306IU, Food Packaging and Food additives,1,BTFT23IU11,40,15,,Năm,7,3,A2.512,P.V.Hung
BTFT309IU,BTFT309IU, Food Laws and Standards,1,BTFT23IU01,40,21,,Hai,1,3,A2.512,N.M.X.HỐNG
BTFT311IU,BTFT311IU," Modern Nutrition, Diets and Health",1,BTFT23IU21,40,12,,Ba,7,3,A2.309,H.T.Dat
BTFT316IU,BTFT316IU, Scientific Writing and Design of Experiments for Food Science,1,BTFT23IU41,30,Hết,,Tư,1,3,A2.512,P.V.Hung
BTFT316IU,BTFT316IU, Scientific Writing and Design of Experiments for Food Science,1,BTFT23IU41,30,Hết,,,,,,
BTFT316IU,BTFT316IU, Scientific Writing and Design of Experiments for Food Science,1,BTFT23IU41,30,Hết,,Tư,1,3,A2.512,L.N.Lieu
BTFT331IU,BTFT331IU, Food unit operations 1,1,BTFT23IU01,25,2,,Hai,7,3,L203,L.N.Lieu
BTFT331IU,BTFT331IU, Food unit operations 1,1,BTFT23IU01,25,2,,,,,,
BTFT331IU,BTFT331IU, Food unit operations 1,1,BTFT23IU01,25,2,,Hai,7,3,L205,L.N.Lieu
BTFT332IU,BTFT332IU, Food Analysis,1,BTFT23IU01,25,8,,Sáu,1,3,A2.512,P.V.Hung
BTFT334IU,BTFT334IU, Food unit operations 2,1,BTFT23IU11,25,7,,Ba,7,3,A2.512,D.Q.Tuan
BTFT337IU,BTFT337IU, Food microbiology analysis,1,BTFT23IU11,30,Hết,,Hai,7,3,A2.512,N.V.H.Ha
BTFT351IU,BTFT351IU, Practice in food unit operations 1,1,BTFT23IU01,22,1,,Năm,7,5,LA1.102,T.T.Y.Nhi
BTFT351IU,BTFT351IU, Practice in food unit operations 1,1,BTFT23IU01,22,1,,,,,,
BTFT351IU,BTFT351IU, Practice in food unit operations 1,1,BTFT23IU01,22,1,,Năm,1,5,LA1.102,T.T.Y.Nhi
BTFT352IU,BTFT352IU, Practice in food analysis,1,BTFT23IU01,20,4,,Tư,7,5,LA1.102,T.T.Y.Nhi
BTFT352IU,BTFT352IU, Practice in food analysis,1,BTFT23IU01,20,4,,,,,,
BTFT352IU,BTFT352IU, Practice in food analysis,1,BTFT23IU01,20,4,,Tư,1,5,LA1.102,T.T.Y.Nhi
BTFT354IU,BTFT354IU, Practice in food unit operations 2,1,BTFT23IU11,20,2,,Bảy,1,5,LA1.102,T.T.Y.Nhi
BTFT354IU,BTFT354IU, Practice in food unit operations 2,1,BTFT23IU11,20,2,,,,,,
BTFT354IU,BTFT354IU, Practice in food unit operations 2,1,BTFT23IU11,20,2,,Bảy,7,5,LA1.102,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Hai,7,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,,,,,
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Tư,7,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Năm,7,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Ba,7,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Sáu,7,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Bảy,7,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Hai,1,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Ba,1,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Tư,1,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Năm,1,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Sáu,1,5,LA1.602,T.T.Y.Nhi
BTFT357IU,BTFT357IU, Practice in Food Microbiology Analysis,1,BTFT23IU11,20,3,,Bảy,1,5,LA1.602,T.T.Y.Nhi
BTFT409IU,BTFT409IU, Internship,1,BTBT234WE01,50,29,,,0,0,,N.V.Thuan
BTFT435IU,BTFT435IU, Meat Product Technology,1,BTFT23IU41,20,2,,Năm,7,3,A2.510,L.T.Thien
BTFT436IU,BTFT436IU," Technology of coffee, tea and cacao",1,BTFT23IU41,22,Hết,,Sáu,7,3,A2.411,L.H.Phu
BTFT437IU,BTFT437IU, Food Sensory Analysis,1,BTFT23IU21,40,8,,Hai,1,4,C.501,H.K.Anh
BTFT438IU,BTFT438IU, Food Product Development and Marketing,1,BTFT23IU21,20,Hết,,Tư,7,4,L204,L.N.Lieu
BTFT455IU,BTFT455IU, Practice in Meat Product Technology,1,BTFT23IU41,20,3,,Sáu,1,5,LA1.601,T.T.Y.Nhi
BTFT456IU,BTFT456IU," Practice in Technology of coffee, tea and cacao",1,BTFT23IU41,22,Hết,,Ba,1,5,LA1.601,N.T.H.Giang
BTFT457IU,BTFT457IU, Practice in Food Sensory Analysis,1,BTFT23IU21,20,Hết,,Hai,1,5,LA1.601,N.T.H.Giang
BTFT458IU,BTFT458IU, Practice in Food Food Product Development and Marketing,1,BTFT23IU21,20,4,,Tư,7,5,LA1.601,N.T.H.Giang
CH009IU,CH009IU, Organic chemistry,1,BTBT234WE11,50,Hết,,Năm,7,3,L110,L.Q.Phong
CH012IU,CH012IU, Chemistry Laboratory,1,CHCE23IU01,19,Hết,,Bảy,7,5,LA1.502,L.N.T.Phuc
CH012IU,CH012IU, Chemistry Laboratory,2,CHCE23IU01,19,Hết,,Sáu,7,5,LA1.502,B.X.A.Dao
CH012IU,CH012IU, Chemistry Laboratory,3,CHCE23IU01,19,Hết,,Hai,1,5,LA1.501,L.N.T.Phuc
CH012IU,CH012IU, Chemistry Laboratory,4,CHCE23IU01,19,1,,Bảy,1,5,LA1.502,L.N.T.Phuc
CH012IU,CH012IU, Chemistry Laboratory,5,CHCE23IU01,19,1,,Hai,7,5,LA1.502,B.X.A.Dao
CH012IU,CH012IU, Chemistry Laboratory,6,CHCE23IU01,19,Hết,,Năm,7,5,LA1.501,L.N.T.Phuc
CH012IU,CH012IU, Chemistry Laboratory,7,CHCE23IU01,19,1,,Hai,1,5,LA1.502,N.H.Lan
CH012IU,CH012IU, Chemistry Laboratory,8,CHCE23IU01,19,Hết,,Hai,7,5,LA1.501,L.N.T.Phuc
CH012IU,CH012IU, Chemistry Laboratory,9,CHCE23IU01,19,4,,Hai,7,5,LA1.502,V.T.M.Thu
CH012IU,CH012IU, Chemistry Laboratory,10,CHCE23IU01,19,Hết,,Sáu,7,5,LA1.502,V.T.M.Thu
CH012IU,CH012IU, Chemistry Laboratory,11,CHCE23IU01,19,2,,Hai,1,5,LA1.501,V.T.M.Thu
CH012IU,CH012IU, Chemistry Laboratory,12,CHCE23IU01,19,Hết,,Năm,7,5,LA1.502,V.T.M.Thu
CH012IU,CH012IU, Chemistry Laboratory,13,CHCE23IU01,19,Hết,,Bảy,7,5,LA1.501,L.N.T.Phuc
CH012IU,CH012IU, Chemistry Laboratory,14,CHCE23IU01,19,Hết,,Bảy,1,5,LA1.502,N.H.Lan
CH012IU,CH012IU, Chemistry Laboratory,15,CHCE23IU01,19,Hết,,Bảy,7,5,LA1.502,V.T.M.Thu
CH012IU,CH012IU, Chemistry Laboratory,16,CHCE24IU01,20,2,,Ba,7,5,LA1.502,B.X.A.Dao
CH012IU,CH012IU, Chemistry Laboratory,17,CHCE24IU01,20,2,,Bảy,7,5,LA1.501,N.N.T.Đạt
CH012IU,CH012IU, Chemistry Laboratory,18,CHCE24IU01,20,2,,Năm,7,5,LA1.501,N.N.T.Đạt
CH012IU,CH012IU, Chemistry Laboratory,19,CHCE24IU01,20,3,,Sáu,7,5,LA1.501,N.N.T.Đạt
CH012IU,CH012IU, Chemistry Laboratory,20,CHCE24IU01,20,2,,Tư,1,5,LA1.501,N.N.T.Đạt
CH012IU,CH012IU, Chemistry Laboratory,21,CHCE24IU01,20,Hết,,Tư,1,5,LA1.502,N.T.H.Hải
CH012IU,CH012IU, Chemistry Laboratory,22,CHCE24IU01,20,Hết,,Bảy,1,5,LA1.501,N.T.H.Hải
CH012IU,CH012IU, Chemistry Laboratory,23,CHCE24IU01,20,3,,Hai,7,5,LA1.501,V.T.M.Thu
CH012IU,CH012IU, Chemistry Laboratory,24,CHCE24IU01,20,3,,Hai,1,5,LA1.502,V.T.M.Thu
"""

def find_empty_rooms(csv_data, day, periods):

    data = pd.read_csv(StringIO(csv_data))

    starting_period_col = "Tiết Bắt Đầu"
    duration_col = "Số tiết"
    day_col = "Thứ"
    room_col = "Phòng"

    # Ensure numeric columns are clean
    data[starting_period_col] = pd.to_numeric(data[starting_period_col], errors='coerce')
    data[duration_col] = pd.to_numeric(data[duration_col], errors='coerce')

    # Drop rows with missing or invalid data in critical columns
    data = data.dropna(subset=[starting_period_col, duration_col, day_col, room_col])

    # Calculate the periods used for each entry
    data['Used Periods'] = data.apply(
        lambda row: list(range(int(row[starting_period_col]), int(row[starting_period_col]) + int(row[duration_col]))), axis=1
    )

    # Filter data for the specific day
    day_data = data[data[day_col] == day]

    if day_data.empty:
        print(f"No data found for {day}.")
        return

    # Find rooms in use during the given periods
    periods = [int(p) for p in periods]  # Ensure all periods are integers
    rooms_in_use = set()
    for _, row in day_data.iterrows():
        if any(period in row['Used Periods'] for period in periods):  # Check if any period overlaps
            rooms_in_use.add(row[room_col])

    # Get all unique rooms and find the difference
    all_rooms = set(data[room_col].unique())
    empty_rooms = all_rooms - rooms_in_use

    # Display results
    periods_str = ", ".join(map(str, periods))
    print(f"\nEmpty rooms on {day} during periods {periods_str}:")
    if empty_rooms:
        for room in sorted(empty_rooms, key=lambda x: str(x)):  # Ensure sorting works correctly
            print(f"- {room}")
    else:
        print("No empty rooms found.")

day = input("Enter the day (e.g., 'Hai', 'Ba', 'Tư', etc.): ")
period_input = input("Enter the period(s) (e.g., '2' or '2, 7'): ")
periods = [p.strip() for p in period_input.split(",")]


find_empty_rooms(csv_data, day, periods)
