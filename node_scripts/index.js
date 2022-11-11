const express = require("express")
const port = 3000
var app = express()
app.get("/",function(request,response){
        response.send("Hello World!")
})
app.listen(port, function () {
        console.log("Started application on port %d", port)
});

