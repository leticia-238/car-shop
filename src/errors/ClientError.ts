import { ClientErrors } from '../helpers/httpStatus';

class ClientError extends Error {
  constructor(public statusCode: ClientErrors, message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export default ClientError;