; Fallback NSIS script for AIO Viral Video Generator
Name "AIO Viral Video Generator"
OutFile "Install-AIO-Viral-Video-Generator-${VERSION}-x64.exe"
InstallDir "$PROGRAMFILES\AIOViralVideoGen"
RequestExecutionLevel admin
Page directory
Page instfiles
Section "Main"
  SetOutPath "$INSTDIR"
  File /r "..\..\*"
  CreateShortCut "$SMPROGRAMS\AIO Viral Video Generator\Start Services.lnk" "$INSTDIR\bin\aiox.exe" "start"
  CreateShortCut "$SMPROGRAMS\AIO Viral Video Generator\Stop Services.lnk" "$INSTDIR\bin\aiox.exe" "stop"
  CreateShortCut "$SMPROGRAMS\AIO Viral Video Generator\Open Dashboard.lnk" "$INSTDIR\bin\aiox.exe" "open"
  CreateShortCut "$SMPROGRAMS\AIO Viral Video Generator\Run Doctor.lnk" "$INSTDIR\bin\aiox.exe" "doctor"
  CreateShortCut "$SMPROGRAMS\AIO Viral Video Generator\Reset.lnk" "$INSTDIR\bin\aiox.exe" "reset"
SectionEnd
