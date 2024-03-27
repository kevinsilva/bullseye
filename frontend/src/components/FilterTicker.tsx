import { Autocomplete, TextField } from "@mui/material"
import { useSecurityContext } from "../context/securityContext";
import { SecurityTypes } from "../utils/types";
import { useNavigate } from "react-router-dom";

export default function FilterTicker() {
  const { securityList } = useSecurityContext();
  const navigate = useNavigate();

  const securityNames = securityList.map((security: SecurityTypes) => security.name);

  const handleSelectChange = (event: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
    event.preventDefault();
    if (!newValue) return;
    const security = securityList.find(security => security.name === newValue);

    navigate(`/securities/${security?.ticker.toLowerCase()}`);
  }

  return (
    <Autocomplete options={securityNames} renderInput={(params) => <TextField {...params} label="Select Security" variant="outlined" />} onChange={handleSelectChange} id="filter-ticker" />
  )
}
