const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const app=express();

app.use(cors());
app.use(express.json());

async function main(){
    await mongoose.connect("mongodb+srv://Chiranjibi:Chiranjibi1234@bmiapi.jwmwkcx.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("MongoDB connection successfull!");
        app.listen(3001,()=>{
            console.log("Server running on port 3001");
        })
    }).catch(err=>console.log(err));
};

main();

