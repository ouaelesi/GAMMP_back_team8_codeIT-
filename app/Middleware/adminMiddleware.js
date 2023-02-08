module.exports.requireAdmin = function (req, res, next){
    //this middleware expects the "user middleware" to be already executed
    
    if(!res.locals.user.isAdmin){
        // res.status(403).json({message: "Admin permission required"});
        res.status(303).redirect('/user/login');
    }else{
        next();
    }
}

module.exports.requireManager = (req, res, next) => {
  if(res.locals.user.role === 'manager'){
    next();
  }else{
    res.status(303).redirect('/user/login');
  }
};