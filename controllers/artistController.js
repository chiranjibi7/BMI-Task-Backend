const Artist=require("../models/artistModel");
const Song=require("../models/songModel");

const getArtists=async(req,res)=>{
    try {
        const artists=await Artist.find({});
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const createArtist=async(req,res)=>{
    try {
        const artist=await Artist.create(req.body);
        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const deleteArtist=async(req,res)=>{
    try {
        const {id}=req.params;
        const artist=await Artist.findById(id);
        if(!artist){
           return res.status(404).json({message:`Cannot find any artist with id ${id}`});
        }
        await Song.deleteMany({artist:id});
       const deletedArtist= await Artist.deleteOne({_id:artist._id});
        res.status(200).json({message:`${artist.name} along with all songs deleted successfully!`,...deletedArtist});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

module.exports={getArtists,createArtist,deleteArtist}