const { number } = require('joi');
const { Contact } = require('../../models');

const getAll = async (req, res, next) => {
    try{
        const contact = await Contact.find({
            owner: req._id,
        })
        for(let i = 0; i < contact.length; i++){
            contact[i].www = contact[i]._id
        }
        const response = [];
        contact.forEach(item => {
            response.push({
                id: item._id,
                name: item.name,
                number: item.number
            })
        })
        res.json(response);
    }
    catch(err){
        next(err);
    }
}

module.exports = getAll;