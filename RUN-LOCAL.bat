@echo off
setlocal
cd /d "%~dp0"
echo Installing dependencies...
call npm ci
if errorlevel 1 goto :error
echo Starting local site...
call npm run dev
goto :eof
:error
echo.
echo ERROR: installation or startup failed.
pause
exit /b 1
