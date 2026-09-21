import React, { useState } from "react";

import {
  Container,
  Typography,
  Paper,
  Box,

  // 1
  Button,

  // 2
  TextField,

  // 3
  Checkbox,
  FormControlLabel,

  // 4
  AppBar,
  Toolbar,

  // 5
  Card,
  CardContent,

  // 6
  Grid,

  // 7
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,

  // 8
  Snackbar,

  // 10
  List,
  ListItem,
  ListItemText,

  // 11
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,

  // 12
  Slider,

  // 13
  Switch,

  // 14
  Avatar,

  // 15
  Badge,

  // 16
  CircularProgress,

  // 17
  Drawer,

  // 18
  Tabs,
  Tab,

  // 19
  Tooltip,

  // 20
  Accordion,
  AccordionSummary,
  AccordionDetails,

  // 21
  Alert,

  // 22
  Autocomplete,

  // 23
  Breadcrumbs,
  Link,

  // 24
  ButtonGroup,

  // 25
  Chip,

  // 26
  Divider,

  // 27
  Fab,

  // 28
  LinearProgress,

  // 29
  Menu,
  MenuItem,

  // 30
  Pagination,

  // 31
  Popover,

  // 32
  Rating,

  // 33
  Skeleton,

  // 34
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MailIcon from "@mui/icons-material/Mail";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import { FaApple } from "react-icons/fa";


function App() {

  // =========================================
  // STATES
  // =========================================

  // Dialog
  const [dialogOpen, setDialogOpen] = useState(false);

  // Snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Drawer
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Tabs
  const [tabValue, setTabValue] = useState(0);

  // Menu
  const [menuAnchor, setMenuAnchor] = useState(null);

  // Popover
  const [popoverAnchor, setPopoverAnchor] = useState(null);


  // =========================================
  // AUTOCOMPLETE DATA
  // =========================================

  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
  ];


  // =========================================
  // TABLE DATA
  // =========================================

  const rows = [
    {
      name: "Frozen yoghurt",
      calories: 159,
      fat: 6.0,
      carbs: 24,
      protein: 4.0,
    },
    {
      name: "Ice cream sandwich",
      calories: 237,
      fat: 9.0,
      carbs: 37,
      protein: 4.3,
    },
    {
      name: "Eclair",
      calories: 262,
      fat: 16.0,
      carbs: 24,
      protein: 6.0,
    },
  ];


  // =========================================
  // SPEED DIAL
  // =========================================

  const speedDialActions = [
    {
      icon: <FileCopyIcon />,
      name: "Copy",
    },
    {
      icon: <SaveIcon />,
      name: "Save",
    },
    {
      icon: <PrintIcon />,
      name: "Print",
    },
    {
      icon: <ShareIcon />,
      name: "Share",
    },
  ];


  return (

    <Container
      maxWidth="lg"
      sx={{
        py: 4,
      }}
    >

      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}

      <Box
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >

        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
        >
          React MUI Components
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
        >
          Complete Practical Demonstration
        </Typography>

      </Box>


      {/* ========================================= */}
      {/* 1. BUTTON */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          1. Button
        </Typography>

        <Button
          variant="contained"
          color="primary"
        >
          Click Me
        </Button>

      </Paper>


      {/* ========================================= */}
      {/* 2. TEXTFIELD */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          2. TextField
        </Typography>

        <TextField
          label="Enter your name"
          variant="outlined"
        />

      </Paper>


      {/* ========================================= */}
      {/* 3. CHECKBOX */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          3. Checkbox
        </Typography>

        <FormControlLabel
          control={
            <Checkbox name="checkedA" />
          }
          label="Accept terms and conditions"
        />

      </Paper>


      {/* ========================================= */}
      {/* 4. APPBAR */}
      {/* ========================================= */}

      <Paper sx={{ mb: 3 }}>

        <Typography
          variant="h5"
          sx={{ p: 3, pb: 2 }}
        >
          4. AppBar
        </Typography>

        <AppBar position="static">

          <Toolbar>

            <Typography variant="h6">
              My App
            </Typography>

          </Toolbar>

        </AppBar>

      </Paper>


      {/* ========================================= */}
      {/* 5. CARD */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          5. Card
        </Typography>

        <Card>

          <CardContent>

            <Typography
              variant="h5"
              component="div"
            >
              Card Title
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              This is some card content.
            </Typography>

          </CardContent>

        </Card>

      </Paper>


      {/* ========================================= */}
      {/* 6. GRID */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          6. Grid
        </Typography>

        <Grid
          container
          spacing={3}
        >

          <Grid
            size={{ xs: 12, sm: 6 }}
          >

            <Box
              sx={{
                backgroundColor: "lightblue",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Item 1
            </Box>

          </Grid>


          <Grid
            size={{ xs: 12, sm: 6 }}
          >

            <Box
              sx={{
                backgroundColor: "lightgreen",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Item 2
            </Box>

          </Grid>

        </Grid>

      </Paper>


      {/* ========================================= */}
      {/* 7. DIALOG */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          7. Dialog
        </Typography>

        <Button
          variant="outlined"
          onClick={() => setDialogOpen(true)}
        >
          Open Dialog
        </Button>


        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >

          <DialogTitle>
            Use Google's location service?
          </DialogTitle>

          <DialogContent>

            <DialogContentText>
              Let Google help apps determine location.
            </DialogContentText>

          </DialogContent>

          <DialogActions>

            <Button
              onClick={() => setDialogOpen(false)}
            >
              Disagree
            </Button>

            <Button
              onClick={() => setDialogOpen(false)}
              autoFocus
            >
              Agree
            </Button>

          </DialogActions>

        </Dialog>

      </Paper>


      {/* ========================================= */}
      {/* 8. SNACKBAR */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          8. Snackbar
        </Typography>

        <Button
          variant="contained"
          onClick={() => setSnackbarOpen(true)}
        >
          Show Snackbar
        </Button>


        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          message="Note archived"
        />

      </Paper>


      {/* ========================================= */}
      {/* 9. ICON */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          9. Icon
        </Typography>

        <FaApple size={50} />

      </Paper>


      {/* ========================================= */}
      {/* 10. LIST */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          10. List
        </Typography>

        <List>

          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>

          <ListItem>
            <ListItemText primary="Item 3" />
          </ListItem>

        </List>

      </Paper>


      {/* ========================================= */}
      {/* 11. TABLE */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          11. Table
        </Typography>

        <TableContainer component={Paper}>

          <Table>

            <TableHead>

              <TableRow>

                <TableCell>
                  Dessert (100g serving)
                </TableCell>

                <TableCell align="right">
                  Calories
                </TableCell>

                <TableCell align="right">
                  Fat (g)
                </TableCell>

                <TableCell align="right">
                  Carbs (g)
                </TableCell>

                <TableCell align="right">
                  Protein (g)
                </TableCell>

              </TableRow>

            </TableHead>


            <TableBody>

              {rows.map((row) => (

                <TableRow key={row.name}>

                  <TableCell
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>

                  <TableCell align="right">
                    {row.calories}
                  </TableCell>

                  <TableCell align="right">
                    {row.fat}
                  </TableCell>

                  <TableCell align="right">
                    {row.carbs}
                  </TableCell>

                  <TableCell align="right">
                    {row.protein}
                  </TableCell>

                </TableRow>

              ))}

            </TableBody>

          </Table>

        </TableContainer>

      </Paper>


      {/* ========================================= */}
      {/* 12. SLIDER */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          12. Slider
        </Typography>

        <Box sx={{ width: 300 }}>

          <Slider
            defaultValue={50}
            aria-label="Volume"
          />

        </Box>

      </Paper>


      {/* ========================================= */}
      {/* 13. SWITCH */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          13. Switch
        </Typography>

        <FormControlLabel
          control={
            <Switch name="checkedA" />
          }
          label="Switch me"
        />

      </Paper>


      {/* ========================================= */}
      {/* 14. AVATAR */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          14. Avatar
        </Typography>

        <Avatar>
          H
        </Avatar>

      </Paper>


      {/* ========================================= */}
      {/* 15. BADGE */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          15. Badge
        </Typography>

        <Badge
          badgeContent={4}
          color="primary"
        >
          <MailIcon />
        </Badge>

      </Paper>


      {/* ========================================= */}
      {/* 16. CIRCULAR PROGRESS */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          16. CircularProgress
        </Typography>

        <CircularProgress />

      </Paper>


      {/* ========================================= */}
      {/* 17. DRAWER */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          17. Drawer
        </Typography>

        <Button
          variant="contained"
          onClick={() => setDrawerOpen(true)}
        >
          Open Drawer
        </Button>


        <Drawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >

          <Box sx={{ width: 250 }}>

            <List>

              <ListItem>
                <ListItemText primary="Item 1" />
              </ListItem>

              <ListItem>
                <ListItemText primary="Item 2" />
              </ListItem>

            </List>

          </Box>

        </Drawer>

      </Paper>


      {/* ========================================= */}
      {/* 18. TABS */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          18. Tabs
        </Typography>

        <Tabs
          value={tabValue}
          onChange={(event, newValue) =>
            setTabValue(newValue)
          }
        >

          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />

        </Tabs>


        <Box sx={{ p: 3 }}>

          <Typography>
            {tabValue === 0 && "Item One"}
            {tabValue === 1 && "Item Two"}
            {tabValue === 2 && "Item Three"}
          </Typography>

        </Box>

      </Paper>


      {/* ========================================= */}
      {/* 19. TOOLTIP */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          19. Tooltip
        </Typography>

        <Tooltip title="Delete">

          <Button>
            Delete
          </Button>

        </Tooltip>

      </Paper>


      {/* ========================================= */}
      {/* 20. ACCORDION */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          20. Accordion
        </Typography>

        <Accordion>

          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >

            <Typography>
              Accordion Title
            </Typography>

          </AccordionSummary>


          <AccordionDetails>

            <Typography>
              Accordion Content
            </Typography>

          </AccordionDetails>

        </Accordion>

      </Paper>


      {/* ========================================= */}
      {/* 21. ALERT */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          21. Alert
        </Typography>

        <Alert severity="warning">
          This is a warning alert!
        </Alert>

      </Paper>


      {/* ========================================= */}
      {/* 22. AUTOCOMPLETE */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          22. Autocomplete
        </Typography>

        <Autocomplete
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose"
            />
          )}
        />

      </Paper>


      {/* ========================================= */}
      {/* 23. BREADCRUMBS */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          23. Breadcrumbs
        </Typography>

        <Breadcrumbs aria-label="breadcrumb">

          <Link
            color="inherit"
            href="#"
          >
            Home
          </Link>

          <Link
            color="inherit"
            href="#"
          >
            Installation
          </Link>

          <Typography color="text.primary">
            Breadcrumbs
          </Typography>

        </Breadcrumbs>

      </Paper>


      {/* ========================================= */}
      {/* 24. BUTTON GROUP */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          24. ButtonGroup
        </Typography>

        <ButtonGroup
          variant="contained"
          color="primary"
        >

          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>

        </ButtonGroup>

      </Paper>


      {/* ========================================= */}
      {/* 25. CHIP */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          25. Chip
        </Typography>

        <Chip
          label="Chip Component"
        />

      </Paper>


      {/* ========================================= */}
      {/* 26. DIVIDER */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          26. Divider
        </Typography>

        <Typography>
          Content above the divider
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography>
          Content below the divider
        </Typography>

      </Paper>


      {/* ========================================= */}
      {/* 27. FAB */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          27. Fab
        </Typography>

        <Fab
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>

      </Paper>


      {/* ========================================= */}
      {/* 28. LINEAR PROGRESS */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          28. LinearProgress
        </Typography>

        <LinearProgress />

      </Paper>


      {/* ========================================= */}
      {/* 29. MENU */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          29. Menu
        </Typography>

        <Button
          variant="contained"
          onClick={(event) =>
            setMenuAnchor(event.currentTarget)
          }
        >
          Open Menu
        </Button>


        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={() => setMenuAnchor(null)}
        >

          <MenuItem
            onClick={() => setMenuAnchor(null)}
          >
            Profile
          </MenuItem>

          <MenuItem
            onClick={() => setMenuAnchor(null)}
          >
            My account
          </MenuItem>

          <MenuItem
            onClick={() => setMenuAnchor(null)}
          >
            Logout
          </MenuItem>

        </Menu>

      </Paper>


      {/* ========================================= */}
      {/* 30. PAGINATION */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          30. Pagination
        </Typography>

        <Pagination
          count={10}
          color="primary"
        />

      </Paper>


      {/* ========================================= */}
      {/* 31. POPOVER */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          31. Popover
        </Typography>

        <Button
          variant="contained"
          onClick={(event) =>
            setPopoverAnchor(event.currentTarget)
          }
        >
          Open Popover
        </Button>


        <Popover
          open={Boolean(popoverAnchor)}
          anchorEl={popoverAnchor}
          onClose={() => setPopoverAnchor(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >

          <Typography sx={{ p: 2 }}>
            The content of the Popover.
          </Typography>

        </Popover>

      </Paper>


      {/* ========================================= */}
      {/* 32. RATING */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          32. Rating
        </Typography>

        <Rating
          name="simple-controlled"
          defaultValue={3}
        />

      </Paper>


      {/* ========================================= */}
      {/* 33. SKELETON */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5" gutterBottom>
          33. Skeleton
        </Typography>

        <Skeleton
          variant="rectangular"
          width={210}
          height={118}
        />

      </Paper>


      {/* ========================================= */}
      {/* 34. SPEED DIAL */}
      {/* ========================================= */}

      <Paper sx={{ p: 3, mb: 5 }}>

        <Typography variant="h5" gutterBottom>
          34. SpeedDial
        </Typography>

        <Box
          sx={{
            height: 180,
            position: "relative",
          }}
        >

          <SpeedDial
            ariaLabel="SpeedDial example"
            icon={<SpeedDialIcon />}
            direction="up"
            sx={{
              position: "absolute",
              bottom: 20,
              right: 20,
            }}
          >

            {speedDialActions.map((action) => (

              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />

            ))}

          </SpeedDial>

        </Box>

      </Paper>


      {/* ========================================= */}
      {/* FOOTER */}
      {/* ========================================= */}

      <Typography
        align="center"
        color="text.secondary"
        sx={{ pb: 4 }}
      >
        React JS + Material UI Practical
      </Typography>

    </Container>
  );
}

export default App;