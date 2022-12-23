import React from "react";
import { Table as MuiTable, TableProps } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ITaskDetail } from "../../interfaces/ITaskDetail";

interface ITableProps extends TableProps {
  tableList: ITaskDetail[];
  tableHeaders: string[];
}

export const Table: React.FC<ITableProps> = (props): JSX.Element => {
  const { tableHeaders, tableList } = props;

  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders?.map((item: string) => (
              <TableCell key={item}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableList.map((row) => (
            <TableRow
              key={row.serialNo}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.values(row)?.map((item, index) => (
                <TableCell key={index}>{item}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
