import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AlertSystem from "./alert-system";
import { AlertType, AlertPosition } from "..";

export default {
  title: "Alert System",
  component: AlertSystem,
  argTypes: {
    position: {
      options: Object.values(AlertPosition).filter(
        (position) => typeof position === "number"
      ),
      control: {
        type: "select",
        labels: Object.entries(AlertPosition)
          .filter(([, value]) => typeof value === "number")
          .reduce(
            (positions, [key, value]) => ({ ...positions, [value]: key }),
            {}
          ),
      },
    },
    alertType: {
      control: { type: "select", options: Object.values(AlertType) },
    },
  },
} as ComponentMeta<typeof AlertSystem>;

const Template: ComponentStory<typeof AlertSystem> = (args) => (
  <AlertSystem {...args} />
);

export const Base = Template.bind({});
Base.args = {
  maxAlerts: 15,
  portalId: "test",
  position: AlertPosition.BottomLeft,
  alertId: "id",
  alertTitle: "I'm the title",
  alertDescription: "I'm the description",
  alertType: AlertType.Info,
  preventDuplicated: false,
};
