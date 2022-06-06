
// import  express
import express from  "express";

// init expres router
const router = express.Router();

// Home route
router.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

// About route
router.get('/about', (req, res) => {
    res.send('Welcome to About Page');
});

// contact route
router.get('/contact', (req, res) => {
    res.send('Welcome to Contact page');
});

// export default router
export default router;
