import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Badge,
  Switch,
  Tooltip,
  Tabs,
  Tab,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SchoolIcon from "@mui/icons-material/School";
import CloseIcon from "@mui/icons-material/Close";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import "./App.css";

function App() {
  // Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Switch state
  const [darkMode, setDarkMode] = useState(false);

  // Tabs state
  const [tabValue, setTabValue] = useState(0);

  // Drawer open/close
  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  // Tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>

      {/* ================================================= */}
      {/*                    APP BAR                        */}
      {/* ================================================= */}

      <AppBar position="static" className="app-bar">

        <Toolbar>

          {/* MENU / DRAWER */}

          <Tooltip title="Open Navigation Menu">

            <IconButton
              color="inherit"
              onClick={() => toggleDrawer(true)}
              edge="start"
              className="menu-button"
            >
              <MenuIcon />
            </IconButton>

          </Tooltip>


          {/* APPLICATION ICON */}

          <SchoolIcon className="school-icon" />


          {/* APPLICATION TITLE */}

          <Typography
            variant="h6"
            className="app-title"
          >
            Student Learning Dashboard
          </Typography>


          {/* ================================================= */}
          {/*                    SWITCH                         */}
          {/* ================================================= */}

          <Box className="switch-container">

            <Tooltip title="Toggle Dark / Light Mode">

              <DarkModeIcon />

            </Tooltip>

            <Switch
              checked={darkMode}
              onChange={(event) =>
                setDarkMode(event.target.checked)
              }
              color="default"
            />

          </Box>


          {/* ================================================= */}
          {/*                     BADGE                         */}
          {/* ================================================= */}

          <Tooltip title="You have 3 notifications">

            <IconButton
              color="inherit"
              className="notification-button"
            >

              <Badge
                badgeContent={3}
                color="error"
              >

                <NotificationsIcon />

              </Badge>

            </IconButton>

          </Tooltip>


          {/* ================================================= */}
          {/*                    AVATAR                         */}
          {/* ================================================= */}

          <Tooltip title="Student Profile">

            <IconButton>

              <Avatar className="top-avatar">
                P
              </Avatar>

            </IconButton>

          </Tooltip>

        </Toolbar>

      </AppBar>


      {/* ================================================= */}
      {/*                    DRAWER                         */}
      {/* ================================================= */}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >

        <Box className="drawer">

          {/* DRAWER HEADER */}

          <Box className="drawer-header">

            <IconButton
              className="drawer-close"
              onClick={() => toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>


            {/* AVATAR */}

            <Avatar className="drawer-avatar">
              P
            </Avatar>


            <Typography
              variant="h6"
              className="drawer-name"
            >
              Pragati
            </Typography>


            <Typography
              variant="body2"
              color="text.secondary"
            >
              Computer Science Student
            </Typography>

          </Box>


          <Divider />


          {/* DRAWER MENU */}

          <List>

            {/* Dashboard */}

            <ListItem disablePadding>

              <ListItemButton
                onClick={() => {
                  setTabValue(0);
                  toggleDrawer(false);
                }}
              >

                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>

                <ListItemText primary="Dashboard" />

              </ListItemButton>

            </ListItem>


            {/* Home */}

            <ListItem disablePadding>

              <ListItemButton
                onClick={() => {
                  setTabValue(0);
                  toggleDrawer(false);
                }}
              >

                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>

                <ListItemText primary="Home" />

              </ListItemButton>

            </ListItem>


            {/* Courses */}

            <ListItem disablePadding>

              <ListItemButton
                onClick={() => {
                  setTabValue(1);
                  toggleDrawer(false);
                }}
              >

                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>

                <ListItemText primary="Courses" />

              </ListItemButton>

            </ListItem>


            {/* Profile */}

            <ListItem disablePadding>

              <ListItemButton
                onClick={() => {
                  setTabValue(2);
                  toggleDrawer(false);
                }}
              >

                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>

                <ListItemText primary="Profile" />

              </ListItemButton>

            </ListItem>


            {/* Settings */}

            <ListItem disablePadding>

              <ListItemButton
                onClick={() => {
                  setTabValue(3);
                  toggleDrawer(false);
                }}
              >

                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>

                <ListItemText primary="Settings" />

              </ListItemButton>

            </ListItem>

          </List>

        </Box>

      </Drawer>


      {/* ================================================= */}
      {/*                  MAIN CONTENT                     */}
      {/* ================================================= */}

      <main className="main-content">


        {/* WELCOME SECTION */}

        <Box className="welcome-section">

          <Typography
            variant="h4"
            className="welcome-title"
          >
            Welcome, Pragati! 👋
          </Typography>

          <Typography
            variant="body1"
            className="welcome-description"
          >
            Track your learning progress and manage your
            student activities.
          </Typography>

        </Box>


        {/* ================================================= */}
        {/*                  COMPONENT CARDS                  */}
        {/* ================================================= */}

        <div className="card-container">


          {/* ================================================= */}
          {/*              CIRCULAR PROGRESS                   */}
          {/* ================================================= */}

          <Card className="dashboard-card">

            <CardContent className="card-content">

              <Typography
                variant="h6"
                className="card-title"
              >
                Course Progress
              </Typography>


              <Box className="progress-container">

                <CircularProgress
                  variant="determinate"
                  value={75}
                  size={120}
                  thickness={5}
                />


                <Box className="progress-value">

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                  >
                    75%
                  </Typography>

                </Box>

              </Box>


              <Typography color="text.secondary">
                Java Programming
              </Typography>

            </CardContent>

          </Card>


          {/* ================================================= */}
          {/*                       BADGE                       */}
          {/* ================================================= */}

          <Card className="dashboard-card">

            <CardContent className="card-content">

              <Typography
                variant="h6"
                className="card-title"
              >
                Notifications
              </Typography>


              <Box className="badge-container">

                <Badge
                  badgeContent={3}
                  color="error"
                >

                  <NotificationsIcon
                    className="large-icon"
                  />

                </Badge>

              </Box>


              <Typography color="text.secondary">
                New notifications available
              </Typography>


              <Button
                variant="contained"
                size="small"
              >
                View Notifications
              </Button>

            </CardContent>

          </Card>


          {/* ================================================= */}
          {/*                      AVATAR                       */}
          {/* ================================================= */}

          <Card className="dashboard-card">

            <CardContent className="card-content">

              <Typography
                variant="h6"
                className="card-title"
              >
                Student Profile
              </Typography>


              <Avatar className="large-avatar">
                P
              </Avatar>


              <Typography
                variant="h6"
                fontWeight="bold"
              >
                Pragati
              </Typography>


              <Typography color="text.secondary">
                Computer Science Engineering
              </Typography>

            </CardContent>

          </Card>

        </div>


        {/* ================================================= */}
        {/*                        TABS                       */}
        {/* ================================================= */}

        <Card className="tabs-card">


          {/* TAB HEADER */}

          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            variant="fullWidth"
          >

            <Tab label="Home" />

            <Tab label="Courses" />

            <Tab label="Profile" />

            <Tab label="Settings" />

          </Tabs>


          <Divider />


          {/* TAB CONTENT */}

          <CardContent className="tab-content">


            {/* HOME TAB */}

            {tabValue === 0 && (

              <Box>

                <Typography
                  variant="h5"
                  className="tab-title"
                >
                  Home
                </Typography>

                <Typography
                  color="text.secondary"
                  paragraph
                >
                  Welcome to your Student Learning Dashboard.
                  Use the navigation menu to explore your
                  courses and profile.
                </Typography>


                <Button
                  variant="contained"
                  onClick={() => setTabValue(1)}
                >
                  View My Courses
                </Button>

              </Box>

            )}


            {/* COURSES TAB */}

            {tabValue === 1 && (

              <Box>

                <Typography
                  variant="h5"
                  className="tab-title"
                >
                  My Courses
                </Typography>


                <div className="course-list">

                  <div className="course-item">

                    <MenuBookIcon />

                    <Box>

                      <Typography fontWeight="bold">
                        Java Programming
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Progress: 75%
                      </Typography>

                    </Box>

                  </div>


                  <div className="course-item">

                    <MenuBookIcon />

                    <Box>

                      <Typography fontWeight="bold">
                        Database Management
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Progress: 60%
                      </Typography>

                    </Box>

                  </div>


                  <div className="course-item">

                    <MenuBookIcon />

                    <Box>

                      <Typography fontWeight="bold">
                        Web Development
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        Progress: 80%
                      </Typography>

                    </Box>

                  </div>

                </div>

              </Box>

            )}


            {/* PROFILE TAB */}

            {tabValue === 2 && (

              <Box className="profile-tab">

                <Avatar className="profile-tab-avatar">
                  P
                </Avatar>


                <Typography
                  variant="h5"
                  className="tab-title"
                >
                  Pragati
                </Typography>


                <Typography color="text.secondary">
                  Computer Science Engineering Student
                </Typography>


                <Typography color="text.secondary">
                  Learning Dashboard Profile
                </Typography>

              </Box>

            )}


            {/* SETTINGS TAB */}

            {tabValue === 3 && (

              <Box>

                <Typography
                  variant="h5"
                  className="tab-title"
                >
                  Settings
                </Typography>


                <Box className="settings-row">

                  <Box>

                    <Typography fontWeight="bold">
                      Dark Mode
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      Change the dashboard appearance
                    </Typography>

                  </Box>


                  <Switch
                    checked={darkMode}
                    onChange={(event) =>
                      setDarkMode(event.target.checked)
                    }
                  />

                </Box>

              </Box>

            )}

          </CardContent>

        </Card>


        {/* ================================================= */}
        {/*                     TOOLTIP                       */}
        {/* ================================================= */}

        <Card className="tooltip-card">

          <CardContent>

            <Typography
              variant="h6"
              className="tooltip-title"
            >
              Tooltip Example
            </Typography>


            <Typography
              color="text.secondary"
              className="tooltip-description"
            >
              Move your mouse over the button to see the
              Material UI Tooltip.
            </Typography>


            <Tooltip
              title="This button demonstrates the MUI Tooltip component"
              arrow
            >

              <Button
                variant="outlined"
                className="tooltip-button"
              >
                Hover Over Me
              </Button>

            </Tooltip>

          </CardContent>

        </Card>


      </main>


      {/* ================================================= */}
      {/*                     FOOTER                        */}
      {/* ================================================= */}

      <footer className="footer">

        <Typography variant="body2">
          Student Learning Dashboard • Built with React &
          Material UI
        </Typography>

      </footer>

    </div>
  );
}

export default App;