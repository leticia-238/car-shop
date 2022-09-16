import { IEntityWithId } from './IEntityWithId';

export interface IService<T> {
  create(obj: unknown): Promise<IEntityWithId<T>>,
  read(): Promise<IEntityWithId<T>[] | []>,
  readOne(id: string): Promise<IEntityWithId<T>>
}