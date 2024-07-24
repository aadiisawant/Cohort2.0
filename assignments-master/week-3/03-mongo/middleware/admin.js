const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    let username = req.headers.username;
    let password = req.headers.password;
    let adminCheck = Admin.find({username : username, password: password});
    if(!adminCheck){
        res.status(404).send();
    }else{
    next();
    }
}

module.exports = adminMiddleware;