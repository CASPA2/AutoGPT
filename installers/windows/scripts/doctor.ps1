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
