import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { useProSidebar } from "react-pro-sidebar";
import BlurOnIcon from "@mui/icons-material/BlurOn";

const Topbar = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        backgroundColor: "#0000",
        borderRadius: "3px",
        background: "",
        boxShadow: 3,
      }}
    >
      {/* SEARCH BAR */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#0000",
          //   border: "1px solid grey",
          borderRadius: "3px",
          background: "",
        }}
      >
        <main>
          <IconButton>
            <BlurOnIcon onClick={() => collapseSidebar()} />
          </IconButton>
        </main>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* SEARCH BAR */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "3px",
            background: "#e3e6e6",
            m: "10",
          }}
        >
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>

          <InputBase
            sx={{ ml: 0, flex: 1, fontSize: "" }}
            placeholder="Search..."
          />
        </Box>

        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
