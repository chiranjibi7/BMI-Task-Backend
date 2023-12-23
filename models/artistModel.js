import mongoose from "mongoose";
const {Schema}=mongoose;

const artistSchema=new Schema(
    {
    name:{
        type:String,
        required:[true,"Please enter name!"]
    },
    nationality:{
        type:String,
        required:[true,"Please enter nationality!"]
    },
    age:{
        type:Number,
        required:[true,"Please enter age"]
    }
    },
    {
        timestamps:true
    }

);

const Artist=mongoose.model('Artist',artistSchema);
module.exports=Artist;