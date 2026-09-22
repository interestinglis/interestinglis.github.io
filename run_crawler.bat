@echo off
title HCMIU Edusoft Crawler - Tim Phong Trong
cd /d "%~dp0"

echo ================================================================================
echo       HCMIU EDUSOFT AUTOMATED SCHEDULE CRAWLER
echo ================================================================================
echo.

if exist "crawl_edusoft.exe" (
    crawl_edusoft.exe %*
) else (
    python crawl_edusoft.py %*
)

echo.
echo ================================================================================
echo Nhan phim bat ky de dong cua so...
pause > nul
