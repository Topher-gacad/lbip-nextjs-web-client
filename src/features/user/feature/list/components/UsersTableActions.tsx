import { UserPermission } from "@/constant";
import { Cell } from "@tanstack/react-table";
import PermissionGuard from "@/features/auth/components/PermissionGuard";
import { TUserProfileSchema } from "@/features/user/schema/user";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton, Tooltip, Stack } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";
import { useUsersTableStore } from "../hooks/useUsersTableStore";

type PCell = {
  cell: Cell<TUserProfileSchema, unknown>;
};

const UsersTableActions = ({ cell }: PCell) => {
  const isDeleted = Boolean(cell.row.original.deleted_at);
  const id = cell.row.original.id;

  const setPendingDeletion = useUsersTableStore(
    state => state.setPendingDeletion
  );

  const setPendingRestore = useUsersTableStore(
    state => state.setPendingRestore
  );

  return (
    <Stack
      sx={{
        flexDirection: "row",
      }}
    >
      {!isDeleted ? (
        <Fragment>
          <PermissionGuard requiredPermissions={[UserPermission.ViewAny]}>
            <Tooltip title="View Details" arrow>
              <IconButton component={Link} href={`/dashboard/users/${id}`}>
                <RemoveRedEyeOutlinedIcon
                  sx={theme => ({
                    color: `${theme.palette.primary.main}`
                  })}
                  fontSize="small"
                />
              </IconButton>
            </Tooltip>
          </PermissionGuard>

          <PermissionGuard requiredPermissions={[UserPermission.SoftDelete]}>
            <Tooltip title="View Details" arrow>
              <IconButton onClick={() => setPendingDeletion(id)}>
                <DeleteOutlinedIcon color="error" fontSize="small" />
              </IconButton>
            </Tooltip>
          </PermissionGuard>
        </Fragment>
      ) : (
        <Tooltip title="Restore User" arrow>
          <PermissionGuard requiredPermissions={[UserPermission.Restore]}>
            <IconButton onClick={() => setPendingRestore(id)}>
              <RestoreOutlinedIcon color="success" fontSize="small" />
            </IconButton>
          </PermissionGuard>
        </Tooltip>
      )}
    </Stack>
  );
};
export default UsersTableActions;
