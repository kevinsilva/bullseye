import { Typography } from "@mui/material"
import { SecurityTypes } from "../utils/types"

export default function SecurityInfo({ data }: { data: SecurityTypes }) {
  return (
    <>
      <Typography variant="h6">{data.ticker}</Typography>
      <Typography variant="h5">{data.name}</Typography>
      <Typography variant="h6">{data.country}</Typography>
      <Typography variant="h6">{data.sector}</Typography>
    </>
  )
}
