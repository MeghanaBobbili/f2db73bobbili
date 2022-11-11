var movie= require('../models/movie'); 
 
// List of all movies
exports.movie_list = async function(req, res) { 
    try{ 
        theMovie = await movie.find(); 
        res.send(theMovie); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// VIEWS 
// Handle a show all view 
exports.movie_view_all_Page = async function(req, res) { 
    try{ 
        theMovie = await movie.find(); 
        res.render('movie', { title: 'Search Results Movie', results: theMovie }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.movie_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new movie(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"movie_Name":"Major", "movie_Genre":"Patriot", "Rating":"3.5"} 
    document.movie_Name = req.body.movie_Name;    
    document.movie_Genre = req.body.movie_Genre;
    document.Rating = req.body.Rating;  
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Movie. 
exports.movie_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Movie details: ' + req.params.id); 
}; 
 

// Handle Movie delete form on DELETE. 
exports.movie_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Movie delete DELETE ' + req.params.id); 
}; 
 


// for a specific Costume.
exports.movie_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await movie.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

   // Handle Costume update form on PUT.
exports.movie_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await movie.findById( req.params.id)
 // Do updates of properties
 if(req.body.movie_Name)
 toUpdate.movie_Name = req.body.movie_Name;
 if(req.body.movie_Genre) toUpdate.movie_Genre = req.body.movie_Genre;
 if(req.body.Rating) toUpdate.Rating= req.body.Rating;
 let result = await toUpdate.save();
 console.log("Success " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};