"use client";

import {
  Paper,
  Stack,
  Typography,
  TableContainer as MuiTableContainer,
  Table as MuiTable,
} from "@mui/material";

import { useUsersTable } from "../hooks/useUsersTable";
import UsersTableTopBar from "./UsersTableTopBar";
import UsersTableHeader from "./UsersTableHeader";
import UsersTableBody from "./UsersTableBody";

const UsersTable = () => {
  const { table } = useUsersTable();

  return (
    <Stack sx={{ gap: 3 }}>
      <Typography variant="h3">List of all Users</Typography>
      <Stack sx={theme=>({  
          backgroundColor: `${theme.palette.common.white}`,
          px: 2,
          borderRadius: "15px"
      })}>
        <Paper
          sx={theme => ({
            border: `1px solid ${theme.palette.divider}`,
            width: "100%",
            overflow: "hidden",
            my: 3,
            mt: 3
          })}
          elevation={0}
        >
          <UsersTableTopBar table={table}/>
        </Paper>
        <MuiTableContainer
          sx={{
            overflow: "auto",
            position: "relative",
            height: 715,
            border: "1px solid #F0F0F0",
            borderRadius: "15px",
            backgroundColor: "#FEFEFE",
          }}
        >
          <MuiTable sx={{ display: "grid"}} component="div">
            <UsersTableHeader table={table} />
            <UsersTableBody table={table} />
          </MuiTable>
        </MuiTableContainer>
      </Stack>
    </Stack>
  );
};
export default UsersTable;
