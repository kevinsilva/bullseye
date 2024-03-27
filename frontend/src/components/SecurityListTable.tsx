import { TableContainer, Table, TableHead, TableRow, TableCell, Typography, TableBody } from "@mui/material"
import { SecurityListTableTypes, SecurityTypes } from "../utils/types"

export default function SecurityListTable({ data, handleClick }: SecurityListTableTypes) {
  return (
    <>
      <Typography variant="h5">Securities</Typography>
        <TableContainer>
          <Table aria-label="securities list table">
            <TableHead>
              <TableRow>
                <TableCell>Symbol</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Sector</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>Trend</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {data.map((security: SecurityTypes) => (
                <TableRow key={security.id} onClick={() => handleClick(security.ticker)}>
                  <TableCell>{security.ticker}</TableCell>
                  <TableCell>{security.name}</TableCell>
                  <TableCell>{security.sector}</TableCell>
                  <TableCell>{security.country}</TableCell>
                  <TableCell>{security.trend}</TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
    </>
  )
}
