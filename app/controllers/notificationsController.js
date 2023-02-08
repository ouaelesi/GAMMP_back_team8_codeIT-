const Notification = require('../models/Notification');

module.exports.notification_get = (req,res)=>{
	
	const id = req.params.id;

    Notification.findById(id, (error, notification)=>{
        if(error){
            res.status(400).json({message: error.message});
        } else{
            if(notification){
                res.status(200).json(notification);
            }else{
                res.status(200).json({message: "Notification not found"});
            }
        }
    })
    
}

module.exports.notification_set_read = async (req, res) => {
 
    const id = req.params.id;

    try {
        const notification = await Notification.findOneAndUpdate(id, {isRead: true}, {new: true});
        if(notification === null){
            res.status(400).json({message: "Notification not found in the database!"});
        }else{
            res.status(200).json(notification);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
    }
    // Notification.findOneAndUpdate(id, (error, notification) => {
    //     if(error){
    //         res.status(400).json({message: error.message});
    //     }else{
    //         if(notification){
    //             res.status(200).json({notification})
    //         }else{
    //             res.status(200).json({message: "Notification not found"});
    //         }
    //     }
    // })
    
}

module.exports.notification_create = async (req,res)=>{
    
    // notification Shema: title, body, date, from, receiver, type, isRead

    /* req.body = {
        title, body, from, receiver, type
    }
    */

	try {
        const receiver_id = "abcd"; //receiver id will be extracted from the JWT object
        console.log(typeof(req.body), req.body);
        const notification = await Notification.create({...req.body, isRead: false , receiver: receiver_id});
        console.log(notification);

        res.status(201).json({
            message: "Notification created!",
            id: notification._id,
            title: notification.title,
            body: notification.body,
            date: notification.date,
            from: notification.from,
            to: notification.receiver,
            type: notification.type
          });

    } catch (error) {
        res.status(400).json({message: error.message});
    }

}

module.exports.notification_delete = (req, res)=>{
	const _id = req.params.id;

    Notification.findByIdAndDelete({_id}, (error, notification) => {
        if (error) {
            res.status(400).json({message: error.message});
        } else {
            res.status(200).json(notification)
        }
    })
}
