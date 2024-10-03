const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    body:{
        type: String,
        required: true
    }

})


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
