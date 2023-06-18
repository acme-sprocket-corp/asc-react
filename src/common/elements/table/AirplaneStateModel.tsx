import Airplane from "./Airplane";
import findValueByKey from "./FindValueByKey";
import generateTableHeader from "./GenerateTableHeader";
import ITableRow from "./ITableRow";
import { SortOptions } from "./SortOptions";

export default class AirplaneStateModel implements ITableRow {
  private _airplanes: Array<Airplane>;

  public constructor(airplanes: Array<Airplane>) {
    this._airplanes = airplanes;
  }

  public get airplanes(): Array<Airplane> {
    return this._airplanes;
  }

  public sortAirplanes(
    header: string,
    sortOption: SortOptions
  ): Array<Airplane> {
    const filterKey = Object.keys(this.airplanes[0]).find(
      (x) => x === header.toLocaleLowerCase()
    );

    if (filterKey) {
      return sortOption === SortOptions.Descending
        ? this._airplanes.sort((a, b) => {
            if (findValueByKey(filterKey, a) > findValueByKey(filterKey, b)) {
              return 1;
            } else if (
              findValueByKey(filterKey, a) < findValueByKey(filterKey, b)
            ) {
              return -1;
            }
            return 0;
          })
        : this._airplanes.sort((a, b) => {
            if (findValueByKey(filterKey, a) < findValueByKey(filterKey, b)) {
              return 1;
            } else if (
              findValueByKey(filterKey, a) > findValueByKey(filterKey, b)
            ) {
              return -1;
            }
            return 0;
          });
    }

    return this._airplanes;
  }

  public headers(): Array<string> {
    return generateTableHeader(this._airplanes[0]);
  }

  public toRows(): JSX.Element {
    return (
      <>
        {this._airplanes.map((airplane): JSX.Element => {
          return (
            <tr key={airplane.id}>
              <td>{airplane.id}</td>
              <td>{airplane.manufacturer}</td>
              <td>{airplane.model}</td>
            </tr>
          );
        })}
      </>
    );
  }
}
