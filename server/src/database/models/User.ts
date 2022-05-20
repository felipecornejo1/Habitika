// Imports
import { Table, Model, Column, DataType, HasMany } from 'sequelize-typescript'
import { Post, Comment, Follow, Habit, Like, Task } from './index'

// Table Settings
@Table({
  timestamps: false,
  tableName: 'User'
})

// Defining columns
export class User extends Model {
  // Username
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  username!: string

  // Email
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  email!: string

  // Password
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password!: string

  // Profile Picture
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  profile_picture!: string

  // First Name
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  first_name!: string

  // Last Name
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  last_name!: string

  // Associations
  @HasMany(() => Post)
  posts!: Post[]

  @HasMany(() => Comment)
  comments!: Comment[]

  @HasMany(() => Follow)
  follows!: Follow[]

  @HasMany(() => Habit)
  habits!: Habit[]

  @HasMany(() => Like)
  likes!: Like[]

  @HasMany(() => Task)
  tasks!: Task[]
}
