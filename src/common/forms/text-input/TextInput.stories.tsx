import { ComponentMeta, ComponentStory } from "@storybook/react";
import useTextInput from "../hooks/use-text-input/UseTextInput";
import TextInput from "./TextInput";

export default {
  title: "Forms/Text Input",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (_arguments) => {
  const input = useTextInput();

  return <TextInput input={input} label={_arguments.label} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Text Input",
};
