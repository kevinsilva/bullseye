import { TableContainer, Table, TableHead, TableRow, TableCell, Typography, TableBody, Box } from "@mui/material"
import { SecurityListTableTypes, SecurityTypes } from "../utils/types"

export default function SecurityListTable({ data, handleClick }: SecurityListTableTypes) {
  const setBackgroundColor = (trend: number | undefined) => {
    if (!trend) return
    if (trend <= -0.20 ) return '#FE3D70'
    if (trend >= .20) return '#73CFFF'
    else return '#19FF9D'
  }
  return (
    <Box>
      <Typography variant="h2" sx={{ fontWeight: "Bold", color: '#FFF', margin: "60px 0", maxWidth: "45%" }}>Aiming <span className="slogan">Bullseye</span> on Your Favorite Stocks.</Typography>
        <TableContainer>
          <Table aria-label="securities list table">
            <TableHead>
              <TableRow sx={{ fontWeight: "Bold", fontSize: "18px" }}>
                <TableCell sx={{ fontWeight: "Bold", fontSize: "18px" }}>Symbol</TableCell>
                <TableCell sx={{ fontWeight: "Bold", fontSize: "18px" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "Bold", fontSize: "18px" }}>Sector</TableCell>
                <TableCell sx={{ fontWeight: "Bold", fontSize: "18px" }}>Country</TableCell>
                <TableCell sx={{ fontWeight: "Bold", fontSize: "18px" }}>Trend</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              {data.map((security: SecurityTypes) => (
                <TableRow key={security.id} onClick={() => handleClick(security.ticker)}>
                  <TableCell>{security.ticker}</TableCell>
                  <TableCell>{security.name}</TableCell>
                  <TableCell>{security.sector}</TableCell>
                  <TableCell>{security.country}</TableCell>
                  <TableCell sx={{ color: setBackgroundColor(security.trend) }}>{security.trend}</TableCell>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
    </Box>
  )
}
