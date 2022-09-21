import { IEntityWithId } from './IEntityWithId';

export interface IModel<T> {
  create(obj: T): Promise<IEntityWithId<T> | T>,
  read(): Promise<T[] | []>,
  readOne(id: string): Promise<T | null>,
  update(): Promise<T>,
  delete(id: string): Promise<T | null>,
}