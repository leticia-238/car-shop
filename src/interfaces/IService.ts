import { IEntityWithId } from './IEntityWithId';

export interface IService<T> {
  create(obj: unknown): Promise<IEntityWithId<T>>,
}