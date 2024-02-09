import { Request, Response } from "express";
import httpStatus from "http-status";
import { getNumericHandler } from "./getNumeric";
import { numericService } from "../../services";

describe("getNumericHandler", () => {
  it("should return an array of real numbers", async () => {
    const mockRealNumbers = [
      { _id: 0, numeric: 5 },
      { _id: 1, numeric: 10 },
    ];
    jest
      .spyOn(numericService, "getRealNumericList")
      .mockResolvedValue(mockRealNumbers);

    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    await getNumericHandler(req, res);

    expect(res.status).toHaveBeenCalledWith(httpStatus.OK);
    expect(res.json).toHaveBeenCalledWith(
      mockRealNumbers.map((numeric) => numeric.numeric)
    );
  });
});
