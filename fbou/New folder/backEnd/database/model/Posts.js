const conn = require('../index')
function createPost(post, callback) {
  const { post_name, post_image, post_description, post_price } = post;
  const query = 'INSERT INTO posts (post_name, post_image, post_description, post_price) VALUES (?, ?, ?, ?)';
  conn.query(query, [post_name, post_image, post_description, post_price], (err, results) => {
  callback(err,results)
  });
}

// Update a post by ID
function updatePost(postId, updatedPost, callback) {
  const query = 'UPDATE posts SET ? WHERE idposts = ?';
  conn.query(query, [updatedPost, postId], (err, results) => {
   callback(err,results)
  });
}

// Delete a post by ID
function deletePost(postId, callback) {
  const query = 'DELETE FROM posts WHERE idposts = ?';
  conn.query(query, [postId], (err, results) => {
    if (err) {
      return callback(err);
    }
    callback(null, results.affectedRows > 0);
  });
}

// Get all posts
function getAllPosts(callback) {
  const query = 'SELECT * FROM posts';
  conn.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
}

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPosts, // Add this function
};
