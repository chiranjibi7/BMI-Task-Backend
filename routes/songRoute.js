const express=require("express");
const {createSong,getSongsByArtist,deleteSongsByArtist}=require("../controllers/songController");

const router=express.Router();

router.get('/:id',getSongsByArtist);

router.post("/",createSong);

router.delete('/:id',deleteSongsByArtist);

module.exports=router;