# Install on Windows

This project ships an Inno Setup based installer for Windows 10/11. A novice user can download a single `Install-AIO-Viral-Video-Generator-<version>-x64.exe` and follow a graphical wizard.

## Build the installer

From a clean checkout run:

```bash
pnpm install
pnpm run build:installer:win
```

The script compiles the `aiox` helper CLI and invokes `iscc` to produce a signed installer in `dist/`.

## What the installer does

- Copies the monorepo to `%ProgramFiles%\\AIOViralVideoGen`.
- Installs optional prerequisites (Node.js LTS, pnpm, Git, FFmpeg) via `install-prereqs.ps1`.
- Guides the user to install Docker Desktop if it is not detected.
- Registers Start Menu shortcuts:
  - Launch App (HTTPS)
  - Open Dashboard (Browser)
  - Start Services / Stop Services
  - Run Doctor
  - Reset (Dangerous)
  - Uninstall
- Optionally creates a desktop shortcut.

On completion the installer opens `https://localhost/` so the first‑run wizard can configure `.env` files and start in **Demo** or **Real** mode.
