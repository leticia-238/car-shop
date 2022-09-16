import { ErrorRequestHandler } from 'express';
import { ErrorCatalog, ErrorType } from '../errors/errorCatalog';
import { ServerErrors } from '../helpers/httpStatus';

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const errorType = error.name as ErrorType;
  const httpStatus = ErrorCatalog[errorType] || ServerErrors.InternalServer;
  
  if (errorType in ErrorCatalog) {
    res.status(httpStatus).json({ message: error.message });
  }
  res.status(httpStatus).json({ message: 'internal error' });
};

export default errorHandler;