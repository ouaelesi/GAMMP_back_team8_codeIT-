const express = require("express");
const ConnectDB = require("./DB/db_init.js");
const rankingRoutes = require("./app/routes/rankingRoutes.js");
const app = express();
const PORT = 8080;
app.use('/api/ranking', rankingRoutes);
ConnectDB();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});  




