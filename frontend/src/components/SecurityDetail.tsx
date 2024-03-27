import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import SecurityChart from "./SecurityChart";
import useSecurityDetail from "../hooks/useSecurityDetail"
import BackButton from "./BackButton";
import FilterTicker from "./FilterTicker";

export default function SecurityDetail() {
  const { ticker } = useParams();
  const { securityData, data, loading } = useSecurityDetail(ticker?.toUpperCase());

  if(loading) return <>Loading...</>

  return (
    <div>
      <BackButton />
      <FilterTicker />
      {securityData && (
        <>
          <Typography variant="h6">{securityData.ticker}</Typography>
          <Typography variant="h5">{securityData.name}</Typography>
          <Typography variant="h6">{securityData.country}</Typography>
          <Typography variant="h6">{securityData.sector}</Typography>

        <div>
          {data && <SecurityChart data={data} />}
        </div>
        </>
      )}
    </div>
  )
}
