import { SortOptions } from "./SortOptions";

export default interface ITableElement {
  toRows: () => JSX.Element;
  headers: () => Array<string>;
  sort: (key: string, sortOption: SortOptions) => void;
  search: (term: string) => void;
}
