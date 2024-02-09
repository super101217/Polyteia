import express from "express";

import { numericController } from "controllers";

const testRouter = express.Router();

// Create Numeric Route
testRouter.get("/saved", numericController.getNumeric);
testRouter.get("/rand", numericController.randNumeric);

export default testRouter;
