//import mongoose library
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

//create a doDoListSchema 
const doDoListSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type:String}, 
    completed: {type:Boolean, required: true},
    dateCreated: {type: Date, default: Date.now, required: true},
    dateCompleted:  {type: Date},
    status: {type: String, default: "incomplete", required: true, enum: ["incomplete","complete","deferred"]},
    id: {type: String, default: uuidv4()}
    
});


//register model to collection
const doDoList = mongoose.model("to_do_list_datas", doDoListSchema);

//make our model accessible to outside files 
module.exports = doDoList;

