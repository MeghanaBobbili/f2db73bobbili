var express = require('express');
const movie_controlers= require('../controllers/movie');
var router = express.Router();

/* GET costumes */ 
router.get('/', movie_controlers.movie_view_all_Page ); 
module.exports = router; 

/* GET detail movie page */
router.get('/detail', movie_controlers.movie_view_one_Page);

/* GET create costume page */
router.get('/create', movie_controlers.movie_create_Page);

/* GET create update page */
router.get('/update', movie_controlers.movie_update_Page); 

/* GET delete costume page */
router.get('/delete', movie_controlers.movie_delete_Page);