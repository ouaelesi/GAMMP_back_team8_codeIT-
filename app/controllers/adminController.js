const { default: mongoose } = require('mongoose');
const User = require('../models/User') ;


module.exports.getUser = async (req, res) =>{
    _id = req.params.id;
    try{
        const user = await User.findById(_id);

        if(user){
            res.status(200).send(user);
        
        }else{
            res.status(404).json({message: "User not found"});
        }
        
    }catch(err){
        console.log("fetch failed");
        res.status(500).json({message: err.message});
    }
}

module.exports.insertUser = async (req, res) =>{
    try{
        const user = await User.create(req.body);
        res.status(200).json(user);

    }catch(err){

        console.log("Creation failed");
        res.status(500).json({message: err.message});
    }

}

module.exports.updateUser = async (req, res) =>{
    _id = req.params.id;
    try{
        const user=await User.findOneAndUpdate({_id}, req.body, {new: true});
        if(user){    
            res.status(200).json(user);

        }else{
            res.status(404).json({message: "User not found"});
        }

    }catch(err){
        console.log("User update failed");
        res.status(500).json({message: err.message});
    }
}

module.exports.deleteUser = async (req, res) =>{
    _id = req.params.id;
    try{
        const user=await User.findOneAndDelete({_id});
        if(user){
            res.status(200).json(user);

        }else{
            res.status(401).json({message: "User not found"});
        }

    }catch(err){
        console.log("Delete failed");
        res.status(500).json({message: err.message});
    }

}

module.exports.banUser = async (req, res) =>{
    _id = req.params.id;
    try{
        const user=await User.findOneAndUpdate({_id}, {isBanned: true}, {new: true});
        if(user){
            res.status(200).json(user);

        }else{
            res.status(401).json({message: "User not found"});
        }

    }catch(err){
        console.log("bane failed");
        res.status(500).json({message: err.message});
    }

}

module.exports.unbanUser = async (req, res) =>{
    _id = req.params.id;
    try{
        const user=await User.findOneAndUpdate({_id}, {isBanned: false}, {new: true});
        if(user){
            res.status(200).json(user);

        }else{
            res.status(401).json({message: "User not found"});
        }
    }catch(err){
        console.log("Unban failed");
        res.status(500).json({message: err.message});
    }

}

//simple user to admin
module.exports.promoteUser = async (req, res) =>{
    _id = req.params.id;
    try{
        const user=await User.findOneAndUpdate({_id}, {isAdmin: true}, {new: true});
        if(user){
            res.status(200).json(user);

        }else{
            res.status(401).json({message: "User not found"});
        }
    }catch(err){
        console.log("Promotion to admin failed");
        res.status(500).json({message: err.message});
    }

}

//admin to simple user
module.exports.demoteUser = async (req, res) =>{
    _id = req.params.id;
    try{
        const user=await User.findOneAndUpdate({_id}, {isAdmin: false}, {new: true});
        if(user){
            res.status(200).json(user);

        }else{
            res.status(401).json({message: "User not found"});
        }
    }catch(err){
        console.log("Demotion to normale member failed\n");
        res.status(500).json({message: err.message});
    }

}