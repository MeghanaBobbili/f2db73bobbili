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
 
// Handle Movie update form on PUT. 
exports.movie_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Movie update PUT' + req.params.id); 
}; 