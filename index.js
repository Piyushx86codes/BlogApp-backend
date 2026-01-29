const express = require("express");
const app = express();
const Dbconnect = require("./config/database");
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT || 4000;
//database call//
Dbconnect();
//import routes//
const blog = require("./routes/blog");
//mounting the routes//
app.use("/api/v1", blog);

app.listen(PORT,(req,res)=>{
    res.send(`App is active and listening on PORT No ${PORT}`);
})
