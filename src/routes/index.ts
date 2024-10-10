import type { Application } from 'express';
import TurtlesRoutes from './turtles.routes';

export default class Routes {
  constructor(app: Application) {
    app.use('/api/turtles', TurtlesRoutes);
  }
}
