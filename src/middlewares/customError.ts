import { Request, Response } from "express";
import { errorResponse } from "../utils/responseHelpers";

export class CustomError extends Error {
  statuscode: number;
  details: any;
  constructor(message: string, statusCode: number = 500, details: any = null) {
    super(message);
    this.statuscode = statusCode;
    this.details = details;

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

const errorHandler = (error: CustomError, req: Request, res: Response) => {
  const statusCode = error.statuscode || 500;
  const details = error.details || null;

  console.error(`[Error] ${error.message}`, error.details || "");

  res
    .status(statusCode)
    .json(errorResponse(error.message, details, statusCode));
};

export default errorHandler;
