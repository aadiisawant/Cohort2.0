const { User } = require("../db");

function userMiddleware(req, res, next) {
    let username = req.headers.username;
    let password = req.headers.password;
    let userCheck = User.find({username : username, password: password});
    if(!userCheck){
        res.status(404).json({
            message: "User not found."
        });
    }else{
    next();
    }
}

module.exports = userMiddleware;