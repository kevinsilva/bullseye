import { Model, Table, Column, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import Price from './price';

@Table({ tableName: 'securities', modelName: 'Security', timestamps: false })
class Security extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  ticker!: string;

  @Column
  securityName!: string;

  @Column
  sector!: string;

  @Column
  country!: string;

  @Column
  trend!: number;

  @HasMany(() => Price)
  prices!: Price[];
}

export default Security;