// Imports
import { Request, Response, RequestHandler } from 'express'
import { Like } from '../database/models/index'

// All Likes
export const allLikes: RequestHandler = (req: Request, res: Response) => {
  void Like.findAll()
    .then(likes => {
      res.json({
        total: likes.length,
        data: likes,
        status: 200,
        route: '/api/likes'
      })
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/likes' })
    })
}

// Create Like
export const createLike: RequestHandler = (req: Request, res: Response) => {
  const newLike = {
    ...req.body
  }
  void Like.create(newLike)
    .then(createdLike => {
      res.json({
        msg: 'Like uploaded successfuly',
        data: createdLike,
        status: 200,
        route: '/api/likes/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/likes/:id' })
    })
}

// Find Like
export const findLike: RequestHandler = (req: Request, res: Response) => {
  void Like.findByPk(req.params.id)
    .then(like => {
      if (like != null) {
        res.json({
          data: like,
          status: 200,
          route: '/api/likes'
        })
      } else if (like === null) {
        res.json({ msg: 'Could not find like in database', status: 404 })
      }
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/likes/:id' })
    })
}

// Delete Like
export const deleteLike: RequestHandler = (req: Request, res: Response) => {
  const likeId = req.params.id

  void Like.destroy({ where: { id: likeId } })
    .then(deletedLike => {
      res.json({
        msg: 'Like deleted successfuly',
        data: deletedLike,
        status: 200,
        route: '/api/likes/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/likes/:id' })
    })
}
