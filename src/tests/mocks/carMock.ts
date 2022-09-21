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

export const carIdMock = '632481a51515aff84fc758d9';

export const carMockWithId: ICarWithId = { 
  _id: carIdMock,
  ...carMock, 
};

export const carToUpdateMock: ICar = {
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
};

export const updatedCarMock: ICarWithId = {
  _id: carIdMock,  
  ...carToUpdateMock
};

export const carListMock = [carMockWithId];