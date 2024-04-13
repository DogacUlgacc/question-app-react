import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import "../classes/link.css"

function Navbar(){
let userId =2;
    return(
        <div>
            <AppBar position="static">
               <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link className='link'to="/">Home</Link>
                </Typography>
               <Button  color="inherit"><Link className='link' to= {{pathname : '/users/' + userId}}>User</Link></Button>
              </Toolbar>
             </AppBar>
        </div>
    )
}

export default Navbar;