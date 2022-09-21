import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carIdMock, carListMock, carMock, carMockWithId } from '../../mocks/carMock';
import CarController from '../../../controllers/Car';
import { Request, Response } from 'express';
import { SuccessAnswers } from '../../../helpers/httpStatus';
const { expect } = chai;

describe('Testing Car Controller', () => {
  const carModel = new CarModel();
	const carService = new CarService(carModel);
  const carController = new CarController(carService);
  
  const req = {} as Request; 
  const res = {} as Response;
  
  before(async () => {
    sinon.stub(carService, 'create').resolves(carMockWithId);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);
    sinon.stub(carService, 'read').resolves(carListMock);
  
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(sinon.restore)

  describe('Creating a car', () => {
    it('returns the car created successfully', async () => {
      req.body = carMock;
      await carController.create(req, res);

      const statusStub = res.status as sinon.SinonStub
      const jsonStub = res.json as sinon.SinonStub

      expect(statusStub.calledWith(SuccessAnswers.Created)).to.be.true;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
    });
  });
  
  describe('Searching a car by id', () => {
		it('returns the car found successfully', async () => {
      req.params = { id: carIdMock }
			await carController.readOne(req, res);
      
      const statusStub = res.status as sinon.SinonStub
      const jsonStub = res.json as sinon.SinonStub
      
			expect(statusStub.calledWith(SuccessAnswers.Ok)).to.be.true;
      expect(jsonStub.calledWith(carMockWithId)).to.be.true;
		});
	});
  
  describe('Listing all cars', () => {
		it('returns the list of cars successfully', async () => {
			await carController.read(req, res);
      
      const statusStub = res.status as sinon.SinonStub
      const jsonStub = res.json as sinon.SinonStub
      
			expect(statusStub.calledWith(SuccessAnswers.Ok)).to.be.true;
      expect(jsonStub.calledWith(carListMock)).to.be.true;
		});
	});
});