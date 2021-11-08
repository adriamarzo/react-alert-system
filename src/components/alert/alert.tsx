import React from "react";
import { AlertType, Alert } from "../../models";
import StatusIcon from "../status-icon";
import {
  AlertRoot,
  IconWrapper,
  ContentWrapper,
  Title,
  Description,
} from "./styled-components";
interface IPayload {
  title: string;
  description?: string;
}

const AlertUI: React.FC<Alert> = ({ payload, type = AlertType.Info, id }) => {
  const { description = "", title }: IPayload = payload || {};

  return (
    <AlertRoot type={type} data-testid={`alert-${id}`}>
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
