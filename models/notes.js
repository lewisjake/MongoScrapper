var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var notesSchema = new Schema({
  name: {
    type: String
  },
  body: {
    type: String,
    required: true
  }
});
var notes = mongoose.model("notes", notesSchema);
module.exports = notes;
