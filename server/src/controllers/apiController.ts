// Imports
import { Request, Response, RequestHandler } from 'express'
import { User, Post, Comment, Follow, Habit, Like, Task } from '../database/models/index'

//* Users
// All Users
export const allUsers: RequestHandler = (req: Request, res: Response) => {
  void User.findAll()
    .then(users => {
      res.json({
        total: users.length,
        data: users,
        status: 200,
        route: '/api/users'
      })
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/users' })
    })
}

// Find User
export const findUser: RequestHandler = (req: Request, res: Response) => {
  void User.findByPk(req.params.id)
    .then(user => {
      if (user != null) {
        res.json({
          data: user,
          status: 200,
          route: '/api/users'
        })
      } else if (user === null) {
        res.json({ msg: 'Could not find user in database', status: 404 })
      }
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/users/:id' })
    })
}

//* Posts
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
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/posts/id' })
    })
}

//* Comments
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

//* Follows
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

//* Habits
// All Habits
export const allHabits: RequestHandler = (req: Request, res: Response) => {
  void Habit.findAll()
    .then(habits => {
      res.json({
        total: habits.length,
        data: habits,
        status: 200,
        route: '/api/habits'
      })
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/habits' })
    })
}

// Find Habit
export const findHabit: RequestHandler = (req: Request, res: Response) => {
  void Habit.findByPk(req.params.id)
    .then(habit => {
      if (habit != null) {
        res.json({
          data: habit,
          status: 200,
          route: '/api/habits'
        })
      } else if (habit === null) {
        res.json({ msg: 'Could not find habit in database', status: 404 })
      }
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/habits/:id' })
    })
}

//* Likes
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

//* Tasks
// All Tasks
export const allTasks: RequestHandler = (req: Request, res: Response) => {
  void Task.findAll()
    .then(tasks => {
      res.json({
        total: tasks.length,
        data: tasks,
        status: 200,
        route: '/api/tasks'
      })
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/tasks' })
    })
}

// Find Task
export const findTask: RequestHandler = (req: Request, res: Response) => {
  void Task.findByPk(req.params.id)
    .then(task => {
      if (task != null) {
        res.json({
          data: task,
          status: 200,
          route: '/api/tasks'
        })
      } else if (task === null) {
        res.json({ msg: 'Could not find task in database', status: 404 })
      }
    }).catch(err => {
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/tasks' })
    })
}
