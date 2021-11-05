import { renderHook, act } from "@testing-library/react-hooks";
import { useAlerts } from "./alerts-hook";
import { Id } from "../models";
import { AlertsEventHandler } from "../utils";

function addAlert(id: Id): void {
  act(() => {
    AlertsEventHandler.add(
      {
        id,
      },
      { title: "title" }
    );
  });
}

describe("Alerts hook", () => {
  it("should return an empty array initally", () => {
    const { result } = renderHook(() => useAlerts(2));
    expect(result.current).toHaveLength(0);
  });

  it("should add the alert to the alert list", () => {
    const { result } = renderHook(() => useAlerts(2));

    addAlert("1");

    expect(result.current).toHaveLength(1);
  });

  it("should add alerts until it reaches the limit", () => {
    const { result } = renderHook(() => useAlerts(2));

    addAlert("1");
    addAlert("2");

    expect(result.current).toHaveLength(2);

    addAlert("3");

    expect(result.current).toHaveLength(2);
  });

  it("should remove the alert", () => {
    const { result } = renderHook(() => useAlerts(2));

    addAlert("1");

    expect(result.current).toHaveLength(1);

    act(() => {
      AlertsEventHandler.remove("1");
    });

    expect(result.current).toHaveLength(0);
  });
});
