import { Id, AlertAction, Alert, AlertEvent } from "../models";

export const isRemoveAction = (action: AlertAction): boolean =>
  action === AlertAction.Remove;

export const areExceeded = (count: number, maxCount: number): boolean =>
  count >= maxCount;

export const isDuplicated = (alertList: Alert[], id: Id): boolean =>
  alertList.some(({ id: alertId }) => alertId === id);

export const removeItemById = (array: AlertEvent[], id: Id): AlertEvent[] => {
  const index = array.findIndex(({ id: itemId }) => itemId === id);

  if (index < 0) {
    return array;
  }

  const newArray = [...array];
  newArray.splice(index, 1);

  return newArray;
};
