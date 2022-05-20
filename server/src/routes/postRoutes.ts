// Imports
import { Router } from 'express'
import {
  allPosts,
  findPost,
  createPost,
  deletePost,
  editPost
} from '../controllers/postController'

// Router
const router = Router()

router
  .route('/')
  .get(allPosts)
  .post(createPost)

router
  .route('/:id')
  // Find Post by ID
  .get(findPost)
  // Delete Post by ID
  .delete(deletePost)
  // Edit Post by ID
  .put(editPost)

export default router
