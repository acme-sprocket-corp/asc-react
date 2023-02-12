import { ComponentMeta, ComponentStory } from "@storybook/react";
import BaseInput from "./BaseInput";

export default {
  title: "Forms/BaseInput",
  component: BaseInput,
} as ComponentMeta<typeof BaseInput>;

const Template: ComponentStory<typeof BaseInput> = (args) => (
  <BaseInput
    type={args.type}
    label={args.label}
    placeholder={args.placeholder}
  />
);

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
