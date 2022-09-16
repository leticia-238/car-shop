import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().gte(2).lte(4).int(),
  seatsQty: z.number().gte(2).lte(7).int(),
});

export type ICar = z.infer<typeof CarZodSchema>;