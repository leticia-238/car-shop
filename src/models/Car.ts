/* eslint-disable class-methods-use-this */
import { Model, model as mongooseCreateModel, Schema as MongooseSchema } from 'mongoose';
import { ICarWithId } from '../interfaces/IEntityWithId';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

const errorMessage = 'Method not implemented.';

class CarModel implements IModel<ICar> {
  private _mongooseSchema = new MongooseSchema<ICar>({
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    status: Boolean,
    buyValue: { type: Number, required: true },
    doorsQty: { type: Number, required: true },
    seatsQty: { type: Number, required: true },
  }, { versionKey: false });
  
  private _mongooseModel: Model<ICar>;
  
  constructor() {
    this._mongooseModel = mongooseCreateModel('Car', this._mongooseSchema);
  }
  
  async create(obj: ICar): Promise<ICarWithId> {
    const createdCar = await this._mongooseModel.create({ ...obj });
    return { ...createdCar, _id: createdCar._id.toString() };
  }
  
  read(): Promise<ICar> {
    throw new Error(errorMessage);
  }
  readOne(): Promise<ICar> {
    throw new Error(errorMessage);
  }
  update(): Promise<ICar> {
    throw new Error(errorMessage);
  }
  delete(): Promise<ICar> {
    throw new Error(errorMessage);
  }
}

export default CarModel;