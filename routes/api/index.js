const express = require('express');
const userRoutes = require('./userRoute');
const thoughtRoutes = require('./thoughtRoute');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;