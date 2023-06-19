export default interface ITableElement {
  toRow: () => JSX.Element;
  headers: () => Array<string>;
}
