const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const admin = new Admin({
        username : username,
        password : password
    })
    admin.save();
    res.status(201).json(admin)
});

router.post('/courses', adminMiddleware, (req, res) => {
    const courseData  = req.body;
    if(!courseData){
    res.status(400).json({message : "body is empty"});
    }
    const course = new Course(courseData);
    course.save();
    res.status(201).json(course);
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    res.status(200).json({
        courses : courses
    })
});

module.exports = router;