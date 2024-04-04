const express = require('express');
const router = express.Router();
const Company = require('../models/Company');

export const post = async(req,res)=>{
    try {
        const page = parseInt(req.query.page) || 1;
        const perPage = 3;
        const totalPost = await Post.countDocuments();
        const totalPages = Math.ceil(totalPost/perPage);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'})
    }
}