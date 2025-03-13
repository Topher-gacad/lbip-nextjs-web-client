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
      size: 280,
      meta: { label: "Property" },
    }),

    columnHelper.accessor("space", {
      id: "space",
      header: "Space",
      enableSorting: false,
      size: 280,
      meta: { label: "Space" },
    }),

    columnHelper.accessor("ticket", {
      id: "ticket",
      header: "Ticket",
      enableSorting: false,
      size: 280,
      meta: { label: "ticket" },
    }),

    columnHelper.accessor("action", {
      id: "action",
      header: "Action",
      enableSorting: false,
      size: 84,
      meta: { label: "action" },
    }),

    columnHelper.accessor("type", {
      id: "type",
      header: "Type",
      enableSorting: false,
      size: 80,
      meta: { label: "type", isHidden: true },
    }),
  ];

  const table = useReactTable({
    data: tableData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility: {
        type: false, // Hide "type" column from the UI
      },
    },
    manualSorting: true,
    manualFiltering: true,
    manualPagination: true,
  });

  return { table };
};
