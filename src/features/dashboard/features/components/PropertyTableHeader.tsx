import { Table } from "@tanstack/react-table";
import {
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from "@mui/material";
import DashboardTableHead from "./PropertyTableHead";

type PPropertyTableHeader<T> = {
  table: Table<T>;
};

const PropertyTableHeader = <T,>({ table }: PPropertyTableHeader<T>) => {
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
              return <DashboardTableHead header={header} key={header.id} />;
            })}
          </MuiTableRow>
        );
      })}
    </MuiTableHead>
  );
};
export default PropertyTableHeader;
