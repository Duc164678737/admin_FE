import React, { memo } from "react";
import { SvgIcon } from "@mui/material";
import { IIconProps } from "models";

const EndCallingIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon
      width="56"
      height="56"
      viewBox="0 0 56 56"
      sx={{ fontSize: "inherit", fill: "none", ...sx }}
      {...otherProps}
    >
      <path
        d="M31.425 24.6623C29.1932 23.8909 26.7665 23.8954 24.5375 24.6748C24.3748 24.7313 24.2295 24.8289 24.1156 24.9581C24.0017 25.0873 23.9232 25.2438 23.8875 25.4123L23.1625 29.0998C23.1282 29.2633 23.0545 29.416 22.9478 29.5445C22.841 29.6731 22.7045 29.7736 22.55 29.8373L16.6375 32.1998C16.4364 32.2831 16.2134 32.2977 16.0031 32.2411C15.7929 32.1846 15.6072 32.0602 15.475 31.8873C14.5818 30.7332 14.1399 29.2931 14.2319 27.8367C14.324 26.3802 14.9436 25.0073 15.975 23.9748C19.1651 20.7872 23.4903 18.9966 28 18.9966C32.5097 18.9966 36.8349 20.7872 40.025 23.9748C41.0563 25.0073 41.676 26.3802 41.7681 27.8367C41.8601 29.2931 41.4182 30.7332 40.525 31.8873C40.3928 32.0602 40.2071 32.1846 39.9969 32.2411C39.7866 32.2977 39.5636 32.2831 39.3625 32.1998L33.45 29.8373C33.297 29.7748 33.1614 29.6762 33.0548 29.5499C32.9481 29.4237 32.8736 29.2735 32.8375 29.1123L32.0625 25.3998C32.0291 25.2322 31.9528 25.0761 31.8411 24.9469C31.7293 24.8176 31.586 24.7195 31.425 24.6623V24.6623Z"
        stroke="#D32F2F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 37H39"
        stroke="#D32F2F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default memo(EndCallingIcon);