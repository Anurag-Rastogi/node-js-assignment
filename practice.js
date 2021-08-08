// const express = require("express");

// const app = express();
// const dummydata = [
//     {
//         _id: "1",
//         name:"batman",
//     },
//     {
//         _id: "2",
//         name: "xmen",
//     },
// ]
// app.use(express.json());

// app.get("/:msg/getting/:car",function(request,response){
//     console.log("params",request.params);
//     response.send("Hello world");
// });

// app.get("/get/friend",function(request,response){
//     console.log("query",request.query);
//     response.send(request.query);
// });
// app.get("/get/friends",function(request,response){
//     response.send(dummydata);
// });

// app.post("/add/friend",(request,response)=>{
//     console.log("body",request.body);
    
// });


// app.listen(8080,function(){
//     console.log("server is up on 8080");
// });

// function first(){
//     setTimeout(
//         function test(){
//             console.log("hello")
//         },3000
//     );
// }
// function second(){
//     console.log("second")
// }
// first();
// second();