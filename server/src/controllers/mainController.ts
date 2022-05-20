// Imports
import { Request, Response, RequestHandler } from 'express'
import { User } from '../database/models/User'

// Index
export const index: RequestHandler = (req: Request, res: Response) => {
  User.findAll().then(users => res.json(users))
}
