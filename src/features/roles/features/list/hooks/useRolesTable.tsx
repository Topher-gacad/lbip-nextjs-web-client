import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useGetRolesQuery } from "./useGetRolesQuery";
import RolesTableActionsCell from "../components/RoleTableActionsCell";
import { TRole } from "@/features/roles/schema/role";

const columnHelper = createColumnHelper<TRole>();

export const useRolesTable = () => {
  const { data = { data: { data: [] } } } = useGetRolesQuery();

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: "Roles",
      enableSorting: false,
      size: 250,
      meta: { label: "Roles" },
      // cell: ({ getValue }) => {
      //   return <button>{getValue()}</button>;
      // },
    }),
    columnHelper.accessor("id", {
      meta: {
        label: "Actions",
        // allowed: [
        //   ProjectPermission.ViewOne,
        //   ProjectPermission.SoftDelete,
        //   ProjectPermission.Restore,
        // ],
      },
      id: "actions",
      header: "Actions",
      enableSorting: false,
      enableResizing: false,
      size: 100,
      enablePinning: false,
      enableColumnFilter: false,
      enableGlobalFilter: false,
      cell: ({ cell }) => {
        return <RolesTableActionsCell cell={cell} />;
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
    enableRowSelection: true,
  });

  return { table };
};
