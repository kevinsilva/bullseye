import { AppBar, Toolbar, Typography, Avatar } from '@mui/material';
import Logo from '../assets/logo_white.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: '#131C20', marginTop: '20px' }}
      >
        <Toolbar>
          <Link to="/">
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
              }}
            >
              <Avatar
                alt="logo"
                src={Logo}
                sx={{ height: '30px', width: '30px' }}
              />
              Bullseye
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
