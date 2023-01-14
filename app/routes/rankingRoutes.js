const userModel = require("../models/users.js");
const { Router } = require("express");

const router = Router();

router.get('/' ,(req, res) => {
    userModel.find().sort({createdAt: -1})
    .then((result) => {
        result.status(200).send(result);
    })
    .catch((err) => {
        res.status(400).send({
            err: err.message
        })
    })
})

module.exports = router;