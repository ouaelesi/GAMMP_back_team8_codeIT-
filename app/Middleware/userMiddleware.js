const jwt = require('jwt');
const User = require('../models/user');

// check current user
module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
        if (err) {
            res.locals.user = null;
            next();
        } else {
            let user = await User.findById(decodedToken.id);
            res.locals.user = user;
            next();
        }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

//check if user is authenticated to access the page
module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
  
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
        if (err) {
          console.log(err.message);
          res.redirect('/login');
        } else {
          console.log(decodedToken);
          next();
        }
      });
    } else {
      res.redirect('/login');
    }
};