const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();
const doDoList = require('../models/toDoLists');

const toDoListControllers = require('../controllers/toDoListControllers.js');


router.post('/create-list-entry', toDoListControllers.createToDoListEntry);






module.exports = router