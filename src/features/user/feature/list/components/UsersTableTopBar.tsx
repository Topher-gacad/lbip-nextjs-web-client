"use client";

import { Table } from "@tanstack/react-table";
import ColumnVisibilitySelector from "@/components/ui/table/ColumnVisibilitySelector";
import { Stack, Button, Tooltip } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import TableSort from "@/components/ui/table/TableSort";
import UsersIncludeTrash from "./UsersIncludeTrash";
import PermissionGuard from "@/features/auth/components/PermissionGuard";
import { UserPermission } from "@/constant";
import Link from "next/link";

type PUsersTableTopBar<T> = {
  table: Table<T>;
};

const UsersTableTopBar = <T,>({ table }: PUsersTableTopBar<T>) => {
  return (
    <Stack
      sx={{
        p: 2,
        flexDirection: "row",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ColumnVisibilitySelector table={table} />
        <TableSort table={table} />
        <UsersIncludeTrash />
      </Stack>
      <Stack  sx={{
          flexDirection: "row",
          justifyContent: { sx: "flex-start", md: "flex-end" },
          gap: 1,
          flexGrow: 1,
          alignItems: "center",
        }}>
        <PermissionGuard requiredPermissions={[UserPermission.Create]}>
          <Tooltip title="Create User" arrow>
            <Button
              variant="contained"
              startIcon={<AddOutlinedIcon />}
              LinkComponent={Link}
              href="users/create"
              size="small"
            >
              Add User
            </Button>
          </Tooltip>
        </PermissionGuard>
      </Stack>
    </Stack>
  );
};
export default UsersTableTopBar;
