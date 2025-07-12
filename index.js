const express = require("express");
const app = express();
// const path = require("path");


let port = 8080;

app.set("views engine", "ejs");
app.use(express.urlencoded({extended : false}))
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("yes");
});

app.get("/about", (req, res) => {
    let users = [
        {Name: "Shubham",Age: "20",City: "Lucknow"},
        {Name: "Ram",Age: "21",City: "Varansi"},
        {Name: "Ramesh",Age: "18",City: "Gorakhpur"},
        {Name: "Mohan",Age: "22",City: "Delhi"},
        {Name: "Suresh",Age: "25",City: "Noida"},
        {Name: "Raj",Age: "19",City: "Mau"}
    ];


    res.render("about.ejs", 
        { title: "Home Page",
         massege: "Welcome",
        items: users
    }); 
});

app.get("/form",(req, res)=>{
res.render("form.ejs",{massege:null});
});

app.post("/submit",(req, res)=>{
const name = req.body.myname
const massege = `Hello ${name} You submitted the form.`;
res.render("form.ejs",{massege:massege});
});

app.listen(port, () => {
    console.log("listen server is runing");
});