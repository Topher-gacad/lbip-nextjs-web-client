import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
//   import RolesTableActionsCell from "../components/RoleTableActionsCell";
import { useGetPropertyQuery } from "./useGetPropertyQuery";
import { TProperty } from "../../schema/property";

const columnHelper = createColumnHelper<TProperty>();

export const usePropertyTable = () => {
  const { data } = useGetPropertyQuery();

  // Ensure data is structured properly
  const tableData = data?.data ? [data.data] : [];

  const columns = [
    columnHelper.accessor("property", {
      id: "property",
      header: "Property",
      enableSorting: false,
      size: 250,
      meta: { label: "Property" },
    }),

    columnHelper.accessor("space", {
      id: "space",
      header: "Space",
      enableSorting: false,
      size: 100,
      meta: { label: "Space" },
    }),

    columnHelper.accessor("ticket", {
      id: "ticket",
      header: "Ticket",
      enableSorting: false,
      size: 100,
      meta: { label: "ticket" },
    }),

    columnHelper.accessor("action", {
      id: "action",
      header: "Action",
      enableSorting: false,
      size: 100,
      meta: { label: "action" },
    }),

    columnHelper.accessor("type", {
      id: "type",
      header: "Type",
      enableSorting: false,
      size: 100,
      meta: { label: "type" },
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
