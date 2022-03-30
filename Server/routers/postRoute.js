const express = require('express');
const { createPost, getPosts, deletePost, getPostById } = require('../controllers/postControllers');
const adminCheckMiddleware = require('../middlewares/adminCheck');
const authMiddleware = require ('../middlewares/authMiddleware');
const router = express.Router();


router.get('/',getPosts);
router.get('/:id',getPostById);
router.delete('/',deletePost);
router.post('/', authMiddleware, adminCheckMiddleware, createPost);

module.exports = router;