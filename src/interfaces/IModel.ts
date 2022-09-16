import { IEntityWithId } from './IEntityWithId';

export interface IModel<T> {
  create(obj: T): Promise<IEntityWithId<T>>,
  read(): Promise<T>,
  readOne(): Promise<T>,
  update(): Promise<T>,
  delete(): Promise<T>,
}