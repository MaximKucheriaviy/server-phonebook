const morganSetup = (token, req, res) => {
    return[
        token.status(req, res),
        token.method(req,res),
        token.urd(req,res)
    ]
}