"use client";

import { IconButton, Stack, Tooltip } from "@mui/material";
import { Fragment } from "react";
import { Cell } from "@tanstack/react-table";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import Link from "next/link";
import { RolePermission } from "@/constant";
import PermissionGuard from "@/features/auth/components/PermissionGuard";
import { useCallback } from "react";
import { TRoleSchema } from "@/features/auth/schema/role";
import { useRolesTableStore } from "../hooks/useRolesTableStore";

type PCell = {
  cell: Cell<TRoleSchema, unknown>;
};

const RolesTableActionsCell = ({ cell }: PCell) => {
  const { id, isDeleted } = cell.row.original as {
    id: string;
    isDeleted: boolean;
  };

  const setPendingDeletion = useRolesTableStore(
    state => state.setPendingDeletion
  );
  const setPendingRestore = useRolesTableStore(
    state => state.setPendingRestore
  );

  // Use `useCallback` to avoid function recreation on every render
  const handleDelete = useCallback(
    () => setPendingDeletion(id),
    [id, setPendingDeletion]
  );
  const handleRestore = useCallback(
    () => setPendingRestore(id),
    [id, setPendingRestore]
  );

  return (
    <Stack direction="row">
      {!isDeleted ? (
        <Fragment>
          <PermissionGuard requiredPermissions={[RolePermission.ViewOne]}>
            <Tooltip title="View Details" arrow>
              <IconButton component={Link} href={`/dashboard/role/${id}`}>
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
      ) : (
        <PermissionGuard requiredPermissions={[RolePermission.Restore]}>
          <Tooltip title="Restore Project" arrow>
            <IconButton onClick={handleRestore}>
              <RestoreOutlinedIcon color="success" fontSize="small" />
            </IconButton>
          </Tooltip>
        </PermissionGuard>
      )}
    </Stack>
  );
};

export default RolesTableActionsCell;
