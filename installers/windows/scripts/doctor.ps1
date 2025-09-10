param()
Write-Host "Running system checks..." -ForegroundColor Cyan
$results = @()
if (Get-Command docker -ErrorAction SilentlyContinue) {
  $results += [pscustomobject]@{component="docker"; status="ok"}
} else {
  $results += [pscustomobject]@{component="docker"; status="missing"}
}
if (Get-Command ffmpeg -ErrorAction SilentlyContinue) {
  $results += [pscustomobject]@{component="ffmpeg"; status="ok"}
} else {
  $results += [pscustomobject]@{component="ffmpeg"; status="missing"}
}
$results | Format-Table -AutoSize
$results | ConvertTo-Json | Out-File "$Env:ProgramData\AIOViralVideoGen\logs\doctor.json" -Force

Write-Host "Checking python-dotenv..."
$cmd = "python -c `"import importlib; import sys; sys.exit(0 if importlib.util.find_spec('dotenv') else 1)`""
cmd /c $cmd
if ($LASTEXITCODE -ne 0) {
  Write-Host "python-dotenv not found. Installing..."
  cmd /c "python -m pip install --upgrade pip && python -m pip install python-dotenv"
  if ($LASTEXITCODE -ne 0) { Write-Error "Failed to install python-dotenv"; exit 1 }
}
Write-Host "python-dotenv OK."
