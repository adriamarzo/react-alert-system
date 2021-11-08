import React from "react";
import { cleanup, screen, render, act, waitFor } from "@testing-library/react";
import AlertManager from "./alert-manager";
import { AlertsEventHandler } from "../../utils";
import { Alert } from "../../models";

const CustomAlert = ({ payload }: Alert) => (
  <div data-testid="custom-alert">{payload.title}</div>
);

describe("AlertManager component", () => {
  afterEach(cleanup);

  it("should create the root element dynamically and add the alerts wrapper", () => {
    render(<AlertManager portalId="app-portal" />);

    expect(screen.getByTestId("app-portal")).toBeTruthy();
    const alertWrapper = screen.getByTestId("alerts-wrapper");
    expect(alertWrapper).toBeTruthy();
  });

  it("should have a alert when the alert event is dispatched", async () => {
    render(<AlertManager portalId="app-portal" />);
    act(() => {
      AlertsEventHandler.add(
        { id: "1" },
        { title: "Alert 1", description: "Hello!" }
      );
    });

    expect(screen.getByText("Alert 1")).toBeTruthy();
    expect(screen.getByText("Hello!")).toBeTruthy();
  });

  it("should have a custom alert", async () => {
    render(<AlertManager portalId="app-portal" AlertComponent={CustomAlert} />);
    act(() => {
      AlertsEventHandler.add(
        { id: "1" },
        { title: "Alert 1", description: "Hello!" }
      );
    });

    await waitFor(() => screen.getByTestId("custom-alert"));

    expect(screen.getByText("Alert 1")).toBeTruthy();
  });

  it("should set the custom z-index", () => {
    render(<AlertManager portalId="app-portal" zIndex={10} />);

    const alertWrapper = screen.getByTestId("alerts-wrapper");
    const style = window.getComputedStyle(alertWrapper);
    expect(style.zIndex).toBe("10");
  });
});
