import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

class Turtle extends Model {
  public id!: number;
  public name!: string;
}

Turtle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'turtles',
    timestamps: true,
  }
);

export default Turtle;
