import ITableElement from "./ITableElement";

export default class Airplane implements ITableElement {
  private _id: number;
  private _manufacturer: string;
  private _model: string;

  public constructor(id: number, manufacturer: string, model: string) {
    this._id = id;
    this._manufacturer = manufacturer;
    this._model = model;
  }

  public toRow(): JSX.Element {
    return (
      <tr key={this._id}>
        <td>{this._id}</td>
        <td>{this._manufacturer}</td>
        <td>{this._model}</td>
      </tr>
    );
  }

  public headers(): Array<string> {
    return ["Id", "Manufacturer", "Model"];
  }
}
