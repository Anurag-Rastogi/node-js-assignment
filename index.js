const http = require("http");

//request=object
http
.createServer((request,response) => {
    // console.log("request",request.url,request.method);
    if(request.method==="GET" && request.url=== "/get/friends"){
        console.log("fetching friends");
    }else if(request.method==="POST" && request.url=== "/add/friends"){
        console.log("adding friends")
    }
    else if(request.method==="PUT" && request.url=== "/update/friends"){
        console.log("updating friends")
    }
    else if(request.method==="DELETE" && request.url=== "/delete/friends"){
        console.log("deleting friends")
    }
    else{
        console.log("hello world")
    }

})
.listen(8080);



