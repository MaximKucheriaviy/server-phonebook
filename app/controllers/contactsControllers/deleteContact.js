const {Contact} = require('../../models');

const deleteContact = async (req, res, next) => {
    try {
        const params = req.params;
        const result = await Contact.findByIdAndRemove(params.id);
        if(!result){
            const err = new Error;
            err.message = 'There is no such user collection';
            err.status = 404;
            throw err;
        }
        res.json({
            message: 'The contact was successfully deleted.'
        })
    } catch (error) {
        error.status = 404;
        error.message = 'There is no such user collection';
        next(error);
    }
}

module.exports = deleteContact;