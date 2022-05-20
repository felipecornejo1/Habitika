// Imports
import { Router } from 'express'
import {
  allTasks,
  findTask,
  createTask,
  deleteTask,
  editTask
} from '../controllers/taskController'

// Router
const router = Router()

router
  .route('/')
  .get(allTasks)
  .post(createTask)

router
  .route('/:id')
  // Find Task by ID
  .get(findTask)
  // Delete Task by ID
  .delete(deleteTask)
  // Edit Task by ID
  .put(editTask)

export default router
