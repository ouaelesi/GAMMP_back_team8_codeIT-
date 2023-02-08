const { default: mongoose } = require('mongoose');
const User = require('../models/User') ;
const { use } = require('../routes/notificationRoutes');




module.exports.verifyInactiveMembers = async (req, res) =>{
    try{
        const users = await User.find();
        let i = 0;
        while (users[i]) {
            let actualDate = new Date();
            let lastEventDate = new Date(users[i].lastContributionDate);
            var diff = Math.abs(actualDate.getTime() - lastEventDate.getTime());
            var days = Math.floor(diff / (3600000*24));
                if(days > 30 ){
                    //send notification
                    console.log(`inactive member`);
                }
            i++;
        }
            console.log(`parcour finie`);
            res.status(404).send("User not found");
            
    }catch(err){
        console.log(`parcour failed\n${err}`);
    // res.status(500).send("parcour failed failed");
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

