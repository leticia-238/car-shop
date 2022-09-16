import * as sinon from 'sinon';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised'
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockWithId } from '../../mocks/carMock';
import ClientError from '../../../errors/ClientError';

chai.use(chaiAsPromised);

const { expect } = chai;

describe('Testing Car Service', () => {
  const carModel = new CarModel();
	const carService = new CarService(carModel);
  
  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
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
});