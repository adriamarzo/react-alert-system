import React from "react";
import AlertManager, {
  IAlertManagerProps,
} from "../components/alert-manager/alert-manager";
import { AlertType } from "../models";
import { AlertsEventHandler } from "../utils";

interface IAlertSystemProps extends IAlertManagerProps {
  alertId: string;
  alertTitle: string;
  alertDescription: string;
  preventDuplicated: boolean;
  alertType: AlertType;
}

const AlertSystem: React.FC<IAlertSystemProps> = ({
  maxAlerts,
  portalId,
  position,
  alertId,
  alertTitle,
  alertDescription,
  alertType,
  preventDuplicated,
}) => {
  const handleClick = (): void => {
    AlertsEventHandler.add({
      id: alertId,
      type: alertType,
      payload: {
        title: alertTitle,
        description: alertDescription,
      },
      preventDuplicated,
    });
  };

  return (
    <div>
      <AlertManager
        portalId={portalId}
        maxAlerts={maxAlerts}
        position={position}
      />
      <button onClick={handleClick} type="button">
        Show alert!
      </button>
    </div>
  );
};

export default AlertSystem;
