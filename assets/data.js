// 📌 Embedded CSV Data
const csvData = `
X,Mã MHBĐ,Mã MH,Tên môn học,NMH,TTH,STC,STCHP,Mã lớp,Sĩ số,CL,TH,Thứ,Tiết BD,ST,Phòng,Giảng viên,TG học
,BA005IU,BA005IU, Financial Accounting,1,,3,3,BABA24IU21,60,26,,Hai,7,4,A2.401,N.T.Nam,23/06/2025--03/08/2025
,BA005IU,BA005IU, Financial Accounting,1,,3,3,BABA24IU21,60,26,,,,,,,
,BA005IU,BA005IU, Financial Accounting,1,,3,3,BABA24IU21,60,26,,Sáu,7,4,A1.201,N.T.Nam,23/06/2025--03/08/2025
,BA010IU,BA010IU, Managerial Accounting,1,,3,3,BABA23IU01,60,41,,Hai,7,4,A2.302,V.T.Anh,23/06/2025--03/08/2025
,BA010IU,BA010IU, Managerial Accounting,1,,3,3,BABA23IU01,60,41,,,,,,,
,BA010IU,BA010IU, Managerial Accounting,1,,3,3,BABA23IU01,60,41,,Sáu,1,4,A1.401,V.T.Anh,23/06/2025--03/08/2025
,BA016IU,BA016IU, Fundamentals of Financial Management,1,,3,3,BABA24IU21,60,7,,Hai,1,4,A2.402,V.T.M.Uyen,23/06/2025--03/08/2025
,BA016IU,BA016IU, Fundamentals of Financial Management,1,,3,3,BABA24IU21,60,7,,,,,,,
,BA016IU,BA016IU, Fundamentals of Financial Management,1,,3,3,BABA24IU21,60,7,,Tư,1,4,A2.301,V.T.M.Uyen,23/06/2025--03/08/2025
,BA068IU,BA068IU, International Economics,1,,3,3,BABA23IU02,60,10,,Sáu,1,4,A1.402,C.M.Man,23/06/2025--03/08/2025
,BA068IU,BA068IU, International Economics,1,,3,3,BABA23IU02,60,10,,,,,,,
,BA068IU,BA068IU, International Economics,1,,3,3,BABA23IU02,60,10,,Bảy,1,4,A2.401,C.M.Man,23/06/2025--03/08/2025
,BA117IU,BA117IU, Introduction to Micro Economics,1,,3,3,BABA22AD01,60,37,,Hai,7,4,A1.402,P.T.Hiển,23/06/2025--03/08/2025
,BA117IU,BA117IU, Introduction to Micro Economics,1,,3,3,BABA22AD01,60,37,,,,,,,
,BA117IU,BA117IU, Introduction to Micro Economics,1,,3,3,BABA22AD01,60,37,,Tư,1,4,A1.402,P.T.Hiển,23/06/2025--03/08/2025
,BA119IU,BA119IU, Introduction to Macro Economics,1,,3,3,BABA22AD01,60,7,,Hai,7,4,A2.501,N.B.Trung,23/06/2025--03/08/2025
,BA119IU,BA119IU, Introduction to Macro Economics,1,,3,3,BABA22AD01,60,7,,,,,,,
,BA119IU,BA119IU, Introduction to Macro Economics,1,,3,3,BABA22AD01,60,7,,Hai,1,4,A1.401,N.B.Trung,23/06/2025--03/08/2025
,BA192IU,BA192IU, International Finance,1,,3,3,FAAC22IU01,40,9,,Hai,1,4,A2.313,T.Q.Dat,23/06/2025--03/08/2025
,BA192IU,BA192IU, International Finance,1,,3,3,FAAC22IU01,40,9,,,,,,,
,BA192IU,BA192IU, International Finance,1,,3,3,FAAC22IU01,40,9,,Ba,7,4,A2.313,T.Q.Dat,23/06/2025--03/08/2025
,BA282IU,BA282IU, Math for Business,1,,4,4,BABA22AD01,60,44,,Bảy,1,5,A2.302,T.N.Minh,23/06/2025--03/08/2025
,BA282IU,BA282IU, Math for Business,1,,4,4,BABA22AD01,60,44,,,,,,,
,BA282IU,BA282IU, Math for Business,1,,4,4,BABA22AD01,60,44,,Sáu,1,5,A2.302,T.N.Minh,23/06/2025--03/08/2025
,BA284IU,BA284IU, Financial Accounting 2,1,,3,3,BABA22AD01,40,29,,Tư,7,4,A2.302,N.T.L.Ha,23/06/2025--03/08/2025
,BA284IU,BA284IU, Financial Accounting 2,1,,3,3,BABA22AD01,40,29,,,,,,,
,BA284IU,BA284IU, Financial Accounting 2,1,,3,3,BABA22AD01,40,29,,Sáu,7,4,A1.603,N.T.L.Ha,23/06/2025--03/08/2025
,EFA369IU,EFA369IU, Internship,1,,3,3,FAAC22IU01,300,187,,,0,0,,T.Q.Dat,23/06/2025--10/08/2025
,BM017IU,BM017IU, Medical Design,1,,1,1,BEBE23IU01,27,1,,Bảy,1,4,LA1.408,T.L.Giang,23/06/2025--20/07/2025
,BM017IU,BM017IU, Medical Design,1,,1,1,BEBE23IU01,27,1,,,,,,,
,BM017IU,BM017IU, Medical Design,1,,1,1,BEBE23IU01,27,1,,Bảy,7,4,LA1.408,T.L.Giang,23/06/2025--20/07/2025
,BM020IU,BM020IU, Internship,1,,3,3,BEBE22IU01,100,26,,,0,0,,N.T.Lụa,23/06/2025--10/08/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Ba,1,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Năm,1,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Sáu,1,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Tư,1,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Ba,7,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Tư,7,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Năm,7,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Sáu,7,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Hai,7,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,1,,2,2,BEBE23IU01,71,27,,Hai,1,5,,N.T.Quả,23/06/2025--06/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Hai,7,5,,N.T.Quả,07/07/2025--20/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Tư,7,5,,N.T.Quả,07/07/2025--20/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Năm,7,5,,N.T.Quả,07/07/2025--20/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Ba,7,5,,N.T.Quả,07/07/2025--20/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Sáu,7,5,,N.T.Quả,07/07/2025--20/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Hai,1,5,,N.T.Quả,07/07/2025--20/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Ba,1,5,,N.T.Quả,07/07/2025--20/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Tư,1,5,,N.T.Quả,07/07/2025--20/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Năm,1,5,,N.T.Quả,07/07/2025--20/07/2025
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,,,,,,
,BM102IU,BM102IU, Mechanical design and Manufacturing processes in Biomedical Engineering Lab,2,,2,2,BEBE23IU01,71,36,,Sáu,1,5,,N.T.Quả,07/07/2025--20/07/2025
,CE314IU,CE314IU, Summer Internship,1,,3,3,CECE20IU01,30,24,,,0,0,,P.N.L.Khánh,23/06/2025--03/08/2025
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,CHCE24IU01,85,37,,Hai,7,4,A1.109,N.T.D.Quang,23/06/2025--03/08/2025
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,CHCE24IU01,85,37,,,,,,,
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,CHCE24IU01,85,37,,Năm,7,4,A2.307,N.T.D.Quang,23/06/2025--03/08/2025
,CHE4042IU,CHE4042IU, Internship,1,,2,2,CHEV23IU41,80,30,,,0,0,,,23/06/2025--10/08/2025
,CM306IU,CM306IU, Internship,1,,3,3,CECE20IU01,30,23,,,0,0,,N.H.Nghia,23/06/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Năm,1,4,A2.402,P.T.Hoa,23/06/2025--13/07/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,,,,,,
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Sáu,1,4,A2.402,P.T.Hoa,23/06/2025--13/07/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,,,,,,
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Sáu,1,4,A2.402,N.T.Thủy,14/07/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,,,,,,
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Năm,1,4,A2.402,N.T.Thủy,14/07/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,2,,3,3,CHCE24IU01,70,Hết,,Hai,7,4,A2.507,N.T.H.Hải,23/06/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,2,,3,3,CHCE24IU01,70,Hết,,,,,,,
,PE014IU,PE014IU, Environmental Science,2,,3,3,CHCE24IU01,70,Hết,,Năm,7,4,A1.201,N.T.H.Hải,23/06/2025--03/08/2025
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,CHCE24IU01,85,37,,Hai,7,4,A1.109,N.T.D.Quang,23/06/2025--03/08/2025
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,CHCE24IU01,85,37,,,,,,,
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,CHCE24IU01,85,37,,Năm,7,4,A2.307,N.T.D.Quang,23/06/2025--03/08/2025
,CHE4042IU,CHE4042IU, Internship,1,,2,2,CHEV23IU41,80,30,,,0,0,,,23/06/2025--10/08/2025
,EE112IU,EE112IU, Summer Internship,1,,3,3,EEAC23IU01,100,34,,,0,0,,D.N.Hung,23/06/2025--10/08/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Năm,1,4,A2.402,P.T.Hoa,23/06/2025--13/07/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,,,,,,
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Sáu,1,4,A2.402,P.T.Hoa,23/06/2025--13/07/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,,,,,,
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Sáu,1,4,A2.402,N.T.Thủy,14/07/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,,,,,,
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Năm,1,4,A2.402,N.T.Thủy,14/07/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,2,,3,3,CHCE24IU01,70,Hết,,Hai,7,4,A2.507,N.T.H.Hải,23/06/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,2,,3,3,CHCE24IU01,70,Hết,,,,,,,
,PE014IU,PE014IU, Environmental Science,2,,3,3,CHCE24IU01,70,Hết,,Năm,7,4,A1.201,N.T.H.Hải,23/06/2025--03/08/2025
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,CHCE24IU01,85,37,,Hai,7,4,A1.109,N.T.D.Quang,23/06/2025--03/08/2025
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,CHCE24IU01,85,37,,,,,,,
,CH011IU,CH011IU, Chemistry for Engineers,1,,3,3,CHCE24IU01,85,37,,Năm,7,4,A2.307,N.T.D.Quang,23/06/2025--03/08/2025
,CHE4042IU,CHE4042IU, Internship,1,,2,2,CHEV23IU41,80,30,,,0,0,,,23/06/2025--10/08/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Năm,1,4,A2.402,P.T.Hoa,23/06/2025--13/07/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,,,,,,
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Sáu,1,4,A2.402,P.T.Hoa,23/06/2025--13/07/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,,,,,,
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Sáu,1,4,A2.402,N.T.Thủy,14/07/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,,,,,,
,PE014IU,PE014IU, Environmental Science,1,,3,3,CHEV23IU21,70,3,,Năm,1,4,A2.402,N.T.Thủy,14/07/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,2,,3,3,CHCE24IU01,70,Hết,,Hai,7,4,A2.507,N.T.H.Hải,23/06/2025--03/08/2025
,PE014IU,PE014IU, Environmental Science,2,,3,3,CHCE24IU01,70,Hết,,,,,,,
,PE014IU,PE014IU, Environmental Science,2,,3,3,CHCE24IU01,70,Hết,,Năm,7,4,A1.201,N.T.H.Hải,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,1,,3,3,BABA24IU01,120,13,,Tư,7,4,A1.208,P.T.ĐOẠT,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,1,,3,3,BABA24IU01,120,13,,,,,,,
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,1,,3,3,BABA24IU01,120,13,,Bảy,7,4,A1.208,P.T.ĐOẠT,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,3,,3,3,BABA24IU01,120,18,,Sáu,7,4,A2.407,N.T.Nguồn,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,3,,3,3,BABA24IU01,120,18,,,,,,,
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,3,,3,3,BABA24IU01,120,18,,Năm,1,4,A2.307,N.T.Nguồn,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,4,,3,3,BABA24IU01,90,Hết,,Ba,1,4,A2.302,N.T.Nguồn,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,4,,3,3,BABA24IU01,90,Hết,,,,,,,
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,4,,3,3,BABA24IU01,90,Hết,,Sáu,1,4,A1.201,N.T.Nguồn,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,5,,3,3,BABA24IU01,120,18,,Bảy,1,4,A1.109,P.T.M.Nguyệt,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,5,,3,3,BABA24IU01,120,18,,,,,,,
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,5,,3,3,BABA24IU01,120,18,,Hai,1,4,A1.109,P.T.M.Nguyệt,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,6,,3,3,BABA23EX31,2,Hết,,,0,0,,N.D.Q.Cuong,23/06/2025--03/08/2025
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,6,,3,3,BABA23EX31,2,Hết,,,,,,,
,PE015IU,PE015IU, Philosophy of Marxism and Leninism,6,,3,3,BABA23EX31,2,Hết,,,0,0,,N.T.H.Giang,23/06/2025--03/08/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,1,,2,2,BABA24IU01,120,14,,Năm,7,4,A1.208,H.T.V.Thuý,23/06/2025--27/07/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,1,,2,2,BABA24IU01,120,14,,,,,,,
,PE016IU,PE016IU, Political economics of Marxism and Leninism,1,,2,2,BABA24IU01,120,14,,Năm,7,5,A1.208,H.T.V.Thuý,28/07/2025--10/08/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,2,,2,2,BABA22IU01,120,18,,Năm,7,4,A1.309,L.V.Thong,23/06/2025--27/07/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,2,,2,2,BABA22IU01,120,18,,,,,,,
,PE016IU,PE016IU, Political economics of Marxism and Leninism,2,,2,2,BABA22IU01,120,18,,Năm,7,5,A1.309,L.V.Thong,28/07/2025--10/08/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,3,,2,2,BABA24IU01,120,17,,Ba,7,5,A1.109,P.T.T.Linh,28/07/2025--10/08/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,3,,2,2,BABA24IU01,120,17,,,,,,,
,PE016IU,PE016IU, Political economics of Marxism and Leninism,3,,2,2,BABA24IU01,120,17,,Ba,7,4,A1.109,P.T.T.Linh,23/06/2025--27/07/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,4,,2,2,BABA22IU01,120,10,,Ba,7,5,A1.208,B.T.TÙNG,28/07/2025--10/08/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,4,,2,2,BABA22IU01,120,10,,,,,,,
,PE016IU,PE016IU, Political economics of Marxism and Leninism,4,,2,2,BABA22IU01,120,10,,Ba,7,4,A1.208,B.T.TÙNG,23/06/2025--27/07/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,5,,2,2,BABA24IU01,120,12,,Tư,1,4,A1.309,P.T.T.Linh,23/06/2025--27/07/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,5,,2,2,BABA24IU01,120,12,,,,,,,
,PE016IU,PE016IU, Political economics of Marxism and Leninism,5,,2,2,BABA24IU01,120,12,,Tư,1,5,A1.309,P.T.T.Linh,28/07/2025--10/08/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,6,,2,2,BABA22IU01,120,15,,Sáu,7,4,A2.307,P.T.T.Linh,23/06/2025--27/07/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,6,,2,2,BABA22IU01,120,15,,,,,,,
,PE016IU,PE016IU, Political economics of Marxism and Leninism,6,,2,2,BABA22IU01,120,15,,Sáu,7,5,A2.307,P.T.T.Linh,28/07/2025--10/08/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,7,,2,2,BABA23EX31,2,Hết,,,0,0,,N.D.Q.Cuong,23/06/2025--10/08/2025
,PE016IU,PE016IU, Political economics of Marxism and Leninism,7,,2,2,BABA23EX31,2,Hết,,,,,,,
,PE016IU,PE016IU, Political economics of Marxism and Leninism,7,,2,2,BABA23EX31,2,Hết,,,0,0,,H.T.N.Sao,23/06/2025--10/08/2025
,PE017IU,PE017IU, Scientific socialism,1,,2,2,PHSE22IU41,85,26,,Sáu,1,5,A2.507,N.T.B.Cần,28/07/2025--10/08/2025
,PE017IU,PE017IU, Scientific socialism,1,,2,2,PHSE22IU41,85,26,,,,,,,
,PE017IU,PE017IU, Scientific socialism,1,,2,2,PHSE22IU41,85,26,,Sáu,1,4,A2.507,N.T.B.Cần,23/06/2025--27/07/2025
,PE017IU,PE017IU, Scientific socialism,2,,2,2,PHSE22IU41,85,10,,Bảy,1,4,A1.402,Đ.T.Ngát,23/06/2025--27/07/2025
,PE017IU,PE017IU, Scientific socialism,2,,2,2,PHSE22IU41,85,10,,,,,,,
,PE017IU,PE017IU, Scientific socialism,2,,2,2,PHSE22IU41,85,10,,Bảy,1,5,A1.402,Đ.T.Ngát,28/07/2025--10/08/2025
,PE017IU,PE017IU, Scientific socialism,3,,2,2,PHSE22IU41,90,4,,Ba,7,4,A1.402,B.V.Tuyển,23/06/2025--27/07/2025
,PE017IU,PE017IU, Scientific socialism,3,,2,2,PHSE22IU41,90,4,,,,,,,
,PE017IU,PE017IU, Scientific socialism,3,,2,2,PHSE22IU41,90,4,,Ba,7,5,A1.402,B.V.Tuyển,28/07/2025--10/08/2025
,PE017IU,PE017IU, Scientific socialism,4,,2,2,PHSE22IU41,85,3,,Năm,7,4,A1.401,Đ.T.Ngát,23/06/2025--27/07/2025
,PE017IU,PE017IU, Scientific socialism,4,,2,2,PHSE22IU41,85,3,,,,,,,
,PE017IU,PE017IU, Scientific socialism,4,,2,2,PHSE22IU41,85,3,,Năm,7,5,A1.401,Đ.T.Ngát,28/07/2025--10/08/2025
,PE017IU,PE017IU, Scientific socialism,5,,2,2,PHSE24IU41,85,23,,Sáu,1,4,A2.501,P.T.ĐOẠT,23/06/2025--27/07/2025
,PE017IU,PE017IU, Scientific socialism,5,,2,2,PHSE24IU41,85,23,,,,,,,
,PE017IU,PE017IU, Scientific socialism,5,,2,2,PHSE24IU41,85,23,,Sáu,1,5,A2.501,P.T.ĐOẠT,28/07/2025--10/08/2025
,PE017IU,PE017IU, Scientific socialism,6,,2,2,PHSE24IU41,85,16,,Bảy,1,4,A2.301,B.V.Tuyển,23/06/2025--27/07/2025
,PE017IU,PE017IU, Scientific socialism,6,,2,2,PHSE24IU41,85,16,,,,,,,
,PE017IU,PE017IU, Scientific socialism,6,,2,2,PHSE24IU41,85,16,,Bảy,1,5,A2.301,B.V.Tuyển,28/07/2025--10/08/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,1,,2,2,PHSE22IU41,50,5,,Sáu,7,5,A2.310,L.T.Dũng,28/07/2025--10/08/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,1,,2,2,PHSE22IU41,50,5,,,,,,,
,PE018IU,PE018IU, History of Vietnamese Communist Party,1,,2,2,PHSE22IU41,50,5,,Sáu,7,4,A2.310,L.T.Dũng,23/06/2025--27/07/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,2,,2,2,PHSE22IU41,90,44,,Bảy,7,5,A1.201,L.T.Dũng,28/07/2025--10/08/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,2,,2,2,PHSE22IU41,90,44,,,,,,,
,PE018IU,PE018IU, History of Vietnamese Communist Party,2,,2,2,PHSE22IU41,90,44,,Bảy,7,4,A1.201,L.T.Dũng,23/06/2025--27/07/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,3,,2,2,PHSE22IU41,90,16,,Tư,1,5,A2.401,P.T.C.Lai,28/07/2025--10/08/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,3,,2,2,PHSE22IU41,90,16,,,,,,,
,PE018IU,PE018IU, History of Vietnamese Communist Party,3,,2,2,PHSE22IU41,90,16,,Tư,1,4,A2.401,P.T.C.Lai,23/06/2025--27/07/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,4,,2,2,PHSE22IU41,50,9,,Hai,1,4,A2.410,P.T.C.Lai,23/06/2025--27/07/2025
,PE018IU,PE018IU, History of Vietnamese Communist Party,4,,2,2,PHSE22IU41,50,9,,,,,,,
,PE018IU,PE018IU, History of Vietnamese Communist Party,4,,2,2,PHSE22IU41,50,9,,Hai,1,5,A2.410,P.T.C.Lai,28/07/2025--10/08/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,1,,2,2,PHSE22IU41,85,31,,Hai,7,4,A2.402,L.T.PHƯỢNG,23/06/2025--27/07/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,1,,2,2,PHSE22IU41,85,31,,,,,,,
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,1,,2,2,PHSE22IU41,85,31,,Hai,7,5,A2.402,L.T.PHƯỢNG,28/07/2025--10/08/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,2,,2,2,PHSE22IU41,85,3,,Tư,7,5,A1.402,L.T.PHƯỢNG,28/07/2025--10/08/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,2,,2,2,PHSE22IU41,85,3,,,,,,,
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,2,,2,2,PHSE22IU41,85,3,,Tư,7,4,A1.402,L.T.PHƯỢNG,23/06/2025--27/07/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,3,,2,2,PHSE22IU41,85,31,,Ba,1,4,A2.401,P.T.T.Huong,23/06/2025--27/07/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,3,,2,2,PHSE22IU41,85,31,,,,,,,
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,3,,2,2,PHSE22IU41,85,31,,Ba,1,5,A2.401,P.T.T.Huong,28/07/2025--10/08/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,4,,2,2,PHSE22IU41,50,6,,Năm,1,4,A2.309,L.T.PHƯỢNG,23/06/2025--27/07/2025
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,4,,2,2,PHSE22IU41,50,6,,,,,,,
,PE019IU,PE019IU, Ho Chi Minh's Thoughts,4,,2,2,PHSE22IU41,50,6,,Năm,1,5,A2.309,L.T.PHƯỢNG,28/07/2025--10/08/2025
,PE020IU,PE020IU, Engineering Ethics and Professional Skills,1,,3,3,EEEE23IU01,45,24,,Năm,1,4,A2.410,N.T.Hiếu,23/06/2025--03/08/2025
,PE020IU,PE020IU, Engineering Ethics and Professional Skills,1,,3,3,EEEE23IU01,45,24,,,,,,,
,PE020IU,PE020IU, Engineering Ethics and Professional Skills,1,,3,3,EEEE23IU01,45,24,,Sáu,7,4,A2.410,N.T.Hiếu,23/06/2025--03/08/2025
,PE020IU,PE020IU, Engineering Ethics and Professional Skills,2,,3,3,EEEE23IU01,45,31,,Sáu,1,4,A2.410,N.T.Hiếu,23/06/2025--03/08/2025
,PE020IU,PE020IU, Engineering Ethics and Professional Skills,2,,3,3,EEEE23IU01,45,31,,,,,,,
,PE020IU,PE020IU, Engineering Ethics and Professional Skills,2,,3,3,EEEE23IU01,45,31,,Bảy,1,4,A2.410,N.T.Hiếu,23/06/2025--03/08/2025
,PE021IU,PE021IU, General Law,1,,3,3,BABA24IU21,90,77,,Năm,1,4,A1.402,N.Đ.Hiếu,23/06/2025--03/08/2025
,PE021IU,PE021IU, General Law,1,,3,3,BABA24IU21,90,77,,,,,,,
,PE021IU,PE021IU, General Law,1,,3,3,BABA24IU21,90,77,,Năm,7,4,A1.402,N.Đ.Hiếu,23/06/2025--03/08/2025
,IT058IU,IT058IU, Thesis,1,,10,10,ITIT23IU41,3,1,,,0,0,,,23/06/2025--10/08/2025
,IT082IU,IT082IU, Internship,1,,3,3,ITIT23IU41,300,21,,,0,0,,,23/06/2025--10/08/2025
,IT130IU,IT130IU, Digital Image Processing,1,1,4,4,ITIT23IU41,30,10,*,Ba,7,4,LA1.302,H.V.U.Synh,07/07/2025--03/08/2025
,IT130IU,IT130IU, Digital Image Processing,1,1,4,4,ITIT23IU41,30,10,,,,,,,
,IT130IU,IT130IU, Digital Image Processing,1,1,4,4,ITIT23IU41,30,10,*,Hai,1,4,LA1.302,H.V.U.Synh,07/07/2025--03/08/2025
,IT130IU,IT130IU, Digital Image Processing,1,1,4,4,ITIT23IU41,30,10,,,,,,,
,IT130IU,IT130IU, Digital Image Processing,1,1,4,4,ITIT23IU41,30,10,,Năm,7,4,A2.608,H.V.U.Synh,23/06/2025--03/08/2025
,IT130IU,IT130IU, Digital Image Processing,1,1,4,4,ITIT23IU41,30,10,,,,,,,
,IT130IU,IT130IU, Digital Image Processing,1,1,4,4,ITIT23IU41,30,10,,Năm,1,4,A2.608,H.V.U.Synh,23/06/2025--03/08/2025
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT23IU41,30,3,*,Hai,7,4,LA1.302,H.V.U.Synh,07/07/2025--03/08/2025
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT23IU41,30,3,,,,,,,
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT23IU41,30,3,*,Ba,1,4,LA1.302,H.V.U.Synh,07/07/2025--03/08/2025
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT23IU41,30,3,,,,,,,
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT23IU41,30,3,,Năm,7,4,A2.608,H.V.U.Synh,23/06/2025--03/08/2025
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT23IU41,30,3,,,,,,,
,IT130IU,IT130IU, Digital Image Processing,1,2,4,4,ITIT23IU41,30,3,,Năm,1,4,A2.608,H.V.U.Synh,23/06/2025--03/08/2025
,IT134IU,IT134IU, Internet of Things,1,1,4,4,ITIT23IU41,31,Hết,*,Ba,1,4,LA1.606,V.M.Thanh,07/07/2025--03/08/2025
,IT134IU,IT134IU, Internet of Things,1,1,4,4,ITIT23IU41,31,Hết,,,,,,,
,IT134IU,IT134IU, Internet of Things,1,1,4,4,ITIT23IU41,31,Hết,*,Hai,7,4,LA1.606,V.M.Thanh,07/07/2025--03/08/2025
,IT134IU,IT134IU, Internet of Things,1,1,4,4,ITIT23IU41,31,Hết,,,,,,,
,IT134IU,IT134IU, Internet of Things,1,1,4,4,ITIT23IU41,31,Hết,,Tư,7,4,A2.608,V.M.Thanh,23/06/2025--03/08/2025
,IT134IU,IT134IU, Internet of Things,1,1,4,4,ITIT23IU41,31,Hết,,,,,,,
,IT134IU,IT134IU, Internet of Things,1,1,4,4,ITIT23IU41,31,Hết,,Tư,1,4,A2.608,V.M.Thanh,23/06/2025--03/08/2025
,IT134IU,IT134IU, Internet of Things,1,2,4,4,ITIT23IU41,31,Hết,*,Hai,1,4,LA1.606,V.M.Thanh,07/07/2025--03/08/2025
,IT134IU,IT134IU, Internet of Things,1,2,4,4,ITIT23IU41,31,Hết,,,,,,,
,IT134IU,IT134IU, Internet of Things,1,2,4,4,ITIT23IU41,31,Hết,*,Ba,7,4,LA1.606,V.M.Thanh,07/07/2025--03/08/2025
,IT134IU,IT134IU, Internet of Things,1,2,4,4,ITIT23IU41,31,Hết,,,,,,,
,IT134IU,IT134IU, Internet of Things,1,2,4,4,ITIT23IU41,31,Hết,,Tư,7,4,A2.608,V.M.Thanh,23/06/2025--03/08/2025
,IT134IU,IT134IU, Internet of Things,1,2,4,4,ITIT23IU41,31,Hết,,,,,,,
,IT134IU,IT134IU, Internet of Things,1,2,4,4,ITIT23IU41,31,Hết,,Tư,1,4,A2.608,V.M.Thanh,23/06/2025--03/08/2025
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT23IU41,30,2,*,Bảy,7,4,LA1.607,N.Q.Phú,07/07/2025--03/08/2025
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT23IU41,30,2,,,,,,,
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT23IU41,30,2,*,Bảy,1,4,LA1.607,N.Q.Phú,07/07/2025--03/08/2025
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT23IU41,30,2,,,,,,,
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT23IU41,30,2,,Sáu,7,4,A2.608,W.Krystian,23/06/2025--03/08/2025
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT23IU41,30,2,,,,,,,
,IT160IU,IT160IU, Data Mining,1,1,4,4,ITIT23IU41,30,2,,Sáu,1,4,A2.608,W.Krystian,23/06/2025--03/08/2025
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT23IU41,30,1,*,Hai,1,4,LA1.607,N.Q.Phú,07/07/2025--03/08/2025
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT23IU41,30,1,,,,,,,
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT23IU41,30,1,*,Ba,7,4,LA1.607,N.Q.Phú,07/07/2025--03/08/2025
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT23IU41,30,1,,,,,,,
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT23IU41,30,1,,Sáu,7,4,A2.608,W.Krystian,23/06/2025--03/08/2025
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT23IU41,30,1,,,,,,,
,IT160IU,IT160IU, Data Mining,1,2,4,4,ITIT23IU41,30,1,,Sáu,1,4,A2.608,W.Krystian,23/06/2025--03/08/2025
,MA001IU,MA001IU, Calculus 1,1,,4,4,MAMA24IU01,110,18,,Tư,1,5,A2.307,N.T.T.Van,23/06/2025--03/08/2025
,MA001IU,MA001IU, Calculus 1,1,,4,4,MAMA24IU01,110,18,,,,,,,
,MA001IU,MA001IU, Calculus 1,1,,4,4,MAMA24IU01,110,18,,Ba,1,5,A2.307,N.T.T.Van,23/06/2025--03/08/2025
,MA001IU,MA001IU, Calculus 1,2,,4,4,BABA22AD01,110,11,,Ba,7,5,A2.407,N.T.T.Van,23/06/2025--03/08/2025
,MA001IU,MA001IU, Calculus 1,2,,4,4,BABA22AD01,110,11,,,,,,,
,MA001IU,MA001IU, Calculus 1,2,,4,4,BABA22AD01,110,11,,Tư,7,5,A2.407,N.T.T.Van,23/06/2025--03/08/2025
,MA001IU,MA001IU, Calculus 1,3,,4,4,MAMA24IU01,110,12,,Bảy,1,5,A2.307,N.T.T.Van,23/06/2025--03/08/2025
,MA001IU,MA001IU, Calculus 1,3,,4,4,MAMA24IU01,110,12,,,,,,,
,MA001IU,MA001IU, Calculus 1,3,,4,4,MAMA24IU01,110,12,,Bảy,7,5,A1.309,N.T.T.Van,23/06/2025--03/08/2025
,MA003IU,MA003IU, Calculus 2,1,,4,4,MAMA24IU01,120,15,,Hai,1,5,A2.307,L.M.Tuan,23/06/2025--03/08/2025
,MA003IU,MA003IU, Calculus 2,1,,4,4,MAMA24IU01,120,15,,,,,,,
,MA003IU,MA003IU, Calculus 2,1,,4,4,MAMA24IU01,120,15,,Tư,7,5,A2.307,L.M.Tuan,23/06/2025--03/08/2025
,MA019IU,MA019IU, Calculus 2 (BT),1,,4,4,MAMA24IU01,45,25,,Bảy,1,5,A1.204,P.T.Tùng,23/06/2025--03/08/2025
,MA019IU,MA019IU, Calculus 2 (BT),1,,4,4,MAMA24IU01,45,25,,,,,,,
,MA019IU,MA019IU, Calculus 2 (BT),1,,4,4,MAMA24IU01,45,25,,Sáu,1,5,A2.310,P.T.Tùng,23/06/2025--03/08/2025
,MA023IU,MA023IU, Calculus 3,1,,4,4,MAMA23IU01,51,Hết,,Hai,7,5,A1.401,L.M.Tuan,23/06/2025--03/08/2025
,MA023IU,MA023IU, Calculus 3,1,,4,4,MAMA23IU01,51,Hết,,,,,,,
,MA023IU,MA023IU, Calculus 3,1,,4,4,MAMA23IU01,51,Hết,,Tư,1,5,A2.601,L.M.Tuan,23/06/2025--03/08/2025
,MA023IU,MA023IU, Calculus 3,2,,4,4,MAMA23IU01,51,Hết,,Ba,7,5,A2.501,M.D.Thanh,23/06/2025--03/08/2025
,MA023IU,MA023IU, Calculus 3,2,,4,4,MAMA23IU01,51,Hết,,,,,,,
,MA023IU,MA023IU, Calculus 3,2,,4,4,MAMA23IU01,51,Hết,,Tư,7,5,A1.201,M.D.Thanh,23/06/2025--03/08/2025
,MA024IU,MA024IU, Differential Equations,1,1,4,4,MAMA24IU01,30,8,*,Ba,1,5,ONLINE,N.B.Q.Vinh,30/06/2025--10/08/2025
,MA024IU,MA024IU, Differential Equations,1,1,4,4,MAMA24IU01,30,8,*,,,,,,
,MA024IU,MA024IU, Differential Equations,1,1,4,4,MAMA24IU01,30,8,*,Năm,1,4,A2.301,N.B.Q.Vinh,23/06/2025--03/08/2025
,MA024IU,MA024IU, Differential Equations,1,1,4,4,MAMA24IU01,30,8,*,,,,,,
,MA024IU,MA024IU, Differential Equations,1,1,4,4,MAMA24IU01,30,8,*,Sáu,1,4,A2.301,N.B.Q.Vinh,23/06/2025--03/08/2025
,MA024IU,MA024IU, Differential Equations,1,2,4,4,MAMA24IU01,30,2,*,Tư,1,5,ONLINE,N.B.Q.Vinh,30/06/2025--10/08/2025
,MA024IU,MA024IU, Differential Equations,1,2,4,4,MAMA24IU01,30,2,*,,,,,,
,MA024IU,MA024IU, Differential Equations,1,2,4,4,MAMA24IU01,30,2,*,Năm,1,4,A2.301,N.B.Q.Vinh,23/06/2025--03/08/2025
,MA024IU,MA024IU, Differential Equations,1,2,4,4,MAMA24IU01,30,2,*,,,,,,
,MA024IU,MA024IU, Differential Equations,1,2,4,4,MAMA24IU01,30,2,*,Sáu,1,4,A2.301,N.B.Q.Vinh,23/06/2025--03/08/2025
,MA024IU,MA024IU, Differential Equations,1,3,4,4,MAMA24IU01,30,16,*,Hai,1,5,ONLINE,N.B.Q.Vinh,30/06/2025--10/08/2025
,MA024IU,MA024IU, Differential Equations,1,3,4,4,MAMA24IU01,30,16,*,,,,,,
,MA024IU,MA024IU, Differential Equations,1,3,4,4,MAMA24IU01,30,16,*,Năm,1,4,A2.301,N.B.Q.Vinh,23/06/2025--03/08/2025
,MA024IU,MA024IU, Differential Equations,1,3,4,4,MAMA24IU01,30,16,*,,,,,,
,MA024IU,MA024IU, Differential Equations,1,3,4,4,MAMA24IU01,30,16,*,Sáu,1,4,A2.301,N.B.Q.Vinh,23/06/2025--03/08/2025
,MA026IU,MA026IU," Probability, Statistic & Random Process",1,,3,3,MAMA24IU01,50,5,,Bảy,1,4,A1.201,T.Q.Bảo,23/06/2025--03/08/2025
,MA026IU,MA026IU," Probability, Statistic & Random Process",1,,3,3,MAMA24IU01,50,5,,,,,,,
,MA026IU,MA026IU," Probability, Statistic & Random Process",1,,3,3,MAMA24IU01,50,5,,Sáu,7,4,A1.401,T.Q.Bảo,23/06/2025--03/08/2025
,MA026IU,MA026IU," Probability, Statistic & Random Process",2,,3,3,MAMA23IU01,50,1,,Hai,7,4,A1.603,T.T.Long,23/06/2025--03/08/2025
,MA026IU,MA026IU," Probability, Statistic & Random Process",2,,3,3,MAMA23IU01,50,1,,,,,,,
,MA026IU,MA026IU," Probability, Statistic & Random Process",2,,3,3,MAMA23IU01,50,1,,Sáu,1,4,A2.309,T.T.Long,23/06/2025--03/08/2025
,MA027IU,MA027IU, Applied Linear Algebra,1,,2,2,MAMA23IU01,85,46,,Tư,1,5,A2.302,P.T.Tùng,23/06/2025--03/08/2025
,MAFE313IU,MAFE313IU, Summer Internship,1,,3,3,MAMA23IU01,70,29,,,0,0,,,23/06/2025--10/08/2025
,MAFE314IU,MAFE314IU, Financial Econometrics,1,,3,3,MAMA23IU01,40,17,,Hai,1,4,A2.312,N.P.Anh,23/06/2025--03/08/2025
,MAFE314IU,MAFE314IU, Financial Econometrics,1,,3,3,MAMA23IU01,40,17,,,,,,,
,MAFE314IU,MAFE314IU, Financial Econometrics,1,,3,3,MAMA23IU01,40,17,,Năm,1,4,A1.203,N.P.Anh,23/06/2025--03/08/2025
,MAFE315IU,MAFE315IU, Introduction to corporate finance,1,,3,3,MAMA23IU01,60,39,,Năm,7,4,A2.507,T.Q.Dat,23/06/2025--03/08/2025
,MAFE315IU,MAFE315IU, Introduction to corporate finance,1,,3,3,MAMA23IU01,60,39,,,,,,,
,MAFE315IU,MAFE315IU, Introduction to corporate finance,1,,3,3,MAMA23IU01,60,39,,Ba,1,4,A2.402,T.Q.Dat,23/06/2025--03/08/2025
,IS054IU,IS054IU, Engineering Drawing,1,,3,3,IEIE22IU01,30,8,,Tư,7,4,A1.205,,23/06/2025--03/08/2025
,IS054IU,IS054IU, Engineering Drawing,1,,3,3,IEIE22IU01,30,8,,,,,,,
,IS054IU,IS054IU, Engineering Drawing,1,,3,3,IEIE22IU01,30,8,,Bảy,1,4,A1.205,,23/06/2025--03/08/2025
,EL009IU,EL009IU, Listening 2 (C1-C2),1,,3,3,ENEL22IU01,2,1,,Sáu,1,3,LA1.507,B.D.B.Huyen,23/06/2025--27/07/2025
,EL009IU,EL009IU, Listening 2 (C1-C2),1,,3,3,ENEL22IU01,2,1,,,,,,,
,EL009IU,EL009IU, Listening 2 (C1-C2),1,,3,3,ENEL22IU01,2,1,,Năm,1,3,LA1.507,B.D.B.Huyen,23/06/2025--27/07/2025
,EL009IU,EL009IU, Listening 2 (C1-C2),1,,3,3,ENEL22IU01,2,1,,,,,,,
,EL009IU,EL009IU, Listening 2 (C1-C2),1,,3,3,ENEL22IU01,2,1,,Năm,1,4,LA1.507,B.D.B.Huyen,28/07/2025--10/08/2025
,EL009IU,EL009IU, Listening 2 (C1-C2),1,,3,3,ENEL22IU01,2,1,,,,,,,
,EL009IU,EL009IU, Listening 2 (C1-C2),1,,3,3,ENEL22IU01,2,1,,Sáu,1,4,LA1.507,B.D.B.Huyen,28/07/2025--10/08/2025
,EL024IU,EL024IU, Syntax,1,,3,3,ENEL22IU01,10,2,,Ba,1,3,A2.408,N.L.B.Ngoc,23/06/2025--27/07/2025
,EL024IU,EL024IU, Syntax,1,,3,3,ENEL22IU01,10,2,,,,,,,
,EL024IU,EL024IU, Syntax,1,,3,3,ENEL22IU01,10,2,,Tư,1,3,A2.408,N.L.B.Ngoc,23/06/2025--27/07/2025
,EL024IU,EL024IU, Syntax,1,,3,3,ENEL22IU01,10,2,,,,,,,
,EL024IU,EL024IU, Syntax,1,,3,3,ENEL22IU01,10,2,,Ba,1,4,A2.408,N.L.B.Ngoc,28/07/2025--10/08/2025
,EL024IU,EL024IU, Syntax,1,,3,3,ENEL22IU01,10,2,,,,,,,
,EL024IU,EL024IU, Syntax,1,,3,3,ENEL22IU01,10,2,,Tư,1,4,A2.408,N.L.B.Ngoc,28/07/2025--10/08/2025
,EL025IU,EL025IU, Semantics,1,,3,3,ENEL22IU01,10,3,,Ba,7,4,A1.603,N.T.Quyên,28/07/2025--10/08/2025
,EL025IU,EL025IU, Semantics,1,,3,3,ENEL22IU01,10,3,,,,,,,
,EL025IU,EL025IU, Semantics,1,,3,3,ENEL22IU01,10,3,,Hai,1,4,A2.408,N.T.Quyên,28/07/2025--10/08/2025
,EL025IU,EL025IU, Semantics,1,,3,3,ENEL22IU01,10,3,,,,,,,
,EL025IU,EL025IU, Semantics,1,,3,3,ENEL22IU01,10,3,,Hai,1,3,A2.408,N.T.Quyên,23/06/2025--27/07/2025
,EL025IU,EL025IU, Semantics,1,,3,3,ENEL22IU01,10,3,,,,,,,
,EL025IU,EL025IU, Semantics,1,,3,3,ENEL22IU01,10,3,,Ba,7,3,A1.603,N.T.Quyên,23/06/2025--27/07/2025
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),1,,3,3,ENEL22IU01,3,Hết,,Sáu,1,3,A2.509,N.T.N.Chau,23/06/2025--27/07/2025
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),1,,3,3,ENEL22IU01,3,Hết,,,,,,,
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),1,,3,3,ENEL22IU01,3,Hết,,Năm,1,3,A2.509,N.T.N.Chau,23/06/2025--27/07/2025
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),1,,3,3,ENEL22IU01,3,Hết,,,,,,,
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),1,,3,3,ENEL22IU01,3,Hết,,Năm,1,4,A2.509,N.T.N.Chau,28/07/2025--10/08/2025
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),1,,3,3,ENEL22IU01,3,Hết,,,,,,,
,EL026IU,EL026IU, Translation 1 (English- Vietnamese),1,,3,3,ENEL22IU01,3,Hết,,Sáu,1,4,A2.509,N.T.N.Chau,28/07/2025--10/08/2025
,EL029IU,EL029IU, Pragmatics,1,,3,3,ENEL22IU01,12,1,,Năm,7,3,A1.207A,L.M.Thu,23/06/2025--27/07/2025
,EL029IU,EL029IU, Pragmatics,1,,3,3,ENEL22IU01,12,1,,,,,,,
,EL029IU,EL029IU, Pragmatics,1,,3,3,ENEL22IU01,12,1,,Sáu,7,3,A1.207B,L.M.Thu,23/06/2025--27/07/2025
,EL029IU,EL029IU, Pragmatics,1,,3,3,ENEL22IU01,12,1,,,,,,,
,EL029IU,EL029IU, Pragmatics,1,,3,3,ENEL22IU01,12,1,,Năm,7,4,A1.207A,L.M.Thu,28/07/2025--10/08/2025
,EL029IU,EL029IU, Pragmatics,1,,3,3,ENEL22IU01,12,1,,,,,,,
,EL029IU,EL029IU, Pragmatics,1,,3,3,ENEL22IU01,12,1,,Sáu,7,4,A1.207B,L.M.Thu,28/07/2025--10/08/2025
,EL030IU,EL030IU, Discourse Analysis,1,,3,3,ENEL22IU01,8,1,,Hai,7,4,A2.510,V.H.Ngan,28/07/2025--10/08/2025
,EL030IU,EL030IU, Discourse Analysis,1,,3,3,ENEL22IU01,8,1,,,,,,,
,EL030IU,EL030IU, Discourse Analysis,1,,3,3,ENEL22IU01,8,1,,Sáu,1,4,A2.510,V.H.Ngan,28/07/2025--10/08/2025
,EL030IU,EL030IU, Discourse Analysis,1,,3,3,ENEL22IU01,8,1,,,,,,,
,EL030IU,EL030IU, Discourse Analysis,1,,3,3,ENEL22IU01,8,1,,Hai,7,3,A2.510,V.H.Ngan,23/06/2025--27/07/2025
,EL030IU,EL030IU, Discourse Analysis,1,,3,3,ENEL22IU01,8,1,,,,,,,
,EL030IU,EL030IU, Discourse Analysis,1,,3,3,ENEL22IU01,8,1,,Sáu,1,3,A2.510,V.H.Ngan,23/06/2025--27/07/2025
,EL032IU,EL032IU, Comparative Linguistics,1,,3,3,ENEL22IU01,0,Hết,,Năm,1,3,A1.207A,L.M.Thu,23/06/2025--27/07/2025
,EL032IU,EL032IU, Comparative Linguistics,1,,3,3,ENEL22IU01,0,Hết,,,,,,,
,EL032IU,EL032IU, Comparative Linguistics,1,,3,3,ENEL22IU01,0,Hết,,Sáu,1,3,A2.312,L.M.Thu,23/06/2025--27/07/2025
,EL032IU,EL032IU, Comparative Linguistics,1,,3,3,ENEL22IU01,0,Hết,,,,,,,
,EL032IU,EL032IU, Comparative Linguistics,1,,3,3,ENEL22IU01,0,Hết,,Năm,1,4,A1.207A,L.M.Thu,28/07/2025--10/08/2025
,EL032IU,EL032IU, Comparative Linguistics,1,,3,3,ENEL22IU01,0,Hết,,,,,,,
,EL032IU,EL032IU, Comparative Linguistics,1,,3,3,ENEL22IU01,0,Hết,,Sáu,1,4,A2.312,L.M.Thu,28/07/2025--10/08/2025
,EL045IU,EL045IU, Internship 2,1,,4,4,ENEL22IU01,60,12,,,0,0,,V.H.Ngan,23/06/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,1,,2,2,ENEL24IU01,35,4,,Hai,1,4,A1.206,N.A.Vũ,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,1,,2,2,ENEL24IU01,35,4,,,,,,,
,EN007IU,EN007IU, Writing AE1,1,,2,2,ENEL24IU01,35,4,,Hai,1,5,A1.206,N.A.Vũ,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,2,,2,2,ENEL24IU01,35,11,,Tư,1,4,A1.206,P.D.Anh,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,2,,2,2,ENEL24IU01,35,11,,,,,,,
,EN007IU,EN007IU, Writing AE1,2,,2,2,ENEL24IU01,35,11,,Tư,1,5,A1.206,P.D.Anh,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,3,,2,2,ENEL24IU01,35,2,,Bảy,7,5,A1.207A,N.D.Phong,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,3,,2,2,ENEL24IU01,35,2,,,,,,,
,EN007IU,EN007IU, Writing AE1,3,,2,2,ENEL24IU01,35,2,,Bảy,7,4,A1.207A,N.D.Phong,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,4,,2,2,ENEL24IU01,35,7,,Ba,7,4,A1.207B,P.T.Dương,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,4,,2,2,ENEL24IU01,35,7,,,,,,,
,EN007IU,EN007IU, Writing AE1,4,,2,2,ENEL24IU01,35,7,,Ba,7,5,A1.207B,P.T.Dương,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,5,,2,2,ENEL24IU01,35,4,,Hai,1,4,A1.205,N.T.Tuấn,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,5,,2,2,ENEL24IU01,35,4,,,,,,,
,EN007IU,EN007IU, Writing AE1,5,,2,2,ENEL24IU01,35,4,,Hai,1,5,A1.205,N.T.Tuấn,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,6,,2,2,ENEL24IU01,35,10,,Năm,7,4,A1.204,D.D.Dung,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,6,,2,2,ENEL24IU01,35,10,,,,,,,
,EN007IU,EN007IU, Writing AE1,6,,2,2,ENEL24IU01,35,10,,Năm,7,5,A1.204,D.D.Dung,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,7,,2,2,ENEL24IU01,35,4,,Năm,1,4,A1.205,N.T.T.Anh,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,7,,2,2,ENEL24IU01,35,4,,,,,,,
,EN007IU,EN007IU, Writing AE1,7,,2,2,ENEL24IU01,35,4,,Năm,1,5,A1.205,N.T.T.Anh,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,8,,2,2,ENEL24IU01,35,5,,Tư,1,5,A1.205,T.K.Hòa,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,8,,2,2,ENEL24IU01,35,5,,,,,,,
,EN007IU,EN007IU, Writing AE1,8,,2,2,ENEL24IU01,35,5,,Tư,1,4,A1.205,T.K.Hòa,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,9,,2,2,ENEL24IU01,35,9,,Sáu,7,4,A1.206,T.T.V.Hoai,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,9,,2,2,ENEL24IU01,35,9,,,,,,,
,EN007IU,EN007IU, Writing AE1,9,,2,2,ENEL24IU01,35,9,,Sáu,7,5,A1.206,T.T.V.Hoai,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,10,,2,2,ENEL24IU01,35,4,,Hai,7,4,A1.207A,L.T.K.Nhật,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,10,,2,2,ENEL24IU01,35,4,,,,,,,
,EN007IU,EN007IU, Writing AE1,10,,2,2,ENEL24IU01,35,4,,Hai,7,5,A1.207A,L.T.K.Nhật,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,11,,2,2,ENEL24IU01,35,4,,Ba,7,5,A1.205,B.T.Q.Như,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,11,,2,2,ENEL24IU01,35,4,,,,,,,
,EN007IU,EN007IU, Writing AE1,11,,2,2,ENEL24IU01,35,4,,Ba,7,4,A1.205,B.T.Q.Như,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,12,,2,2,ENEL24IU01,35,6,,Sáu,1,5,A1.205,N.A.Vũ,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,12,,2,2,ENEL24IU01,35,6,,,,,,,
,EN007IU,EN007IU, Writing AE1,12,,2,2,ENEL24IU01,35,6,,Sáu,1,4,A1.205,N.A.Vũ,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,13,,2,2,ENEL24IU01,35,8,,Hai,1,4,A1.203,P.D.Anh,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,13,,2,2,ENEL24IU01,35,8,,,,,,,
,EN007IU,EN007IU, Writing AE1,13,,2,2,ENEL24IU01,35,8,,Hai,1,5,A1.203,P.D.Anh,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,14,,2,2,ENEL24IU11,35,11,,Hai,7,4,A1.207B,N.D.Phong,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,14,,2,2,ENEL24IU11,35,11,,,,,,,
,EN007IU,EN007IU, Writing AE1,14,,2,2,ENEL24IU11,35,11,,Hai,7,5,A1.207B,N.D.Phong,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,15,,2,2,ENEL24IU11,35,13,,Sáu,1,4,A1.207A,P.T.Dương,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,15,,2,2,ENEL24IU11,35,13,,,,,,,
,EN007IU,EN007IU, Writing AE1,15,,2,2,ENEL24IU11,35,13,,Sáu,1,5,A1.207A,P.T.Dương,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,16,,2,2,ENEL24IU11,35,12,,Sáu,1,4,A1.203,T.T.V.Hoai,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,16,,2,2,ENEL24IU11,35,12,,,,,,,
,EN007IU,EN007IU, Writing AE1,16,,2,2,ENEL24IU11,35,12,,Sáu,1,5,A1.203,T.T.V.Hoai,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,17,,2,2,ENEL24IU11,35,5,,Ba,7,4,A1.203,N.T.T.Anh,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,17,,2,2,ENEL24IU11,35,5,,,,,,,
,EN007IU,EN007IU, Writing AE1,17,,2,2,ENEL24IU11,35,5,,Ba,7,5,A1.203,N.T.T.Anh,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,18,,2,2,ENEL24IU11,35,11,,Hai,7,5,A2.311,T.T.V.Hoai,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,18,,2,2,ENEL24IU11,35,11,,,,,,,
,EN007IU,EN007IU, Writing AE1,18,,2,2,ENEL24IU11,35,11,,Hai,7,4,A2.311,T.T.V.Hoai,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,19,,2,2,ENEL24IU11,35,12,,Ba,1,5,A1.207A,L.T.K.Nhật,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,19,,2,2,ENEL24IU11,35,12,,,,,,,
,EN007IU,EN007IU, Writing AE1,19,,2,2,ENEL24IU11,35,12,,Ba,1,4,A1.207A,L.T.K.Nhật,23/06/2025--27/07/2025
,EN007IU,EN007IU, Writing AE1,20,,2,2,ENEL24IU11,35,9,,Ba,1,5,A2.313,B.T.Q.Như,28/07/2025--10/08/2025
,EN007IU,EN007IU, Writing AE1,20,,2,2,ENEL24IU11,35,9,,,,,,,
,EN007IU,EN007IU, Writing AE1,20,,2,2,ENEL24IU11,35,9,,Ba,1,4,A2.313,B.T.Q.Như,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,1,,2,2,ENEL24IU01,35,4,,Hai,7,5,A1.203,T.T.Tú,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,1,,2,2,ENEL24IU01,35,4,,,,,,,
,EN008IU,EN008IU, Listening AE1,1,,2,2,ENEL24IU01,35,4,,Hai,7,4,A1.203,T.T.Tú,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,2,,2,2,ENEL24IU01,35,3,,Năm,7,4,A1.205,N.A.Vũ,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,2,,2,2,ENEL24IU01,35,3,,,,,,,
,EN008IU,EN008IU, Listening AE1,2,,2,2,ENEL24IU01,35,3,,Năm,7,5,A1.205,N.A.Vũ,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,3,,2,2,ENEL24IU01,35,11,,Bảy,1,5,A1.207B,B.N.M.Thanh,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,3,,2,2,ENEL24IU01,35,11,,,,,,,
,EN008IU,EN008IU, Listening AE1,3,,2,2,ENEL24IU01,35,11,,Bảy,1,4,A1.207B,B.N.M.Thanh,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,4,,2,2,ENEL24IU01,35,7,,Ba,1,4,A1.205,P.D.Anh,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,4,,2,2,ENEL24IU01,35,7,,,,,,,
,EN008IU,EN008IU, Listening AE1,4,,2,2,ENEL24IU01,35,7,,Ba,1,5,A1.205,P.D.Anh,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,5,,2,2,ENEL24IU01,35,8,,Bảy,1,5,A1.207A,N.D.Phong,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,5,,2,2,ENEL24IU01,35,8,,,,,,,
,EN008IU,EN008IU, Listening AE1,5,,2,2,ENEL24IU01,35,8,,Bảy,1,4,A1.207A,N.D.Phong,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,6,,2,2,ENEL24IU01,35,8,,Sáu,7,4,A1.207A,P.T.Dương,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,6,,2,2,ENEL24IU01,35,8,,,,,,,
,EN008IU,EN008IU, Listening AE1,6,,2,2,ENEL24IU01,35,8,,Sáu,7,5,A1.207A,P.T.Dương,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,7,,2,2,ENEL24IU01,35,8,,Hai,7,4,A1.205,N.T.Tuấn,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,7,,2,2,ENEL24IU01,35,8,,,,,,,
,EN008IU,EN008IU, Listening AE1,7,,2,2,ENEL24IU01,35,8,,Hai,7,5,A1.205,N.T.Tuấn,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,8,,2,2,ENEL24IU01,35,8,,Năm,7,4,A1.206,L.N.Thien,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,8,,2,2,ENEL24IU01,35,8,,,,,,,
,EN008IU,EN008IU, Listening AE1,8,,2,2,ENEL24IU01,35,8,,Năm,7,5,A1.206,L.N.Thien,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,9,,2,2,ENEL24IU01,35,3,,Ba,7,4,A1.206,P.N.Q.Trâm,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,9,,2,2,ENEL24IU01,35,3,,,,,,,
,EN008IU,EN008IU, Listening AE1,9,,2,2,ENEL24IU01,35,3,,Ba,7,5,A1.206,P.N.Q.Trâm,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,10,,2,2,ENEL24IU01,35,2,,Hai,1,5,A1.603,L.T.K.Nhật,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,10,,2,2,ENEL24IU01,35,2,,,,,,,
,EN008IU,EN008IU, Listening AE1,10,,2,2,ENEL24IU01,35,2,,Hai,1,4,A1.603,L.T.K.Nhật,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,11,,2,2,ENEL24IU01,35,5,,Sáu,7,4,A1.205,B.T.Q.Như,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,11,,2,2,ENEL24IU01,35,5,,,,,,,
,EN008IU,EN008IU, Listening AE1,11,,2,2,ENEL24IU01,35,5,,Sáu,7,5,A1.205,B.T.Q.Như,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,12,,2,2,ENEL24IU01,35,4,,Ba,1,5,A1.204,N.A.Vũ,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,12,,2,2,ENEL24IU01,35,4,,,,,,,
,EN008IU,EN008IU, Listening AE1,12,,2,2,ENEL24IU01,35,4,,Ba,1,4,A1.204,N.A.Vũ,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,13,,2,2,ENEL24IU01,35,4,,Hai,1,4,A1.207A,T.T.Tú,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,13,,2,2,ENEL24IU01,35,4,,,,,,,
,EN008IU,EN008IU, Listening AE1,13,,2,2,ENEL24IU01,35,4,,Hai,1,5,A1.207A,T.T.Tú,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,14,,2,2,ENEL24IU11,35,13,,Hai,1,4,A1.207B,N.D.Phong,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,14,,2,2,ENEL24IU11,35,13,,,,,,,
,EN008IU,EN008IU, Listening AE1,14,,2,2,ENEL24IU11,35,13,,Hai,1,5,A1.207B,N.D.Phong,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,15,,2,2,ENEL24IU11,35,12,,Ba,1,5,A1.207B,P.T.Dương,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,15,,2,2,ENEL24IU11,35,12,,,,,,,
,EN008IU,EN008IU, Listening AE1,15,,2,2,ENEL24IU11,35,12,,Ba,1,4,A1.207B,P.T.Dương,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,16,,2,2,ENEL24IU11,35,10,,Ba,1,4,A1.603,N.T.Tuấn,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,16,,2,2,ENEL24IU11,35,10,,,,,,,
,EN008IU,EN008IU, Listening AE1,16,,2,2,ENEL24IU11,35,10,,Ba,1,5,A1.603,N.T.Tuấn,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,17,,2,2,ENEL24IU11,35,4,,Ba,1,4,A2.311,L.N.Thien,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,17,,2,2,ENEL24IU11,35,4,,,,,,,
,EN008IU,EN008IU, Listening AE1,17,,2,2,ENEL24IU11,35,4,,Ba,1,5,A2.311,L.N.Thien,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,18,,2,2,ENEL24IU11,35,9,,Bảy,1,5,A1.203,P.N.Q.Trâm,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,18,,2,2,ENEL24IU11,35,9,,,,,,,
,EN008IU,EN008IU, Listening AE1,18,,2,2,ENEL24IU11,35,9,,Bảy,1,4,A1.203,P.N.Q.Trâm,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,19,,2,2,ENEL24IU11,35,12,,Ba,7,5,A1.204,L.T.K.Nhật,28/07/2025--10/08/2025
,EN008IU,EN008IU, Listening AE1,19,,2,2,ENEL24IU11,35,12,,,,,,,
,EN008IU,EN008IU, Listening AE1,19,,2,2,ENEL24IU11,35,12,,Ba,7,4,A1.204,L.T.K.Nhật,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,20,,2,2,ENEL24IU11,35,9,,Năm,1,4,A2.313,B.T.Q.Như,23/06/2025--27/07/2025
,EN008IU,EN008IU, Listening AE1,20,,2,2,ENEL24IU11,35,9,,,,,,,
,EN008IU,EN008IU, Listening AE1,20,,2,2,ENEL24IU11,35,9,,Năm,1,5,A2.313,B.T.Q.Như,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,1,,2,2,ENEL24IU11,35,2,,Tư,1,4,A2.310,N.A.Vũ,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,1,,2,2,ENEL24IU11,35,2,,,,,,,
,EN011IU,EN011IU, Writing AE2,1,,2,2,ENEL24IU11,35,2,,Tư,1,5,A2.310,N.A.Vũ,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,2,,2,2,ENEL24IU11,35,3,,Hai,7,5,A1.204,N.T.K.Dung,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,2,,2,2,ENEL24IU11,35,3,,,,,,,
,EN011IU,EN011IU, Writing AE2,2,,2,2,ENEL24IU11,35,3,,Hai,7,4,A1.204,N.T.K.Dung,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,3,,2,2,ENEL24IU11,35,3,,Sáu,1,5,A1.206,P.D.Anh,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,3,,2,2,ENEL24IU11,35,3,,,,,,,
,EN011IU,EN011IU, Writing AE2,3,,2,2,ENEL24IU11,35,3,,Sáu,1,4,A1.206,P.D.Anh,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,4,,2,2,ENEL24IU11,35,1,,Ba,7,4,A1.207A,D.D.Dung,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,4,,2,2,ENEL24IU11,35,1,,,,,,,
,EN011IU,EN011IU, Writing AE2,4,,2,2,ENEL24IU11,35,1,,Ba,7,5,A1.207A,D.D.Dung,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,5,,2,2,ENEL24IU11,35,3,,Hai,7,5,A2.310,D.V.Đ.Quang,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,5,,2,2,ENEL24IU11,35,3,,,,,,,
,EN011IU,EN011IU, Writing AE2,5,,2,2,ENEL24IU11,35,3,,Hai,7,4,A2.310,D.V.Đ.Quang,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,6,,2,2,ENEL24IU41,35,1,,Tư,7,4,A1.204,D.D.Dung,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,6,,2,2,ENEL24IU41,35,1,,,,,,,
,EN011IU,EN011IU, Writing AE2,6,,2,2,ENEL24IU41,35,1,,Tư,7,5,A1.204,D.D.Dung,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,7,,2,2,ENEL24IU41,35,4,,Sáu,1,5,A1.204,T.K.Hòa,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,7,,2,2,ENEL24IU41,35,4,,,,,,,
,EN011IU,EN011IU, Writing AE2,7,,2,2,ENEL24IU41,35,4,,Sáu,1,4,A1.204,T.K.Hòa,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,8,,2,2,ENEL24IU41,35,1,,Hai,7,4,A1.206,N.A.Vũ,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,8,,2,2,ENEL24IU41,35,1,,,,,,,
,EN011IU,EN011IU, Writing AE2,8,,2,2,ENEL24IU41,35,1,,Hai,7,5,A1.206,N.A.Vũ,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,9,,2,2,ENEL24IU41,35,2,,Tư,7,5,A1.207B,N.T.K.Dung,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,9,,2,2,ENEL24IU41,35,2,,,,,,,
,EN011IU,EN011IU, Writing AE2,9,,2,2,ENEL24IU41,35,2,,Tư,7,4,A1.207B,N.T.K.Dung,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,11,,2,2,ENEL24IU41,35,1,,Bảy,1,5,A2.309,D.D.Dung,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,11,,2,2,ENEL24IU41,35,1,,,,,,,
,EN011IU,EN011IU, Writing AE2,11,,2,2,ENEL24IU41,35,1,,Bảy,1,4,A2.309,D.D.Dung,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,12,,2,2,ENEL23IU41,35,1,,Ba,7,4,A2.309,D.V.Đ.Quang,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,12,,2,2,ENEL23IU41,35,1,,,,,,,
,EN011IU,EN011IU, Writing AE2,12,,2,2,ENEL23IU41,35,1,,Ba,7,5,A2.309,D.V.Đ.Quang,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,14,,2,2,ENEL23IU41,35,8,,Tư,7,4,A1.203,T.K.Hòa,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,14,,2,2,ENEL23IU41,35,8,,,,,,,
,EN011IU,EN011IU, Writing AE2,14,,2,2,ENEL23IU41,35,8,,Tư,7,5,A1.203,T.K.Hòa,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,15,,2,2,ENEL23IU41,35,8,,Sáu,7,5,A1.204,T.K.Hòa,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,15,,2,2,ENEL23IU41,35,8,,,,,,,
,EN011IU,EN011IU, Writing AE2,15,,2,2,ENEL23IU41,35,8,,Sáu,7,4,A1.204,T.K.Hòa,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,16,,2,2,ENEL23IU41,35,5,,Tư,7,5,A1.206,D.V.Đ.Quang,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,16,,2,2,ENEL23IU41,35,5,,,,,,,
,EN011IU,EN011IU, Writing AE2,16,,2,2,ENEL23IU41,35,5,,Tư,7,4,A1.206,D.V.Đ.Quang,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,17,,2,2,ENEL23IU41,35,1,,Năm,1,5,A2.409,D.D.Dung,28/07/2025--10/08/2025
,EN011IU,EN011IU, Writing AE2,17,,2,2,ENEL23IU41,35,1,,,,,,,
,EN011IU,EN011IU, Writing AE2,17,,2,2,ENEL23IU41,35,1,,Năm,1,4,A2.409,D.D.Dung,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,18,,2,2,ENEL23IU41,35,3,,Năm,1,4,A1.207B,T.T.V.Hoai,23/06/2025--27/07/2025
,EN011IU,EN011IU, Writing AE2,18,,2,2,ENEL23IU41,35,3,,,,,,,
,EN011IU,EN011IU, Writing AE2,18,,2,2,ENEL23IU41,35,3,,Năm,1,5,A1.207B,T.T.V.Hoai,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,1,,2,2,ENEL24IU11,35,1,,Sáu,7,5,A2.309,T.T.Tú,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,1,,2,2,ENEL24IU11,35,1,,,,,,,
,EN012IU,EN012IU, Speaking AE2,1,,2,2,ENEL24IU11,35,1,,Sáu,7,4,A2.309,T.T.Tú,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,2,,2,2,ENEL24IU11,35,3,,Ba,7,4,A2.311,L.N.Thien,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,2,,2,2,ENEL24IU11,35,3,,,,,,,
,EN012IU,EN012IU, Speaking AE2,2,,2,2,ENEL24IU11,35,3,,Ba,7,5,A2.311,L.N.Thien,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,3,,2,2,ENEL24IU11,35,Hết,,Năm,7,5,A1.203,N.T.T.Anh,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,3,,2,2,ENEL24IU11,35,Hết,,,,,,,
,EN012IU,EN012IU, Speaking AE2,3,,2,2,ENEL24IU11,35,Hết,,Năm,7,4,A1.203,N.T.T.Anh,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,4,,2,2,ENEL24IU11,35,1,,Ba,1,5,A1.206,P.N.Q.Trâm,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,4,,2,2,ENEL24IU11,35,1,,,,,,,
,EN012IU,EN012IU, Speaking AE2,4,,2,2,ENEL24IU11,35,1,,Ba,1,4,A1.206,P.N.Q.Trâm,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,5,,2,2,ENEL24IU11,35,1,,Hai,1,5,A1.204,N.T.K.Dung,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,5,,2,2,ENEL24IU11,35,1,,,,,,,
,EN012IU,EN012IU, Speaking AE2,5,,2,2,ENEL24IU11,35,1,,Hai,1,4,A1.204,N.T.K.Dung,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,6,,2,2,ENEL24IU41,35,Hết,,Tư,1,5,A1.203,D.V.Đ.Quang,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,6,,2,2,ENEL24IU41,35,Hết,,,,,,,
,EN012IU,EN012IU, Speaking AE2,6,,2,2,ENEL24IU41,35,Hết,,Tư,1,4,A1.203,D.V.Đ.Quang,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,7,,2,2,ENEL24IU41,35,Hết,,Hai,1,4,A2.309,N.T.Thu,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,7,,2,2,ENEL24IU41,35,Hết,,,,,,,
,EN012IU,EN012IU, Speaking AE2,7,,2,2,ENEL24IU41,35,Hết,,Hai,1,5,A2.309,N.T.Thu,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,8,,2,2,ENEL24IU41,35,2,,Hai,7,4,A2.409,H.V.Hiền,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,8,,2,2,ENEL24IU41,35,2,,,,,,,
,EN012IU,EN012IU, Speaking AE2,8,,2,2,ENEL24IU41,35,2,,Hai,7,5,A2.409,H.V.Hiền,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,9,,2,2,ENEL24IU41,35,3,,Năm,1,5,A1.206,L.N.Thien,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,9,,2,2,ENEL24IU41,35,3,,,,,,,
,EN012IU,EN012IU, Speaking AE2,9,,2,2,ENEL24IU41,35,3,,Năm,1,4,A1.206,L.N.Thien,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,10,,2,2,ENEL24IU41,35,1,,Ba,1,4,A1.203,N.T.T.Anh,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,10,,2,2,ENEL24IU41,35,1,,,,,,,
,EN012IU,EN012IU, Speaking AE2,10,,2,2,ENEL24IU41,35,1,,Ba,1,5,A1.203,N.T.T.Anh,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,11,,2,2,ENEL23IU41,35,1,,Bảy,7,5,A1.203,P.N.Q.Trâm,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,11,,2,2,ENEL23IU41,35,1,,,,,,,
,EN012IU,EN012IU, Speaking AE2,11,,2,2,ENEL23IU41,35,1,,Bảy,7,4,A1.203,P.N.Q.Trâm,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,12,,2,2,ENEL23IU41,35,Hết,,Tư,1,4,A1.207B,N.T.K.Dung,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,12,,2,2,ENEL23IU41,35,Hết,,,,,,,
,EN012IU,EN012IU, Speaking AE2,12,,2,2,ENEL23IU41,35,Hết,,Tư,1,5,A1.207B,N.T.K.Dung,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,13,,2,2,ENEL23IU41,35,8,,Hai,1,5,A2.310,D.V.Đ.Quang,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,13,,2,2,ENEL23IU41,35,8,,,,,,,
,EN012IU,EN012IU, Speaking AE2,13,,2,2,ENEL23IU41,35,8,,Hai,1,4,A2.310,D.V.Đ.Quang,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,14,,2,2,ENEL23IU41,35,1,,Ba,1,5,A2.309,T.T.Tú,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,14,,2,2,ENEL23IU41,35,1,,,,,,,
,EN012IU,EN012IU, Speaking AE2,14,,2,2,ENEL23IU41,35,1,,Ba,1,4,A2.309,T.T.Tú,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,15,,2,2,ENEL23IU41,35,10,,Hai,1,4,A2.409,H.V.Hiền,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,15,,2,2,ENEL23IU41,35,10,,,,,,,
,EN012IU,EN012IU, Speaking AE2,15,,2,2,ENEL23IU41,35,10,,Hai,1,5,A2.409,H.V.Hiền,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,16,,2,2,ENEL23IU41,35,1,,Ba,1,4,A2.310,D.V.Đ.Quang,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,16,,2,2,ENEL23IU41,35,1,,,,,,,
,EN012IU,EN012IU, Speaking AE2,16,,2,2,ENEL23IU41,35,1,,Ba,1,5,A2.310,D.V.Đ.Quang,28/07/2025--10/08/2025
,EN012IU,EN012IU, Speaking AE2,17,,2,2,ENEL23IU41,35,Hết,,Tư,1,4,A1.204,N.T.Thu,23/06/2025--27/07/2025
,EN012IU,EN012IU, Speaking AE2,17,,2,2,ENEL23IU41,35,Hết,,,,,,,
,EN012IU,EN012IU, Speaking AE2,17,,2,2,ENEL23IU41,35,Hết,,Tư,1,5,A1.204,N.T.Thu,28/07/2025--10/08/2025
,PE008IU,PE008IU, Critical Thinking,1,,3,3,ENEL24IU21,115,20,,Hai,1,4,A1.309,N.V.Tiếp,23/06/2025--03/08/2025
,PE008IU,PE008IU, Critical Thinking,1,,3,3,ENEL24IU21,115,20,,,,,,,
,PE008IU,PE008IU, Critical Thinking,1,,3,3,ENEL24IU21,115,20,,Ba,1,4,A1.309,N.V.Tiếp,23/06/2025--03/08/2025
,PE008IU,PE008IU, Critical Thinking,4,,3,3,ENEL24IU21,115,16,,Tư,7,4,A1.309,P.T.Tùng,23/06/2025--03/08/2025
,PE008IU,PE008IU, Critical Thinking,4,,3,3,ENEL24IU21,115,16,,,,,,,
,PE008IU,PE008IU, Critical Thinking,4,,3,3,ENEL24IU21,115,16,,Sáu,7,4,A1.309,P.T.Tùng,23/06/2025--03/08/2025
,PH012IU,PH012IU, Physics 4,1,,2,2,PHSE23IU01,120,15,,Năm,1,4,A1.208,Đ.X.Hội,23/06/2025--27/07/2025
,PH012IU,PH012IU, Physics 4,1,,2,2,PHSE23IU01,120,15,,,,,,,
,PH012IU,PH012IU, Physics 4,1,,2,2,PHSE23IU01,120,15,,Năm,1,5,A1.208,Đ.X.Hội,28/07/2025--10/08/2025
,PH013IU,PH013IU, Physics 1,1,,2,2,PHSE24IU01,90,12,,Tư,1,4,A2.402,P.H.Vũ,23/06/2025--27/07/2025
,PH013IU,PH013IU, Physics 1,1,,2,2,PHSE24IU01,90,12,,,,,,,
,PH013IU,PH013IU, Physics 1,1,,2,2,PHSE24IU01,90,12,,Tư,1,5,A2.402,P.H.Vũ,28/07/2025--10/08/2025
,PH013IU,PH013IU, Physics 1,2,,2,2,PHSE24IU01,90,18,,Ba,1,4,A2.507,Đ.X.Hội,23/06/2025--27/07/2025
,PH013IU,PH013IU, Physics 1,2,,2,2,PHSE24IU01,90,18,,,,,,,
,PH013IU,PH013IU, Physics 1,2,,2,2,PHSE24IU01,90,18,,Ba,1,5,A2.507,Đ.X.Hội,28/07/2025--10/08/2025
,PH013IU,PH013IU, Physics 1,3,,2,2,PHSE23IU01,50,16,,Tư,1,5,A2.507,Đ.X.Hội,28/07/2025--10/08/2025
,PH013IU,PH013IU, Physics 1,3,,2,2,PHSE23IU01,50,16,,,,,,,
,PH013IU,PH013IU, Physics 1,3,,2,2,PHSE23IU01,50,16,,Tư,1,4,A2.507,Đ.X.Hội,23/06/2025--27/07/2025
,PH014IU,PH014IU, Physics 2,1,,2,2,PHSE23IU01,55,4,,Sáu,1,5,A2.508,Đ.X.Hội,28/07/2025--10/08/2025
,PH014IU,PH014IU, Physics 2,1,,2,2,PHSE23IU01,55,4,,,,,,,
,PH014IU,PH014IU, Physics 2,1,,2,2,PHSE23IU01,55,4,,Sáu,1,4,A2.508,Đ.X.Hội,23/06/2025--27/07/2025
,PH014IU,PH014IU, Physics 2,2,,2,2,PHSE24IU01,55,4,,Năm,1,5,A2.302,P.H.Vũ,28/07/2025--10/08/2025
,PH014IU,PH014IU, Physics 2,2,,2,2,PHSE24IU01,55,4,,,,,,,
,PH014IU,PH014IU, Physics 2,2,,2,2,PHSE24IU01,55,4,,Năm,1,4,A2.302,P.H.Vũ,23/06/2025--27/07/2025
,PH015IU,PH015IU, Physics 3,1,,3,3,PHSE24IU01,50,1,,Hai,1,4,A2.302,P.H.Vũ,23/06/2025--03/08/2025
,PH015IU,PH015IU, Physics 3,1,,3,3,PHSE24IU01,50,1,,,,,,,
,PH015IU,PH015IU, Physics 3,1,,3,3,PHSE24IU01,50,1,,Sáu,7,4,A1.402,P.H.Vũ,23/06/2025--03/08/2025
,PH016IU,PH016IU, Physics 3 Laboratory,1,,1,1,PHSE23IU01,15,4,,Ba,7,5,LA1.403,L.T.Que,30/06/2025--10/08/2025
,PH016IU,PH016IU, Physics 3 Laboratory,2,,1,1,PHSE23IU01,15,4,,Năm,7,5,LA1.403,T.T.Thuy,30/06/2025--10/08/2025
,PH016IU,PH016IU, Physics 3 Laboratory,3,,1,1,PHSE24IU01,15,7,,Tư,7,5,LA1.403,L.T.Que,30/06/2025--10/08/2025
,BA003IU,BA003IU, Principles of Marketing,1,,3,3,BABA24IU21,60,20,,Hai,1,4,A2.401,B.T.Thanh,23/06/2025--03/08/2025
,BA003IU,BA003IU, Principles of Marketing,1,,3,3,BABA24IU21,60,20,,,,,,,
,BA003IU,BA003IU, Principles of Marketing,1,,3,3,BABA24IU21,60,20,,Sáu,1,4,A2.401,B.T.Thanh,23/06/2025--03/08/2025
,BA006IU,BA006IU, Business Communication,1,,3,3,BABA23IU21,60,3,,Ba,7,4,A1.201,N.T.Minh,23/06/2025--03/08/2025
,BA006IU,BA006IU, Business Communication,1,,3,3,BABA23IU21,60,3,,,,,,,
,BA006IU,BA006IU, Business Communication,1,,3,3,BABA23IU21,60,3,,Năm,1,4,A1.201,N.T.Minh,23/06/2025--03/08/2025
,BA018IU,BA018IU, Quality Management,1,,3,3,BABA23IU01,90,35,,Bảy,7,4,A1.401,P.T.M.Hà,23/06/2025--03/08/2025
,BA018IU,BA018IU, Quality Management,1,,3,3,BABA23IU01,90,35,,,,,,,
,BA018IU,BA018IU, Quality Management,1,,3,3,BABA23IU01,90,35,,Tư,1,4,A1.401,P.T.M.Hà,23/06/2025--03/08/2025
,BA022IU,BA022IU, Logistic and Supply Chain Management,1,,3,3,BABA23IU02,60,22,,Ba,1,4,A2.301,N.T.H.An,23/06/2025--03/08/2025
,BA022IU,BA022IU, Logistic and Supply Chain Management,1,,3,3,BABA23IU02,60,22,,,,,,,
,BA022IU,BA022IU, Logistic and Supply Chain Management,1,,3,3,BABA23IU02,60,22,,Hai,7,4,A2.301,N.T.H.An,23/06/2025--03/08/2025
,BA023IU,BA023IU, Project Management,1,,3,3,BABA23IU02,60,45,,Sáu,7,4,A2.301,N.N.Ty,23/06/2025--03/08/2025
,BA023IU,BA023IU, Project Management,1,,3,3,BABA23IU02,60,45,,,,,,,
,BA023IU,BA023IU, Project Management,1,,3,3,BABA23IU02,60,45,,Năm,1,4,A2.401,N.N.Ty,23/06/2025--03/08/2025
,BA027IU,BA027IU, E - Commerce,1,,3,3,BABA23IU02,30,11,,Sáu,7,4,ONLINE,N.H.Anh,23/06/2025--03/08/2025
,BA027IU,BA027IU, E - Commerce,1,,3,3,BABA23IU02,30,11,,,,,,,
,BA027IU,BA027IU, E - Commerce,1,,3,3,BABA23IU02,30,11,,Năm,1,4,ONLINE,N.H.Anh,23/06/2025--03/08/2025
,BA032IU,BA032IU, Sales Management,1,,3,3,BABA23IU02,60,21,,Hai,1,4,A1.201,L.V.Phúc,23/06/2025--03/08/2025
,BA032IU,BA032IU, Sales Management,1,,3,3,BABA23IU02,60,21,,,,,,,
,BA032IU,BA032IU, Sales Management,1,,3,3,BABA23IU02,60,21,,Tư,1,4,A1.201,L.V.Phúc,23/06/2025--03/08/2025
,BA080IU,BA080IU, Statistics for Business,1,,3,3,BABA23IU02,60,35,,Ba,7,4,A1.401,L.Q.Thái,23/06/2025--03/08/2025
,BA080IU,BA080IU, Statistics for Business,1,,3,3,BABA23IU02,60,35,,,,,,,
,BA080IU,BA080IU, Statistics for Business,1,,3,3,BABA23IU02,60,35,,Tư,7,4,A1.401,L.Q.Thái,23/06/2025--03/08/2025
,BA081IU,BA081IU, Business Law,1,,3,3,BABA23IU02,60,5,,Hai,1,4,A1.402,T.T.Long,23/06/2025--03/08/2025
,BA081IU,BA081IU, Business Law,1,,3,3,BABA23IU02,60,5,,,,,,,
,BA081IU,BA081IU, Business Law,1,,3,3,BABA23IU02,60,5,,Ba,1,4,A1.402,T.T.Long,23/06/2025--03/08/2025
,BA098IU,BA098IU, Leadership,1,,3,3,BABA23IU02,76,Hết,,Năm,7,4,A2.301,M.N.Khuong,23/06/2025--03/08/2025
,BA098IU,BA098IU, Leadership,1,,3,3,BABA23IU02,76,Hết,,,,,,,
,BA098IU,BA098IU, Leadership,1,,3,3,BABA23IU02,76,Hết,,Bảy,7,4,A2.301,M.N.Khuong,23/06/2025--03/08/2025
,BA115IU,BA115IU, Introduction to Business Administration,1,,3,3,BABA23IU03,60,31,,Hai,1,4,A2.301,N.T.H.An,23/06/2025--03/08/2025
,BA115IU,BA115IU, Introduction to Business Administration,1,,3,3,BABA23IU03,60,31,,,,,,,
,BA115IU,BA115IU, Introduction to Business Administration,1,,3,3,BABA23IU03,60,31,,Ba,7,4,A2.301,N.T.H.An,23/06/2025--03/08/2025
,BA120IU,BA120IU, Business Computing Skills,1,,3,3,BABA24IU21,45,9,,Năm,1,4,LA1.301,H.T.Quốc,23/06/2025--03/08/2025
,BA120IU,BA120IU, Business Computing Skills,1,,3,3,BABA24IU21,45,9,,,,,,,
,BA120IU,BA120IU, Business Computing Skills,1,,3,3,BABA24IU21,45,9,,Năm,7,4,LA1.301,H.T.Quốc,23/06/2025--03/08/2025
,BA120IU,BA120IU, Business Computing Skills,2,,3,3,BABA24IU21,45,19,,Sáu,7,4,LA1.301,H.T.Quốc,23/06/2025--03/08/2025
,BA120IU,BA120IU, Business Computing Skills,2,,3,3,BABA24IU21,45,19,,,,,,,
,BA120IU,BA120IU, Business Computing Skills,2,,3,3,BABA24IU21,45,19,,Sáu,1,4,LA1.301,H.T.Quốc,23/06/2025--03/08/2025
,BA120IU,BA120IU, Business Computing Skills,3,,3,3,BABA24IU21,50,29,,Ba,7,4,LA1.301,H.V.T.Dung,14/07/2025--03/08/2025
,BA120IU,BA120IU, Business Computing Skills,3,,3,3,BABA24IU21,50,29,,,,,,,
,BA120IU,BA120IU, Business Computing Skills,3,,3,3,BABA24IU21,50,29,,Tư,1,4,LA1.301,H.V.T.Dung,14/07/2025--03/08/2025
,BA120IU,BA120IU, Business Computing Skills,3,,3,3,BABA24IU21,50,29,,,,,,,
,BA120IU,BA120IU, Business Computing Skills,3,,3,3,BABA24IU21,50,29,,Ba,7,4,LA1.301,D.N.Hung,23/06/2025--13/07/2025
,BA120IU,BA120IU, Business Computing Skills,3,,3,3,BABA24IU21,50,29,,,,,,,
,BA120IU,BA120IU, Business Computing Skills,3,,3,3,BABA24IU21,50,29,,Tư,1,4,LA1.301,D.N.Hung,23/06/2025--13/07/2025
,BA123IU,BA123IU, Principles of Management,1,,3,3,BABA22AD01,60,45,,Ba,7,4,A2.302,P.V.Hanh,23/06/2025--03/08/2025
,BA123IU,BA123IU, Principles of Management,1,,3,3,BABA22AD01,60,45,,,,,,,
,BA123IU,BA123IU, Principles of Management,1,,3,3,BABA22AD01,60,45,,Năm,7,4,A2.302,P.V.Hanh,23/06/2025--03/08/2025
,BA153IU,BA153IU, Internship,1,,3,3,BABA23IU03,700,387,,,0,0,,,23/06/2025--10/08/2025
,BA153IU,BA153IU, Internship,2,,3,3,FAAC22IU01,100,51,,,0,0,,T.Q.Dat,23/06/2025--10/08/2025
,BA154IU,BA154IU, Entrepreneurship and Small Business Management,1,,3,3,BABA23IU03,60,44,,Tư,1,4,A1.202,L.N.N.Quế,23/06/2025--03/08/2025
,BA154IU,BA154IU, Entrepreneurship and Small Business Management,1,,3,3,BABA23IU03,60,44,,,,,,,
,BA154IU,BA154IU, Entrepreneurship and Small Business Management,1,,3,3,BABA23IU03,60,44,,Năm,1,4,A1.202,L.N.N.Quế,23/06/2025--03/08/2025
,BA161IU,BA161IU, Business Research Methods,1,,3,3,BABA23IU03,75,2,,Sáu,1,4,A1.202,Đ.T.L.Trinh,23/06/2025--03/08/2025
,BA161IU,BA161IU, Business Research Methods,1,,3,3,BABA23IU03,75,2,,,,,,,
,BA161IU,BA161IU, Business Research Methods,1,,3,3,BABA23IU03,75,2,,Sáu,7,4,A1.202,Đ.T.L.Trinh,23/06/2025--03/08/2025
,BA161IU,BA161IU, Business Research Methods,2,,3,3,BABA23IU03,50,37,,Ba,7,4,A2.408,N.T.Giang,23/06/2025--03/08/2025
,BA161IU,BA161IU, Business Research Methods,2,,3,3,BABA23IU03,50,37,,,,,,,
,BA161IU,BA161IU, Business Research Methods,2,,3,3,BABA23IU03,50,37,,Bảy,7,4,A1.204,N.T.Giang,23/06/2025--03/08/2025
,BA164IU,BA164IU, Production and Operations Management,1,,3,3,BABA23IU03,35,7,,Năm,1,4,A2.312,T.Q.Được,23/06/2025--03/08/2025
,BA164IU,BA164IU, Production and Operations Management,1,,3,3,BABA23IU03,35,7,,,,,,,
,BA164IU,BA164IU, Production and Operations Management,1,,3,3,BABA23IU03,35,7,,Ba,1,4,A2.312,T.Q.Được,23/06/2025--03/08/2025
,BA164IU,BA164IU, Production and Operations Management,2,,3,3,BABA23IU03,60,11,,Năm,7,4,A1.202,N.N.Tung,23/06/2025--03/08/2025
,BA164IU,BA164IU, Production and Operations Management,2,,3,3,BABA23IU03,60,11,,,,,,,
,BA164IU,BA164IU, Production and Operations Management,2,,3,3,BABA23IU03,60,11,,Bảy,1,4,A1.401,N.N.Tung,23/06/2025--03/08/2025
,BA167IU,BA167IU, Introduction to Vietnamese Legal System,1,,3,3,BABA23IU21,60,28,,Hai,1,4,A1.202,N.K.H.Nguyên,23/06/2025--03/08/2025
,BA167IU,BA167IU, Introduction to Vietnamese Legal System,1,,3,3,BABA23IU21,60,28,,,,,,,
,BA167IU,BA167IU, Introduction to Vietnamese Legal System,1,,3,3,BABA23IU21,60,28,,Hai,7,4,A1.202,N.K.H.Nguyên,23/06/2025--03/08/2025
,BA168IU,BA168IU, Quantitative Methods for Business,1,,3,3,BABA23IU21,90,49,,Tư,7,4,A1.202,N.B.Trung,23/06/2025--03/08/2025
,BA168IU,BA168IU, Quantitative Methods for Business,1,,3,3,BABA23IU21,90,49,,,,,,,
,BA168IU,BA168IU, Quantitative Methods for Business,1,,3,3,BABA23IU21,90,49,,Sáu,7,4,A2.302,N.B.Trung,23/06/2025--03/08/2025
,BA169IU,BA169IU, Management Information Systems,1,,3,3,BABA23IU21,75,12,,Ba,1,4,A1.201,L.V.Phúc,23/06/2025--03/08/2025
,BA169IU,BA169IU, Management Information Systems,1,,3,3,BABA23IU21,75,12,,,,,,,
,BA169IU,BA169IU, Management Information Systems,1,,3,3,BABA23IU21,75,12,,Hai,7,4,A1.201,L.V.Phúc,23/06/2025--03/08/2025
,BA197IU,BA197IU, Introduction to Sociology,1,,3,3,BABA23IU03,60,40,,Ba,1,4,A1.202,T.S.Đào,23/06/2025--03/08/2025
,BA197IU,BA197IU, Introduction to Sociology,1,,3,3,BABA23IU03,60,40,,,,,,,
,BA197IU,BA197IU, Introduction to Sociology,1,,3,3,BABA23IU03,60,40,,Ba,7,4,A1.202,T.S.Đào,23/06/2025--03/08/2025
,BA226IU,BA226IU, Leadership and Management Skills in Hospitality Management,1,,3,3,BABA23IU02,15,12,,Bảy,7,4,A2.301,M.N.Khuong,23/06/2025--03/08/2025
,BA226IU,BA226IU, Leadership and Management Skills in Hospitality Management,1,,3,3,BABA23IU02,15,12,,,,,,,
,BA226IU,BA226IU, Leadership and Management Skills in Hospitality Management,1,,3,3,BABA23IU02,15,12,,Năm,7,4,A2.301,M.N.Khuong,23/06/2025--03/08/2025
,BA233IU,BA233IU, Hotel Management and Operation,1,,3,3,BABA23IU03,10,6,,Ba,1,4,A2.312,T.Q.Được,23/06/2025--03/08/2025
,BA233IU,BA233IU, Hotel Management and Operation,1,,3,3,BABA23IU03,10,6,,,,,,,
,BA233IU,BA233IU, Hotel Management and Operation,1,,3,3,BABA23IU03,10,6,,Năm,1,4,A2.312,T.Q.Được,23/06/2025--03/08/2025
,BA255IU,BA255IU, Specialized Internship,1,,3,3,BABA23IU03,1,Hết,,,0,0,,,23/06/2025--10/08/2025
,BA256IU,BA256IU, Workshop 1,1,,3,3,BABA23IU21,60,26,,Bảy,1,4,A1.202,Đ.T.L.Trinh,23/06/2025--03/08/2025
,BA256IU,BA256IU, Workshop 1,1,,3,3,BABA23IU21,60,26,,,,,,,
,BA256IU,BA256IU, Workshop 1,1,,3,3,BABA23IU21,60,26,,Bảy,7,4,A1.202,Đ.T.L.Trinh,23/06/2025--03/08/2025
,PE010IU,PE010IU, Vietnamese History and Culture,1,,3,3,BABA23IU01,30,20,,Năm,1,4,A2.408,V.V.Sen,23/06/2025--03/08/2025
,PE010IU,PE010IU, Vietnamese History and Culture,1,,3,3,BABA23IU01,30,20,,,,,,,
,PE010IU,PE010IU, Vietnamese History and Culture,1,,3,3,BABA23IU01,30,20,,Năm,7,4,A2.408,V.V.Sen,23/06/2025--03/08/2025
,BT221IU,BT221IU, Internship,1,,2,2,BTBT22IU01,100,19,,,0,0,,,23/06/2025--10/08/2025
,BT315IU,BT315IU, Analytical Chemistry,1,,3,3,BTBT23IU02,40,10,,Hai,2,4,A2.311,N.T.Trang,23/06/2025--03/08/2025
,BT315IU,BT315IU, Analytical Chemistry,1,,3,3,BTBT23IU02,40,10,,,,,,,
,BT315IU,BT315IU, Analytical Chemistry,1,,3,3,BTBT23IU02,40,10,,Tư,2,4,A2.309,N.T.Trang,23/06/2025--03/08/2025
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,Năm,2,4,A1.204,H.K.Lam,23/06/2025--06/07/2025
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,,,,,,
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,Tư,2,4,A1.603,H.K.Lam,23/06/2025--06/07/2025
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,,,,,,
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,Tư,2,3,A1.603,H.K.Lam,07/07/2025--13/07/2025
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,,,,,,
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,Năm,2,3,A1.204,N.T.H.Hải,07/07/2025--13/07/2025
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,,,,,,
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,Năm,2,4,A1.204,N.T.H.Hải,14/07/2025--03/08/2025
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,,,,,,
,BT362IU,BT362IU, Chemistry for Engineering,1,,3,3,BTBT24IU01,40,6,,Tư,2,4,A1.603,N.T.H.Hải,14/07/2025--03/08/2025
,BTBC309IU,BTBC309IU, Internship,1,,2,2,BTBT22IU01,50,34,,,0,0,,,23/06/2025--10/08/2025
,BTFT409IU,BTFT409IU, Internship,1,,2,2,BTBT22IU01,50,12,,,0,0,,,23/06/2025--10/08/2025
,CH012IU,CH012IU, Chemistry Laboratory,2,,1,1,BTBT23IU01,18,Hết,,Năm,7,5,LA1.502,T.M.Nhựt,30/06/2025--10/08/2025






`.trim();
