
import "./App.css";
import { darkTheme } from "./Theme.js";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./CustomComponents/NavBar";
import ArchivedTask from "./Pages/ArchivedTasks";
import PredefinedTask from "./Pages/PredefinedTasks";
import CreateNewTask from "./Pages/CreateTask";
import CalenderView from "./Components/CalenderView";
import PT from "./Components/PT.js";
import LandingPage from "./Components/LandingPage.js";
import Login from "./Components/login.js";
import SignUp from "./Components/signup.js";
//import EditableTable from "./CustomComponents/EditableTable";
import { Box } from "@mui/system";

//All pages for routes
import ManageTask from "./Pages/ManageTask";
import AllTask from "./Pages/AllTask";
import Dashboard from "./Pages/Dashboard";
import NewSubject from "./Pages/CreateSubject";
//import ErrorPage from "./Pages/404";
import ManageSubTask from "./Pages/ManageSubTask";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min.js";

const useStyles = makeStyles({
  root: {
    display: "flex",
    paddingRight: "0px",
  },
  rightBody: {},
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Router>
          <div className={classes.root}>
            <Navbar />

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Switch fullwidth>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/archived">
                  <ArchivedTask />
                </Route>
                <Route path="/newsub">
                  <NewSubject />
                </Route>
                <Route path="/predefined">
                  <PredefinedTask />
                </Route>
                <Route path="/createnewtask">
                  <CreateNewTask />
                </Route>
                <Route path="/managetask">
                  <ManageTask />
                </Route>
                <Route path="/alltask">
                  <AllTask />
                </Route>

                <Route path="/calender">
                  <div style={{ width: "80%" }}>
                    <CalenderView />
                  </div>
                </Route>

                <Route path="/managesubtask">
                  <div style={{ width: "80%" }}>
                    <ManageSubTask />
                  </div>
                </Route>

                <Route path="*">
                 
                </Route>
              </Switch>
            </Box>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;