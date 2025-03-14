import { Table } from "@tanstack/react-table";
import {
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from "@mui/material";
import PropertyTableHead from "./PropertyTableHead";

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
          width: "100%",
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
              return <PropertyTableHead header={header} key={header.id} />;
            })}
          </MuiTableRow>
        );
      })}
    </MuiTableHead>
  );
};
export default PropertyTableHeader;
