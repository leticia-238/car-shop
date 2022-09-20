import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import { carIdMock, carMock, carMockWithId } from '../../mocks/carMock';
import CarModel from '../../../models/Car';
import { describe } from 'mocha';

const { expect } = chai;

describe('Testing Car Model', () => {
  const carModel  = new CarModel()

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findById')
      .onFirstCall().resolves(carMockWithId)
      .onSecondCall().resolves(null)
  });

  after(sinon.restore);

  describe('Creating a car', () => {
		it('returns the car created successfully', async () => {
			const createdCar = await carModel.create(carMock);
			expect(createdCar).to.be.deep.equal(carMockWithId);
		});
	});
  
  describe('Searching a car by id', () => {
		it('returns the car found successfully', async () => {
			const foundCar = await carModel.readOne(carIdMock);
			expect(foundCar).to.be.deep.equal(carMockWithId);
		});
    
		it('returns null if car is not found', async () => {
      const inexistentCarId = '985481a51515aff84fc758d9'
			const foundCar = await carModel.readOne(inexistentCarId);
			expect(foundCar).to.be.null;
		});
	});
});