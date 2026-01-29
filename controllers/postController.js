const Post = require("../models/postModel");


exports.createPost = async(req,res)=>{
    try {
        const {title,body} = req.body;
        const post = new Post({
            title,body
        })
        const savedPost = await post.save(); 
        //return response;
        return res.status(200).json({
            success:true,
            data:savedPost,
            message:"Succesfully Created the Post"
        })
    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({
            success:false,
            message:"failed to Create Post"
        })
    }
}