var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var movie_controller = require('../controllers/movie'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a movie.  
router.post('/movie', movie_controller.movie_create_post); 
 
// DELETE request to delete movie. 
router.delete('/movie/:id', movie_controller.movie_delete); 
 
// PUT request to update movie. 
router.put('/movie/:id', movie_controller.movie_update_put); 
 
// GET request for one movie. 
router.get('/movie/:id', movie_controller.movie_detail); 
 
// GET request for list of all movie items. 
router.get('/movie', movie_controller.movie_list); 
 
module.exports = router;