# Uninstall

To remove the AIO Viral Video Generator from Windows:

1. Open **Apps & Features** and uninstall **AIO Viral Video Generator**, or run the **Uninstall** shortcut from the Start Menu.
2. The uninstaller stops running containers and removes application files from `%ProgramFiles%\\AIOViralVideoGen`.
3. Logs and backups in `%ProgramData%\\AIOViralVideoGen` are preserved. To perform a factory reset remove that directory manually or run:

```powershell
"%ProgramFiles%\AIOViralVideoGen\scripts\reset.ps1"
```

Confirm when prompted. This deletes all configuration and Docker volumes.
