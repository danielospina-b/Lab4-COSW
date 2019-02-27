import React from "react";
import CardItem from "../CardItem/CardItem";
import Fab from '@material-ui/core/Fab';
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

class CardList extends React.Component {
    render() {
        const cardList = listTasks.map((cardItem, i) => {
            return (
                <CardItem key={i} cardInfo={cardItem} />
            );
        });
        return (
            <div>
				<br></br>
				{cardList}
				<Link to="/tasklist/newtask">
                    <Fab color="primary" style={fab}>
                        <AddIcon></AddIcon>
                    </Fab>
                </Link>
            </div>
        );
    }
}

const fab = {
    bottom: 15,
    right: 15,
    position: "fixed"
}

export default CardList;

const listTasks = [
{
    "description": "Some description text ",
  	"responsible": {
  		"name": "Santiago Carrillo",
  		"email": "sancarbar@gmail"
  	},
  	"status": "Ready",
  	"dueDate": 1554686456114
},
{
    "description": "Some other description text ",
  	"responsible": {
  		"name": "Daniel Ospina",
  		"email": "dospina@gmail"
  	},
  	"status": "In Progress",
  	"dueDate": 1564626456224
},
{
    "description": "Oh look, another description ",
  	"responsible": {
  		"name": "Juan Rosales",
  		"email": "jrosales@gmail"
  	},
  	"status": "Completed",
  	"dueDate": 1556509875633
}
]