// Imports
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { User } from './index'

// Table Settings
@Table({
  timestamps: false,
  tableName: 'Task'
})

// Defining columns
export class Task extends Model {
  // User ID
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  user_id!: number

  // Date
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  created_at!: Date

  // Finished (0 -> Yes or 1 -> No)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  finished!: number

  // Title
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title!: string

  // Description
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description!: string

  // Associations
  @BelongsTo(() => User)
  user!: User
}
