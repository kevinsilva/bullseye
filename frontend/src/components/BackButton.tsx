import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
export default function BackButton() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  }
  return (
    <Button variant="contained" onClick={handleBackButtonClick}>Back</Button>
  )
}
