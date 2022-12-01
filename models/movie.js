const mongoose = require("mongoose") 
const movieSchema = mongoose.Schema({ 
 movie_Name: {
    type: String,
    min: 1,
    max: 100
},
movie_Genre: {
    type: String,
    min: 1,
    max: 100
},
Rating: {
    type: Number,
    min: 1,
    max: 100
}
}) 
 
module.exports = mongoose.model("movie", 
movieSchema)