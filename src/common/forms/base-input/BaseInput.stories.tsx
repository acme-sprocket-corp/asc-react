import { ComponentMeta, ComponentStory } from "@storybook/react";
import useInput from "../hooks/UseInput";
import BaseInput from "./BaseInput";

export default {
  title: "Forms/BaseInput",
  component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => {
  const input = useInput("initial", (value) => value);

  return (
    <BaseInput
      input={input}
      type={args.type}
      label={args.label}
      placeholder={args.placeholder}
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
