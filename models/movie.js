const mongoose = require("mongoose") 
const movieSchema = mongoose.Schema({ 
 movie_Name: String, 
 movie_Genre: String, 
 Rating: Number 
}) 
 
module.exports = mongoose.model("movie", 
movieSchema)