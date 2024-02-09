import express from "express";

import numericRouter from "./numeric.route";

const appRoutes = express.Router();

appRoutes.use("/numeric", numericRouter);

export default appRoutes;
