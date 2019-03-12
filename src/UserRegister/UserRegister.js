import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookOutlined from "@material-ui/icons/BookOutlined";


export class UserRegister extends React.Component {
    render() {
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
                                Comlete Registration
                            </Button>
                        </form>
                        <br></br>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}