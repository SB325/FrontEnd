@ECHO OFF

call stop_nginx.bat
call taskkill /f /IM nginx.exe

call start_nginx.bat

CD %~dp0
