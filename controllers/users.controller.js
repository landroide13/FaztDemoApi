const User = require('../models/user');


exports.createUser = async(req, res) =>{
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    const conf = await newUser.save();
    res.status(200).json(conf);
}




