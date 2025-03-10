"use client";

import {
  Menu,
  Stack,
  TableCell as MuiTableCell,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import { flexRender, Header } from "@tanstack/react-table";

type PRoleTableHead<T> = {
  header: Header<T, unknown>;
};

const PropertyTableHead = <T,>({ header }: PRoleTableHead<T>) => {
  const canPin = header.getContext().column.getCanPin();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <MuiTableCell
      sx={{ width: header.getSize(), backgroundColor: "#FFFFFF" }}
      component="div"
    >
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
                variant="subtitle1"
                sx={{
                  fontSize: "0.8rem",
                  fontWeight: "regular",
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
                ></Menu>
              </Fragment>
            )}
          </Stack>
          {/* {canFilter && (
            <TextField
              onChange={handleFilterChange}
              value={filterValue}
              size="small"
              placeholder="Search..."
              fullWidth
            />
          )} */}
        </Stack>
      )}
    </MuiTableCell>
  );
};

export default PropertyTableHead;
