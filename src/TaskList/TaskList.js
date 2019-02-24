import React from "react";
import DrawerAppBar from "../DrawerAppBar/DrawerAppBar";
import CardList from "../CardList/CardList";
import "./TaskList.css";

export class TaskList extends React.Component {
    render() {
        return(
            <div>
                <DrawerAppBar/>
                <CardList/>
            </div>
        );
    }
}