import { Request, Response } from "express";
import { randNumericHandler } from "./randNumeric";

describe("RandNumeric Controller", () => {
  it("randNumericHandler function", async () => {
    const req = {} as Request;

    const jsonMock = jest.fn();
    const statusMock = jest.fn(() => ({ json: jsonMock }));
    const res = { status: statusMock } as unknown as Response;

    await randNumericHandler(req, res);

    expect(statusMock).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(expect.arrayContaining([expect.any(Number)]));
  });
});
