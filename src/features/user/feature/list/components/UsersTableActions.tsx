import { UserPermission } from "@/constant"
import { Cell } from "@tanstack/react-table";
import PermissionGuard from "@/features/auth/components/PermissionGuard"
import { TUserProfileSchema } from "@/features/user/schema/user";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { IconButton, Tooltip, Stack } from "@mui/material"
import Link from "next/link"
import { Fragment } from "react"

type PCell = {
  cell: Cell<TUserProfileSchema, unknown>;
};

const UsersTableActions = ({cell}: PCell) => {

  const id = cell.row.original.id;
  return (
    <Stack sx={{ 
        flexDirection: "row"
     }}>
        <Fragment>
          <PermissionGuard requiredPermissions={[UserPermission.ViewAny]}>
              <Tooltip title="View Details" arrow>
                <IconButton component={Link} href={`/dashboard/users/${id}`}>
                  <RemoveRedEyeOutlinedIcon color="info" fontSize="small" />
                </IconButton>
              </Tooltip>
          </PermissionGuard>
        </Fragment>
    </Stack>
  )
}
export default UsersTableActions