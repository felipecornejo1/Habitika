// Imports
import { Router } from 'express'
import {
  allUsers,
  findUser,
  createUser,
  deleteUser,
  editUser
} from '../controllers/userController'

// Router
const router = Router()

router
  .route('/')
  // All Users
  .get(allUsers)
  // Create New User
  .post(createUser)

router
  .route('/:id')
  // Find User by ID
  .get(findUser)
  // Delete User by ID
  .delete(deleteUser)
  // Edit User by ID
  .put(editUser)

export default router
