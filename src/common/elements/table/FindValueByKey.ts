export default function findValueByKey(
  filterKey: string,
  object: object
): string {
  const result = Object.entries(object).find(
    ([key]) => filterKey.toLocaleLowerCase() === key
  );

  if (result) {
    const valuePosition = 1;

    return result[valuePosition] as string;
  }
  return "";
}
