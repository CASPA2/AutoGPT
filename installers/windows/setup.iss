#define MyAppName "AIO Viral Video Generator"
#define MyAppVersion "0.1.0"
#define MyAppPublisher "OpenAI"
#define MyAppURL "https://localhost/"
#define MyAppExeName "aiox.exe"

[Setup]
AppId={{AIOViralVideoGenerator}}
AppName={#MyAppName}
AppVersion={#MyAppVersion}
AppPublisher={#MyAppPublisher}
AppPublisherURL={#MyAppURL}
DefaultDirName={pf}\AIOViralVideoGen
DefaultGroupName=AIO Viral Video Generator
OutputBaseFilename=Install-AIO-Viral-Video-Generator-{#MyAppVersion}-x64
Compression=lzma
SolidCompression=yes
PrivilegesRequired=admin
ArchitecturesAllowed=x64
ArchitecturesInstallIn64BitMode=x64
SetupLogging=yes
WizardStyle=modern

[Languages]
Name: "english"; MessagesFile: "compiler:Default.isl"

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}"; Flags: unchecked

[Files]
; copy app files
Source: "..\\..\\*"; DestDir: "{app}\\app"; Flags: recursesubdirs createallsubdirs
Source: "bin\\aiox.exe"; DestDir: "{app}\\bin"; Flags: ignoreversion
Source: "scripts\\*.ps1"; DestDir: "{app}\\scripts"; Flags: ignoreversion
Source: "..\\..\\docker-compose.yml"; DestDir: "{app}\\compose"; Flags: ignoreversion

[Icons]
Name: "{group}\\Launch App (HTTPS)"; Filename: "{app}\\bin\\aiox.exe"; Parameters: "open"
Name: "{group}\\Open Dashboard (Browser)"; Filename: "{app}\\bin\\aiox.exe"; Parameters: "open"
Name: "{group}\\Run Doctor"; Filename: "{app}\\bin\\aiox.exe"; Parameters: "doctor"
Name: "{group}\\Start Services"; Filename: "{app}\\bin\\aiox.exe"; Parameters: "start"
Name: "{group}\\Stop Services"; Filename: "{app}\\bin\\aiox.exe"; Parameters: "stop"
Name: "{group}\\Reset (Dangerous)"; Filename: "{app}\\bin\\aiox.exe"; Parameters: "reset"
Name: "{group}\\Uninstall"; Filename: "{uninstallexe}"
Name: "{commondesktop}\\AIO Viral Video Generator"; Filename: "{app}\\bin\\aiox.exe"; Tasks: desktopicon

[Run]
Filename: "{app}\\bin\\aiox.exe"; Parameters: "open"; Flags: nowait postinstall skipifsilent
