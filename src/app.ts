import 'express-async-errors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import errorHandler from './middlewares/errorHandler';
import { carsRouter } from './routes';
import swaggerDocs from './swagger.json';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(carsRouter);

app.use(errorHandler);

export default app;
