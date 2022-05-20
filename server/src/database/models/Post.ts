// Imports
import { Table, Model, Column, DataType, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript'
import { User, Comment, Like } from './index'

// Table Settings
@Table({
  timestamps: false,
  tableName: 'Post'
})

// Defining columns
export class Post extends Model {
  // Content
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  content!: string

  // Author ID
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  author_id!: number

  // Date
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  created_at!: Date

  // Associations
  @HasMany(() => Comment)
  comments!: Comment

  @HasMany(() => Like)
  likes!: Like

  @BelongsTo(() => User)
  user!: User
}
