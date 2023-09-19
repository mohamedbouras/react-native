const express = require('express')
const postController = require('../controllers/Posts');

const router = express.Router()
router.post('/posts', postController.createPost);

// Update a post by ID
router.put('/posts/:id', postController.updatePost);

// Delete a post by ID
router.delete('/posts/:id', postController.deletePost);

// Get all posts
router.get('/posts', postController.getAllPosts); 
module.exports = router