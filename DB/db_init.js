const mongoose = require('mongoose');
 
const ConnectDB=()=>{
  mongoose.connect("mongodb+srv://aminos:aminos@cluster0.9jltetv.mongodb.net/?retryWrites=true&w=majority")
  .then( result => {
    console.log("db connection established")
  })
  .catch( err => {
    console.log(err);
  }); 

}
module.exports=ConnectDB