import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import Routes from './routes';
import { dbConnection } from './database';

const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

new Routes(app);

app.listen(process.env.PORT, async () => {
  await dbConnection();

  console.log(`Server running in port ${process.env.PORT}`);
});
