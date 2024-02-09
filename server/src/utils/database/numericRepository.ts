import { DBConnect } from "../dbConnector";

import { NumericEntity } from "entities";

export const getNumericRepository = async () => {
    const connection = await DBConnect.getConnection();

    return connection.getRepository(NumericEntity);
}