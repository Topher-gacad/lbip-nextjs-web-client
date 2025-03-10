"use client";

import { IconButton, Stack, Tooltip } from "@mui/material";
import { Fragment } from "react";
import { Cell } from "@tanstack/react-table";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Link from "next/link";
import { RolePermission } from "@/constant";
import PermissionGuard from "@/features/auth/components/PermissionGuard";
import { useCallback } from "react";
import { useRolesTableStore } from "../hooks/useRolesTableStore";
import { TRole } from "@/features/roles/schema/role";

type PCell = {
  cell: Cell<TRole, unknown>;
};

const RolesTableActionsCell = ({ cell }: PCell) => {
  const { id } = cell.row.original as {
    id: string;
  };

  const setPendingDeletion = useRolesTableStore(
    state => state.setPendingDeletion
  );

  // Use `useCallback` to avoid function recreation on every render
  const handleDelete = useCallback(
    () => setPendingDeletion(id),
    [id, setPendingDeletion]
  );

  return (
    <Stack direction="row">
      <Fragment>
        <PermissionGuard requiredPermissions={[RolePermission.ViewOne]}>
          <Tooltip title="View Details" arrow>
            <IconButton component={Link} href={`/dashboard/roles/${id}`}>
              <RemoveRedEyeOutlinedIcon color="info" fontSize="small" />
            </IconButton>
          </Tooltip>
        </PermissionGuard>
        <PermissionGuard requiredPermissions={[RolePermission.HardDelete]}>
          <Tooltip title="Archive Project" arrow>
            <IconButton onClick={handleDelete}>
              <DeleteOutlinedIcon color="error" fontSize="small" />
            </IconButton>
          </Tooltip>
        </PermissionGuard>
      </Fragment>
    </Stack>
  );
};

export default RolesTableActionsCell;
