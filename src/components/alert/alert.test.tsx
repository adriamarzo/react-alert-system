import React from "react";
import { render } from "@testing-library/react";
import Alert from "./alert";
import { AlertType } from "../../models";
import { BACKGROUND_COLOR } from "./constants";

const BASE_PROPS = {
  id: "1",
  payload: { title: "title", description: "desc" },
};

const renderComponent = (props = {}) =>
  render(<Alert {...BASE_PROPS} {...props} />);

describe("alert component", () => {
  it("should render an info alert type as a default", () => {
    const component = renderComponent();

    const alert = component.getByTestId(`alert-${BASE_PROPS.id}`);
    expect(alert).toBeTruthy();
    expect(alert).toHaveStyle(`background-color: ${BACKGROUND_COLOR.info}`);

    expect(component.getByText("title")).toBeTruthy();
    expect(component.getByTestId(`status-icon-${AlertType.Info}`)).toBeTruthy();
  });

  it("should render an error alert type", () => {
    const component = renderComponent({ type: AlertType.Error });

    const alert = component.getByTestId(`alert-${BASE_PROPS.id}`);
    expect(alert).toBeTruthy();
    expect(alert).toHaveStyle(`background-color: ${BACKGROUND_COLOR.error}`);

    expect(component.getByText("title")).toBeTruthy();
    expect(
      component.getByTestId(`status-icon-${AlertType.Error}`)
    ).toBeTruthy();
  });

  it("should render an success alert type", () => {
    const component = renderComponent({ type: AlertType.Success });

    const alert = component.getByTestId(`alert-${BASE_PROPS.id}`);
    expect(alert).toBeTruthy();
    expect(alert).toHaveStyle(`background-color: ${BACKGROUND_COLOR.success}`);

    expect(component.getByText("title")).toBeTruthy();
    expect(
      component.getByTestId(`status-icon-${AlertType.Success}`)
    ).toBeTruthy();
  });

  it("should render a warning alert type", () => {
    const component = renderComponent({ type: AlertType.Warning });

    const alert = component.getByTestId(`alert-${BASE_PROPS.id}`);
    expect(alert).toBeTruthy();
    expect(alert).toHaveStyle(`background-color: ${BACKGROUND_COLOR.warning}`);

    expect(component.getByText("title")).toBeTruthy();
    expect(
      component.getByTestId(`status-icon-${AlertType.Warning}`)
    ).toBeTruthy();
  });
});
