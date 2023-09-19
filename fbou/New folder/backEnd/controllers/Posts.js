const Post = require('../database/model/Posts');

function createPost(req, res) {
  const post = req.body;
  Post.createPost(post, (err, postId) => {
    if (err) {
      console.error('MySQL Error:', err);
      return res.status(500).json({ error: 'Could not create post' });
    }
    res.status(201).json({ postId });
  });
}

// Update a post by ID
function updatePost(req, res) {
  const postId = req.params.id;
  const updatedPost = req.body;
  Post.updatePost(postId, updatedPost, (err, success) => {
    if (err) {
      return res.status(500).json({ error: 'Could not update post' });
    }
    if (success) {
      res.status(200).json({ message: 'Post updated successfully' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  });
}

// Delete a post by ID
function deletePost(req, res) {
  const postId = req.params.id;
  Post.deletePost(postId, (err, success) => {
    if (err) {
      return res.status(500).json({ error: 'Could not delete post' });
    }
    if (success) {
      res.status(200).json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  });
}

// Get all posts
function getAllPosts(req, res) {
  Post.getAllPosts((err, posts) => {
    if (err) {
      return res.status(500).json({ error: 'Could not retrieve posts' });
    }
    res.status(200).json(posts);
  });
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts, // Add this function
};