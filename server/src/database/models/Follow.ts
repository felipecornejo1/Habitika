// Imports
import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import { User } from './index'

// Table Settings
@Table({
  timestamps: false,
  tableName: 'Follow'
})

// Defining columns
export class Follow extends Model {
  // Follower
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  follower_id!: number

  // Followed
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  followed_id!: number

  // Date
  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  date!: Date

  // Associations
  @BelongsTo(() => User, { foreignKey: 'follower_id' })
  follower!: User

  @BelongsTo(() => User, { foreignKey: 'followed_id' })
  followed!: User
}
