import express from 'express';
import errorHandler from './middlewares/errorHandler';
import { carsRouter } from './routes';

const app = express();

app.use(express.json());

app.use(carsRouter);

app.use(errorHandler);

export default app;
