import { Table } from "@tanstack/react-table";
import {
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from "@mui/material";
import RoleTableHead from "./RolesTableHead";

type PRolesTableHeader<T> = {
  table: Table<T>;
};

const RolesTableHeader = <T,>({ table }: PRolesTableHeader<T>) => {
  return (
    <MuiTableHead
      component="div"
      sx={theme => {
        return {
          backgroundColor: theme.palette.secondary.lighter,
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
              return <RoleTableHead header={header} key={header.id} />;
            })}
          </MuiTableRow>
        );
      })}
    </MuiTableHead>
  );
};
export default RolesTableHeader;
