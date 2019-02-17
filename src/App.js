import React, { Component } from 'react';
import './App.css';
import { Login } from './Login/Login';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { TaskList } from "./TaskList/TaskList";

const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#66BB6A',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            //light: '#0066ff',
            main: '#81d4fa',
            // dark: will be calculated from palette.secondary.main,
            //contrastText: '#ffcc00',
        },
        // error: will use the default color
    },
    typography: {
        useNextVariants: true,
    },
});

const LoginView = () => (
    <Login/>
);

const TaskListView = () => (
    <TaskList/>
);


class App extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider theme={theme}>
                    <Router>
                        <div>
                            <Route exact path="/" component={LoginView}/>
                            <Route path="/tasklist" component={TaskListView}/>
                        </div>
                    </Router>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
