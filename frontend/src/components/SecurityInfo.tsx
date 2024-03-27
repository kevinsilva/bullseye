import { Typography, Box } from "@mui/material"
import { SecurityTypes } from "../utils/types"

export default function SecurityInfo({ data }: { data: SecurityTypes }) {
  return (
    <Box sx={{ margin: "50px 0 125px"}}>
      <Typography variant="h6" sx={{ color: '#DDD',}}>{data.ticker}</Typography>
      <Typography variant="h2" sx={{ fontWeight: "Bold", color: '#FFF', marginBottom: "30px"}}>{data.name}</Typography>
      <Typography variant="h6" sx={{ color: '#687276' }}><Typography variant="body2" component={"span"} sx={{ color: '#39464C', fontWeight: "Bold", textTransform: "uppercase" }}>Sector:&nbsp;</Typography>{data.sector}</Typography>
      <Typography variant="h6" sx={{ color: '#687276',}}><Typography variant="body2" component={"span"} sx={{ color: '#39464C', fontWeight: "Bold", textTransform: "uppercase" }}>Country:&nbsp;</Typography>{data.country}</Typography>
    </Box>
  )
}
