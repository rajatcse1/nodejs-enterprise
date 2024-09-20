export interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
  meta?: any;
}

export interface ErrorResponse {
  success: false;
  message: string;
  details?: any;
  errorCode: number;
}

export const successResponse = (
  data: any,
  message: string = "Operation successful",
  meta: any = null
): SuccessResponse<any> => {
  return {
    success: true,
    data,
    message,
    meta,
  };
};

export const errorResponse = (
  message: string,
  details: any = null,
  errorCode: number = 500
): ErrorResponse => {
  return {
    success: false,
    message,
    details,
    errorCode,
  };
};
