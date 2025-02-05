import { SvgIcon, SvgIconProps } from "@mui/material";

const Logo = ({ ...rest }: SvgIconProps) => {
  return (
    <SvgIcon {...rest}>
      <p>logo here</p>
    </SvgIcon>
  );
};

export default Logo;
