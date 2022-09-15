import { Router } from 'express';
import CarController from '../controllers/Car';
import CarModel from '../models/Car';
import CarService from '../services/Car';

const route = Router();

const model = new CarModel();
const service = new CarService(model);
const controller = new CarController(service);

route.post('/cars', controller.create);

export default route;