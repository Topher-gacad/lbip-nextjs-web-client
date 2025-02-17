import { TUserProfileSchema } from "@/features/user/schema/user";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button, Typography } from "@mui/material";
import { useGetUsersQuery } from "./useGetUserQuery";

const columnHelper = createColumnHelper<TUserProfileSchema>();

export const useUsersTable = () => {
  const { data = { data: { data: [] } } } = useGetUsersQuery();

  const columns = [
    columnHelper.accessor("email", {
      id: "email",
      header: "Email",
      enableSorting: false,
      size: 250, //size of column in px
      meta: {label: "Email"},
      // cell: ({ getValue }) => {
      //   return <button>{getValue()}</button>;
      // },
    }),

    columnHelper.accessor("profile.first_name", {
      id: "first_name",
      header: "First Name",
      enableSorting: false,
      size: 250, //size of column in px
      meta: {label: "First name"},

    }),

    columnHelper.accessor("profile.middle_name", {
      id: "middle_name",
      header: "Middle Name",
      enableSorting: false,
      size: 250, //size of column in px
      meta: {label: "Middle name"},

    }),

    columnHelper.accessor("profile.last_name", {
      id: "last_name",
      header: "Last Name",
      enableSorting: false,
      size: 250, //size of column in px
      meta: {label: "Last name"},

    }),

    columnHelper.accessor("profile.contact_num", {
      id: "contact_num",
      header: "Contact Number",
      enableSorting: false,
      size: 250, //size of column in px
      meta: {label: "Contact number"},

    }),
    columnHelper.accessor("created_at", {
      id: "created_at",
      header: "Created At",
      enableSorting: false,
      size: 250, //size of column in px
      meta: {label: "Created at"},

    }),
    columnHelper.accessor("id", {
      id: "id",
      header: ()=>{
        return <Typography>Actions</Typography>
      },
      enableSorting: false,
      size: 250, //size of column in px
      meta: {label: "Actions"},
      cell: ({getValue}) => {
        return <Button variant="contained" onClick={()=>{console.log(getValue())}}>View</Button>
      }

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