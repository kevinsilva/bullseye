import { Model, Table, Column, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import DailyTimeSeries from './dailyTimeSeries';

@Table({ tableName: 'securities', modelName: 'Security', timestamps: false })
class Security extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  ticker!: string;

  @Column
  name!: string;

  @Column
  sector!: string;

  @Column
  country!: string;

  @Column
  trend!: number;

  @HasMany(() => DailyTimeSeries)
  dailyTimeSeries!: DailyTimeSeries[];
}

export default Security;