param()
Write-Host "Starting services..." -ForegroundColor Cyan
& docker compose -f "$PSScriptRoot\..\compose\docker-compose.yml" up -d
if ($LASTEXITCODE -ne 0) { Write-Error "Failed to start services"; exit 1 }
Write-Host "Services started. Open https://localhost/" -ForegroundColor Green
