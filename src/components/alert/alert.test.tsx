import React from "react";
import { render } from "@testing-library/react";
import Alert from "./alert";

describe("alert component", () => {
  it("should render the alert", () => {
    const component = render(<Alert />);
    expect(component.container).toHaveTextContent("I'm an alert");
  });
});
