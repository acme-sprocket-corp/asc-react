import Table from "./Table";
import Airplane from "./Airplane";
import useTableStateModel from "./UseTableStateModel";

const SortTable: React.FC = () => {
  const stateModel = useTableStateModel([
    new Airplane(1, "Boeing", "737-8"),
    new Airplane(2, "Airbus", "A320"),
    new Airplane(3, "Boeing", "787-9"),
    new Airplane(4, "Embraer", "E-190"),
  ]);

  return <Table tableElement={stateModel} canSort canSearch />;
};
export default SortTable;
