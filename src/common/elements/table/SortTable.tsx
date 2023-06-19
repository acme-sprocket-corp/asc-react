import { useEffect, useState } from "react";
import Table from "./Table";
import AirplaneStateModel from "./AirplaneStateModel";
import Airplane from "./Airplane";

const SortTable: React.FC = () => {
  const [stateModel, setStateModel] = useState<AirplaneStateModel>(
    AirplaneStateModel.defaultStateModel()
  );

  useEffect(() => {
    setStateModel(
      AirplaneStateModel.onInit(
        [
          new Airplane(1, "Boeing", "737-8"),
          new Airplane(2, "Airbus", "A320"),
          new Airplane(3, "Boeing", "787-9"),
          new Airplane(4, "Embraer", "E-190"),
        ],
        setStateModel
      )
    );
  }, []);

  return <Table tableElement={stateModel} canSort canSearch />;
};
export default SortTable;
