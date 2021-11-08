import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "../components/alert";
import { AlertType } from "..";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    type: {
      control: { type: "select", options: Object.values(AlertType) },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Base = Template.bind({});
Base.args = {
  id: "1",
  payload: {
    title: "This is the title",
    description: "This is the description.",
  },
};
