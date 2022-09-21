import { ErrorRequestHandler } from 'express';
import { ErrorCatalog, ErrorType } from '../errors/errorCatalog';
import { ServerErrors } from '../helpers/httpStatus';

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  const errorType = error.name as ErrorType;
  const httpStatus = error.statusCode || ServerErrors.InternalServer;
  let errMessage = 'internal error';
  
  if (errorType in ErrorCatalog) errMessage = error.message;
  
  res.status(httpStatus).json({ error: errMessage });
};

export default errorHandler;