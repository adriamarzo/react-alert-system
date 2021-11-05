import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useAlerts } from "../../hooks";
import { AlertEvent, AlertPosition } from "../../models";
import Alert from "../alert";
import { Root } from "./styled-components";

interface IAlertManagerProps {
  maxAlerts?: number;
  portalId: string;
  position?: AlertPosition;
  AlertComponent?: React.FC<AlertEvent>;
  zIndex?: number;
}

const AlertManager: React.FC<IAlertManagerProps> = ({
  maxAlerts = 15,
  portalId,
  position = AlertPosition.BottomLeft,
  AlertComponent = Alert,
  zIndex = 1,
}) => {
  const alertList = useAlerts(maxAlerts);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let portalDOMElement = document.getElementById(portalId);

    if (!portalDOMElement) {
      portalDOMElement = document.createElement("div");
      portalDOMElement.id = portalId;
      portalDOMElement.setAttribute("data-testid", portalId);
      document.body.appendChild(portalDOMElement);
    }

    setPortalElement(portalDOMElement);
  }, [portalId]);

  return portalElement
    ? ReactDOM.createPortal(
        <Root position={position} data-testid="alerts-wrapper" zIndex={zIndex}>
          {alertList.map((alert) => (
            <AlertComponent key={alert.uid} {...alert} />
          ))}
        </Root>,
        portalElement
      )
    : null;
};

export default AlertManager;
