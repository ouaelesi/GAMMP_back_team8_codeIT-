module.exports = function (req, res, next){
    //this middleware expects the "user middleware" to be already executed
    if(!res.locals.user.isAdmin){
        return res.status(403).json({message: "Admin permission required"});
    }else{
        next();
    }
}