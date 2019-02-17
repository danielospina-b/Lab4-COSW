import React from "react";
import SwipeableTemporaryDrawer from "../AppDrawer/AppDrawer";
import CardList from "../CardList/CardList";

export class TaskList extends React.Component {
    render() {
        return(
            <div>
                <SwipeableTemporaryDrawer/>
                <CardList/>
            </div>
        );
    }
}