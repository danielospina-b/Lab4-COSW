import React from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider, DateTimePicker } from "material-ui-pickers";
import DateFnsUtils from '@date-io/date-fns';
import { Redirect } from "react-router-dom";

export class NewTask extends React.Component {

    state = {
        taskDate: new Date(),
        priority: "",
        email: "",
        description: "",
        name: "",
        triggerRedirect: false,
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleDateChange = (date) => {
        this.setState({
            taskDate: date
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({triggerRedirect: true});
    };

    render() {

        if (this.state.triggerRedirect) {
            return (<Redirect to={{
                pathname:"/tasklist",
                state: {id: this.state.description}
                }}/>
            );
        }

        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Typography variant="h4">Add New Task</Typography>
                        <form className="form" onSubmit={this.handleSubmit} name="newtask-form">
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel>Description</InputLabel>
                                <Input id="description" name="description" autoFocus 
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel>Responsible</InputLabel>
                                <Input name="name" id="name"
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel>Email</InputLabel>
                                <Input name="email" id="email" 
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel>Priority</InputLabel>
                                <Select 
                                    value={this.state.priority}
                                    onChange={this.handleChange}
                                    inputProps={{
                                        name: 'priority',
                                        id: 'age-simple',
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Normal" >Normal</MenuItem>
                                    <MenuItem value="En Progreso" >En Progreso</MenuItem>
                                    <MenuItem value="Completado" >Completado</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DateTimePicker
                                        margin="normal"
                                        label="Date picker"
                                        id="due-date"
                                        name="taskDate"
                                        value={this.state.taskDate}
                                        onChange={this.handleDateChange}>
                                    </DateTimePicker>
                                </MuiPickersUtilsProvider>
                            </FormControl>
                            <br></br><br></br>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Add Task
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}