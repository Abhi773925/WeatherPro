const mongoose=require("mongoose"); 
 
mongoose.connect("mongodb+srv://rockabhisheksingh778189:International77%40%40@abhishek.bidbzxc.mongodb.net/RegistrationPage")

.then(()=>{ 
    console.log("Connection succesful"); 
}).catch((err)=>{ 
    console.log(`No connection ${err}`) 
}) 
 
const signupsch = new mongoose.Schema({ 
    fname:{ 
        type:String, 
        required:true, 
        trim:true 
    }, 
    lname:{ 
        type:String, 
        required:true, 
        trim:true 
    }, 
    email: { 
        type: String, 
        required: true, 
        unique: true, // Email should be unique 
        trim: true 
    }, 
    password: { 
        type: String, 
        required: true, 
        trim: true 
    } 
    }) 
const Student = mongoose.model("RegisterationDetails", signupsch); 
module.exports = Student;