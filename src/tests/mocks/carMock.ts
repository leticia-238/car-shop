import { ICar } from "../../interfaces/ICar";
import { ICarWithId } from "../../interfaces/IEntityWithId";

export const carMock: ICar = {
  model: 'Palio',
  year: 1998,
  color: 'blue',
  buyValue: 50000,
  doorsQty: 4,
  seatsQty: 5
}

export const carMockWithId: ICarWithId = { 
  _id: '632481a51515aff84fc758d9',
  ...carMock, 
}