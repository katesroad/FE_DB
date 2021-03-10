import * as React from "react";
import arrawDown from "./icons/icon-arrow-down.svg";
import arrawLeft from "./icons/icon-arrow-left.svg";
import arrawRight from "./icons/icon-arrow-right.svg";
import deleteIcon from "./icons/icon-delete.svg";
import calendar from "./icons/icon-calendar.svg";
import moon from "./icons/icon-moon.svg";
import sun from "./icons/icon-sun.svg";
import plus from "./icons/icon-plus.svg";
import empty from "./icons/illustration-empty.svg";
import logo from "./icons/logo.svg";

export const IconArrowDown = ({ alt, ...props }) => (
  <img src={arrawDown} alt={alt} {...props} />
);
export const IconArrowLeft = ({ alt, ...props }) => (
  <img src={arrawLeft} alt={alt} {...props} />
);
export const IconArrawRight = ({ alt, ...props }) => (
  <img src={arrawRight} alt={alt} {...props} />
);
export const IconDelete = ({ alt, ...props }) => (
  <img src={deleteIcon} alt={alt} {...props} />
);
export const IconCalenddar = ({ alt, ...props }) => (
  <img src={calendar} alt={alt} {...props} />
);
export const IconMoon = ({ alt, ...props }) => (
  <img src={moon} alt={alt} {...props} />
);
export const IconSun = ({ alt, ...props }) => (
  <img src={sun} alt={alt} {...props} />
);
export const IconPlus = ({ alt, ...props }) => (
  <img src={plus} alt={alt} {...props} />
);
export const IconEmpty = ({ alt, ...props }) => (
  <img src={empty} alt={alt} {...props} />
);
export const IconLogo = ({ alt, ...props }) => (
  <img src={logo} alt={alt} {...props} />
);
