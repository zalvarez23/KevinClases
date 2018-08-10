var express = require("express");

    app = express();

    server = require("http").createServer(app);
    
    server.listen(5000);

    //app.use('/www', express.static(__dirname))
    
    app.get("/", function(req, res){
      res.sendFile(__dirname + "/index.html");
    });
    console.log(__dirname);
  