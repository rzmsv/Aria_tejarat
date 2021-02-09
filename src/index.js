const express = require("express");
const http = require("http");
const path = require("path")
const bodyParser = require("body-parser")
const dotnev = require("dotenv").config();
const pug = require("pug")
const homePage = require("../routes/home")
const app = express();
const server = http.createServer(app);

// SET
app.set("view engine","pug")
app.set("../views","views")

// middlewares
app.use(express.static(path.join(__dirname,"../public")));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));


// routes
app.use(homePage)



const port = process.env.PORT || 3000
server.listen(port,()=>{
    console.log(`Connect to port ${port}`)
})