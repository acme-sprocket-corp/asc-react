export default function generateTableHeader(object: object): Array<string> {
  return Object.keys(object).map((key) => key[0].toUpperCase() + key.slice(1));
}
