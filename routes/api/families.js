const express = require('express');
const router  = express.Router();
var nodemailer = require('nodemailer');



function sendEmail(){
    
    return new Promise((resolve,reject)=>{
       let transporter = nodemailer.createTransport({
           host: 'smtp.ethereal.email',
           port: 587,
           auth: {
               user: 'oevq6lqoj25xdwzb@ethereal.email',
               pass: 'nAGHMggf5P3ZG1Vqk4'
           },
           tls:{
               rejectUnauthorized:false
           }
       });
       
       let message = {
           from: '<oevq6lqoj25xdwzb@ethereal.email>',
           to: '<pedramrad1368@gmail.com>',
           subject: 'Nodemailer is unicode friendly ✔',
           text: 'Hello to myself!',
           html: '<p><b>Hello</b> to myself!</p>'
       };
       
       transporter.sendMail(message, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          resolve('sent')
        }
      });
   
   }) 
}

router.get('/sendmail',(req,res)=>{
    sendEmail()
        .then((msg)=>res.send(msg))
        .catch(err=>console.log(err))
    
});

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




    
        
  



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
        admin       : req.body.admin,
        members     : req.body.members.map(member =>(
            {
                name         : member.name,
                email        : member.email,
                personalCode : member.personalCode
            } 
        ))    
    })
    newFamily.save()
        .then(family=>res.json(family))
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