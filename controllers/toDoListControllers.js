const { v4: uuidv4 } = require("uuid");
var express = require("express");
const doDoList = require('../models/toDoLists');



async function createToDoListEntry(req, res, next){

    try {
        //parse out fields from POST request
        const name  = req.body.name
        const description = req.body.description
        const completed = true
        const dateCompleted = req.body.dateCompleted
        const status = req.body.status


    // name: {type: String, required: true},
    // description: String, 
    // completed: {type: Boolean, required: true},
    // dateCreated: {type: Date, default: Date.now, required: true},
    // dateCompleted: Date,
    // status: {type: String, default: 'incomplete', required: true, enum: ['incomplete','complete','deferred']}

    
        //pass fields to new Blog model 
        //notice how it's way more organized and does the type checking for us
        const newListEntry = new doDoList({
            name,  
            description,
            completed,
            dateCompleted,
            status 
        });
    
        //save our new entry to the database 
        const savedListEntry =  await newListEntry.save();
        
        //return the successful request to the user 
        res.json({
            success: true,
            listEntry: savedListEntry
        });
    
      } catch (e) {
        console.log(typeof e);
        console.log(e);
        res.json({
          error: e.toString(),
        });
      }
    }

   
























module.exports = {
    createToDoListEntry,
    // createOneBlog,
    // getOneExample
};