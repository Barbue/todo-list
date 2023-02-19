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
      }
      }

////////// 2. Update Task (Mark as Completed/ Uncompleted) //////////
// router.post('/update', function(req, res) {
//   StudentModel.findByIdAndUpdate(req.body.id, 
//   {Name:req.body.Name}, function(err, data) {
//       if(err){
//           console.log(err);
//       }
//       else{
//           res.send(data);
//           console.log("Data updated!");
//       }
//   });  
// });





  //   async function updateToDoListEntry(req, res, next){
  //     const dbConnect = dbo.getDb();
  // const listingQuery = { _id: req.body.id };
  // const updates = {
  //   $inc: {
  //     likes: 1,
  //   },
  // };

  //    const updateDoc = await doDoList.updateOne(
            //  {id:req.params.id},
            //  {$set: {completed: true, 
            //   dateCompleted: new Date(),
            //   status: "complete"
            // }
            // });

            /////////////////

          //   router.put("/update-one/:blogToUpdate", async (req, res) => {

          //     try {
          
          //         const blogToFind = req.params.blogToUpdate;
          
          //         const originalBlog = await db()
          //         .collection('sample_blogs')
          //         .findOne({
          //             title: blogToFind
          //         })
          
                  
          
          //         const updatedBlog = {}
          
                 
          //         updatedBlog.createdAt = new Date();
          //         updatedBlog.lastModified = new Date();
          
          //         const updateResponse = await db()
          //         .collection('sample_blogs')
          //         .updateOne({
          //             title: blogToFind
          //         }, {
          //             $set: updatedBlog
          //         })
          
          //         res.json({
          //             success: true,
          //             updatedBlog
          //         }).status(200);
          //     }
          
          //     catch (e) {
          //         console.log(e);
          //         res.json({
          //             success: false,
          //             error: String(e)
          //         }).status(500);
          //     }
          // })
            
      //       res.json({
      //         success: true,
      //         updateDoc: updateDoc
      // });

    // };


////////// 3. Delete Task //////////  






///////// 4. Delete Multiple Tasks  //////////

async function deleteMulti(req, res) {
  try {
     
      // const idsToDelete = req.body

    //  if (idsToDelete.length < 1){
    //    throw Error("ids to delete empty!");
    //  }
     const deleteResult = await doDoList.deleteMany(req.query)
      
    //    id: {
    //      $in: idsToDelete
    //    }
    //  })

     res.json({
      success: true,
      deleteResult: deleteResult
    })
 
 } catch (e) {
   res.send(e);
 }
 
}



////////// 5. Create Muliple Tasks //////////

async function createMulti (req, res ,next) {
  try {
    const multicreated = await doDoList.insertMany(req.body)

    //return the successful request to the user 
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
  }


      
////////// 6. Display all Tasks /////////

    async function displayAllEntries (req, res ,next) {
  try{
    
    const allEntries = await doDoList.find({});
        res.json({
          success: true,
          allEntries: allEntries

        });
        }catch(e){
          console.log(e);
        }
      }
  //const allEntries = 
  //allEntries: allEntries

    














      

      
      
    



      
      
      
  ///////////  Export controller functions //////////      
module.exports = {
    createToDoListEntry,
    //updateToDoListEntry,
    displayAllEntries,
    deleteMulti,
    createMulti,

    
};