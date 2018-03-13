var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');

/* GET ALL BOOKS */
router.get('/', function (req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
/* SAVE BOOK */
router.post('/saveBook', function (req, res, next) {
  console.log('req.body', req.body);
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/* GET SINGLE BOOK BY ID */
router.get('/getBookById', function (req, res, next) {
  Book.findById(req.query.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* UPDATE BOOK */
router.put('/updateBook/:id', function (req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/deleteBook/:id', function (req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, succcess) {
    if (err) return next(err);
    res.json(succcess);
  });
});

module.exports = router;
