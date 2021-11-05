import { AlertsEventHandler, ALERT_EVENT_NAME } from "./alerts-event-handler";
import { Alert, AlertAction, AlertEvent, AlertType } from "../models";

interface CustomEvent extends Event {
  detail: AlertEvent;
}

describe("AlertsEventHandler", () => {
  const dispatchEventSpy = jest.spyOn(global, "dispatchEvent");
  const addEventListenerSpy = jest.spyOn(global, "addEventListener");
  const removeEventListenerSpy = jest.spyOn(global, "removeEventListener");
  const payloadMock = {};

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should dispatch an adding alert event with default config", () => {
    AlertsEventHandler.add({ id: "test" }, payloadMock);

    expect((dispatchEventSpy.mock.calls[0][0] as CustomEvent).detail).toEqual({
      action: AlertAction.Add,
      duration: 5000,
      id: "test",
      payload: payloadMock,
      preventDuplicated: false,
      uid: expect.any(Number),
      type: AlertType.Info,
    });
  });

  it("should dispatch an adding alert event with custom config", () => {
    const config: Alert = {
      id: "test2",
      duration: 1000,
      preventDuplicated: true,
      type: AlertType.Error,
    };
    AlertsEventHandler.add(config, {});

    expect((dispatchEventSpy.mock.calls[0][0] as CustomEvent).detail).toEqual({
      action: AlertAction.Add,
      ...config,
      payload: payloadMock,
      uid: expect.any(Number),
    });
  });

  it("should dispatch a removing alert event", () => {
    const id = "id1";
    AlertsEventHandler.remove(id);

    expect((dispatchEventSpy.mock.calls[0][0] as CustomEvent).detail).toEqual({
      action: AlertAction.Remove,
      id,
      uid: expect.any(Number),
    });
  });

  it("should subscribe a method to the alert events", () => {
    const callback = jest.fn();
    AlertsEventHandler.subscribe(callback);

    expect(addEventListenerSpy).toBeCalledWith(ALERT_EVENT_NAME, callback);
  });

  it("should unsubscribe a method of the alert events", () => {
    const callback = jest.fn();
    AlertsEventHandler.unsubscribe(callback);

    expect(removeEventListenerSpy).toBeCalledWith(ALERT_EVENT_NAME, callback);
  });
});
