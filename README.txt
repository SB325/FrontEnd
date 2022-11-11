https://www.maketecheasier.com/install-nginx-server-windows/#:~:text=Nginx%20is%20a%20web%20server,problems%20in%20a%20future%20release.


Start nginx as a service 
(Powershell Admin)
New-Service -Name "Nginx" -BinaryPathName '"C:\Program Files\nginx-1.22.1\nginx.exe"' -DisplayName "Nginx" -StartupType "AutomaticDelayedStart"
Start-Service -DisplayName "Nginx"

New-Service -Name "Nodejs" -BinaryPathName '"C:\Program Files\nodejs\node.exe index.js"' -DisplayName "Nodejs" -StartupType "AutomaticDelayedStart"
Start-Service -DisplayName "Nodejs"
