const { User } = require('../../models');
const bcrypt = require('bcrypt');

const signup = async(req, res, next) => {
    const {name, email, password} = req.body;
    try{
        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const result = await User.create({
            name,
            email,
            password: hashedPassword
        })
        console.log("there");
        if(!result){
            const err = new Error;
            err.status = 400;
            err.message = "User creation error";
            throw(err);
        }
        res.status(201).json({
            message: "User created"
        })
    }
    catch(err){
        err.status = 400;
        err.message = "User creation error";
        next(err);
    }
}

module.exports = signup;