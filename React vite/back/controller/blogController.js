const blogModel = require("../database/model/blog")

async function create (req,res){
    try{
        const blogData = req.body
        const newBlog = await blogModel.createBlog(blogData)
        res.status(201).send(newBlog);
    }
    catch (err){
        res.status(500).json(err);
    }
}

async function get (req,res){
blogModel.getAllBlogs()
.then((response)=>{
    res.status(200).json(response)
})
.catch((err)=>{
    res.status(500).send(err)
})
}

async function getByUsername (req,res){
    blogModel.getBlogById(req.params.user_name)
    .then((response)=>{
        res.status(200).send(response)
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

async function deleteOne (req,res){
    blogModel.deleteBlog(req.params.user_name)
    .then((respones)=>{
        res.status(200).send(respones)
        console.log(`The blog of ${user_name} has been successfuly deleted`);
    })
    .catch((err)=>{
        res.status(500).send(err)
    })
}

async function update(req, res) {
    try {
      const blogUser_name = req.params.user_name;
      const { blog_title, blog_description, blog_image } = req.body;
  
      const updated = await blogModel.updateBlog(
        blogUser_name,
        blog_title,
        blog_description,
        blog_image
      );
  console.log(updated);
      if (updated) {
        res.status(200).json(`The blog of ${blogUser_name} has been updated successfully`);
      } else {
        res.status(404).json(`No blog found for user_name: ${blogUser_name}`);
      }
    } catch (err) {
    
      res.status(500).json(err);
    }
  }
  
module.exports = {create,get,getByUsername,deleteOne,update}