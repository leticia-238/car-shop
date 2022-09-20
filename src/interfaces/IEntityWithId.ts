import { z } from 'zod';
import { ICar } from './ICar';

export const IdZodSchema = z.string().min(24, 'Id must have 24 hexadecimal characters');

export type IEntityWithId<T> = T & { _id: z.infer<typeof IdZodSchema> };

export type ICarWithId = IEntityWithId<ICar>;