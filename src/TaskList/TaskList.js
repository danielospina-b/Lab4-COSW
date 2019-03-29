import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import CardList from "../CardList/CardList";
import "./TaskList.css";
import { NewTask } from "../NewTask/NewTask";
import { Route, Switch, Redirect } from 'react-router-dom';

export class TaskList extends React.Component {
    render() {

        if (localStorage.getItem("token") === "undefined" | localStorage.getItem("token") === null) {
            console.log("undefined token");
            return <Redirect to="/"/>
        }
        
        return(
            <div>
                <DrawerAppBar/>
                <Switch>
                    <Route exact path="/tasklist" component={CardListView}/>
                    <Route path="/tasklist/newtask" component={NewTaskView}/>
                </Switch>
            </div>
        );
    }
}

const CardListView = () => (
    <CardList/>
);

const NewTaskView = () => (
    <NewTask/>
);