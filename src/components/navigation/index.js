import { useState } from "react"; 
import { Box, Hidden, Link, List, Drawer, AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';   
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link as RouterLink } from "react-router-dom";


const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation" >
      <List> 
        <Link component={RouterLink} to="settings" sx={{flexGrow: 1}}>
        <ListItemButton>
              <ListItemIcon>
                { <SettingsIcon /> }
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton> 
         </Link>
      </List> 
    </Box>
  );

  return (
 
    <Box >
      <AppBar position="static">
        <Toolbar>
          <Hidden only={['lg', 'xl']}>
          <IconButton
            onClick={() => setDrawerOpen(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon/>
          </IconButton>
          </Hidden>
         
         <Link component={RouterLink} to="/" sx={{flexGrow: 1}}>
         <Typography variant="h6" component="div" sx={{ color: "white", flexGrow: 1 }}>
            Movies recomendation 
          </Typography>
         </Link>

          

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
       
              <Button component={RouterLink} 
                    to='settings'
                    sx={{ my: 2, color: 'white', display: 'block' }}
              >
               Settings
              </Button>  
          </Box>

        </Toolbar>
      </AppBar>

      <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => setDrawerOpen(false)}
    > 
    {list()}
    </Drawer>


    </Box>
 
  );
}

export default Navigation;
