const userverify =(req, res,next)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    if(username !== "aditya0178" || password !== 'adi123'){
        res.status(401).send();
    }else{
    next();
    }
}

module.exports = {userverify}