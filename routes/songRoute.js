const express=require("express");
const {createSong,getSongsByArtist}=require("../controllers/songController");

const router=express.Router();

router.get('/:id',getSongsByArtist);

router.post("/",createSong);

module.exports=router;