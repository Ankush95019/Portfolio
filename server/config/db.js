require('dotenv').config();
const mongoose = require('mongoose');
// const {connect} = mongoose;
// const URI = process.env.DATABASE;

// const dbConnect = async () => {
//   try{
//     // await connect(`${URI}`);
//     await connect('mongodb://127.0.0.1:27017/Portfolio');
//     console.log('Database is connected');
//   }
//   catch(err){
//     console.log(err);
//   }
// };

// module.exports = dbConnect;

// connect mongodb

const URI = process.env.DATABASE;
// console.log(URI);

mongoose.connect(`${URI}`,{
  // useUnifiedTopology:true,
  // useNewUrlParser:true
}).then(()=>{
  console.log('MongoDB connected');
}).catch((err)=>{
  console.log(err);
})



