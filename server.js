require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');

const notificationsRoutes = require('./app/routes/notificationsRoutes');
const activitiesRoutes = require('./app/routes/activityRoutes');
const adminRoutes = require('./app/routes/adminRoutes');
const userRoutes = require('./app/routes/userRoutes');
const rankRoutes = require('./app/routes/rankRoutes');
const {checkUser} = require('./app/middleware/userMiddleware');

app.use(express.json());
app.use(cookieParser());

const dbURI = 'mongodb+srv://admin:admin@cluster0.ltqof.mongodb.net/NodeJS?retryWrites=true&w=majority';


app.get("/", (req, res) => {
  res.json({ message: "Welcome to GDG application." });
});
// mongoose.set({strictQuery: true});
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) =>{
    console.log('DataBase connected...');
    app.listen(process.env.PORT, (err)=> console.log(`Server listening on PORT ${process.env.PORT}...`));
  })
  .catch((err) => console.log(err));
  

app.use('/*', checkUser);
app.use(notificationsRoutes);
app.use(activitiesRoutes);
app.use(userRoutes);
app.use(adminRoutes);
app.use(rankRoutes);

/*
  1- Bind schemas together using refs 
  2- Add a verification of "isBanned" when logging in ==> done
  3- change the isBanned property in the schema ==> done 
  4- in admin routes, change checkUser to requireAuth, change checkAdmin to requireAdmin ==> done
  5- decide where to put each middleware in the routes ==> done
  6- Final decision about whether or not to integrate the Rank in the user schema (keep ranks seperate)
  7- Create a route "add points" and "remove points", and to make internal
    calls check this: https://stackoverflow.com/questions/38946943/calling-express-route-internally-from-inside-nodejs

  
  */