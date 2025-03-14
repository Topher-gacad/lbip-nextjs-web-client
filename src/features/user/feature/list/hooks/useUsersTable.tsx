import { TUserProfileSchema } from "@/features/user/schema/user";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Typography } from "@mui/material";
import { useGetUsersQuery } from "./useGetUsersQuery";
import UsersTableActions from "../components/UsersTableActions";
import Link from "next/link";

const columnHelper = createColumnHelper<TUserProfileSchema>();

export const useUsersTable = () => {
  const { data = { data: { data: [] } } } = useGetUsersQuery();

  const columns = [
    columnHelper.accessor(
      row => `${row.profile.first_name} ${row.profile.last_name}`,
      {
        id: "full_name",
        header: "Full Name",
        enableSorting: false,
        size: 280,
        meta: { label: "Full Name" },
        cell: ({ row, getValue }) => {
          const userId = row?.original?.id;

          return (
            <Link
              href={`/dashboard/users/${userId}`}
              style={{ textDecoration: "none" }}
            >
              <Typography
                component="span"
                sx={{
                  color: theme => theme.palette.common.black,
                  textDecoration: "none",
                  fontWeight: 600,
                  "&:hover": {
                    color: theme => theme.palette.primary.main,
                    textDecoration: "underline",
                  },
                }}
              >
                {getValue()}
              </Typography>
            </Link>
          );
        },
      }
    ),
    columnHelper.accessor("roles", {
      id: "roles",
      header: "Roles",
      enableSorting: false,
      size: 280,
      meta: { label: "Roles" },
      cell: ({ getValue }) => {
        const roles = getValue();
        return roles.map(role => role.name).join(", ");
      },
    }),

    columnHelper.accessor("email", {
      id: "email",
      header: "Email",
      enableSorting: false,
      size: 310, //size of column in px
      meta: { label: "Email" },
      // cell: ({ getValue }) => {
      //   return <button>{getValue()}</button>;
      // },
    }),

    // columnHelper.accessor("profile.first_name", {
    //   id: "first_name",
    //   header: "First Name",
    //   enableSorting: false,
    //   size: 250, //size of column in px
    //   meta: { label: "First name" },
    // }),

    // columnHelper.accessor("profile.middle_name", {
    //   id: "middle_name",
    //   header: "Middle Name",
    //   enableSorting: false,
    //   size: 250, //size of column in px
    //   meta: { label: "Middle name" },
    // }),

    // columnHelper.accessor("profile.last_name", {
    //   id: "last_name",
    //   header: "Last Name",
    //   enableSorting: false,
    //   size: 250, //size of column in px
    //   meta: { label: "Last name" },
    // }),

    columnHelper.accessor("profile.contact_number", {
      id: "contact_number",
      header: "Contact Number",
      enableSorting: false,
      size: 250, //size of column in px
      meta: { label: "Contact number" },
    }),
    // columnHelper.accessor("created_at", {
    //   id: "created_at",
    //   header: "Created At",
    //   enableSorting: false,
    //   size: 250, //size of column in px
    //   meta: { label: "Created at" },
    // }),
    columnHelper.accessor("id", {
      id: "id",
      header: () => {
        return <Typography>Actions</Typography>;
      },
      enableSorting: false,
      size: 150,
      meta: { label: "Actions" },
      cell: ({ cell }) => {
        return <UsersTableActions cell={cell} />;
      },
    }),
  ];

  const table = useReactTable({
    data: data.data.data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    manualFiltering: true,
    manualPagination: true,
  });

  return { table };
};
