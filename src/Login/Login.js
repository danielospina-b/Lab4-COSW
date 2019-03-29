import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LanguageRounded from "@material-ui/icons/BookOutlined";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css";


export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            fireRedirect : false
        }
    }

    render() {
        if (this.state.fireRedirect === true) {
            return <Redirect to="/tasklist"/>
        }

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <LanguageRounded color="primary" className="svg_icons"/>
                        <Typography variant="h4">Sign in</Typography>
                        <form className="form" onSubmit={this.handleSubmit} name="login-form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Sign in
                            </Button>
                        </form>
                        <br></br>
                        <a href="/register">Register</a>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        var useremail = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        axios.post(apiURL + "/user/login", {
            email: useremail,
            password: password
        }).then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data.accessToken);
            this.createAxiosInstance(response.data.accessToken);
            this.getBasicUserInfoAndRedirect(useremail);
        }).catch((error) => {
            console.log(error);
        })
    }

    createAxiosInstance(token) {
        axiosInstance = axios.create({
            baseURL: apiURL,
            timeout: 1000,
            headers: {'Authorization': 'Bearer '+ token}
        });
    }

    getBasicUserInfoAndRedirect(mail) {
        axiosInstance.get("/user/info", {
            params: {
                email : mail
            }
        }).then((response) => {
            localStorage.setItem("userName", response.data.firstname + " " + response.data.lastname);
            localStorage.setItem("userMail", response.data.email);
            this.setState({
                fireRedirect: true
            });
        }).catch((error) => {
            console.log(error);
        });
    }
}

const apiURL = "https://task-planner-ospina.herokuapp.com";
var axiosInstance;