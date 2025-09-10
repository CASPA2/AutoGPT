# Troubleshooting on Windows

This page lists common issues and fixes for the Windows installer.

## Docker Desktop not detected

The stack requires Docker Desktop with the WSL2 backend. Run the Start Menu shortcut **Run Doctor** or execute:

```powershell
"%ProgramFiles%\AIOViralVideoGen\scripts\ensure-docker.ps1"
```

Follow the prompt to install Docker Desktop and restart the installer afterwards.

## Ports already in use

If ports 80 or 443 are busy the reverse proxy cannot start. Stop the conflicting service or modify `compose/docker-compose.yml` to use different ports and run `aiox restart`.

## Resetting the environment

When the app becomes misconfigured run:

```powershell
"%ProgramFiles%\AIOViralVideoGen\scripts\reset.ps1"
```

This removes containers, volumes and configuration so you can reinstall cleanly.
