import React from "react";
import { storiesOf } from "@storybook/react";
import Alert from "../components/alert";

const stories = storiesOf("Alert system", module);

stories.add("App", () => {
  return <Alert />;
});
