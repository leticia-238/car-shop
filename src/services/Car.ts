import { ICarWithId, IdZodSchema } from '../interfaces/IEntityWithId';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { IService } from '../interfaces/IService';
import ClientError from '../errors/ClientError';
import { ClientErrors } from '../helpers/httpStatus';

class CarService implements IService<ICar> {
  constructor(private _model: IModel<ICar>) {}

  async create(obj: unknown): Promise<ICarWithId> {
    const validateCar = CarZodSchema.safeParse(obj);
    if (!validateCar.success) {
      const message = 'Invalid fields';
      throw new ClientError(ClientErrors.BadRequest, message);
    }
    const createdCar = await this._model.create(validateCar.data);
    return createdCar as ICarWithId;
  }  
  
  async read(): Promise<ICarWithId[] | []> {
    const cars = await this._model.read();
    return cars as ICarWithId[] | [];
  }
  
  async readOne(id: string): Promise<ICarWithId> {
    const validateId = IdZodSchema.safeParse(id);
    if (!validateId.success) {
      const { message } = validateId.error.issues[0];
      throw new ClientError(ClientErrors.BadRequest, message);
    }
    const car = await this._model.readOne(id);
    CarService.validateIfExists(car);
    return car as ICarWithId;
  }
  
  async update(id: string, obj: unknown): Promise<ICarWithId> {
    const validateId = IdZodSchema.safeParse(id);
    if (!validateId.success) {
      const { message } = validateId.error.issues[0];
      throw new ClientError(ClientErrors.BadRequest, message);
    }
    const validateCar = CarZodSchema.safeParse(obj);
    if (!validateCar.success) {
      const message = 'Invalid fields';
      throw new ClientError(ClientErrors.BadRequest, message);
    }
    
    const car = await this._model.update(id, validateCar.data);
    CarService.validateIfExists(car);
    return car as ICarWithId;
  }
  
  async delete(id: string): Promise<void> {
    const validateId = IdZodSchema.safeParse(id);
    if (!validateId.success) {
      const { message } = validateId.error.issues[0];
      throw new ClientError(ClientErrors.BadRequest, message);
    }
    const car = await this._model.delete(id);
    CarService.validateIfExists(car);
  }
  
  static validateIfExists(obj: ICar | null): void {
    if (!obj) throw new ClientError(ClientErrors.NotFound, 'Object not found');
  }
}

export default CarService;