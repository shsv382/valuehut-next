import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PopupMenuTraining from '../popup-menu-training/popup-menu-training.component';

import Link from 'next/link';


export default function BottomNav() {
  const [ value, setValue ] = useState(0);
  const [ popupMenu, showPopupMenu ] = useState(false);
  const links = ["/", "/training", "/about", "/contact"]
  // const dispatch = useAppDispatch();

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
        <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} href={links[0]} />
        <BottomNavigationAction label="Services" icon={<PeopleIcon />} onClick={() => showPopupMenu(!popupMenu) }  />
        <PopupMenuTraining isVisible={popupMenu} />
        <BottomNavigationAction label="About" icon={<QuestionMarkIcon />} component={Link} href={links[2]} />
        <BottomNavigationAction label="Contact" icon={<ContactPageIcon />} component={Link} href={links[3]} />
      </BottomNavigation>
    </Box>
  );
}