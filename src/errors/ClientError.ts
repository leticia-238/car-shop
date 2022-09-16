import { ErrorType } from './errorCatalog';

class ClientError extends Error {
  constructor(name: ErrorType, message: string) {
    super(message);
    this.name = name;
  }
}

export default ClientError;