import * as sinon from 'sinon';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carIdMock, carMock, carMockWithId } from '../../mocks/carMock';
import ClientError from '../../../errors/ClientError';

chai.use(chaiAsPromised);

const { expect } = chai;

describe('Testing Car Service', () => {
  const carModel = new CarModel();
	const carService = new CarService(carModel);
  
  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'readOne')
			.onFirstCall().resolves(carMockWithId)
			.onSecondCall().resolves(null)
  });

  after(sinon.restore)

  describe('Creating a car', () => {
		it('returns the car created successfully', async () => {
			const createdCar = await carService.create(carMock);
			expect(createdCar).to.be.deep.equal(carMockWithId);
		});

		it('throws an error if the fields are invalid', async () => {
			return expect(carService.create({})).to.eventually
				.rejectedWith(ClientError, 'Invalid fields');
		});
	});
	
	describe('Searching a car by id', () => {
		it('returns the car found successfully', async () => {
			const foundCar = await carService.readOne(carIdMock);
			expect(foundCar).to.be.deep.equal(carMockWithId);
		});
    
		it('throws an error if the id is invalid', async () => {
      const invalidCarId = '98548'
			return expect(carService.readOne(invalidCarId)).to.eventually
				.rejectedWith(ClientError, 'Id must have 24 hexadecimal characters');
		});
		
		it('throws an error if car is not found', async () => {
      const inexistentCarId = '985481a51515aff84fc758d9'
			return expect(carService.readOne(inexistentCarId)).to.eventually
				.rejectedWith(ClientError, 'Object not found');
		});
	});
});