import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';

import { Link } from "next/link";
import { useAppDispatch } from '../../redux/hooks';
import { showPopupMenuTraining } from '../../redux/app/app.actions';


export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const links = ["/", "/training", "/about", "/contact"]
  const dispatch = useAppDispatch();

  return (
    <Box sx={{
      width: '100%', 
      position: 'fixed', 
      bottom: 0, 
      backgroundColor: "#ffffff", 
      zIndex: 9999,
      '@media screen and (min-width: 769px)': {
        display: 'none'
      } 
    }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to={links[0]} />
        <BottomNavigationAction label="Services" icon={<PeopleIcon />} onClick={()=>dispatch(showPopupMenuTraining())}  />
        <PopupMenuTraining />
        <BottomNavigationAction label="About" icon={<QuestionMarkIcon />} component={Link} to={links[2]} />
        <BottomNavigationAction label="Contact" icon={<ContactPageIcon />} component={Link} to={links[3]} />
      </BottomNavigation>
    </Box>
  );
}