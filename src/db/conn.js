const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/CPPortalRegistration").then(()=>{
    console.log("connection succesful");
}).catch((err)=>
{
    console.log(err);
});

//mongodb://localhost:27017