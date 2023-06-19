import Airplane from "./Airplane";
import generateTableHeader from "./GenerateTableHeader";
import ITableElement from "./ITableElement";
import { searchItems, sortItems } from "./SortHelper";
import { SortOptions } from "./SortOptions";

export default class AirplaneStateModel implements ITableElement {
  private _airplanes: Array<Airplane>;
  private _currentAirplanes: Array<Airplane>;
  private _setter: (stateModel: AirplaneStateModel) => void;

  private constructor(
    airplanes: Array<Airplane>,
    currentPlanes: Array<Airplane>,
    setter: (stateModel: AirplaneStateModel) => void
  ) {
    this._airplanes = airplanes;
    this._currentAirplanes = currentPlanes;
    this._setter = setter;
  }

  public static onInit(
    airplanes: Array<Airplane>,
    setter: (stateModel: AirplaneStateModel) => void
  ): AirplaneStateModel {
    return new AirplaneStateModel(airplanes, airplanes, setter);
  }

  public static defaultStateModel(): AirplaneStateModel {
    return new AirplaneStateModel([], [], () => {
      return;
    });
  }

  public search(term: string): void {
    this._setter(
      new AirplaneStateModel(
        this._airplanes,
        searchItems(this._airplanes, term),
        this._setter
      )
    );
  }

  public sort(header: string, sortOption: SortOptions): void {
    this._setter(
      new AirplaneStateModel(
        this._airplanes,
        sortItems(this._currentAirplanes, header, sortOption),
        this._setter
      )
    );
  }

  public headers(): Array<string> {
    return generateTableHeader({ id: 0, manufacturer: "", model: "" });
  }

  public toRows(): JSX.Element {
    return (
      <>
        {this._currentAirplanes.map((airplane): JSX.Element => {
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
