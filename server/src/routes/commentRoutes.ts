// Imports
import { Router } from 'express'
import {
  allComments,
  findComment,
  createComment,
  deleteComment,
  editComment
} from '../controllers/commentController'

// Router
const router = Router()

router
  .route('/')
  .get(allComments)
  .post(createComment)

router
  .route('/:id')
  // Find Comment by ID
  .get(findComment)
  // Delete Comment by ID
  .delete(deleteComment)
  // Edit Comment by ID
  .put(editComment)

export default router
