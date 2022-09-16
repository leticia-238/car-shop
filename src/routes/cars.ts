import { Router } from 'express';
import CarController from '../controllers/Car';
import CarModel from '../models/Car';
import CarService from '../services/Car';

const route = Router();

const model = new CarModel();
const service = new CarService(model);
const controller = new CarController(service);

const path = '/cars';

route.post(path, (req, res) => controller.create(req, res));

route.get(path, (req, res) => controller.read(req, res));

export default route;