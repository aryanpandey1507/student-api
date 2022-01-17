// now defining the schema here

const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        minlength: 3,
        maxlength : 15,
    },
    email: {
        type: String,
        required : true,
        unique: [true , "Email id is already present"],
        validate(value){
            if(!validator.isEmail(value)){
               throw new Error("Invalid Email")
            }
        }
    
    },
   phone: {
        type: Number,
        min:10,
        required : true,
        unique: true,

    },
    address:{
        type:String,
        required: true
    }
})


// Creating a new collection 

const Student = new mongoose.model('Student',studentSchema);

module.exports = Student;