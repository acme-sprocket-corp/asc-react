import { ComponentMeta, ComponentStory } from "@storybook/react";
import useTextInput from "../hooks/use-text-input/UseTextInput";
import PasswordInput from "./PasswordInput";

export default {
  title: "Forms/Password Input",
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = () => {
  const input = useTextInput();

  return <PasswordInput input={input} />;
};

export const Default = Template.bind({});
