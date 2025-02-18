
"use client";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  TableCell as MuiTableCell,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import { flexRender, Header } from "@tanstack/react-table";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

type PUserTableHead<T> = {
  header: Header<T, unknown>;
};

const UsersTableHead = <T,>({ header }: PUserTableHead<T>) => {


  const canPin = header.getContext().column.getCanPin();
  const isPinned = header.column.getIsPinned();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <MuiTableCell sx={{ width: header.getSize() }} component="div">
      {header.isPlaceholder ? null : (
        <Stack
          sx={{
            width: "100%",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            sx={{
              width: "100%",
              flexDirection: {
                xs: "row",
              },
              alignItems: "center",
              gap: 2,
              justifyContent: "space-between",
            }}
          >
            <Stack sx={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
              <Typography
                // variant="subtitle1"
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  color: "#6B7280",
                  textTransform: "capitalize"
                }}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Typography>
            </Stack>
            {canPin && (
              <Fragment>
                <IconButton
                  onClick={event => setAnchorEl(event.currentTarget)}
                  size="small"
                >
                  <MoreVertOutlinedIcon fontSize="small" />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  onClose={() => setAnchorEl(null)}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuList dense>
                    {isPinned !== "right" && (
                      <MenuItem onClick={() => header.column.pin("right")}>
                        <ListItemIcon>
                          <VisibilityOffOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Pin to Right</ListItemText>
                      </MenuItem>
                    )}
                    {isPinned !== "left" && (
                      <MenuItem onClick={() => header.column.pin("left")}>
                        <ListItemIcon>
                          <VisibilityOffOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Pin to Left</ListItemText>
                      </MenuItem>
                    )}
                    {isPinned && (
                      <MenuItem onClick={() => header.column.pin(false)}>
                        <ListItemIcon>
                          <VisibilityOffOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Unpin</ListItemText>
                      </MenuItem>
                    )}
                  </MenuList>
                </Menu>
              </Fragment>
            )}
          </Stack>
          {/* {canFilter && (
            // <TextField
            //   onChange={handleFilterChange}
            //   value={filterValue}
            //   size="small"
            //   placeholder="Search..."
            //   fullWidth
            // />
          )} */}
        </Stack>
      )}
    </MuiTableCell>
  );
};

export default UsersTableHead;