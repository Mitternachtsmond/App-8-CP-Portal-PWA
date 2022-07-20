const mongoose=require("mongoose");

const schema=new mongoose.schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name : {
        type:String,
        required:true,
    },
    age :{
        type:Number,
        required:true,
    },
    institute : {
        type:String,
        required:true,
    },
    password : {
        type:String,
        required:true,
    },
    confirmPassword: {
        type:String,
        required:true,
    }
});   

const Register=new mongoose.model("Register",schema );
module.exports = Register;