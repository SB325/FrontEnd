@ECHO OFF
cd /D "C:\Program Files\nginx-1.22.1" 
taskkill /f /IM nginx.exe
START CMD /K CALL "nginx.exe"
EXIT


