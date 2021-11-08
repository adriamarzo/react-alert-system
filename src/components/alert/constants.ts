import { AlertType } from "../../models";

export const BORDER_RADIUS: number = 8;
export const BACKGROUND_COLOR = {
  [AlertType.Error]: "#dd3636",
  [AlertType.Warning]: "#ff9900",
  [AlertType.Success]: "#04bf95",
  [AlertType.Info]: "#489cff",
};
