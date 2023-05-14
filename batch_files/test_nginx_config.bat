@ECHO OFF

CD "C:\Program Files\nginx-1.22.1\"
START nginx -t -c C:\Users\sfb_s\src\FrontEnd\nginx_conf\nginx.conf -e C:\Users\sfb_s\src\FrontEnd\nginx_conf\log.txt

CD %~dp0 
