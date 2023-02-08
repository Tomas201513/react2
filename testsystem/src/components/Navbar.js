import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { ColorModeContext, tokens } from "./theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";



const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        borderRadius: "3px",
        boxShadow: 3,
      }}
    >
      {/* SEARCH BAR */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          //   border: "1px solid grey",
          borderRadius: "3px",
          background: "",
        }}
      >
        {/* <main>
          <IconButton>
            <BlurOnIcon onClick={() => collapseSidebar()} />
          </IconButton>
        </main> */}
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* SEARCH BAR */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "3px",
            m: "10",
          }}
        >
          <IconButton
            type="button"
            backgroundColor={colors.primary[400]}
            sx={{ p: 1 }}
          >
            <SearchIcon />
          </IconButton>

          <InputBase
            sx={{ ml: 0, flex: 1, fontSize: "" }}
            placeholder="Search..."
          />
        </Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        
      </Box>
    </Box>
  );
};

export default Topbar;
