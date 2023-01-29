const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

const notificationsRoutes = require('./app/routes/notificationsRoutes');

app.use(express.json());

const dbURI = 'mongodb+srv://admin:admin@cluster0.ltqof.mongodb.net/NodeJS?retryWrites=true&w=majority';

// mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) =>{
    console.log('DataBase connected...');
    app.listen(PORT, (err)=> console.log(`Server listening on PORT ${PORT}...`));
  })
  .catch((err) => console.log(err));
  

app.use(notificationsRoutes);
