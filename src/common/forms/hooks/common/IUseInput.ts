export default interface IUseInput<T> {
  value: T;
  setValue: (value: string) => void;
  valid: boolean;
  setValid: (valid: boolean) => void;
}
