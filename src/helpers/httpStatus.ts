export enum SuccessAnswers {
  Ok = 200,
  Created = 201,
  NoContent = 204,
}

export enum ClientErrors {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}

export enum ServerErrors {
  InternalServer = 500,
}

type HttpStatus = SuccessAnswers | ClientErrors | ServerErrors;

export default HttpStatus;