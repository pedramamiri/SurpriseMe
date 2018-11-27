const express = require('express');
const router  = express.Router();

//user model 
const Family = require('../../models/Family');

// @route    GET api/families
// @desc     Get all families
// @access   Public
router.get('/',(req,res)=>{
    Family.find()
        .sort({familyname: 1})
        .then(families=>res.json(families))
});

// @route    POST api/families
// @desc     Add a new family
// @access   Public
router.post('/',(req,res)=>{
    const newFamily = new Family({
        familyName  : req.body.familyName,
        familyCode  : req.body.familyCode,
        admin       : req.body.admin
    })
    newFamily.save()
        .then((family)=> res.json(family))
        .catch((err)=> console.log(err))
});

// @route    DELETE api/families
// @desc     Delete a family
// @access   Public
router.delete('/:id',(req,res)=>{
    Family.findById(req.params.id)
        .then((family)=> Family.remove(family).then(()=>res.json({success:true})))
        .catch(err=>res.status(404).json({success:false}))          
});


module.exports = router