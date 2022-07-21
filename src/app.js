const express=require("express");
const path=require("path");
const hbs=require("hbs");
require("./db/conn");
require("./models/registers");
let port= process.env.PORT || 8000;

const app=express();
const staticPath=path.join(__dirname,"../public");
const partialPath=path.join(__dirname,"../templates/partials");
const viewPath=path.join(__dirname,"../templates/views");
app.use(express.static(staticPath));
app.set("view engine","hbs");
hbs.registerPartials(partialPath);
app.set("views",viewPath);

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
    const useruserName = await database.findOne({userName:userName}); //need to resolve database,userName & password field to match that of database
    if (useruserName.passWord === passWord){
        res.status(201)/render("index")
    }
} catch (error) 
{
    res.status(400).send("invalid") 
}
});

