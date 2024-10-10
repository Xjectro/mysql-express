import type { Request, Response } from 'express';
import Turtle from '../../database/models/turtle.model';

export default class Controller {
  index = async (_: Request, res: Response): Promise<any> => {
    const turtles = await Turtle.findAll();
    const turtleNames = turtles.map((turtle) => ({
      name: turtle.dataValues.name,
      id: turtle.dataValues.id,
    }));
    res.status(200).json(turtleNames);
  };

  create = async (req: Request, res: Response): Promise<any> => {
    const { name } = req.params;

    if (!name) {
      return res
        .status(400)
        .json({ success: false, message: 'Name is required.' });
    }

    const newTurtle = await Turtle.create({ name });
    res.status(201).json(newTurtle);
  };

  delete = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;

    const turtle = await Turtle.findByPk(id);

    if (!turtle) {
      return res.status(404).json({ message: 'Turtle not found.' });
    }

    await turtle.destroy();
    res.status(200).json({ message: 'Turtle deleted successfully.' });
  };
}
