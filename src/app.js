const express=require("express");
const path=require("path");
const hbs=require("hbs");
require("./db/conn");
const Register=require("./models/registers");
let port= process.env.PORT || 8000;

const app=express();
const staticPath=path.join(__dirname,"../public");
const partialPath=path.join(__dirname,"../templates/partials");
const viewPath=path.join(__dirname,"../templates/views");
app.use(express.static(staticPath));
app.set("view engine","hbs");
hbs.registerPartials(partialPath);
app.set("views",viewPath);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/signup",async (req,res)=>
{
    try {
        const entry=await new Register({
            username:req.body.uniqueName,
            name:req.body.studentName,
            age:req.body.userAge,
            institute:req.body.instituteName,
            password:req.body.securePassword,
            confirmPassword:req.body.confirmPassword
        })
        try{
        const savedEntry=await entry.save()
        console.log(savedEntry);
        res.render('login.hbs');
        }
        catch(error){
            res.send(`<h1> the following error occured </h1> ${error}`);
        }
    } catch (err) {
        res.send(err+"error found");
    }
})



app.get("/",(req,res)=>
{
    res.render("index.hbs");
});
app.get("/profile",(req,res)=>
{
    res.render("profile.hbs");
});

app.get("/randomProblems",(req,res)=>
{
    res.render("randomProblems.hbs");
});
app.get("/login",(req,res)=>
{
    res.render("login.hbs");
});
app.get("/signup",(req,res)=>
{
    res.render("signup.hbs");
});
app.listen(port);

//Dhairya's Changes

app.post("/login",async(req,res)=>
{
try {
    const userName = req.body.userName;
    const passWord = req.body.passWord;
    console.log(userName);
    console.log(passWord);
    const count = await Register.findOne({username:userName}).count();
    console.log(count);
    if(count==0)
    {
        res.send("<h1> No user found kindly register </h1>");
    }
    else{
    const useruserName = await Register.findOne({username:userName});
    console.log(useruserName);
        if (useruserName.password == passWord){
            res.status(201).render("index")
        }
        else{
            res.send("<h1> wrong Credentials </h1>");
        }
    }
}catch (error) 
{
    res.status(400).send(error);
}
});

