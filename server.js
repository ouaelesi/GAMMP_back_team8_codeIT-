const express = require("express");
const ConnectDB = require("./DB/db_init.js");
const app = express();
const PORT = 8080;
ConnectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});  




