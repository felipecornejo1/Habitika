// Imports
import { Request, Response, RequestHandler } from 'express'
import { Post } from '../database/models/index'

// All Posts
export const allPosts: RequestHandler = (req: Request, res: Response) => {
  void Post.findAll()
    .then(posts => {
      res.json({
        total: posts.length,
        data: posts,
        status: 200,
        route: '/api/posts'
      })
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/posts' })
    })
}

// Create Post
export const createPost: RequestHandler = (req: Request, res: Response) => {
  const newPost = {
    ...req.body
  }
  void Post.create(newPost)
    .then(createdPost => {
      res.json({
        msg: 'Post uploaded successfuly',
        data: createdPost,
        status: 200,
        route: '/api/posts/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/posts/:id' })
    })
}

// Find Post
export const findPost: RequestHandler = (req: Request, res: Response) => {
  void Post.findByPk(req.params.id)
    .then(post => {
      if (post != null) {
        res.json({
          data: post,
          status: 200,
          route: '/api/posts'
        })
      } else if (post === null) {
        res.json({ msg: 'Could not find post in database', status: 404 })
      }
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/posts/:id' })
    })
}

// Edit Post
export const editPost: RequestHandler = (req: Request, res: Response) => {
  const body = req.body
  const postId = req.params.id

  void Post.update({
    content: body.content
  }, { where: { id: postId } })
    .then(updatedPost => {
      res.json({
        msg: 'Post updated successfuly',
        data: updatedPost,
        status: 200,
        route: '/api/posts/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/posts/:id' })
    })
}

// Delete Post
export const deletePost: RequestHandler = (req: Request, res: Response) => {
  const postId = req.params.id

  void Post.destroy({ where: { id: postId } })
    .then(deletedPost => {
      res.json({
        msg: 'Post deleted successfuly',
        data: deletedPost,
        status: 200,
        route: '/api/posts/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/posts/:id' })
    })
}
