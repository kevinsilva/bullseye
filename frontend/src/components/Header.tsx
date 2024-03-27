import { AppBar, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"
export default function Header() {
  return (
    <>
      <AppBar position="static" >
        <Toolbar>
          <Link to="/">
            <Typography  variant="h6" component="div">
              Bullseye
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}
