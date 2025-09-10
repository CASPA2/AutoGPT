param()
Write-Host "Stopping services..." -ForegroundColor Cyan
& docker compose -f "$PSScriptRoot\..\compose\docker-compose.yml" down
