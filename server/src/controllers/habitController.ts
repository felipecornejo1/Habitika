// Imports
import { Request, Response, RequestHandler } from 'express'
import { Habit } from '../database/models/index'

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

// Create Habit
export const createHabit: RequestHandler = (req: Request, res: Response) => {
  const newHabit = {
    ...req.body
  }
  void Habit.create(newHabit)
    .then(createdHabit => {
      res.json({
        msg: 'Habit uploaded successfuly',
        data: createdHabit,
        status: 200,
        route: '/api/habits/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/habits/:id' })
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

// Edit Habit
export const editHabit: RequestHandler = (req: Request, res: Response) => {
  const body = req.body
  const habitId = req.params.id

  void Habit.update({
    content: body.content
  }, { where: { id: habitId } })
    .then(updatedHabit => {
      res.json({
        msg: 'Habit updated successfuly',
        data: updatedHabit,
        status: 200,
        route: '/api/habits/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/habits/:id' })
    })
}

// Delete Habit
export const deleteHabit: RequestHandler = (req: Request, res: Response) => {
  const habitId = req.params.id

  void Habit.destroy({ where: { id: habitId } })
    .then(deletedHabit => {
      res.json({
        msg: 'Habit deleted successfuly',
        data: deletedHabit,
        status: 200,
        route: '/api/habits/:id'
      })
    })
    .catch(err => {
      res.json({ msg: 'There was an error when trying update database', error: err, status: 500, route: '/api/habits/:id' })
    })
}
