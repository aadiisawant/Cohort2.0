const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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

router.get('/courses', async (req, res) => {
    const courses = await Course.find();
    if(!courses){
        res.status(404).send();
    }
    res.status(200).json({courses : courses })
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
    
    res.json({
        message : 'Course purchased successfully',
        user : user
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router