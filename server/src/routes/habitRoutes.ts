// Imports
import { Router } from 'express'
import {
  allHabits,
  findHabit,
  createHabit,
  deleteHabit,
  editHabit
} from '../controllers/habitController'

// Router
const router = Router()

router
  .route('/')
  .get(allHabits)
  .post(createHabit)

router
  .route('/:id')
  // Find Habit by ID
  .get(findHabit)
  // Delete Habit by ID
  .delete(deleteHabit)
  // Edit Habit by ID
  .put(editHabit)

export default router
