import findValueByKey from "./FindValueByKey";
import { SortOptions } from "./SortOptions";

export function sortItems<T extends object>(
  items: Array<T>,
  property: string,
  sortOption: SortOptions
): Array<T> {
  if (items.length === 0) {
    return items;
  }

  const filterKey = Object.keys(items[0]).find(
    (x) => x === property.toLocaleLowerCase()
  );

  if (filterKey) {
    return sortOption === SortOptions.Descending
      ? items.sort((a, b) => {
          if (findValueByKey(filterKey, a) > findValueByKey(filterKey, b)) {
            return 1;
          } else if (
            findValueByKey(filterKey, a) < findValueByKey(filterKey, b)
          ) {
            return -1;
          }
          return 0;
        })
      : items.sort((a, b) => {
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

  return items;
}

export function searchItems<T extends object>(
  items: Array<T>,
  property: string
): Array<T> {
  if (items.length === 0) {
    return items;
  }

  return items.filter((item) => {
    return Object.entries(item).some(([, value]) => {
      return String(value as string)
        .toLocaleLowerCase()
        .includes(property.toLocaleLowerCase());
    });
  });
}
