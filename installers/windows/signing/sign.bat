@echo off
if "%SIGNING_CERT_PATH%"=="" (
  echo No SIGNING_CERT_PATH provided. Building unsigned.
  exit /b 0
)
set FILE=%1
if "%FILE%"=="" (
  echo Usage: sign.bat file-to-sign
  exit /b 1
)
"%ProgramFiles(x86)%\Windows Kits\10\bin\x64\signtool.exe" sign /f "%SIGNING_CERT_PATH%" /p "%SIGNING_CERT_PASS%" /tr http://timestamp.digicert.com /td sha256 /fd sha256 "%FILE%"
