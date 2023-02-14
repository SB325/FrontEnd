@ECHO OFF

CD "C:\Program Files\nginx-1.22.1\"
start nginx -s stop
call taskkill /f /IM nginx.exe

CD %~dp0
