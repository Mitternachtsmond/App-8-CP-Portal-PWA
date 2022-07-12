const express=require("express");
const path=require("path");
const hbs=require("hbs");
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
    res.render("index");
});
app.get("/profile",(req,res)=>
{
    res.render("profile");
});
app.listen(port);


