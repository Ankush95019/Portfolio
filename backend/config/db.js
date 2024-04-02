const mongoose = require('mongoose');
const {connect} = mongoose;

const dbConnect = async () => {
  try{
    await connect('mongodb://127.0.0.1:27017/Portfolio');
    console.log('Database is connected');
  }
  catch(err){
    console.log(err);
  }
};

module.exports = dbConnect;





