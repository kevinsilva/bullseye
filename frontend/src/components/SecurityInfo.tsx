import { Typography, Box } from "@mui/material"
import { SecurityTypes } from "../utils/types"

export default function SecurityInfo({ data }: { data: SecurityTypes }) {
  return (
    <Box sx={{ margin: "50px 0"}}>
      <Typography variant="h6" sx={{ color: '#DDD',}}>{data.ticker}</Typography>
      <Typography variant="h2" sx={{ fontWeight: "Bold", color: '#FFF', marginBottom: "30px"}}>{data.name}</Typography>
      <Typography variant="h6" sx={{ color: '#687276',}}><span className="security-titles">Sector:&nbsp;</span>{data.sector}</Typography>
      <Typography variant="h6" sx={{ color: '#687276',}}><span className="security-titles">Country:&nbsp;</span>{data.country}</Typography>
    </Box>
  )
}
