import { Request, Response } from 'express';
import { SuccessAnswers } from '../helpers/httpStatus';
import { ICar } from '../interfaces/ICar';
import { ICarWithId } from '../interfaces/IEntityWithId';
import { IService } from '../interfaces/IService';

class CarController {
  constructor(private _service: IService<ICar>) {}
  
  async create(req: Request, res: Response<ICarWithId>): Promise<void> {
    const car = req.body;
    const createdCar = await this._service.create(car);
    res.status(SuccessAnswers.Created).json(createdCar);
  }
  
  async read(_req: Request, res: Response<ICarWithId[] | []>): Promise<void> {
    const cars = await this._service.read();
    res.status(SuccessAnswers.Ok).json(cars);
  }
  
  async readOne(req: Request, res: Response<ICarWithId>): Promise<void> {
    const { id } = req.params;
    const car = await this._service.readOne(id);
    res.status(SuccessAnswers.Ok).json(car);
  }
  
  async update(req: Request, res: Response<ICarWithId>): Promise<void> {
    const { id } = req.params;
    const car = req.body;
    const updatedCar = await this._service.update(id, car);
    res.status(SuccessAnswers.Ok).json(updatedCar);
  }
  
  async delete(req: Request, res: Response<ICarWithId>): Promise<void> {
    const { id } = req.params;
    await this._service.delete(id);
    res.sendStatus(SuccessAnswers.NoContent);
  }
}

export default CarController;