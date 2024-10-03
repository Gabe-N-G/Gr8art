const mongoose = require('mongoose');




const artSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    default: "No description"
  },
  colorArray:{
    type: [String],
    required: true
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Art",
    required: true
  },
  comments:{
    type: [commentSchema],
    //embedding comments here
  }

});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
