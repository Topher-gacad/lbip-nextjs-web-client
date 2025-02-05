"use client";

import {
  IconButton,
  Toolbar,
  useMediaQuery,
  Button,
  Box,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";
import { Theme } from "@mui/material/styles";
import { useState } from "react";
import AppBarStyled from "./AppBarStyled";
import LogoWithText from "../LogoWithText";
import useDrawerStore from "@/stores/useDrawerStore";
import { useAuthenticatedUser } from "@/features/auth/api/useAuthenticatedUser";
import { useLogoutMutation } from "@/features/auth/api/useLogoutMutation";
import Link from "next/link";
import { getNameInitials } from "@/utils";

const Header = () => {
  const { open, toggle } = useDrawerStore();
  const { data } = useAuthenticatedUser();
  const { mutate: logout } = useLogoutMutation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const menuOpen = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleLogout = () => {
    logout();
    setOpenDialog(false);
  };

  const isDesktopScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("lg")
  );

  return (
    <AppBarStyled
      position="fixed"
      open={open && isDesktopScreen}
      color="inherit"
      elevation={0}
    >
      <Toolbar
        sx={{
          borderBottom: theme => `1px solid ${theme.palette.divider}`,
        }}
      >
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggle}
          sx={{
            mr: 2,
          }}
        >
          <MenuIcon />
        </IconButton>

        {!open && <LogoWithText />}

        <Box sx={{ flexGrow: 1 }} />

        <Button
          onClick={handleProfileClick}
          sx={{
            gap: 1,
            marginLeft: "auto",
            padding: "6px",
            minWidth: "unset",
          }}
          variant="text"
        >
          <Typography variant="h6">
            {data?.data?.profile.first_name && data?.data?.profile.last_name
              ? `${data?.data?.profile.first_name} ${data?.data?.profile.last_name}`
              : ""}
          </Typography>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              fontSize: "0.700rem",
              bgcolor: theme => theme.palette.primary.dark,
            }}
            alt=""
            src=""
          >
            {getNameInitials(
              data?.data?.profile.first_name,
              data?.data?.profile.last_name
            )}
          </Avatar>
        </Button>

        <Menu
          elevation={0}
          anchorEl={anchorEl}
          id="account-menu"
          open={menuOpen}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                border: theme => `1px solid ${theme.palette.divider}`,
                width: 250,
                overflow: "visible",
                filter: "none",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 24,
                  height: 24,
                  fontSize: "0.700rem",
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                  border: theme => `1px solid ${theme.palette.divider}`,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Link
            href="/dashboard/profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Stack flexDirection="row" sx={{ gap: 0.7 }}>
                <Avatar />
                Visit Profile
              </Stack>
            </MenuItem>
          </Link>

          <Divider />
          <MenuItem onClick={handleLogoutClick}>
            <ListItemIcon>
              <Logout fontSize="small" color="error" />
            </ListItemIcon>
            <Typography color="error">Logout</Typography>
          </MenuItem>
        </Menu>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          PaperProps={{
            sx: {
              width: "100%",
              maxWidth: "400px",
              p: 2,
            },
          }}
        >
          <DialogTitle variant="h4" sx={{ textAlign: "center" }}>
            Confirm Logout
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Are you sure you want to log out? This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ gap: 1, px: 3, pb: 3 }}>
            <Button
              onClick={handleCloseDialog}
              color="primary"
              variant="outlined"
              fullWidth
            >
              Cancel
            </Button>
            <Button
              onClick={handleLogout}
              color="error"
              variant="contained"
              fullWidth
            >
              Log Out
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
