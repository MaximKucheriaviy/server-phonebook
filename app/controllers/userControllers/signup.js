const { User } = require('../../models');
const bcrypt = require('bcrypt');

const signup = async(req, res, next) => {
    const {name, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    try{
        const result = await User.create({
            name,
            email,
            password: hashedPassword
        })
        if(!result){
            return res.status(400).json({
                message: "User creatrion error"
            })
        }
        res.status(201).json({
            message: "User created"
        })
    }
    catch(err){
        err.status = 500;
        next(err);
    }
    if(!result){

    }
}

module.exports = signup;