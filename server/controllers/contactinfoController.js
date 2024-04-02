const ContactInfo = require('../config/model');



exports.contactform = async (req,res) => {
  console.log(req.body);

  try{
    const {email,subject,msg} = req.body;

    const contactInfo = new ContactInfo({
      email:email,
      subject:subject,
      msg:msg,
    });

    await contactInfo.save();

    // console.log('Data sent successfully');
    res.status(200).json({message:'Data sent successfully',contactInfo});
    
    
    
  }catch(err){
    // console.log('Data not sent');
    res.status(401).json({err:'Data not sent'});
  }
}