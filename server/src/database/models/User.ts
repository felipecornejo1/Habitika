// Imports
import { Table, Model, Column, DataType } from 'sequelize-typescript'

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

  // User Type
  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  type!: number
}
