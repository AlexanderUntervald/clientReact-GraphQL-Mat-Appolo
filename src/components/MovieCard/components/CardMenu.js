import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

const CardMenu = ({onAddClick}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    return ( <>
     <IconButton
        sx={{position: "absolute", right: 5, top:5}}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        aria-haspopup="true" 
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: { 
            width: '20ch',
          },
        }}
      >
       
          <MenuItem onClick={onAddClick}>
            Add
          </MenuItem> 
      </Menu>


       
       </> );

    
}
 
export default CardMenu;