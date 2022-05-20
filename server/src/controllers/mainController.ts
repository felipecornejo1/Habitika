// Imports
import { Request, Response, RequestHandler } from 'express'

// Index
export const index: RequestHandler = (req: Request, res: Response) => {
  res.send('Api de Habitika')
}
