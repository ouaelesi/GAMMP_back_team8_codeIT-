const Activity = require('../models/Activity') ;

module.exports.get = async (req, res) =>{
    const _id = req.params.id;
    try{
        const activity = await Activity.findById({_id})
        .populate('mainManager managers teamLeaders organizers')

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
        res.status(200).send(activity);
    }catch(err){
        console.log("creation failed ");
        res.status(500).json({message: err.message});
    }

}

module.exports.put = async (req, res) =>{
    const _id = req.params.id;
    try{
        const activity=await Activity.findOneAndUpdate({_id}, req.body);
        
        if(activity){
                
            res.status(200).json(activity);
        }else{
            res.status(404).json({message: "Activity not found"});
        }

    }catch(err){
        console.log("Activity update succeed");
        res.status(500).json({message: err.message});
    }
}

module.exports.delete = async (req, res) =>{
    try{
        const activity=await Activity.findOneAndDelete({_id}, req.body);
        if(activity){
            res.status(200).json(activity);
        }else{
            res.status(401).send({message: "Activity not found"});
        }
    }catch(err){
        console.log("suppression failed");
        res.status(500).json({message: err.message});
    }

}
