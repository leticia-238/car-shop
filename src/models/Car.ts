/* eslint-disable class-methods-use-this */
import { Model, model as mongooseCreateModel, Schema as MongooseSchema, Types } from 'mongoose';
import { ICarWithId } from '../interfaces/IEntityWithId';
import { ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

const errorMessage = 'Method not implemented.';

const mongooseSchema = new MongooseSchema<ICarWithId>({
  _id: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  color: { type: String, required: true },
  status: Boolean,
  buyValue: { type: Number, required: true },
  doorsQty: { type: Number, required: true },
  seatsQty: { type: Number, required: true },
}, { versionKey: false });

class CarModel implements IModel<ICar> {
  private _mongooseModel: Model<ICarWithId>;
  
  constructor() {
    this._mongooseModel = mongooseCreateModel('Car', mongooseSchema);
  }
  
  async create(obj: ICar): Promise<ICarWithId> {
    const createdCar = await this._mongooseModel.create({ 
      _id: new Types.ObjectId().toString(),
      ...obj, 
    });
    return createdCar;
  }
  
  async read(): Promise<ICarWithId[]> {
    const cars = await this._mongooseModel.find({});
    return cars;
  }
  
  async readOne(id: string): Promise<ICarWithId | null> {
    const car = await this._mongooseModel.findById(id);
    return car;
  }
  update(): Promise<ICar> {
    throw new Error(errorMessage);
  }
  
  async delete(id: string): Promise<ICar | null> {
    const car = await this._mongooseModel.findByIdAndDelete(id);
    return car;
  }
}

export default CarModel;