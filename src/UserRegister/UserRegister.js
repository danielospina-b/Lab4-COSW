import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookOutlined from "@material-ui/icons/BookOutlined";
import { Redirect } from "react-router-dom";
import axios from "axios";

export class UserRegister extends React.Component {

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
                        <BookOutlined color="primary" className="svg_icons"/>
                        <Typography variant="h4">Sign up</Typography>
                        <form className="form" onSubmit={this.handleSubmit} name="login-form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Your Name</InputLabel>
                                <Input id="name" name="name" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Your Last Name</InputLabel>
                                <Input id="lastname" name="lastname" />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Your Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email"/>
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
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                                <Input
                                    name="passwordconfirm"
                                    type="password"
                                    id="passwordconfirm"
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
                                Complete Registration
                            </Button>
                        </form>
                        <br></br>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var password1 = document.getElementById("password").value;
        var password2 = document.getElementById("passwordconfirm").value;
        if (password1 === password2) {
            axios.post(apiURL + "/user/register", {
                "email" : email,
                password : password1,
                firstname : name,
                "lastname": lastname
            }).then((response) => {
                localStorage.setItem("token", response.data.accessToken);
                localStorage.setItem("userName", name + " " + lastname);
                localStorage.setItem("userMail", email);
                this.setState({
                    fireRedirect: true
                });
            }).catch((error) => {
                console.log(error);
            });
        } else {
            alert("Password do not match.")
        }
    }

}

const apiURL = "https://task-planner-ospina.herokuapp.com";