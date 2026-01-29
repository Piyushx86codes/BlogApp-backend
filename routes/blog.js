const express = require("express");
const router = express.Router();


//importing the Controllers
const {createComment} = require("../controllers/commentController");
const {createPost} = require("../controllers/postController")





//mapping the Controllers to Routes//
router.post("/comments/create",createComment);
router.post("/posts/create",createPost);




//exporting the routes//

module.exports = router;