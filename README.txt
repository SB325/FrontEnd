Running batch in backgroun:
start /MIN cmd.exe start_nginx.bat

https://www.maketecheasier.com/install-nginx-server-windows/#:~:text=Nginx%20is%20a%20web%20server,problems%20in%20a%20future%20release.


Start nginx as a service 
(Powershell Admin)
New-Service -Name "Nginx" -BinaryPathName '"C:\Program Files\nginx-1.22.1\nginx.exe"' -DisplayName "Nginx" -StartupType "AutomaticDelayedStart"
Start-Service -DisplayName "Nginx"

New-Service -Name "Nodejs" -BinaryPathName '"npm start --prefix C:\Users\sfb_s\src\FrontEnd\node_scripts' -StartupType "Automatic"
Start-Service -DisplayName "Nodejs"

In Node, each .js file is a module, and all functions/variables within it are scoped to that module. to use a var/function of a module in another script/module, you must export/import it, similarly to python include.

use jshint for batch debugging of javascript code
