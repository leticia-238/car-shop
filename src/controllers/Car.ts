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
}

export default CarController;