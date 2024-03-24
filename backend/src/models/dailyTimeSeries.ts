import { Model, Table, Column, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Security from './security';

@Table({ tableName: 'security_prices', modelName: 'Price', timestamps: false })
class Price extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  date!: Date;

  @Column
  close!: number;

  @Column
  volume!: bigint;

  @ForeignKey(() => Security)
  @Column
  securityId!: number;

  @BelongsTo(() => Security)
  security!: Security;
}

export default Price;