import { AlertAction, AlertEvent } from "../models";
import {
  isRemoveAction,
  areExceeded,
  isDuplicated,
  removeItemById,
} from "./utils";

describe("hooks utils", () => {
  const alertList: AlertEvent[] = [
    {
      action: AlertAction.Add,
      id: "1",
      uid: 1,
    },
  ];

  describe("isRemoveAction", () => {
    it("should return true when the action is remove", () => {
      expect(isRemoveAction(AlertAction.Remove)).toBeTruthy();
    });

    it("should return false when the action is not remove", () => {
      expect(isRemoveAction(null)).toBeFalsy();
      expect(isRemoveAction(AlertAction.Add)).toBeFalsy();
    });
  });

  describe("areExceeded", () => {
    it("should return true when the count is >= to the maxCount", () => {
      expect(areExceeded(1, 1)).toBeTruthy();
      expect(areExceeded(2, 1)).toBeTruthy();
    });

    it("should return false when the count is < to the maxCount", () => {
      expect(areExceeded(0, 1)).toBeFalsy();
    });
  });

  describe("isDuplicated", () => {
    it("should return true when there is an alert with the same id", () => {
      expect(isDuplicated(alertList, "1")).toBeTruthy();
    });

    it("should return true when there is not an alert with the same id", () => {
      expect(isDuplicated([], "1")).toBeFalsy();
      expect(isDuplicated(alertList, "2")).toBeFalsy();
    });
  });

  describe("removeItemById", () => {
    it("should return the same array when the alert does not exist", () => {
      expect(removeItemById(alertList, "2")).toBe(alertList);
    });

    it("should remove the alert by the id", () => {
      const updatedList = removeItemById(alertList, "1");

      expect(updatedList).not.toBe(alertList);
      expect(updatedList).toHaveLength(0);
    });
  });
});
