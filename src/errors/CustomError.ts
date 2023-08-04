abstract class CustomError extends Error {
  abstract errorCode: number;
  abstract errorType: string;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, CustomError.prototype); // allows child classes to access methods and properties
  }

  abstract serializer(): { message: string; property?: string }[];
}

export default CustomError;