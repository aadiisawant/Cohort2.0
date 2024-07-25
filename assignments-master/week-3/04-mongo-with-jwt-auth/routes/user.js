const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwtSecret = "user178";

// User Routes
router.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    User.create({
        username : username,
        password : password,
    })
    res.status(201).json({
       message: 'User created successfully'
    })
});

router.post('/signin', async(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
    const user = await User.findOne({
        username,
        password
    })
    if(!user){
        res.status(404).json({
            message: "User Not Found."
        });
    }else{
    const token = jwt.sign({username, password}, jwtSecret ,{expiresIn: "5m"});
    res.json({token : token})
    }
})

router.get('/courses', userMiddleware,async (req, res) => {
    const courses = await Course.find();
    if(!courses){
        res.status(404).send();
    }else{
    res.status(200).json({courses : courses })
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

    const user = await User.updateOne({
        username: username
    },{
        "$push": {
            purchasedCourses : courseId,
        }
    },)
    if(!user){
        res.status(404).json({
            message : "Username not found"
        })
    }else{
    res.json({
        message : 'Course purchased successfully',
        user : user
    })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    if(!username){
        res.status(403).json({
            message: "Headers are Missing"
        })
    }

    const user = await User.findOne({
        username: username
    });
    
    if(!user){
        res.status(400).json({
            message : "Username in Headers is not Matched"
        })
    }else{
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.json({
        courses: courses
    })
    }
});

module.exports = router