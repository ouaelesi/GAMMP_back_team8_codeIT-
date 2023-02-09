const User = require('../models/User') ;
const Notification = require('../models/Notification');

module.exports.verifyInactiveMembers = async (req, res) =>{
    try{
        const admins = await User.find({isAdmin: true});
        const users= await User.find();

        for(const user of users){

            if(user.isActive == false){
                continue;
            }
            else{
                let inactiveMemberInfos= "";
                let actualDate = new Date();
                let lastEventDate = new Date(user.lastContributionDate);
                var diff = Math.abs(actualDate.getTime() - lastEventDate.getTime());
                var days = Math.floor(diff / (3600000*24));

                if(diff > 30 ){

                    user.isActive= false;
                    inactiveMemberInfos= `${user._id} ${user.firstName} ${user.lastName} ${user.discordID}`;

                    // send a notification to all admins
                    for(const admin of admins){

                        //create the notification document
                        const notification = await Notification.create({
                            receiver: '63e5328ac9fbe5d56e17d6e2',
                            content: inactiveMemberInfos,
                            isRead: false,
                        })
    
                        // update admin's notifs array
                        
                        admin.notifications.push(notification._id);
                        await admin.save();
                    }

                    //update the user document
                    await user.save();
                    
                }
            }
        }

    }catch(err){
        console.log(`parcour failed\n${err}`);
    }
}

module.exports.notificationAdmin_create = async (req,res)=>{
	try {
        const users= await User.find();
        const admins= [];
        users.forEach(user => {
            if(user.isAdmin){
                admins.push(user);
            }
        });
        admins.forEach(async (admin) => {
            const receiver_id = admin._id;
            console.log(typeof(req.body), req.body);
            const notification = await Notification.create({content: "This member is inactive" + inactiveMemberInfos, isRead:false, receiver: receiver_id});
            console.log(notification);

            res.status(201).json({
                message: "Notification created!",
                id: notification._id,
                body: notification.content,
                to: notification.receiver,
              });
        });

    } catch (error) {
        res.status(400).json({message: error.message});
    }

}




// module.exports.getUserspec = async (req, res) =>{
//     try{
//         const user = await User.findById({_id:mongoose.Types.ObjectId('63e2b71d1e09b4681efcdfbc')});
//         if(user){
//             //res.status(200).send(user);
//         }else{
//             // res.status(404).send("Not found");
//         }
//         // console.log(`LOGS: Getting user with id = ${req.params.id}`);
//         console.log(`LOGS: Getting user with id`);
//     }catch(err){
//         console.log("Getting the user with id failed" + err);
//         // res.status(500).send("Error");
//     }
// }

// module.exports.insertUserspec = async (req, res) =>{
//     try{
//         const user = await User.create({
//             "firstName": "ayoub",
//             "lastName":"kasmi",
//             "discordID": "id",
//             "phoneNumber":"0557648125",
//             "yearOfStudy":"2",
//             "country":"algeria",
//             "email":"ayoubb@esi.dz",
//             "password":"passwoord",
//             "isAdmin":false,
//             "isBanned":false,
//             "role":"member",
//             "status":"pending",
//             "department":"none"
//         });
//         console.log("LOGS: Adding user");
//         // res.status(200).send({message:"SUCCESS: Creation succeeded", user:user});
//     }catch(err){
//         console.log("creation failed " + err.message);
//         // res.status(500).send("Error");
//     }

// }

