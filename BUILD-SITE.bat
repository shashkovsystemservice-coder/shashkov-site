@echo off
setlocal
cd /d "%~dp0"
echo Installing clean dependencies...
call npm ci
if errorlevel 1 goto :error
echo Building site...
call npm run build
if errorlevel 1 goto :error
echo.
echo BUILD OK. Output is in dist\
pause
goto :eof
:error
echo.
echo ERROR: build failed.
pause
exit /b 1
