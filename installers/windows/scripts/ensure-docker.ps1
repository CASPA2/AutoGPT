param()
Write-Host "Checking Docker Desktop..." -ForegroundColor Cyan
if (-not (Get-Process -Name "Docker Desktop" -ErrorAction SilentlyContinue)) {
  if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "Docker Desktop not installed. Please install from https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
  } else {
    Write-Host "Docker CLI found but Desktop may not be running." -ForegroundColor Yellow
  }
  exit 1
}
Write-Host "Docker Desktop is running." -ForegroundColor Green
