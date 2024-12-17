const express = require('express');
const { createTask } = require('../controllers/taskControllers/createTask');
const {getAllTasks} = require("../controllers/taskControllers/getAllTasks");

const router = express.Router();

router.post('/create', createTask);
router.get('/getAll', getAllTasks);

module.exports = router;