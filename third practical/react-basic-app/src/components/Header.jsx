import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>

        {/* Application Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          React MUI Demo
        </Typography>

        {/* Navigation */}
        <Button color="inherit">
          Home
        </Button>

        <Button color="inherit">
          About
        </Button>

        <Button color="inherit">
          Contact
        </Button>

      </Toolbar>
    </AppBar>
  );
}

export default Header;