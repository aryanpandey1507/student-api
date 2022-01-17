const express =require('express');
const router = new express.Router();
const Student = require('../models/students');

router.get('/',(req,res)=>{

    res.send('hello this is student-api');
})


router.use(express.json());

// app.get('/',(req,res)=>{
//     res.send('This is the root folder')
// })
// without async await

//creating a new student
// app.post('/students',(req,res)=>{

//     console.log(req.body);
//     const user = new Student(req.body)
    
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((e)=>{
//         res.status(400).send(e);
//     });


//    // res.send('hello this is the students endpoint')
// })





// with async await

router.post('/students',async(req,res)=>{

    try{

        const user = new Student(req.body)
        console.log(req.body)

        const createUser =  await user.save();
        res.status(201).send(createUser);


    }catch(e){

        res.status(400).send(e);
    }

})





// writing the get request
router.get('/students',async(req,res)=>{
    try{
        const studentsData= await Student.find();
        console.log(studentsData);
        res.send(studentsData);
    }catch(e){
        res.send(e);
    }
})


//getting the individual student data using the id

//   app.get('/students/:id', async (req,res)=>{

//       try{
//           const _id = req.params.id;
//           const studentData= await Student.findById(_id);
       
//         console.log(studentData);
//         console.log(req.params);
//         console.log(req.params.id);
//         //res.send(req.params);
//        // res.send(req.params.id);

//        if(!studentData)
//        {
//            res.status(404).send();
//        }
//        else
//        {
//              res.status(200).send(studentData);
//        }
    
          

//       }catch(e){

//           res.send(e);
//       }
//   })


//getting the individual detail using the name
      router.get('/students/:name', async (req,res)=>{
       try{
         const name = req.params.name;
         const studentData_name= await Student.find({name:name});
     
         console.log(studentData_name);
         console.log(req.params);
         console.log(req.params.name);
         //res.send(req.params.name);
        // res.send(req.params.id)
        if(!studentData_name)
        {
            res.status(404).send();
        }else{
            res.status(500).send(studentData_name);
        }
    
          

     }catch(e){

         res.status(500).send(e);
     }

 })


//  patch request for updating the data

   router.patch('/students/:id',async(req,res)=>{

       try{
            const _id = req.params.id;
            const updateStudentDet= await Student.findByIdAndUpdate(_id ,req.body,{
             new:true         // This will show the data after updation
         });
        console.log(updateStudentDet);
        res.status(201).send(updateStudentDet);

    }catch(e){ 

        res.status(404).send(e);

    }
})


// Deleting method

router.delete('/students/:id',async(req,res)=>{
    
    try{

        const _id = req.params.id;
        const delstu = await Student.findByIdAndDelete(_id);
        console.log(delstu);
        
        if(!_id)
        {
            return res.status(400).send();

        }
        else
        {
            res.status(200).send(delstu);
        }


    }catch(e){

        res.status(500).send(e);

    }
})

module.exports =  router;