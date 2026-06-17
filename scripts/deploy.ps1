#Requires -Version 5.1
$ErrorActionPreference = 'Stop'

$ProjectRoot = Split-Path -Parent $PSScriptRoot
$NginxHome   = 'E:\Program Files\Nginx'
$NginxExe    = Join-Path $NginxHome 'nginx.exe'
$DeployDir   = Join-Path $NginxHome 'html\resume'
$DistDir     = Join-Path $ProjectRoot 'dist'
$SiteUrl     = 'http://localhost:8088'

function Write-Step([string]$Message) {
    Write-Host ""
    Write-Host "==> $Message" -ForegroundColor Cyan
}

Write-Host "========================================" -ForegroundColor Green
Write-Host "  Resume site - deploy to Nginx" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green

Write-Step "[1/4] Build frontend"
Set-Location $ProjectRoot
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed." }

Write-Step "[2/4] Copy static files to Nginx"
if (-not (Test-Path $DeployDir)) {
    New-Item -ItemType Directory -Path $DeployDir -Force | Out-Null
}
Copy-Item -Path (Join-Path $DistDir '*') -Destination $DeployDir -Recurse -Force
Write-Host "Deployed to: $DeployDir" -ForegroundColor Gray

Write-Step "[3/4] Validate and start Nginx"
if (-not (Test-Path $NginxExe)) {
    throw "Nginx not found: $NginxExe"
}
& $NginxExe -t -p $NginxHome
if ($LASTEXITCODE -ne 0) { throw "Nginx config test failed." }

$nginxRunning = Get-Process nginx -ErrorAction SilentlyContinue
if ($nginxRunning) {
    & $NginxExe -s reload -p $NginxHome 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Reload failed, restarting Nginx..." -ForegroundColor Yellow
        Stop-Process -Name nginx -Force -ErrorAction SilentlyContinue
        Start-Sleep -Seconds 1
        Start-Process -FilePath $NginxExe -ArgumentList "-p `"$NginxHome`"" -WindowStyle Hidden
    } else {
        Write-Host "Nginx reloaded." -ForegroundColor Gray
    }
} else {
    Start-Process -FilePath $NginxExe -ArgumentList "-p `"$NginxHome`"" -WindowStyle Hidden
    Write-Host "Nginx started." -ForegroundColor Gray
}

Start-Sleep -Seconds 1

Write-Step "[4/4] Verify site"
try {
    $response = Invoke-WebRequest -Uri $SiteUrl -UseBasicParsing -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Host ""
        Write-Host "Deploy success!" -ForegroundColor Green
        Write-Host "Open: $SiteUrl" -ForegroundColor Yellow
    } else {
        throw "Unexpected status code: $($response.StatusCode)"
    }
} catch {
    throw "Site check failed: $($_.Exception.Message)"
}
