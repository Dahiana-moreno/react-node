import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from "../controllers/BlogController.js";

const router = express.Router()

//mostrar todos los blog

router.get('/',getAllBlogs)
router.get('/:id',getBlog)
router.post('/',createBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)

export default router