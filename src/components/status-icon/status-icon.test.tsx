import React from "react";
import { render } from "@testing-library/react";
import StatusIcon from "./status-icon";
import { AlertType } from "../../models";

describe("StatusIcon component", () => {
  it("should render an info icon", () => {
    const component = render(<StatusIcon type={AlertType.Info} />);
    expect(component.container.innerHTML).toMatchSnapshot();
  });

  it("should render an warning icon", () => {
    const component = render(<StatusIcon type={AlertType.Warning} />);
    expect(component.container.innerHTML).toMatchSnapshot();
  });

  it("should render an success icon", () => {
    const component = render(<StatusIcon type={AlertType.Success} />);
    expect(component.container.innerHTML).toMatchSnapshot();
  });

  it("should render an error icon", () => {
    const component = render(<StatusIcon type={AlertType.Error} />);
    expect(component.container.innerHTML).toMatchSnapshot();
  });
});
