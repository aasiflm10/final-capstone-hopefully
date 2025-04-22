import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between items-center bg-[#043365] w-full h-[60px] px-4 sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <img src="/incedo.png" alt="Incedo Logo" className="h-6" />
        {/* <span className="text-white font-bold text-lg">Incedo</span> */}
      </div>

      {/* Right: Profile Avatar with Dropdown */}
      <div>
        <IconButton onClick={handleClick} size="small">
          <Avatar
            alt="User Profile"
            src="/profile-pic.png"
            sx={{ width: 36, height: 36 }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}