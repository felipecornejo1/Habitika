// Imports
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { User } from './index'

// Table Settings
@Table({
  timestamps: false,
  tableName: 'Habit'
})

// Defining columns
export class Habit extends Model {
  // User
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  user_id!: number

  // Last Completed
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  last_completed!: Date

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

  // Date
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  created_at!: Date

  // Associations
  @BelongsTo(() => User)
  user!: User
}
