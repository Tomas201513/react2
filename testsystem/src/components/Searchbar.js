import { Box, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";


const Searchbar = () => {
  return (
    <Box
      sx={{
        borderRadius: "3px",
        background: "#e3e6e6",
        m: "10",
        
      }}
    >
      <IconButton type="button" sx={{ p: 0.5 }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 0, flex: 1, fontSize: "" }}
        placeholder="Search..."
      />
    </Box>
  );
};

export default Searchbar;
