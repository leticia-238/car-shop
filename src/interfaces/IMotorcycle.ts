import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(['Salmon', 'Tuna', 'Trout']),
  engineCapacity: z.number().lte(2500).int().positive(),
});

export type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;