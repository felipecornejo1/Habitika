// Imports
import { Router } from 'express'
import {
  allFollows,
  findFollow,
  createFollow,
  deleteFollow
} from '../controllers/followController'

// Router
const router = Router()

router
  .route('/')
  .get(allFollows)
  .post(createFollow)

router
  .route('/:id')
  // Find Follow by ID
  .get(findFollow)
  // Delete Follow by ID
  .delete(deleteFollow)

export default router
