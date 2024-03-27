import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import SecurityChart from "./SecurityChart";
import useSecurityDetail from "../hooks/useSecurityDetail"
import BackButton from "./BackButton";
import FilterTicker from "./FilterTicker";
import Spinner from "./Spinner";
import ErrorNotification from "./ErrorNotification";

export default function SecurityDetail() {
  const { ticker } = useParams();
  const { securityData, data, loading, error } = useSecurityDetail(ticker?.toUpperCase());

  if (loading) return <Spinner />
  if (error) return <ErrorNotification errorMessage={error.message} />

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
