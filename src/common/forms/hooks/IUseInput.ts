export default interface IUseInput<T> {
  value: T;
  updateValue: (event: React.FormEvent<HTMLInputElement>) => void;
}
