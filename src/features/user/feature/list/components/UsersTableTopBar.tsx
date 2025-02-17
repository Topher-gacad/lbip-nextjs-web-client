"use client";

import { Table } from "@tanstack/react-table";
import ColumnVisibilitySelector from "@/components/ui/table/ColumnVisibilitySelector";
import { Stack } from "@mui/material";

type PUsersTableTopBar<T> = {
  table: Table<T>;
};

const UsersTableTopBar = <T,>({ table }: PUsersTableTopBar<T>) => {
  return (
    <Stack
      sx={{
        p: 2,
      }}
    >
      <ColumnVisibilitySelector table={table} />
    </Stack>
  );
};
export default UsersTableTopBar;
