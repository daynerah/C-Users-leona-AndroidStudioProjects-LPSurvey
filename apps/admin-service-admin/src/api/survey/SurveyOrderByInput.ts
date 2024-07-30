import { SortOrder } from "../../util/SortOrder";

export type SurveyOrderByInput = {
  completed?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
