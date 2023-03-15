import {Link, NavLink} from 'react-router-dom'
import { useLocalStorage } from "react-use-storage";
import './Header.css'

const Header = () => {

  const [islogin, setIslogin, removeIslogin] = useLocalStorage("islogin", false);
  const [memberId, setMemberId, removeMemberId] = useLocalStorage("memberId", '');
  return (
    <>
      <header className="hide-when-mobile mohammed">
        <h1>
          <Link onClick={() => {
               window.location = '/home'
             }}>Forum ' Read and Express '</Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="navlink" onClick={() => {
         window.location = '/registration'}}>Registration
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="navlink" onClick={() => {
         window.location = '/login'}}>Login
            </NavLink>
            <ul className="sub-ul">
              <li><Link onClick={() => {
                setIslogin(false)
               window.location = '/login'
             }}>Log Out</Link></li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="navlink" onClick={() => {
               window.location = '/topics'}}> Articles
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li><Link>Sport Article</Link></li>
              <li><Link>News Article</Link></li>
              <li><Link>Art Article</Link></li>
            </ul>
          </li>

          <li className="main-list">
            <NavLink className="navlink" onClick={() => {
               window.location = '/aboutus'}}> About Us
            </NavLink>
          </li>
        </ul>
      </header>
      <header style={{ backgroundColor: "steelblue" }} className="show-when-mobile">
        <h1>Forum</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              Registration <i className="fas fa-plus" />{" "}
            </label>
            <input id="html" type="checkbox" />
            {/* <ul className="sub-div">
              <li><Link>Full Course</Link></li>
              <li><Link>Crash Course</Link></li>
              <li><Link>learn in 1h</Link></li>
            </ul> */}
          </div>
          <div className="main-div">
            <label htmlFor="css">
              Login <i className="fas fa-plus" />{" "}
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li><Link>Log Out</Link></li>
              {/* <li><Link>CSS Examples</Link></li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />{" "}
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li><Link>project 1</Link></li>
                  <li><Link>project 2</Link></li>
                  <li><Link>project 3</Link></li>
                </ul>
              </li> */}
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              Articles <i className="fas fa-plus" />{" "}
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li><Link>Sport Article</Link></li>
              <li><Link>News Article</Link></li>
              <li><Link>Art Article</Link></li>
            </ul>
          </div>

          <div className="main-div">
            <label htmlFor="js">
              About Us <i className="fas fa-plus" />{" "}
            </label>
          </div>

        </div>
      </header>
    </>
  )
}

export default Header

// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import './Header.css'

// const Search = styled('div')(({ theme }) => ({
//   position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   '&:hover': {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     marginLeft: theme.spacing(3),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'inherit',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
// }));

// export default function Header() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={() => {
//         window.location = '/registration'
//       }}>Registration</MenuItem>
      
//       <MenuItem onClick={() => {
//         window.location = '/login'
//       }}>Login</MenuItem>
//     </Menu>
//   );

//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <MenuItem>
//         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//           <Badge badgeContent={4} color="error">
//             <MailIcon />
//           </Badge>
//         </IconButton>
//         <p>Messages</p>
//       </MenuItem>
//       <MenuItem>
//         <IconButton
//           size="large"
//           aria-label="show 17 new notifications"
//           color="inherit"
//         >
//           <Badge badgeContent={17} color="error">
//             <NotificationsIcon />
//           </Badge>
//         </IconButton>
//         <p>Notifications</p>
//       </MenuItem>
//       <MenuItem onClick={handleProfileMenuOpen}>
//         <IconButton
//           size="large"
//           aria-label="account of current user"
//           aria-controls="primary-search-account-menu"
//           aria-haspopup="true"
//           color="inherit"
//         >
//           <AccountCircle />
//         </IconButton>
//         <p>Registration</p>
//       </MenuItem>
//     </Menu>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ display: { xs: 'none', sm: 'block' } }}
//           >
//             <MenuItem onClick={() => {
//               window.location = '/home'
//             }}>FORUM</MenuItem>
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </Search>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//               <Badge badgeContent={4} color="error">
//                 <MailIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               aria-label="show 17 new notifications"
//               color="inherit"
//             >
//               <Badge badgeContent={17} color="error">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               size="large"
//               edge="end"
//               aria-label="account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </Box>
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="show more"
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </Box>
//   );
// }