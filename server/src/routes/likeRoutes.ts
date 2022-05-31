// Imports
import { Router } from 'express'
import {
  allLikes,
  findLike,
  createLike,
  deleteLike
} from '../controllers/likeController'

// Router
const router = Router()

router
  .route('/')
  .get(allLikes)
  .post(createLike)

router
  .route('/:id')
  // Find Like by ID
  .get(findLike)
  // Delete Like by ID
  .delete(deleteLike)

export default router
