import { Model, Table, Column, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import Security from './security';


@Table({ tableName: 'security_daily_time_series', timestamps: false })
class DailyTimeSeries extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  date!: Date;

  @Column(DataType.FLOAT)
  closePrice!: number;

  @Column
  volume!: bigint;

  @ForeignKey(() => Security )
  @Column
  securityId!: number;

  @BelongsTo(() => Security)
  security!: Security;
}

export default DailyTimeSeries;