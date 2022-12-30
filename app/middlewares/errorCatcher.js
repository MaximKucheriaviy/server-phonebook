const errorCatcher = async (err, req, res, next) => {
    if(!err.status){
        return res.status(500).json({
            message: "Server error"
        })
    }
    res.status(err.status).json({
        message: err.message
    })
}



module.exports = errorCatcher;