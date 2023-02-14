@ECHO OFF
START sc create "Nginx Service" start= auto displayname= "Nginx" binpath= "cmd /C C:\Users\sfb_s\src\FrontEnd\batch_files\start_nginx.bat"
