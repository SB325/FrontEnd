@ECHO OFF

CD "C:\Program Files\nginx-1.22.1\"
START nginx -t -c C:\Users\sfb_s\src\FrontEnd\nginx_conf\nginx.conf 

CD %~dp0 
