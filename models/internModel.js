const mongoose = require('mongoose')


const internSchema = new mongoose.Schema({
   name:{
       type: String,
       required:true,
       trim:true
   }, 
   email:{
       type : String,
       required: true,
       unique: true,
       trim:true,
       validate:{
        validator:function(v){
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message:"Please enter a valid email"
   },
},

   mobile:{
    type :String,
    required: true,
    unique: true,
    trim:true,
   
},
    collegeId:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'college',
        required: true,
        trim:true
    },


isDeleted: {
    type:Boolean,
     default: false
    }


},{ timestamps:true} )

module.exports = mongoose.model('intern', internSchema)
