export default interface IUseInput<T> {
  value: T;
  setValue: (value: string) => void;
  isValid: boolean;
  setIsValid: (valid: boolean) => void;
}
