import Airplane from "./Airplane";
import TableStateModel, { IStateModel } from "./TableStateModel";

export default class AirplaneStateModel
  extends TableStateModel<Airplane>
  implements IStateModel
{
  private constructor(
    airplanes: Array<Airplane>,
    currentPlanes: Array<Airplane>,
    setter: (stateModel: AirplaneStateModel) => void
  ) {
    super(airplanes, currentPlanes, setter);
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
}
