import React from "react";
import { AlertPosition, AlertType, Alert } from "../../models";
import StatusIcon from "../status-icon";
import {
  AlertRoot,
  IconWrapper,
  ContentWrapper,
  Title,
  Description,
} from "./styled-components";
interface IAlertUIProps extends Alert {
  payload?: {
    title: string;
    description?: string;
  };
  position: AlertPosition;
}

const AlertUI: React.FC<IAlertUIProps> = ({
  payload,
  type = AlertType.Info,
  id,
  position,
}) => {
  const { description = "", title } = payload || {};

  return (
    <AlertRoot type={type} data-testid={`alert-${id}`} position={position}>
      <IconWrapper>
        <StatusIcon type={type} />
      </IconWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </ContentWrapper>
    </AlertRoot>
  );
};

export default AlertUI;
