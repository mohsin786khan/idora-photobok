const mongoose = require('mongoose');

const AdmincmsSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description:{
      type: String,
      required: true
    
  },
  status: {
      type:Boolean,
      default:false
    }
   
}, {
    timestamps:true
});


const AdminCms = mongoose.model('AdminCms', AdmincmsSchema);
module.exports = AdminCms;
