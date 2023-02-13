import BaseInput from "../base-input/BaseInput";
import IUseInput from "../hooks/common/IUseInput";

const TextInput: React.FC<TextInputProperties> = ({ input, label }) => {
  return <BaseInput input={input} label={label} type="text" />;
};

interface TextInputProperties {
  input: IUseInput<string>;
  label: string;
}

export default TextInput;
