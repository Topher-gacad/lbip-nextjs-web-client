import { getColor } from "@/lib/mui/utils";
import { ValidColor } from "../../type";
import { MUIComponent } from "@/lib/mui/type";
import { Theme } from "@mui/material/styles";
import "@mui/material/Chip";

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    light: true;
    combined: true;
  }

  interface ChipPropsSizeOverrides {
    large: true;
  }
}

type GetChipColorType = {
  color: ValidColor;
  theme: Theme;
};

function getChipColor({ color, theme }: GetChipColorType) {
  const colors = getColor({ color, theme });
  const { dark } = colors;

  return {
    "&.Mui-focusVisible": {
      outline: `2px solid ${dark}`,
      outlineOffset: 2,
    },
  };
}

function getChipColorStyle({ color, theme }: GetChipColorType) {
  const colors = getColor({ color, theme });
  const { light, lighter, main } = colors;

  return {
    color: main,
    backgroundColor: lighter,
    borderColor: light,
    "& .MuiChip-deleteIcon": {
      color: main,
      "&:hover": {
        color: light,
      },
    },
  };
}

export const Chip = (theme: Theme): MUIComponent<"MuiChip"> => {
  const defaultLightChip = getChipColorStyle({ color: "secondary", theme });

  return {
    MuiChip: {
      variants: [
        {
          props: { variant: "light" },
          style: defaultLightChip,
        },
        {
          props: { variant: "light", color: "primary" },
          style: getChipColorStyle({ color: "primary", theme }),
        },
        {
          props: { variant: "light", color: "secondary" },
          style: getChipColorStyle({ color: "secondary", theme }),
        },
        {
          props: { variant: "light", color: "error" },
          style: getChipColorStyle({ color: "error", theme }),
        },
        {
          props: { variant: "light", color: "info" },
          style: getChipColorStyle({ color: "info", theme }),
        },
        {
          props: { variant: "light", color: "success" },
          style: getChipColorStyle({ color: "success", theme }),
        },
        {
          props: { variant: "light", color: "warning" },
          style: getChipColorStyle({ color: "warning", theme }),
        },
        {
          props: { variant: "combined" },
          style: defaultLightChip,
        },
        {
          props: { variant: "combined", color: "primary" },
          style: getChipColorStyle({ color: "primary", theme }),
        },
        {
          props: {
            variant: "combined",
            color: "secondary",
          },
          style: getChipColorStyle({ color: "secondary", theme }),
        },
        {
          props: { variant: "combined", color: "error" },
          style: getChipColorStyle({ color: "error", theme }),
        },
        {
          props: { variant: "combined", color: "info" },
          style: getChipColorStyle({ color: "info", theme }),
        },
        {
          props: { variant: "combined", color: "success" },
          style: getChipColorStyle({ color: "success", theme }),
        },
        {
          props: { variant: "combined", color: "warning" },
          style: getChipColorStyle({ color: "warning", theme }),
        },
        {
          props: { size: "large" },
          style: {
            fontSize: "1rem",
            height: 40,
          },
        },
      ],
      styleOverrides: {
        root: {
          borderRadius: 4,
          "&:active": {
            boxShadow: "none",
          },
          "&.MuiChip-colorPrimary": getChipColor({ color: "primary", theme }),
          "&.MuiChip-colorSecondary": getChipColor({
            color: "secondary",
            theme,
          }),
          "&.MuiChip-colorError": getChipColor({ color: "success", theme }),
          "&.MuiChip-colorInfo": getChipColor({ color: "info", theme }),
          "&.MuiChip-colorSuccess": getChipColor({ color: "success", theme }),
          "&.MuiChip-colorWarning": getChipColor({ color: "warning", theme }),
        },
      },
    },
  };
};
