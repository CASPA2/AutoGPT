param()
Write-Host "Installing prerequisites if needed..." -ForegroundColor Cyan

function Ensure-Tool {
  param(
    [string]$Name,
    [string]$Command,
    [string]$InstallInstructions
  )
  if (-not (Get-Command $Command -ErrorAction SilentlyContinue)) {
    Write-Host "$Name not found. $InstallInstructions" -ForegroundColor Yellow
  } else {
    Write-Host "$Name found: $((Get-Command $Command).Source)" -ForegroundColor Green
  }
}

Ensure-Tool "Node.js" "node" "Visit https://nodejs.org/ to install LTS version."
Ensure-Tool "pnpm" "pnpm" "Run: npm install -g pnpm"
Ensure-Tool "Git" "git" "Visit https://git-scm.com/download/win"
Ensure-Tool "FFmpeg" "ffmpeg" "Download from https://ffmpeg.org/download.html"

Write-Host "Prerequisite check complete." -ForegroundColor Cyan
