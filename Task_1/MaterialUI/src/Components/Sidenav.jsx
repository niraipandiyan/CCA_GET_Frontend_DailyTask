import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DropdownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Sidenav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const [activeButtons, setActiveButtons] = useState({
    costManagement: false,
    sources: false,
    reallyReally: false,
    application: false,
    application1: false,
    settings: false,
    launch: false,
  });

  const handleButtonClick = (buttonName) => {
    // Create a new object with all buttons initially set to false
    const updatedActiveButtons = {
      costManagement: false,
      sources: false,
      reallyReally: false,
      application: false,
      application1: false,
      settings: false,
      launch: false,
    };

    // Set the clicked button to active (true)
    updatedActiveButtons[buttonName] = true;

    // Update the activeButtons state with the updated object
    setActiveButtons(updatedActiveButtons);
  };

  const handleApplicationClick = (event) => {
    setAnchorEl(event.currentTarget);
    handleButtonClick("application");
  };

  const handleSubMenuClick1 = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
    handleButtonClick("application1");
  };

  const handleSubMenuClick2 = (event) => {
    setSubMenuAnchorEl(event.currentTarget);
    handleButtonClick("application2");
  };

  const handleMenuClose = (val = false) => {
    setTimeout(() => {
      setAnchorEl(null);
      setSubMenuAnchorEl(null);
    }, 1000);
    // Close the submenu based on the currently active sub-button
    handleButtonClick(val);
  };

  const buttonStyle = (buttonName) => ({
    color: activeButtons[buttonName] ? "blue" : "initial",
    fontWeight: activeButtons[buttonName] ? "bold" : "normal", // Add fontWeight for active buttons
  });

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px",
        width: "200px",
        position: "absolute",
      }}
    >
      <Button
        style={buttonStyle("application")}
        aria-controls="application-menu"
        aria-haspopup="true"
        endIcon={<DropdownIcon />}
        onClick={handleApplicationClick}
      >
        Application
      </Button>
      <Menu
        id="application-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        endIcon={<ArrowRightIcon />}
      >
        <MenuItem
          style={buttonStyle("application1")}
          onClick={handleSubMenuClick1}
        >
          Application 1
        </MenuItem>
        <MenuItem
          style={buttonStyle("application2")}
          onClick={handleSubMenuClick2}
        >
          Application 2
        </MenuItem>
        <Menu
          id="submenu-menu"
          anchorEl={anchorEl}
          open={Boolean(subMenuAnchorEl)}
          onClose={handleMenuClose}
          style={{
            left: "125px",
          }}
        >
          <MenuItem
            style={buttonStyle("settings")}
            onClick={() => handleMenuClose("settings")}
          >
            Settings
          </MenuItem>
          <MenuItem
            style={buttonStyle("launch")}
            onClick={() => handleMenuClose("launch")}
          >
            Launch
          </MenuItem>
        </Menu>
      </Menu>
      <p>
        <Button
          endIcon={<DropdownIcon />}
          style={buttonStyle("costManagement")}
          onClick={() => handleButtonClick("costManagement")}
        >
          Cost Management
        </Button>
      </p>
      <p>
        <Button
          endIcon={<DropdownIcon />}
          style={buttonStyle("sources")}
          onClick={() => handleButtonClick("sources")}
        >
          Sources
        </Button>
      </p>
      <p>
        <Button
          endIcon={<DropdownIcon />}
          style={buttonStyle("reallyReally")}
          onClick={() => handleButtonClick("reallyReally")}
        >
          Really Really
        </Button>
      </p>
    </div>
  );
};

export default Sidenav;
