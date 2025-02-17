import { Table } from "@tanstack/react-table";
import {
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from "@mui/material";
import UsersTableHead from "./UsersTableHead";


type PUsersTableHeader<T> = {
  table: Table<T>;
};

const UsersTableHeader = <T,>({ table }: PUsersTableHeader<T>) => {
  return (
    <MuiTableHead
      component="div"
      sx={theme => {
        return {
          backgroundColor: "#fffff",
          position: "sticky",
          display: "grid",
          top: 0,
          zIndex: theme.zIndex.appBar - 1,
        };
      }}
    >
      {table.getHeaderGroups().map(headerGroup => {
        return (
          <MuiTableRow
            component="div"
            key={headerGroup.id}
            sx={{ display: "flex", width: "100%" }}
          >
            {headerGroup.headers.map(header => {
              return <UsersTableHead header={header} key={header.id} />;
            })}
          </MuiTableRow>
        );
      })}
    </MuiTableHead>
  );
};
export default UsersTableHeader;