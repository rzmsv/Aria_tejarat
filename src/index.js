const express = require("express");
const http = require("http");
const path = require("path")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotnev = require("dotenv").config();
const pug = require("pug")
const homePage = require("../routes/home")
const aboutPage = require("../routes/about")
const marketingPage = require("../routes/marketing")
const overviewPage = require("../routes/overview")
const storePage = require("../routes/store")
const contactPage = require("../routes/contactUs")
const businessPage = require("../routes/business")
const app = express();
const server = http.createServer(app);
// db
const mongoUrl = "mongodb://localhost:27017/aria"

// SET
app.set("view engine","pug")
app.set("../views","views")

// middlewares
app.use(express.static(path.join(__dirname,"../public")));
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));


// routes
app.use(homePage)
app.use(aboutPage)
app.use(marketingPage)
app.use(overviewPage)
app.use(storePage)
app.use(contactPage)
app.use(businessPage)



const port = process.env.PORT || 3000
app.listen(port,()=>{
     console.log("connect to port "+port+"")
})

// mongoose.connect(mongoUrl,{ useNewUrlParser: true , useUnifiedTopology:true})
// .then((result)=>{

//      // User.findById("600875aa809d4da9d7dd7792").then((user)=>{
//      //      if (!user){
//      //           const user = User.create({
//      //                name:"reza",
//      //                age:31,
//      //                mail:"reza@gmail.com",
//      //                password:"reza",
//      //                cart:{
//      //                     items:[]
//      //                }
//      //           })
//      //      }
//      // })
     
//      app.listen(port,()=>{
//           console.log("connect to port "+port+"")
//      })
// })
// .catch(err => console.log(err))