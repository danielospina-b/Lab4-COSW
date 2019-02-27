import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import CardList from "../CardList/CardList";
import "./TaskList.css";
import { NewTask } from "../NewTask/NewTask";
import { Route, Switch } from 'react-router-dom';

export class TaskList extends React.Component {
    render() {
        return(
            <div>
                <DrawerAppBar/>
                <Switch>
                    <Route exact path="/tasklist" component={CardListView}/>
                    <Route path={'/tasklist/newtask'} component={NewTaskView}></Route>
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