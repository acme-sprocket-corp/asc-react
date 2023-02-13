import ValueDefaults from "../../../value-defaults/ValueDefaults";
import IUseInput from "../common/IUseInput";
import useInput from "../common/UseInput";

export default function useTextInput(
  initialValue = ValueDefaults.String
): IUseInput<string> {
  return useInput(initialValue, (value) => value);
}
