import { TableContainer, Table, TableHead, TableRow, TableCell, Typography, TableBody } from "@mui/material"
import { SecurityTypes } from "../utils/types";
import { useNavigate } from "react-router-dom";
import { useSecurityContext } from "../context/securityContext";

export default function SecurityList() {
  const { securityList } = useSecurityContext();
  const navigate = useNavigate();

  const handleSecurityClick = (securityTicker: string) => {
    navigate(`/securities/${securityTicker.toLowerCase()}`);
  }

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

            {securityList && securityList.map((security: SecurityTypes) => (
              <TableRow key={security.id} onClick={() => handleSecurityClick(security.ticker)}>
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
