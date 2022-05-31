// Imports
import { Request, Response, RequestHandler } from 'express'
import { Follow } from '../database/models/index'

// All Follows
export const allFollows: RequestHandler = (req: Request, res: Response) => {
  void Follow.findAll()
    .then(follows => {
      res.json({
        total: follows.length,
        data: follows,
        status: 200,
        route: '/api/follows'
      })
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/follows' })
    })
}

// Create Follow
export const createFollow: RequestHandler = (req: Request, res: Response) => {
  const newFollow = {
    ...req.body
  }
  void Follow.create(newFollow)
    .then(createdFollow => {
      res.json({
        msg: 'Follow uploaded successfuly',
        data: createdFollow,
        status: 200,
        route: '/api/follows/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/follows/:id' })
    })
}

// Find Follow
export const findFollow: RequestHandler = (req: Request, res: Response) => {
  void Follow.findByPk(req.params.id)
    .then(follow => {
      if (follow != null) {
        res.json({
          data: follow,
          status: 200,
          route: '/api/follows'
        })
      } else if (follow === null) {
        res.json({ msg: 'Could not find follow in database', status: 404 })
      }
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/follows/:id' })
    })
}

// Delete Follow
export const deleteFollow: RequestHandler = (req: Request, res: Response) => {
  const followId = req.params.id

  void Follow.destroy({ where: { id: followId } })
    .then(deletedFollow => {
      res.json({
        msg: 'Follow deleted successfuly',
        data: deletedFollow,
        status: 200,
        route: '/api/follows/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/follows/:id' })
    })
}
