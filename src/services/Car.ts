import { ICarWithId } from '../interfaces/IEntityWithId';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import ClientError from '../errors/ClientError';

class CarService implements IService<ICar> {
  constructor(private _model: IModel<ICar>) {}

  async create(obj: unknown): Promise<ICarWithId> {
    const validateCar = CarZodSchema.safeParse(obj);
    if (!validateCar.success) {
      const message = 'Invalid fields';
      throw new ClientError('RequestValidation', message);
    }
    const createdCar = await this._model.create(validateCar.data);
    return createdCar as ICarWithId;
  }  
  
  async read(): Promise<ICarWithId[] | []> {
    const cars = await this._model.read();
    return cars as ICarWithId[] | [];
  }
  
  async readOne(id: string): Promise<ICarWithId> {
    const car = await this._model.readOne(id);
    return car as ICarWithId;
  }
}

export default CarService;