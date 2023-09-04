import { CategoriesDTO } from "./CategoriesDTO";

export type EventKindCategoriesDTO = {
  id: string | number;
  title: string;
  items: CategoriesDTO[];
};
