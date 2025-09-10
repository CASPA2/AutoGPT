param()
Write-Warning "This will remove all containers, volumes, and config."
$confirm = Read-Host "Type RESET to continue"
if ($confirm -ne "RESET") { Write-Host "Aborted."; exit }
& docker compose -f "$PSScriptRoot\..\compose\docker-compose.yml" down -v
Remove-Item "$Env:ProgramData\AIOViralVideoGen" -Recurse -Force -ErrorAction SilentlyContinue
Write-Host "Factory reset complete." -ForegroundColor Green
