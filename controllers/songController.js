const Song=require("../models/songModel");

const createSong=async(req,res)=>{
    try {
        const artist=await Song.create(req.body);
        res.status(200).json(artist);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const getSongsByArtist=async(req,res)=>{
    try {
        const {id}=req.params;
        const songs=await Song.find({artist:id});
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const deleteSongsByArtist=async(req,res)=>{
    try {
        const {id}=req.params;
        const songs=await Song.deleteMany({artist:id});
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};
module.exports={createSong,getSongsByArtist,deleteSongsByArtist}