const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

const notificationsRoutes = require('./app/routes/notificationsRoutes');
const activitiesRoutes = require('./app/routes/activityRoutes');
const adminRoutes = require('./app/routes/adminRoutes');

app.use(express.json());

const dbURI = 'mongodb+srv://admin:admin@cluster0.ltqof.mongodb.net/NodeJS?retryWrites=true&w=majority';


app.get("/", (req, res) => {
  res.json({ message: "Welcome to GDG application." });
});
// mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) =>{
    console.log('DataBase connected...');
    app.listen(PORT, (err)=> console.log(`Server listening on PORT ${PORT}...`));
  })
  .catch((err) => console.log(err));
  

app.use(notificationsRoutes);
app.use(activitiesRoutes);
app.use(adminRoutes);
