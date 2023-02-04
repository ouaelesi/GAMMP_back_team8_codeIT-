const { default: mongoose } = require('mongoose');
const User = require('../models/User') ;


module.exports.getUser = async (req, res) =>{
    try{
        const user = await User.findById(mongoose.Types.ObjectId(req.params.id));
        if(user){
            res.status(200).send(user);
        }else{
            res.status(404).send("Not found");
        }
        console.log(`LOGS: Getting user with id = ${req.params.id}`);
    }catch(err){
        console.log("Getting the user with id failed" + err);
        res.status(500).send("Error");
    }
}

module.exports.insertUser = async (req, res) =>{
    try{
        const user = await User.create(req.body);
        console.log("LOGS: Adding user");
        res.status(200).send({message:"SUCCESS: Creation succeeded", user:user});
    }catch(err){
        console.log("creation failed " + err.message);
        res.status(500).send("Error");
    }

}

module.exports.updateUser = async (req, res) =>{
    try{
        const user=await User.findById(req.params.id);
        if(user){
                await User.updateOne({_id:req.params.id}, req.body);
                console.log(`LOGS: update succeded of user with id= ${req.params.id}`);
                res.status(200).send("SUCCESS: update successded for the user");
            }else{
            res.status(404).send("User not found");
        }
    }catch(err){
        console.log("Updating failed\n" + err);
        res.status(500).send("Updating failed");
    }
}

module.exports.deleteUser = async (req, res) =>{
    try{
        const user=await User.findById(req.params.id);
        if(user){
            await User.deleteOne({_id:req.params.id});
            console.log(`LOGS: suppression succeded of user with id= ${req.params.id}`);
            res.status(200).send("SUCCESS: suppression succeded of user");
        }else{
            res.status(401).send("User not found");
        }
    }catch(err){
        console.log("suppression failed\n" + err);
        res.status(500).send("Error");
    }

}

module.exports.banUser = async (req, res) =>{
    try{
        const user=await User.findById(req.params.id);
        if(user){
                // await User.updateOne({_id:req.params.id}, req.body);
                await User.updateOne({_id:req.params.id}, {isBanned:true});
                console.log(`LOGS: ban succeded of user with id= ${req.params.id}`);
                res.status(200).send("SUCCESS: ban successded for the user");
            }else{
            res.status(404).send("User not found");
        }
    }catch(err){
        console.log("Ban failed\n" + err);
        res.status(500).send("Ban failed");
    }

}

module.exports.unbanUser = async (req, res) =>{
    try{
        const user=await User.findById(req.params.id);
        if(user){
                // await User.updateOne({_id:req.params.id}, req.body);
                await User.updateOne({_id:req.params.id}, {isBanned:false});
                console.log(`LOGS: unban succeded of user with id= ${req.params.id}`);
                res.status(200).send("SUCCESS: unban successded for the user");
            }else{
            res.status(404).send("User not found");
        }
    }catch(err){
        console.log("Unban failed\n" + err);
        res.status(500).send("Unban failed");
    }

}

//simple user to admin
module.exports.promoteUser = async (req, res) =>{
    try{
        const user=await User.findById(req.params.id);
        if(user){
                // await User.updateOne({_id:req.params.id}, req.body);
                await User.updateOne({_id:req.params.id}, {isAdmin:true});
                console.log(`LOGS: update to admin succeded of user with id= ${req.params.id}`);
                res.status(200).send("SUCCESS: update to admin successded for the user");
            }else{
            res.status(404).send("User not found");
        }
    }catch(err){
        console.log("Updating to admin failed\n" + err);
        res.status(500).send("Updating to admin failed");
    }

}

//admin to simple user
module.exports.demoteUser = async (req, res) =>{
    try{
        const user=await User.findById(req.params.id);
        if(user){
                // await User.updateOne({_id:req.params.id}, req.body);
                await User.updateOne({_id:req.params.id}, {isAdmin:false});
                console.log(`LOGS: update to simple user succeded of user with id= ${req.params.id}`);
                res.status(200).send("SUCCESS: update to simple user successded for the user");
            }else{
            res.status(404).send("User not found");
        }
    }catch(err){
        console.log("Updating to simple user failed\n" + err);
        res.status(500).send("Updating to simple user failed");
    }

}