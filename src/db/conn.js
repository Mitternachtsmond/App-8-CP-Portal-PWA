const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://root:chaman@cp-pwa.md6ot6x.mongodb.net/?retryWrites=true&w=majority/CPPortalRegistration").then(()=>{
    console.log("connection succesful");
}).catch((err)=>
{
    console.log(err);
});

//mongodb://localhost:27017