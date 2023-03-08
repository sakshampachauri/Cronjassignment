const express = require('express');
const { getTodo, postTodo, updateTodo, deleteTodo, searchTodo } = require('../controllers/TodoController');
const router = express.Router();


// creating get route
router.get('/', getTodo)

// creating post  route
router.post('/save', postTodo)

router.post('/update', updateTodo)
router.post('/delete', deleteTodo)
router.get('/search/:key', searchTodo)
module.exports = router