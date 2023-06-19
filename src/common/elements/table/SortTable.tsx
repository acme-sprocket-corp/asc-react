import { useEffect, useState } from "react";
import Table from "./Table";
import AirplaneStateModel from "./AirplaneStateModel";

const SortTable: React.FC = () => {
  const [stateModel, setStateModel] = useState<AirplaneStateModel>(
    AirplaneStateModel.defaultStateModel()
  );

  useEffect(() => {
    setStateModel(
      AirplaneStateModel.onInit(
        [
          { id: 1, manufacturer: "Boeing", model: "737-8" },
          { id: 2, manufacturer: "Airbus", model: "A320" },
          { id: 3, manufacturer: "Boeing", model: "787-9" },
          { id: 4, manufacturer: "Embraer", model: "E-190" },
        ],
        setStateModel
      )
    );
  }, []);

  return <Table tableElement={stateModel} canSort />;
};
export default SortTable;
