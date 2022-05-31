// Imports
import { Request, Response, RequestHandler } from 'express'
import { User } from '../database/models/index'

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

// Create User
export const createUser: RequestHandler = (req: Request, res: Response) => {
  const newUser = {
    ...req.body
  }
  void User.create(newUser)
    .then(createdUser => {
      res.json({
        msg: 'User uploaded successfuly',
        data: createdUser,
        status: 200,
        route: '/api/users/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/users/:id' })
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

// Edit User
export const editUser: RequestHandler = (req: Request, res: Response) => {
  const body = req.body
  const userId = req.params.id

  void User.update({
    content: body.content
  }, { where: { id: userId } })
    .then(updatedUser => {
      res.json({
        msg: 'User updated successfuly',
        data: updatedUser,
        status: 200,
        route: '/api/users/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/users/:id' })
    })
}

// Delete User
export const deleteUser: RequestHandler = (req: Request, res: Response) => {
  const userId = req.params.id

  void User.destroy({ where: { id: userId } })
    .then(deletedUser => {
      res.json({
        msg: 'User deleted successfuly',
        data: deletedUser,
        status: 200,
        route: '/api/users/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/users/:id' })
    })
}
