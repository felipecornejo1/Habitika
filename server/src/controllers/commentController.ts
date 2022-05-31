// Imports
import { Request, Response, RequestHandler } from 'express'
import { Comment } from '../database/models/index'

// All Comments
export const allComments: RequestHandler = (req: Request, res: Response) => {
  void Comment.findAll()
    .then(comments => {
      res.json({
        total: comments.length,
        data: comments,
        status: 200,
        route: '/api/comments'
      })
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/comments' })
    })
}

// Create Comment
export const createComment: RequestHandler = (req: Request, res: Response) => {
  const newComment = {
    ...req.body
  }
  void Comment.create(newComment)
    .then(createdComment => {
      res.json({
        msg: 'Comment uploaded successfuly',
        data: createdComment,
        status: 200,
        route: '/api/comments/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/comments/:id' })
    })
}

// Find Comment
export const findComment: RequestHandler = (req: Request, res: Response) => {
  void Comment.findByPk(req.params.id)
    .then(comment => {
      if (comment != null) {
        res.json({
          data: comment,
          status: 200,
          route: '/api/comments'
        })
      } else if (comment === null) {
        res.json({ msg: 'Could not find comment in database', status: 404 })
      }
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/comments/:id' })
    })
}

// Edit Comment
export const editComment: RequestHandler = (req: Request, res: Response) => {
  const body = req.body
  const commentId = req.params.id

  void Comment.update({
    content: body.content
  }, { where: { id: commentId } })
    .then(updatedComment => {
      res.json({
        msg: 'Comment updated successfuly',
        data: updatedComment,
        status: 200,
        route: '/api/comments/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/comments/:id' })
    })
}

// Delete Comment
export const deleteComment: RequestHandler = (req: Request, res: Response) => {
  const commentId = req.params.id

  void Comment.destroy({ where: { id: commentId } })
    .then(deletedComment => {
      res.json({
        msg: 'Comment deleted successfuly',
        data: deletedComment,
        status: 200,
        route: '/api/comments/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/comments/:id' })
    })
}
