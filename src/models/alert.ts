import { AlertAction } from "./alert-action";
import { AlertType } from "./alert-type";

export type Id = string;
export interface Alert {
  id: Id;
  duration?: number;
  preventDuplicated?: boolean;
  type?: AlertType;
  uid?: number;
}

export interface AlertEvent extends Alert {
  action: AlertAction;
  payload?: any;
  uid: number;
}

export interface AlertEventData {
  detail: AlertEvent;
}
