// Middleware for handling auth
const jwt = require('jsonwebtoken')
const jwtSecret = "user178"

function userMiddleware(req, res, next) {
    const bToken = req.headers.authorization;
    const jwtToken = bToken.split(" ")[1];
    try{
        const decodedValue = jwt.verify(jwtToken, jwtSecret);
        if(decodedValue.username){
            next();
        }else{
            res.status(403).json({
                message : "Authorization Failed"
            });
        }
    }catch(err){
        res.status(400).json({
            message : err
        });
    }
    
}

module.exports = userMiddleware;