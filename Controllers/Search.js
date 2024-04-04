const { Op } = require('sequelize')
//const router = require('../routes/companyRoutes');
const Company = require('../models/Company');
const express = require('express');
const router = express.Router();


router.post('/', async(req,res)=>{
    const{query} = req.body;
    try {
        if(!query){
            return res.status(400).json({message:'Query parameter Required'})
        }

        const filter = {
            where:{
                [Op.or]:[
                    {companyName:{[Op.iLike]:`%${query}%` }},
                    {contactName:{[Op.iLike]:`%${query}%` }},
                    {email:{[Op.iLike]:`%${query}%` }},
                ]
            }
        };
        const searchData = await Company.findAll(filter);
        //console.log(searchData);
        console.log(searchData.length);
        if(searchData.length!=0){
            console.log("hello");
            return res.status(200).json({searchData})
        }
    } catch (error) {
        console.error('Error Fetching Companies:',error);
        res.status(500).json({error:'Internal Server Error'})
    }
})

module.exports = router;
