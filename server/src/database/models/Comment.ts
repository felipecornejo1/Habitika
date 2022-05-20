// Imports
import { Table, Model, Column, DataType, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript'
import { User, Post, Like } from './index'

// Table Settings
@Table({
  timestamps: false,
  tableName: 'Comment'
})

// Defining columns
export class Comment extends Model {
  // Content
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  user_id!: number

  // Author ID
  @ForeignKey(() => Post)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  post_id!: number

  // Date
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content!: string

  // Associations
  @BelongsTo(() => User)
  user!: User

  @BelongsTo(() => Post)
  post!: Post

  @HasMany(() => Like)
  likes!: Like[]
}
