import { Id, AlertAction, Alert, AlertEvent, AlertType } from "../models";

export const ALERT_EVENT_NAME = "alert_system_update";

export class AlertsEventHandler {
  static subscribe(eventCallback: (args: any) => void): void {
    window.addEventListener(ALERT_EVENT_NAME, eventCallback);
  }

  static unsubscribe(eventCallback: (args: any) => void): void {
    window.removeEventListener(ALERT_EVENT_NAME, eventCallback);
  }

  private static emit(eventName: string, detail: AlertEvent): void {
    window.dispatchEvent(new CustomEvent(eventName, { detail }));
  }

  static add(
    {
      id,
      duration = 5000,
      preventDuplicated = false,
      type = AlertType.Info,
    }: Alert,
    payload: object
  ): void {
    AlertsEventHandler.emit(ALERT_EVENT_NAME, {
      id,
      duration,
      preventDuplicated,
      type,
      uid: Date.now(),
      payload,
      action: AlertAction.Add,
    });
  }

  static remove(id: Id): void {
    AlertsEventHandler.emit(ALERT_EVENT_NAME, {
      id,
      uid: Date.now(),
      action: AlertAction.Remove,
    });
  }
}
