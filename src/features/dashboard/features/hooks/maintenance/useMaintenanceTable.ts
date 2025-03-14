import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TMaintenance } from "../../../schema/maintenance";
import { useGetMaintenanceQuery } from "./useGetMaintenanceQuery";
//   import RolesTableActionsCell from "../components/RoleTableActionsCell";

const columnHelper = createColumnHelper<TMaintenance>();

export const useMaintenanceTable = () => {
  const { data } = useGetMaintenanceQuery();

  // Ensure data is structured properly
  const tableData = data?.data ? [data.data] : [];

  const columns = [
    columnHelper.accessor("property", {
      id: "property",
      header: "Property",
      enableSorting: false,
      size: 208,
      meta: { label: "Property" },
    }),

    columnHelper.accessor("space", {
      id: "space",
      header: "Space",
      enableSorting: false,
      size: 208,
      meta: { label: "Space" },
    }),

    columnHelper.accessor("priority", {
      id: "priority",
      header: "Priority",
      enableSorting: false,
      size: 208,
      meta: { label: "priority" },
    }),

    columnHelper.accessor("status", {
      id: "status",
      header: "Status",
      enableSorting: false,
      size: 208,
      meta: { label: "status" },
    }),

    columnHelper.accessor("action", {
      id: "action",
      header: "Action",
      enableSorting: false,
      size: 92,
      meta: { label: "action" },
    }),
  ];

  const table = useReactTable({
    data: tableData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    manualSorting: true,
    manualFiltering: true,
    manualPagination: true,
  });

  return { table };
};
