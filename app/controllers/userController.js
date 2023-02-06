const User = require("../models/User");

module.exports.updateProfile = async (req, res)=>{
    try {
        _id = req.params.id;
        
        const user = await User.findOneAndUpdate(_id, req.body, {new: true});

        if(user){
            console.log("User updated successfully: ", user);
            res.status(200).json(user);

        }else{
            res.status(400).json({message: 'User not found'})
        }

    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id, user.isAdmin);
        res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24});
        res.status(200).json({ id: user._id, isAdmin: user.isAdmin });
    } 
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
  
}

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}
