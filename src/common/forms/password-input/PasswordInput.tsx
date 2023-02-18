import BaseInput from "../base-input/BaseInput";
import IUseInput from "../hooks/common/IUseInput";

const PasswordInput: React.FC<PasswordInputProperties> = ({ input }) => {
  return (
    <BaseInput
      label="Password:"
      input={input}
      type="password"
      placeholder="Password"
    />
  );
};

interface PasswordInputProperties {
  input: IUseInput<string>;
}

export default PasswordInput;
