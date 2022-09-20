import { ErrorRequestHandler } from 'express';
import { ErrorCatalog, ErrorType } from '../errors/errorCatalog';
import { ServerErrors } from '../helpers/httpStatus';

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const errorType = error.name as ErrorType;
  const httpStatus = error.statusCode || ServerErrors.InternalServer;
  let message = 'internal error';
  
  if (errorType in ErrorCatalog) message = error.message;
  
  res.status(httpStatus).json({ message });
};

export default errorHandler;