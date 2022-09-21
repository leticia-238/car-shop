import * as sinon from 'sinon';
import chai from 'chai';
import { Model } from 'mongoose';
import { carIdMock, carListMock, carMock, carMockWithId, carToUpdateMock, 
	updatedCarMock } from '../../mocks/carMock';
import CarModel from '../../../models/Car';
import { describe } from 'mocha';

const { expect } = chai;

describe('Testing Car Model', () => {
  const carModel  = new CarModel()

  before(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findById')
      .onFirstCall().resolves(carMockWithId)
      .onSecondCall().resolves(null);
			
		sinon.stub(Model, 'find')
      .onFirstCall().resolves(carListMock)
      .onSecondCall().resolves([]);
			
		sinon.stub(Model, 'findByIdAndUpdate')
      .onFirstCall().resolves(updatedCarMock)
      .onSecondCall().resolves(null);
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
	
	describe('Listing all cars', () => {
		it('returns the list of cars successfully', async () => {
			const carList = await carModel.read();
			expect(carList).to.be.deep.equal(carListMock);
		});
    
		it('returns an empty array if there are no cars', async () => {
			const carList = await carModel.read();
			expect(carList).to.be.an('array').that.is.empty;
		});
	});
	
	describe('Updating a car by id', () => {
		it('returns the car updated successfully', async () => {
			const updatedCar = await carModel.update(carIdMock, carToUpdateMock);
			expect(updatedCar).to.be.deep.equal(updatedCarMock);
		});
    
		it('returns null if car is not found', async () => {
      const inexistentCarId = '985481a51515aff84fc758d9'
			const updatedCar = await carModel.update(inexistentCarId, carToUpdateMock);
			expect(updatedCar).to.be.null;
		});
	});
});