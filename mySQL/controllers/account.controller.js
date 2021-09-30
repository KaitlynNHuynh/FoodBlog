account = require("../models/account.model.js")

exports.signUp = (req, res) => {
    if(!req.body){
        res.status(400).send({message: 'Please enter an email and password'});
        return 
    }
    
    let password = req.body.password;
    let email    = req.body.email;
    account.signUp(password, email);
    
} 