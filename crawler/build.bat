@echo off
title Build IU Room Availability Updater EXE
cd /d "%~dp0"

echo ================================================================================
echo       BUILDING CRAWL_EDUSOFT.EXE
echo ================================================================================
echo.

echo Installing / verifying requirements...
python -m pip install -r requirements.txt

echo.
echo Compiling standalone executable with PyInstaller...
python -m PyInstaller --clean --onefile --console --noupx --version-file=version_info.txt --name=crawl_edusoft crawl_edusoft.py

echo.
echo Copying crawl_edusoft.exe to project root...
copy /y dist\crawl_edusoft.exe ..\crawl_edusoft.exe

echo.
echo ================================================================================
echo BUILD COMPLETED! Executable is at: crawl_edusoft.exe
echo ================================================================================
pause
