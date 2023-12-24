const mongoose=require("mongoose");
const {Schema}=mongoose;

const songModel= new Schema(
    {
       title:{
        type:String,
        required:true
       } ,
       artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Artist',
        required:true
       },
       lyrics:{
        type:String,
        required:true
       },
       details:{
        composer:String,
        producer:String,
        productionDate:Date,
        awards:Array
       }
    },
    {
        timestamps:true
    }
);

const Song=mongoose.model("Song",songModel);
module.exports=Song;