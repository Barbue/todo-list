const { v4: uuidv4, v4 } = require("uuid");
var express = require("express");
const doDoList = require('../models/toDoLists');


////////// 1. Create Task //////////

async function createToDoListEntry(req, res, next){

try {
    //parse out fields from POST request
    const name  = req.body.name
    const description = req.body.description
    const completed = false
    const dateCompleted = req.body.dateCompleted
    const status = req.body.status
        
//pass fields to new Blog model 
//notice how it's way more organized and does the type checking for us
const newListEntry = new doDoList({
      name,  
      description,
      completed,
      dateCompleted,
      status,
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
      };
      };

////////// 2. Update Task (Mark as Completed/ Uncompleted) //////////

async function updateToDoListEntry(req, res, next){

try {

const updated = await doDoList.findOne({name:req.body.name}); 

 //const update = {completed: true, status: "complete"}
 //const update = {completed: false, status: "incomplete"}
await updated.updateOne({completed:req.body.completed, status:req.body.status,dateCompleted:req.body.dateCompleted});

const updatedEntry = await doDoList.findOne({name:req.body.name});
updatedEntry.completed;
updatedEntry.status;
updatedEntry.dateCompleted;

res.json({
  success:true,
  updated: updatedEntry
})

} catch (e) {
  res.send(e);
}
};

////////// 3. Delete Task //////////  

async function deleteOne(req, res, next){

try {
     
const deletedOneEntry = await doDoList.deleteOne({name:req.body.name})
        
res.json({
    success: true,
    deletedResult: deletedOneEntry
   })
   
   } catch (e) {
     res.send(e);
   }
   };

///////// 4. Delete Multiple Tasks  //////////

async function deleteMulti(req, res, next) {
try {
     
const deleteResult = await doDoList.deleteMany(req.query)
      
res.json({
    success: true,
    deleteResult: deleteResult
 })
 
 } catch (e) {
   res.send(e);
 }
 };

////////// 5. Create Muliple Tasks //////////

async function createMulti(req, res ,next) {
try {

const multicreated = await doDoList.insertMany(req.body)

    
res.json({
    success: true,
    multicreated: multicreated
  });

  } catch (e) {
    console.log(typeof e);
    console.log(e);
    res.json({
      error: e.toString(),
  });
  }
  };

////////// 6. Display all Tasks /////////

async function displayAllEntries (req, res ,next) {
try {
    
const allEntries = await doDoList.find({});

res.json({
    success: true,
    allEntries: allEntries
});
      
}catch(e){
 console.log(e);
}
};
  
///////////  Export controller functions //////////  

module.exports = 
{
    createToDoListEntry,
    updateToDoListEntry,
    displayAllEntries,
    deleteMulti,
    createMulti,
    deleteOne
};





