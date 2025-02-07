import { SvgIcon, SvgIconProps } from "@mui/material";

const Logo = ({ ...rest }: SvgIconProps) => {
  return (
    <SvgIcon {...rest}>
      logo here
    </SvgIcon>
  );
};

export default Logo;
