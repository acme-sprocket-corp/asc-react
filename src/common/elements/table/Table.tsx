import { SortOptions } from "./SortOptions";
import { useState } from "react";
import { IStateModel } from "./TableStateModel";

const Table: React.FC<TableProperties> = ({
  canSort = false,
  canSearch = false,
  tableElement,
}) => {
  const handleSort = (header: string, sortOption: SortOptions): void => {
    tableElement.sort(header, sortOption);
  };

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: React.FormEvent<HTMLInputElement>): void => {
    const value = (event.target as HTMLInputElement).value;

    setSearchTerm(value);
    tableElement.search(value);
  };

  return (
    <div>
      {canSearch && (
        <input
          type="text"
          className="input"
          value={searchTerm}
          onInput={handleSearch}
        />
      )}
      <table className="table is-fullwidth has-text-centered">
        <thead>
          <tr>
            {tableElement.headers().map((header): JSX.Element => {
              if (canSort) {
                return (
                  <th className="has-text-centered" key={header}>
                    <span>{header}</span>
                    <span
                      className="icon is-small is-clickable pl-1"
                      onClick={(): void =>
                        handleSort(header, SortOptions.Ascending)
                      }
                      onKeyDown={(): void =>
                        handleSort(header, SortOptions.Ascending)
                      }
                      role="button"
                      tabIndex={0}
                    >
                      <i className="fa-solid fa-arrow-up"></i>
                    </span>
                    <span
                      className="icon is-small is-clickable"
                      onClick={(): void =>
                        handleSort(header, SortOptions.Descending)
                      }
                      onKeyDown={(): void =>
                        handleSort(header, SortOptions.Descending)
                      }
                      role="button"
                      tabIndex={0}
                    >
                      <i className="fa-solid fa-arrow-down"></i>
                    </span>
                  </th>
                );
              }
              return (
                <th className="has-text-centered" key={header}>
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{tableElement.toRows()}</tbody>
      </table>
    </div>
  );
};

interface TableProperties {
  canSort?: boolean;
  canSearch?: boolean;
  tableElement: IStateModel;
}

export default Table;
