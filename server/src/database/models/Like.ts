// Imports
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { User, Post, Comment } from './index'

// Table Settings
@Table({
  timestamps: false,
  tableName: 'Like'
})

// Defining columns
export class Like extends Model {
  // Post
  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  post_id!: number

  // User
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  user_id!: number

  // Comment
  @ForeignKey(() => Comment)
  @Column({
    type: DataType.INTEGER,
    allowNull: true
  })
  comment_id!: number

  // Date
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  date!: Date

  @BelongsTo(() => Post)
  post!: Post

  @BelongsTo(() => Comment)
  comment!: Comment

  @BelongsTo(() => User)
  user!: User
}
