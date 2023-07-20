import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function BasicAppBar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 8 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Wahi
            </NavLink>
          </Typography>

          <NavLink to="/create" style={{ textDecoration: "none" }}>
            Add a Task
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
