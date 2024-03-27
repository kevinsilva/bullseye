import { Box } from "@mui/material";
import BackButton from "./BackButton";
import FilterTicker from "./FilterTicker";

export default function Navigation() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '50px'}}>
      <BackButton />
      <FilterTicker />
    </Box>
  )
}
