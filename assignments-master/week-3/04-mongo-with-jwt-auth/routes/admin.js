const { Router } = require("express");
const jwt = require('jsonwebtoken')
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();
const jwtSecret = "adi178"

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const admin = Admin.create({
        username : username,
        password : password
    })
    res.status(201).json(admin)
});

router.post('/signin', async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const adminCheck = await Admin.findOne({
        username,
        password
    })
    if (adminCheck) {
        const token = jwt.sign({
            username, password
        }, jwtSecret, {expiresIn: "5m"});
        res.json({token : token});
    } else {
        res.status(411).json({
            message: "Incorrect email and pass"
        })
    }
})

router.post('/courses', adminMiddleware, (req, res) => {
    const courseData  = req.body;
    if(!courseData || Object.keys(courseData).length === 0){
    res.status(400).json({message : "body is empty"});
    }else{
    const course = Course.create(courseData);
    res.status(201).json({
        Course_Details : course
    });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    if(!courses){
        res.status(404).json({
            message : "Not Found."
        })
    }else{
    res.status(200).json({
        courses : courses
    })
    }
});

router.get('/getusers', adminMiddleware, async(req,res)=>{
    const users = await User.find();
    if(!users){
        res.status(404).send();
    }else{
        res.json({Users : users});
    }
})
module.exports = router;