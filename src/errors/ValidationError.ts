import CustomError from "./CustomError";

class ValidationError extends CustomError {
  errorCode = 400;
  errorType = "VALIDATION_ERROR";

  constructor(message: string, errorCode: number, private property?: string) {
    super(message);
    this.errorCode = errorCode;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }

  serializer() {
    return [{ message: this.message, property: this.property }];
  }
}

export default ValidationError;
