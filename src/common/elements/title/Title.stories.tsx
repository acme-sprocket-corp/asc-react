import { ComponentMeta, ComponentStory } from "@storybook/react";
import Title from "./Title";
import { TitleSize } from "./TitleSize";

export default {
  title: "Elements/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (_arguments) => (
  <Title title={_arguments.title} titleSize={_arguments.titleSize} />
);

export const SizeOne = Template.bind({});
SizeOne.args = {
  title: "Size One",
  titleSize: TitleSize.One,
};

export const SizeTwo = Template.bind({});
SizeTwo.args = {
  title: "Size Two",
  titleSize: TitleSize.Two,
};

export const SizeThree = Template.bind({});
SizeThree.args = {
  title: "Size Three",
  titleSize: TitleSize.Three,
};

export const SizeFour = Template.bind({});
SizeFour.args = {
  title: "Size Four",
  titleSize: TitleSize.Four,
};

export const SizeFive = Template.bind({});
SizeFive.args = {
  title: "Size Five",
  titleSize: TitleSize.Five,
};

export const SizeSix = Template.bind({});
SizeSix.args = {
  title: "Size Six",
  titleSize: TitleSize.Six,
};
