import { Typography } from "@mui/material"
import {  useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_DAILY_TIME_SERIES } from "../graphql/queries"
import { useSecurityContext } from "../context/securityContext"
import SecurityChart from "./SecurityChart";
export default function SecurityDetail() {
  const { ticker } = useParams();
  const { securityList } = useSecurityContext();

  const securityData = securityList.find((security: { ticker: string }) => security.ticker === ticker);

  const { data , loading } = useQuery(GET_DAILY_TIME_SERIES, {
    variables: { securityId: securityData?.id },
  });

  if(loading) return <>Loading...</>

  return (
    <div>
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
