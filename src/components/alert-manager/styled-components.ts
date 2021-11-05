import styled, { css } from "styled-components";
import { AlertPosition } from "../../models";

const bottomLeftPosition = css`
  bottom: 16px;
  left: 16px;
  justify-content: flex-end;
`;

const bottomRightPosition = css`
  bottom: 16px;
  right: 16px;
  justify-content: flex-end;
`;

const topLeftPosition = css`
  top: 16px;
  left: 16px;
`;

const topRightPosition = css`
  top: 16px;
  right: 16px;
`;

interface IRootProps {
  position?: AlertPosition;
  ["data-testid"]: "alerts-wrapper";
  zIndex: number;
}

export const Root = styled.div<IRootProps>`
  position: fixed;
  height: auto;
  max-height: 100vh;
  z-index: ${({ zIndex }: { zIndex: number }): number => zIndex};
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ position }: { position?: AlertPosition }) => {
    switch (position) {
      case AlertPosition.BottomRight:
        return bottomRightPosition;
      case AlertPosition.TopLeft:
        return topLeftPosition;
      case AlertPosition.TopRight:
        return topRightPosition;
      default:
        return bottomLeftPosition;
    }
  }}
`;
