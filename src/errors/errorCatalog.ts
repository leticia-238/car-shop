import { ClientErrors } from '../helpers/httpStatus';

export type ErrorType = keyof typeof ErrorCatalog;

export enum ErrorCatalog {
  RequestValidation = ClientErrors.BadRequest,
}
