const express=require("express");
const {getArtists, createArtist, deleteArtist}=require("../controllers/artistController");
const router=express.Router();

router.get('/',getArtists);

router.post('/',createArtist);

router.delete('/:id',deleteArtist);

module.exports=router;