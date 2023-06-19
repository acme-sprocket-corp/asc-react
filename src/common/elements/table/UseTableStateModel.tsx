import { useState } from "react";
import ITableElement from "./ITableElement";
import { IStateModel } from "./TableStateModel";
import { SortOptions } from "./SortOptions";
import { searchItems, sortItems } from "./SortHelper";

export default function useTableStateModel<T extends ITableElement>(
  initialItems: Array<T> = []
): IStateModel {
  const [items] = useState<Array<T>>(initialItems);
  const [currentItems, setCurrentItems] = useState<Array<T>>(initialItems);

  const toRows = (): JSX.Element => {
    return <>{currentItems.map((item) => item.toRow())}</>;
  };

  const headers = (): Array<string> => {
    return items.length > 0 ? items[0].headers() : [];
  };

  const sort = (header: string, sortOption: SortOptions): void => {
    setCurrentItems(sortItems([...currentItems], header, sortOption));
  };

  const search = (term: string): void => {
    setCurrentItems(searchItems(items, term));
  };

  return {
    toRows,
    headers,
    sort,
    search,
  };
}
