import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        sx={{ height: "24px",
        color:"black",
        fontWeight:"bold",
        width: "100px",
        bottom:"10px", 
        left: "800px", 
        paddingLeft: "10px", 
        letterSpacing: "1px",
        border:"2px solid #EEEEEE" }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        March
      </Button>
      <Menu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          One week
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          One month
        </MenuItem>
      </Menu>
    </div>
  );
}