import { useNavigate } from "react-router-dom";
import { useSecurityContext } from "../context/securityContext";
import Spinner from "./Spinner";
import ErrorNotification from "./ErrorNotification";
import SecurityListTable from "./SecurityListTable";

export default function SecurityList() {
  const { securityList, loading, error } = useSecurityContext();
  const navigate = useNavigate();

  if (loading) return <Spinner />
  if (error) return <ErrorNotification errorMessage={error.message} />

  const handleSecurityClick = (securityTicker: string) => {
    navigate(`/securities/${securityTicker.toLowerCase()}`);
  }

  return (
    <>
      {securityList && <SecurityListTable data={securityList} handleClick={handleSecurityClick}/>}
    </>
  )
}
