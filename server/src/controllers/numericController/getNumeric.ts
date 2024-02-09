import { Request, Response } from "express";
import httpStatus from "http-status";

import { numericService } from "services";
import { errorHandlerWrapper } from "utils/errorHandler.wrapper";

export const getNumericHandler = async (
  _req: Request,
  res: Response
) => {
  const result = await numericService.getRealNumericList();
  const realNumbers = result.map((numeric) => numeric.numeric);
  res.status(httpStatus.OK).json(realNumbers);
};

export const getNumeric = errorHandlerWrapper(getNumericHandler);
