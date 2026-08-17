import { useState } from "react";

import Header from "./components/Header";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

function App() {

  // Checkbox state
  const [checked, setChecked] = useState(false);

  // Radio button state
  const [gender, setGender] = useState("");

  // Select state
  const [course, setCourse] = useState("");

  // Switch state
  const [notifications, setNotifications] = useState(false);

  // Checkbox function
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  // Radio button function
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  // Select function
  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  // Switch function
  const handleNotificationChange = (event) => {
    setNotifications(event.target.checked);
  };

  return (
    <>
      {/* ================= HEADER ================= */}

      <Header />

      {/* ================= MAIN CONTAINER ================= */}

      <Container
        maxWidth="md"
        sx={{
          marginTop: 5,
          marginBottom: 5
        }}
      >

        {/* ================= CARD ================= */}

        <Card elevation={5}>

          <CardContent sx={{ padding: 4 }}>

            {/* ================= CARD TITLE ================= */}

            <Typography
              variant="h4"
              component="h1"
              align="center"
              gutterBottom
            >
              React Material UI Form
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              align="center"
              sx={{ marginBottom: 3 }}
            >
              Basic demonstration of Material UI components
            </Typography>

            <Divider sx={{ marginBottom: 4 }} />


            {/* ================= TEXT FIELD ================= */}

            <Typography
              variant="h6"
              gutterBottom
            >
              Personal Information
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2
              }}
            >

              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
              />

              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
              />

            </Box>


            {/* ================= RADIO BUTTON ================= */}

            <Box sx={{ marginTop: 4 }}>

              <FormControl>

                <FormLabel>
                  Gender
                </FormLabel>

                <RadioGroup
                  row
                  value={gender}
                  onChange={handleGenderChange}
                >

                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />

                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />

                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />

                </RadioGroup>

              </FormControl>

            </Box>


            {/* ================= SELECT ================= */}

            <Box sx={{ marginTop: 4 }}>

              <FormControl fullWidth>

                <InputLabel>
                  Select Course
                </InputLabel>

                <Select
                  value={course}
                  label="Select Course"
                  onChange={handleCourseChange}
                >

                  <MenuItem value="cse">
                    Computer Science
                  </MenuItem>

                  <MenuItem value="it">
                    Information Technology
                  </MenuItem>

                  <MenuItem value="ece">
                    Electronics
                  </MenuItem>

                  <MenuItem value="me">
                    Mechanical
                  </MenuItem>

                </Select>

              </FormControl>

            </Box>


            {/* ================= CHECKBOX ================= */}

            <Box sx={{ marginTop: 4 }}>

              <Typography
                variant="h6"
                gutterBottom
              >
                Terms and Conditions
              </Typography>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                }
                label="I agree to the terms and conditions"
              />

            </Box>


            {/* ================= SWITCH ================= */}

            <Box sx={{ marginTop: 2 }}>

              <FormControlLabel
                control={
                  <Switch
                    checked={notifications}
                    onChange={handleNotificationChange}
                  />
                }
                label="Enable Notifications"
              />

            </Box>


            {/* ================= STATUS ================= */}

            <Box
              sx={{
                marginTop: 2,
                padding: 2,
                backgroundColor: "#f5f5f5",
                borderRadius: 2
              }}
            >

              <Typography variant="body1">
                <strong>Terms:</strong>{" "}
                {checked ? "Accepted ✓" : "Not Accepted"}
              </Typography>

              <Typography variant="body1">
                <strong>Gender:</strong>{" "}
                {gender || "Not Selected"}
              </Typography>

              <Typography variant="body1">
                <strong>Course:</strong>{" "}
                {course || "Not Selected"}
              </Typography>

              <Typography variant="body1">
                <strong>Notifications:</strong>{" "}
                {notifications ? "Enabled" : "Disabled"}
              </Typography>

            </Box>


            {/* ================= BUTTON ================= */}

            <Box
              sx={{
                marginTop: 4,
                display: "flex",
                gap: 2
              }}
            >

              <Button
                variant="contained"
                size="large"
                fullWidth
                disabled={!checked}
              >
                Submit
              </Button>

              <Button
                variant="outlined"
                size="large"
                fullWidth
              >
                Cancel
              </Button>

            </Box>

          </CardContent>

        </Card>

      </Container>
    </>
  );
}

export default App;