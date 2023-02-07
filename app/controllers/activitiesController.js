const { default: mongoose } = require('mongoose');
const Activity = require('../models/Activity') ;


module.exports.get = async (req, res) =>{
    try{
        const activity = await Activity.findById(req.params.id);

        if(activity){
            res.status(200).json(activity);
        }else{
            res.status(404).json("Not found");
        }

    }catch(err){
        res.status(500).json({message: err.message});
    }
}

module.exports.post = async (req, res) =>{
    try{
        const activity = await Activity.create(req.body);
        console.log("LOGS: Adding activity");
        res.status(200).send({message:"SUCCESS: Creation succeeded", activity:activity});
    }catch(err){
        console.log("creation failed " + err.message);
        res.status(500).send("Error");
    }

}

module.exports.put = async (req, res) =>{
    try{
        const activity=await Activity.findById(req.params.id);
        if(activity){
                await Activity.updateOne({_id:req.params.id}, req.body);
                console.log(`LOGS: update succeded of activty with id= ${req.params.id}`);
                res.status(200).send("SUCCESS: update successded for the activity");
            }else{
            res.status(404).send("Activity not found");
        }
    }catch(err){
        console.log("Updating failed\n" + err);
        res.status(500).send("Updating failed");
    }
}

module.exports.delete = async (req, res) =>{
    try{
        const activity=await Activity.findById(req.params.id);
        if(activity){
            await Activity.deleteOne({_id:req.params.id});
            console.log(`LOGS: suppression succeded of activity with id= ${req.params.id}`);
            res.status(200).send("SUCCESS: suppression succeded of activity");
        }else{
            res.status(401).send("Activity not found");
        }
    }catch(err){
        console.log("suppression failed\n" + err);
        res.status(500).send("Error");
    }

}
