const express = require('express');
const router = express.Router();
const PostController = require('./controllers/post.controller.js');

router.get('/', PostController.index);
router.post('/addpost', PostController.addPost);
router.get('/getposts', PostController.getPosts);
router.delete('/deletepost/:id', PostController.deletePost);
router.put('/updatepost/:id', PostController.updatePost);

module.exports = router;