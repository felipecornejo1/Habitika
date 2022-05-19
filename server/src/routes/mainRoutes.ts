// Imports
import { Router } from 'express'
import { index } from '../controllers/mainController'

// Router
const router = Router()

// Index
router.get('/', index)

export default router
