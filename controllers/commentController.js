//import the models required//
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


//bussiness logic//
exports.createComment = async(req,res)=>{
    try {
        //fetch data from req body//
        const {post,user,body} = req.body;
        //create comment//
        const comment = new Comment({
              post,user,body
        });
        //save the comment in db//
        const savedComment = await comment.save();
        //find the post by its ID and add comment to its comment array//
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true}).populate("comments").exec();
        //return response//
        res.json({
            post:updatedPost,
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"Error Creating comment",
        })
    }
}
