import { styled } from "@mui/material/styles";
import { ListItemButton, ListItemButtonProps } from "@mui/material";
import { common } from "@mui/material/colors";

type CustomListItemButtonProps = ListItemButtonProps & {
  isItem: boolean;
};
export const ListItemButtonStyled = styled(ListItemButton, {
  shouldForwardProp: prop => prop !== "isItem",
})<CustomListItemButtonProps>(({ theme, selected, isItem = false }) => {
  const isSelectedItem = selected && isItem;

  return {
    transition: [
      theme.transitions.create(["background", "color"], {
        easing: theme.transitions.easing.easeIn,
        duration: "50ms",
      }),
    ],
    borderRadius: 6,
    marginLeft: theme.spacing(4), // Adjust margin here
    marginRight: theme.spacing(4), // Adjust margin here
    padding: 5,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: common.white,
    },
    ...(isSelectedItem
      ? {
          "&.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            borderRight: `2px solid ${theme.palette.primary.main}`,
          },
        }
      : {
          "&.Mui-selected, &.Mui-selected:hover": {
            backgroundColor: "transparent",
            color: theme.palette.primary.main,
          },
        }),
  };
});
