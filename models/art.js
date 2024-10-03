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
    type: ObjectId,
    ref: "Art"
  },
  comments:{
    type: [ObjectId],
    ref: "Comments"
  }

});

const Art = mongoose.model('Art', artSchema);

module.exports = Art;
