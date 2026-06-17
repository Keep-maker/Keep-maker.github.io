@echo off
cd /d "%~dp0"
npm run deploy
if errorlevel 1 (
    echo.
    echo Deploy failed. See errors above.
    pause
    exit /b 1
)
echo.
pause
