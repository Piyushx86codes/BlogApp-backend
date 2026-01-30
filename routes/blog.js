const express = require("express");
const router = express.Router();


//importing the Controllers
const {createComment} = require("../controllers/commentController");
const {createPost} = require("../controllers/postController");
const {getAllPosts} = require("../controllers/postController");
const {likePost,unlikePost} = require("../controllers/likeController");





//mapping the Controllers to Routes//
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/getposts",getAllPosts);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);




//exporting the routes//

module.exports = router;