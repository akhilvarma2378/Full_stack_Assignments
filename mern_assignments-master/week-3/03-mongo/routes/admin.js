const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

router.use(express.json());

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = 

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;