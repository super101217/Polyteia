import { NumericEntity } from "entities";
import { getNumericRepository } from "utils";

export const getRealNumericList = async (): Promise<NumericEntity[] | null> => {
  const numericRepository = await getNumericRepository();
  const numericList: NumericEntity[] | null = await numericRepository.find();
  return numericList;
};
