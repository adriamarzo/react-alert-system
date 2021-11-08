import styled from "styled-components";
import { AlertType } from "../../models";
import { BACKGROUND_COLOR, BORDER_RADIUS } from "./constants";

interface IAlertRootProps {
  type: AlertType;
}

const getBackgroundColorByType = ({ type }: IAlertRootProps): string =>
  BACKGROUND_COLOR[type] || BACKGROUND_COLOR[AlertType.Info];

export const AlertRoot = styled.div<IAlertRootProps>`
  position: relative;
  max-width: calc(-32px + 100vw);
  width: 370px;
  background-color: ${getBackgroundColorByType};
  padding: 0;
  border-radius: ${BORDER_RADIUS}px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 8px 0px;

  display: flex;
  height: auto;
  justify-content: flex-start;
  align-items: center;
`;

export const IconWrapper = styled.div`
  flex: 0 0 48px;
  display: flex;
  height: auto;
  justify-content: center;
  align-items: stretch;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-top-right-radius: ${BORDER_RADIUS - 1}px;
  border-bottom-right-radius: ${BORDER_RADIUS - 1}px;
  flex: 1 1 auto;
  background-color: #fff;
  overflow: hidden;
  padding: 16px;
  gap: 4px;
`;

export const Title = styled.p`
  margin: 0;
  color: #333;
  font-size: 1rem;
  line-height: 1.3rem;
  font-weight: bold;
`;

export const Description = styled(Title)`
  font-weight: 400;
`;
