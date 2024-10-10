import { Router } from 'express';
import Controller from '../controllers/turtles';

class TurtlesRoutes {
  public router = Router();
  private controller = new Controller();

  constructor() {
    this.router.get('/', this.controller.index);
    this.router.get('/create/:name', this.controller.create);
    this.router.get('/delete/:name', this.controller.delete);
  }
}

export default new TurtlesRoutes().router;
