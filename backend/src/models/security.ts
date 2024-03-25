import { Model, Table, Column, PrimaryKey, AutoIncrement, HasMany, DataType } from 'sequelize-typescript';
import DailyTimeSeries from './dailyTimeSeries';

@Table({ tableName: 'securities', timestamps: false })
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

  @Column(DataType.FLOAT)
  trend!: number;

  @HasMany(() => DailyTimeSeries, { foreignKey: 'securityId' })
  dailyTimeSeries!: DailyTimeSeries[];
}

export default Security;