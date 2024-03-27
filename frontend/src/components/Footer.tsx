import { Typography, Box } from "@mui/material"

export default function Footer() {
  return (
    <footer>
      <Box sx={{ textAlign: 'center', padding: '50px 0 20px', marginTop: 'auto', flexShrink: 0 }}>
        <Typography variant="body2" sx={{ color: '#39464C', }}>
          <Typography variant="body2" component="span"> &copy;{new Date().getFullYear()} Kevin Silva.{' '}</Typography>
          Built with React, TypeScript, Material UI, HighCharts, Apollo Server,Prisma and PostgreSQL.
        </Typography>
      </Box>
    </footer>
  )
}
