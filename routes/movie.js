var express = require('express');
const movie_controlers= require('../controllers/movie');
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
var router = express.Router();

/* GET costumes */ 
router.get('/', movie_controlers.movie_view_all_Page ); 
module.exports = router; 

/* GET detail movie page */
router.get('/detail', movie_controlers.movie_view_one_Page);

/* GET create costume page */
router.get('/create',secured, movie_controlers.movie_create_Page);

/* GET create update page */
router.get('/update',secured, movie_controlers.movie_update_Page); 

/* GET delete costume page */
router.get('/delete',secured, movie_controlers.movie_delete_Page);