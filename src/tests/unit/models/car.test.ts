import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarModel from '../../../models/Car';
import { describe } from 'mocha';

const { expect } = chai;

describe('Testing Car Model', () => {
  const carModel  = new CarModel()

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
  });

  after(sinon.restore);

  describe('Creating a car', () => {
		it('returns the car created successfully', async () => {
			const createdCar = await carModel.create(carMock);
			expect(createdCar).to.be.deep.equal(carMockWithId);
		});
	});
});