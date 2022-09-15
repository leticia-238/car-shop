import { Types } from 'mongoose';
import { ICar } from './ICar';

export type IEntityWithId<T> = T & { _id: Types.ObjectId };

export type ICarWithId = IEntityWithId<ICar>;