import { ComponentMeta, ComponentStory } from "@storybook/react";
import useTextInput from "../hooks/use-text-input/UseTextInput";
import BaseInput from "./BaseInput";

export default {
  title: "Forms/BaseInput",
  component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (_arguments) => {
  const input = useTextInput();

  return (
    <BaseInput
      input={input}
      type={_arguments.type}
      label={_arguments.label}
      placeholder={_arguments.placeholder}
    />
  );
};

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  label: "Text Input",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  type: "number",
  label: "Number Input",
};

export const DateInput = Template.bind({});
DateInput.args = {
  type: "date",
  label: "Date Input",
};
