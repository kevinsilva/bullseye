import { AppBar, Toolbar, Typography} from "@mui/material"
import Logo from "../assets/logo_white.svg"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#131C20' }}>
        <Toolbar>
          <Link to="/">
            <Typography  variant="h6" component="div" sx={{ color: 'white', display: "flex", alignItems: "center", gap: "8px"}}>
              <img src={Logo} alt="Logo" height="30"/> Bullseye
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}
