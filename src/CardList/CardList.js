import React from "react";
import CardItem from "../CardItem/CardItem";

class CardList extends React.Component {
    render() {
        const cardList = listTasks.map((cardItem, i) => {
            return (
                <CardItem key={i} cardInfo={cardItem} />
            );
        });
        return (
            <div>
                {cardList}
            </div>
        );
    }
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
  	"dueDate": 156464645611
},
{
    "description": "Some other description text ",
  	"responsible": {
  		"name": "Daniel Ospina",
  		"email": "dospina@gmail"
  	},
  	"status": "In Progress",
  	"dueDate": 156469645622
},
{
    "description": "Oh look, another description ",
  	"responsible": {
  		"name": "Juan Rosales",
  		"email": "jrosales@gmail"
  	},
  	"status": "Completed",
  	"dueDate": 156469875633
}
]