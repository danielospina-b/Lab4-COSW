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
        console.log("[FUNCIONALIDAD TEMPORAL] Para ver la lista de tareas si no hay conexion con el API Rest, cambiar el token en localStorage a una cadena aleatoria, e ir a http://localhost:3000/tasklist o su equivalente.");

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
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        axios.post("http://localhost:8080/user/login", {
            username: email,
            password: password
        }).then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data.accessToken);
            this.setState({
                fireRedirect: true
            });
        }).catch((error) => {
            console.log(error);
        })
    }
}