import ITableElement from "./ITableElement";
import { searchItems, sortItems } from "./SortHelper";
import { SortOptions } from "./SortOptions";

export interface IStateModel {
  headers: () => Array<string>;
  sort: (header: string, sortOption: SortOptions) => void;
  toRows: () => JSX.Element;
  search: (term: string) => void;
}

export default class TableStateModel<T extends ITableElement>
  implements IStateModel
{
  protected _items: Array<T>;
  private _currentItems: Array<T>;
  private _setter: (stateModel: TableStateModel<T>) => void;

  protected constructor(
    items: Array<T>,
    currentItems: Array<T>,
    setter: (stateModel: TableStateModel<T>) => void
  ) {
    this._items = items;
    this._currentItems = currentItems;
    this._setter = setter;
  }

  public toRows(): JSX.Element {
    return <>{this._currentItems.map((item) => item.toRow())}</>;
  }

  public headers(): Array<string> {
    return this._items.length > 0 ? this._items[0].headers() : [];
  }

  public sort(header: string, sortOption: SortOptions): void {
    this._setter(
      new TableStateModel(
        this._items,
        sortItems(this._currentItems, header, sortOption),
        this._setter
      )
    );
  }

  public search(term: string): void {
    this._setter(
      new TableStateModel(
        this._items,
        searchItems(this._items, term),
        this._setter
      )
    );
  }
}
