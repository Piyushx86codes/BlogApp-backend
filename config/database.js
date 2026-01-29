const mongoose = require("mongoose");

require("dotenv").config();

const Dbconnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DataBase Connectivity Successfull");
    } catch (error) {
        console.log("Failed to connect to Database");
        console.error("Error:", error.message);
        process.exit(1);
    }
}

module.exports= Dbconnect;