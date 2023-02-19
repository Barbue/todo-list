const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();
const doDoList = require('../models/toDoLists');

const toDoListControllers = require('../controllers/toDoListControllers');


router.post('/create-list-entry', toDoListControllers.createToDoListEntry);
router.put('/update-list-entry', toDoListControllers.updateToDoListEntry);
router.get('/all', toDoListControllers.displayAllEntries);
router.delete('/delete-multi', toDoListControllers.deleteMulti);
router.post('/create-multi', toDoListControllers.createMulti);






module.exports = router