const express = require('express');
const api = express.Router();

const PostController = require('./controller/PostController');
const { ExampleMiddleware } = require('./middleware/ExampleMiddleware');

api.get('/get',ExampleMiddleware,PostController.PostController);

api.get('*',(req,res)=>{
    res.send('Invalid API point');
});

module.exports = api;