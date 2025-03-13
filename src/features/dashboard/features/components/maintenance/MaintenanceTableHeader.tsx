import { Table } from "@tanstack/react-table";
import {
  TableHead as MuiTableHead,
  TableRow as MuiTableRow,
} from "@mui/material";
import MaintenanceTableHead from "./MaintenanceTableHead";

type PMaintenanceTableHeader<T> = {
  table: Table<T>;
};

const MaintenanceTableHeader = <T,>({ table }: PMaintenanceTableHeader<T>) => {
  return (
    <MuiTableHead
      component="div"
      sx={theme => {
        return {
          backgroundColor: theme.palette.secondary.lighter,
          position: "sticky",
          display: "grid",
          top: 10,
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
            sx={{ display: "flex", width: "100%",  }}
          >
            {headerGroup.headers.map(header => {
              return <MaintenanceTableHead header={header} key={header.id} />;
            })}
          </MuiTableRow>
        );
      })}
    </MuiTableHead>
  );
};
export default MaintenanceTableHeader;
