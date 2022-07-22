const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://root:chaman@cp-pwa.md6ot6x.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connection succesful");
}).catch((err)=>
{
    console.log(err);
});
//mongodb+srv://root:chaman@cp-pwa.md6ot6x.mongodb.net/?retryWrites=true&w=majority
//mongodb://localhost:27017/CPPortalRegistration
//mongodb+srv://CPPortal:IITISoC@cluster0.vxq29sp.mongodb.net/?retryWrites=true&w=majority