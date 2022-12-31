const {Contact } = require('../../models');

const createContact = async (req, res, next) => {
    try{
        const result = await Contact.create({
            name: req.body.name,
            number: req.body.number,
            owner: req._id,
        })
        if(!result){
            throw new Error;
        }
        res.status(201).json({
            name: result.name,
            number: result.number,
            id: result._id
        })
    }
    catch(err){
        err.status = 400;
        err.message = 'Error creating contact.';
        next(err);
    }
}

module.exports = createContact;