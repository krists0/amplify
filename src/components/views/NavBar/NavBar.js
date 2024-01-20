
import React from 'react';
import { Link } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from "../images/logo.png";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import "./NavBar.css"; // Import your CSS file

function NavBar() {
  return (
    <AppBar className='Appbar'>
      <Container maxWidth="xl" className='appbar-container' >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className='appbar-typography'
            style={{ fontSize: '25px' }}
          >
            Hanna Avia
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link
              activeClass="active"
              to="collection"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
              style={{marginLeft: '5%',}}
            >
              Collection
            </Link>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="itemList"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Products
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link"
            >
              Contact
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
