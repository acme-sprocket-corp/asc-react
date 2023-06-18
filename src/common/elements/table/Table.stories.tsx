import { Meta, StoryObj } from "@storybook/react";
import Table from "./Table";
import SortTable from "./SortTable";

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof Table> = {
  render: () => <SortTable />,
};
