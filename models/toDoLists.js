//import mongoose library
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

//create a doDoListSchema 
const doDoListSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String, 
    completed: {type: Boolean, required: true},
    dateCreated: {type: Date, default: Date.now, required: true},
    dateCompleted: Date,
    status: {type: String, default: "incomplete", required: true, enum: ["incomplete","complete","deferred"]}
});

// status: {type: String, default: "incomplete", required: true, enum: ["incomplete","complete","deferred"]}



//register model to collection
const doDoList = mongoose.model("to_do_list_data", doDoListSchema);

//make our model accessible to outside files 
module.exports = doDoList;

// name - type: string, validation: required
// description - type: string
// completed - type: boolean, validation: required
// dateCreated - type: date, default: Date.now(), validation: required
// dateCompleted - type: date
// status - type: string, default: 'incomplete', validation: required, enum: ['incomplete', 'complete', 'deferred']