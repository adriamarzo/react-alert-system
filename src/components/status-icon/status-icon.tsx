import React from "react";
import { AlertType } from "../..";
import { Paths } from "./constants";

interface IStatusIconProps {
  type: AlertType;
}
const StatusIcon: React.FC<IStatusIconProps> = ({ type }) => (
  <svg
    data-testid={`status-icon-${type}`}
    height="24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={Paths[type]} fill="#ffffff" fillRule="nonzero"></path>
  </svg>
);

export default StatusIcon;
