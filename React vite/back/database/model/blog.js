const connection = require("..")

const createBlog = (user_name,blog_title,blog_description,blog_image)=>{
  const promise = new Promise((resolve,reject)=>{
    const sql = "INSERT INTO blog set ?"
    connection.query(sql,[user_name,blog_title,blog_description,blog_image],(err,result)=>{
        err ? reject(err) : resolve(result)
    })
  })
    return promise
}

const getAllBlogs = ()=> {
     const promise = new Promise((resolve,reject)=>{
        const sql = "SELECT * FROM blog"
        connection.query(sql,(err,result)=>{
            err ? reject(err) : resolve(result)
        })
     })
     return promise
}

const getBlogById = (user_name)=>{
    const promise = new Promise((resolve,reject)=>{
        const sql = "SELECT * FROM blog WHERE user_name = ?"
        connection.query(sql,[user_name],(err,result)=>{
            err ? reject(err) : resolve(result)
        })
    })
    return promise
}

const deleteBlog = (user_name)=> {
    const promise = new Promise((resolve,reject)=>{
        const sql = "DELETE FROM blog WHERE user_name = ?"
        connection.query(sql,[user_name],(err,result)=>{
            err ? reject(err) : resolve(result)
        })
    })
    return promise
}

const updateBlog = (user_name,blog_title,blog_description,blog_image)=>{
    const promise = new Promise((resolve,reject)=>{
      const sql = "UPDATE blog SET blog_title = ?, blog_description = ?, blog_image = ? WHERE user_name = ?"  
        connection.query(sql,[blog_title,blog_description,blog_image,user_name],(err,result)=>{
            err ? reject(err) : resolve(result)
        })
    })
    return promise
}


module.exports = {getAllBlogs,createBlog,getBlogById,deleteBlog,updateBlog}