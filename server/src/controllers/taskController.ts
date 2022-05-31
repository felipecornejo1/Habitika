// Imports
import { Request, Response, RequestHandler } from 'express'
import { Task } from '../database/models/index'

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

// Create Task
export const createTask: RequestHandler = (req: Request, res: Response) => {
  const newTask = {
    ...req.body
  }
  void Task.create(newTask)
    .then(createdTask => {
      res.json({
        msg: 'Task uploaded successfuly',
        data: createdTask,
        status: 200,
        route: '/api/tasks/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/tasks/:id' })
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
      return res.json({ msg: 'Failed to read from database', error: err, status: 500, route: '/api/tasks/:id' })
    })
}

// Edit Task
export const editTask: RequestHandler = (req: Request, res: Response) => {
  const body = req.body
  const taskId = req.params.id

  void Task.update({
    content: body.content
  }, { where: { id: taskId } })
    .then(updatedTask => {
      res.json({
        msg: 'Task updated successfuly',
        data: updatedTask,
        status: 200,
        route: '/api/tasks/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/tasks/:id' })
    })
}

// Delete Task
export const deleteTask: RequestHandler = (req: Request, res: Response) => {
  const taskId = req.params.id

  void Task.destroy({ where: { id: taskId } })
    .then(deletedTask => {
      res.json({
        msg: 'Task deleted successfuly',
        data: deletedTask,
        status: 200,
        route: '/api/tasks/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/tasks/:id' })
    })
}
