require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
// const db = require('./config/db'); 
const ContactInfo = require('./config/model');
const cors = require('cors');
const { default: mongoose } = require('mongoose');


// connect mongodb

const URI = process.env.DATABASE;
// console.log(URI);

mongoose.connect(URI).then(()=>{
  console.log('MongoDB connected');
}).catch((err)=>{
  console.log(err);
})





app.use(express.json());
app.use(cors());


app.post('/contactform', async (req,res)=>{
  try{

    console.log(req.body);
    const {email,subject,msg} = req.body;
    
    const contactInfo = new ContactInfo({
      email:email,
      subject:subject,
      msg:msg,
    });

    const checkEmail = await ContactInfo.findOne({email});
    if(checkEmail === email){
      res.status(400).json({check:true});
    }

    await contactInfo.save();

    // console.log('Data sent successfully');
    res.status(201).json({message:'Data sent successfully',success:true});
    
    
    
  }catch(err){
    // console.log('Data not sent');
    res.status(401).json({err:'Data not sent'});
  }

})

// db();
app.listen(PORT,()=>{
  console.log(`Sever is connected at port: ${PORT}`);
})