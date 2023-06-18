import { useState } from "react";
import { SortOptions } from "./SortOptions";
import Table from "./Table";
import AirplaneStateModel from "./AirplaneStateModel";

const SortTable: React.FC = () => {
  const [rows, setRows] = useState<AirplaneStateModel>(
    new AirplaneStateModel([
      { id: 1, manufacturer: "Boeing", model: "737-8" },
      { id: 2, manufacturer: "Airbus", model: "A320" },
      { id: 3, manufacturer: "Boeing", model: "787-9" },
      { id: 4, manufacturer: "Embraer", model: "E-190" },
    ])
  );

  const sortRows = (header: string, sortOption: SortOptions): void => {
    setRows(new AirplaneStateModel(rows.sortAirplanes(header, sortOption)));
  };

  return (
    <Table headers={rows.headers()} canSort sortRows={sortRows}>
      {rows.toRows()}
    </Table>
  );
};
export default SortTable;
