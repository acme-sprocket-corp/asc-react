export default function findValueByKey(
  filterKey: string,
  object: object
): string {
  const result = Object.entries(object).find(
    ([key]) => filterKey.toLocaleLowerCase() === key
  );

  if (result) {
    return result[1] as string;
  }
  return "";
}
