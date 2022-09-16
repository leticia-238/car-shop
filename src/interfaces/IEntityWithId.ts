import { ICar } from './ICar';

export type IEntityWithId<T> = T & { _id: string };

export type ICarWithId = IEntityWithId<ICar>;