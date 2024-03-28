import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  Box,
  Fade,
} from '@mui/material';
import { SecurityListTableTypes, SecurityTypes } from '../utils/types';

export default function SecurityListTable({
  data,
  handleClick,
}: SecurityListTableTypes) {
  const setBackgroundColor = (trend: number | undefined) => {
    if (!trend) return;
    if (trend <= -0.2) return '#FE3D70';
    if (trend >= 0.2) return '#73CFFF';
    else return '#19FF9D';
  };

  return (
    <Box>
      <Fade in={true} timeout={{ enter: 1000 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'Bold',
            color: '#FFF',
            margin: '100px 0 120px',
            maxWidth: '500px',
          }}
        >
          Aiming for{' '}
          <Typography
            variant="h2"
            component={'span'}
            sx={{ color: '#18FF9D', fontWeight: 'Bold' }}
          >
            Bullseye
          </Typography>{' '}
          on Your Favorite Stocks.
        </Typography>
      </Fade>
      <Fade in={true} timeout={{ enter: 2000 }}>
        <TableContainer>
          <Table aria-label="securities list table">
            <TableHead>
              <TableRow sx={{ fontWeight: 'Bold', fontSize: '18px' }}>
                <TableCell sx={{ fontWeight: 'Bold', fontSize: '18px' }}>
                  Symbol
                </TableCell>
                <TableCell sx={{ fontWeight: 'Bold', fontSize: '18px' }}>
                  Name
                </TableCell>
                <TableCell sx={{ fontWeight: 'Bold', fontSize: '18px' }}>
                  Sector
                </TableCell>
                <TableCell sx={{ fontWeight: 'Bold', fontSize: '18px' }}>
                  Country
                </TableCell>
                <TableCell sx={{ fontWeight: 'Bold', fontSize: '18px' }}>
                  Trend
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((security: SecurityTypes) => (
                <TableRow
                  key={security.id}
                  onClick={() => handleClick(security.ticker)}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#39464C' },
                  }}
                >
                  <TableCell>{security.ticker}</TableCell>
                  <TableCell>{security.name}</TableCell>
                  <TableCell>{security.sector}</TableCell>
                  <TableCell>{security.country}</TableCell>
                  <TableCell sx={{ color: setBackgroundColor(security.trend) }}>
                    {security.trend}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Fade>
    </Box>
  );
}
