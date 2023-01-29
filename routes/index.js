var express = require('express');
var router = express.Router();

const { getTopMeals, getMealsByCategory  } = require('../models/milkit');
const {  validationLogin, validationRegister } = require('../helper/validations/auth')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { layout:"main", title: 'Express-one changed', mealkits: getTopMeals() }); // index is page. and will use layout as the maian layout
});
router.get('/search', function(req, res, next) {
  res.render('search', { layout:"main", title: 'Search-page-test' }); // search is page. and will use layout as the maian layout
});
router.get('/onthemenu', function(req, res, next) {
  console.log('t1', getMealsByCategory())
  res.render('onthemenu', { layout:"main", title: 'This is the on menu page', mealsByCategory: getMealsByCategory()})
});
router.get('/login', function(req, res, next) {
  res.render('login', { layout:"main", title: 'Login'})
});
router.post('/login', function(req, res, next) {
  console.log('body', req.body)
  const errors =  validationLogin(req);

    if (Object.keys(errors).length !== 0 && errors.constructor === Object) {
        return res.status(400).json({
            success: false,
            errors: errors
        });
    }

    res.status(200).json({
        success: true,
        message: 'Login successful',
    })
});

router.get('/register', function(req, res, next) {
  res.render('register', { layout:"main", title: 'Register'})
});

router.post('/register', function(req, res, next) {
  console.log('body', req.body)
  const errors =  validationRegister(req);

    if (Object.keys(errors).length !== 0 && errors.constructor === Object) {
        return res.status(400).json({
            success: false,
            errors: errors
        });
    }

    res.status(200).json({
        success: true,
        message: 'Registration successful',
    })

});

module.exports = router;
