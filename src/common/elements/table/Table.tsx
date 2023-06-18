import { ReactNode } from "react";
import { SortOptions } from "./SortOptions";

const Table: React.FC<TableProperties> = ({
  headers,
  children,
  canSort = false,
  sortRows,
}) => {
  const handleSort = (header: string, sortOption: SortOptions): void => {
    if (sortRows) {
      sortRows(header, sortOption);
    }
  };

  return (
    <table className="table is-fullwidth has-text-centered">
      <thead>
        <tr>
          {headers.map((header): JSX.Element => {
            if (canSort && sortRows) {
              return (
                <th className="has-text-centered" key={header}>
                  {header}
                  <span
                    className="icon"
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
                    className="icon"
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
            return <th key={header}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

interface TableProperties {
  headers: Array<string>;
  children: ReactNode;
  canSort?: boolean;
  sortRows?: (header: string, sortOption: SortOptions) => void;
}

export default Table;
