require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

const cookieParser = require('cookie-parser');

const notificationsRoutes = require('./app/routes/notificationsRoutes');
const activitiesRoutes = require('./app/routes/activityRoutes');
const adminRoutes = require('./app/routes/adminRoutes');
const notificationAdminRoutes = require('./app/routes/notificationAdminRoutes');
const userRoutes = require('./app/routes/userRoutes');
const rankRoutes = require('./app/routes/rankRoutes');
const {checkUser} = require('./app/middleware/userMiddleware');

app.use(express.json());
app.use(cookieParser());

const dbURI = 'mongodb+srv://admin:admin@cluster0.ltqof.mongodb.net/NodeJS?retryWrites=true&w=majority';


app.get("/", (req, res) => {
  res.json({ message: "Welcome to GDG application." });
});
mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) =>{
    console.log('DataBase connected...');
    app.listen(process.env.PORT, (err)=> console.log(`Server listening on PORT ${process.env.PORT}...`));
  })
  .catch((err) => console.log(err));

// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
//   .then((result) =>{
//     console.log('DataBase connected...');
//     app.listen(PORT, (err)=> console.log(`Server listening on PORT ${PORT}...`));
//   })
//   .catch((err) => console.log(err));
  
app.use('/*', checkUser);
app.use(notificationsRoutes);
app.use(activitiesRoutes);
app.use(userRoutes);
app.use(adminRoutes);
app.use(notificationAdminRoutes);
app.use(rankRoutes);
