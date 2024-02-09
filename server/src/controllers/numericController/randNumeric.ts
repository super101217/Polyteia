import { Request, Response } from "express";
import httpStatus from "http-status";
import { errorHandlerWrapper } from "utils/errorHandler.wrapper";

export const randNumericHandler = async (
  _req: Request,
  res: Response
) => {
  const randNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  res.status(httpStatus.OK).json(randNumbers);
};

export const randNumeric = errorHandlerWrapper(randNumericHandler);
