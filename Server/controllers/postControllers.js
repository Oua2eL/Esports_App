const asyncHandler = require ('express-async-handler');
const Post = require('../models/postModel');

// @desc create a post
// @route POST/api/post
// @access PRIVATE user/admin

const createPost = async (req, res) => {
    try {
        const {title,image,price,quantity} = req.body;
        await Post.create({ title, image, price,quantity, owner: req.personId });
        res.status(201).json({msg:'post created'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Something went wrong` });
    }
};

// @desc get all posts
// @route GET/api/post
// @access PRIVATE user/admin

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Something went wrong` });
    }
};

// @desc fetch a single product
// @route GET /api/post/:id
// @access public
const getPostById = async (req, res) => {
    
    try {
        const post = await Post.findById(req.params.id);
      res.json(post);
    } catch {
      res.status(404);
      throw new Error('Post not found');
    }
  };


// @desc delete post by id
// @route DELETE/api/post

const deletePost = async (req, res) => {
    try {
        console.log(req.body)
        const postDeleted = await Post.deleteOne({ _id : req.body._id }, function(err, callback){
            console.log('Post Deleted');
            })
        res.status(200).json(postDeleted);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: `Something went wrong` });
    }
};

module.exports = { createPost, getPosts, deletePost, getPostById };