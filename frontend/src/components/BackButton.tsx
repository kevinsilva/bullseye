import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function BackButton() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate('/');
  };
  return (
    <Button
      variant="text"
      startIcon={<ArrowBackIcon />}
      onClick={handleBackButtonClick}
    >
      Home
    </Button>
  );
}
