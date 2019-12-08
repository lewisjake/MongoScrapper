var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var articlesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});
var Article = mongoose.model("articles", articlesSchema);
module.exports = Article;
