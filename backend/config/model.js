const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const ContactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  subject:{
    type:String,
    required: true,
  },
  msg: {
    type: String,
    required: true,
  }
});

const ContactInfo = model('ContactInfo',ContactSchema);
module.exports = ContactInfo;





