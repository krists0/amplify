// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import "../NavBar/NavBar.css";
// import logo from "../images/logo.png";
// import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';


// const pages = ['Idans collection', 'About', 'Contact me'];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function NavBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };


//   // const handleCloseNavMenu = (event, target) => {
//   //   setAnchorElNav(null);
  
//   //   // Find the target element using its id
//   //   const targetElement = document.getElementById(target);
  
//   //   if (targetElement) {
//   //     // Calculate the scroll position
//   //     const offset = 64; // You may need to adjust this value
//   //     const scrollTo = targetElement.offsetTop - offset;
  
//   //     // Scroll smoothly to the target
//   //     window.scrollTo({
//   //       top: scrollTo,
//   //       behavior: "smooth",
//   //     });
//   //   }
//   // };
//   const scrollToComponent = (target) => {
//     scroller.scrollTo(target, {
//       duration: 800, // Adjust the duration to control the scrolling speed
//       offset: -64, // Adjust the offset to account for the fixed app bar
//       smooth: 'easeInOutQuart', // Easing function
//     });
//     setAnchorElNav(null); // Close the mobile navigation menu
//   };

//   return (
//     <AppBar  className='Appbar'>
//       <Container maxWidth="xl" className='appbar-container' >
//         <Toolbar disableGutters>
         
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             className='appbar-typography'
//             style={{fontSize:'25px'}}
//           >
//             Hanna Avia
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          
//             <img alt ="hanna" className="logo "src={logo} width="10%" height="10%" />
        
                  
      
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'grey', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           {/* <Box
//             sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
//           >
//  <Link to="collection" onClick={() => scrollToComponent("collection")} className="nav-link">
//         Collection
//       </Link>
//       <Link to="about" onClick={() => scrollToComponent("about")} className="nav-link">
//         About
//       </Link>
//       <Link to="itemList" onClick={() => scrollToComponent("itemList")} className="nav-link">
//         Item List
//       </Link>
//       <Link to="contact" onClick={() => scrollToComponent("contact")} className="nav-link">
//         Contact
//       </Link>
//           </Box> */}




//           {/* <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box> */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default NavBar;
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
