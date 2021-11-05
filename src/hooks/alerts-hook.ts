import { useState, useEffect } from "react";
import { AlertEvent } from "../models";
import { AlertsEventHandler } from "../utils";
import {
  isRemoveAction,
  areExceeded,
  isDuplicated,
  removeItemById,
} from "./utils";

export function useAlerts(maxAlerts: number): AlertEvent[] {
  const [alertList, setAlertList] = useState<AlertEvent[]>([]);

  useEffect(() => {
    function handleAlertChange({
      detail: alertEvent,
    }: {
      detail: AlertEvent;
    }): void {
      if (isRemoveAction(alertEvent.action)) {
        setAlertList(removeItemById(alertList, alertEvent.id));
        return;
      }

      if (areExceeded(alertList.length, maxAlerts)) {
        return;
      }

      const { duration, id, preventDuplicated } = alertEvent;

      if (preventDuplicated && isDuplicated(alertList, id)) {
        return;
      }

      setTimeout(() => {
        AlertsEventHandler.remove(id);
      }, duration);

      setAlertList([...alertList, alertEvent]);
    }

    AlertsEventHandler.subscribe(handleAlertChange);

    return () => {
      AlertsEventHandler.unsubscribe(handleAlertChange);
    };
  });

  return alertList;
}
