import { TableContainer, Table, TableHead, TableRow, TableCell, Typography, TableBody } from "@mui/material"

export default function SecurityList() {
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

          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
