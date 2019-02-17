import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./CardItem.css";
import { CardHeader } from "@material-ui/core";

class CardItem extends React.Component {
    render() {
        return (
            <div>
                <Card className="card">
                    <CardHeader
                        action={
                            <Typography>
                                Status: {this.props.cardInfo.status}
                            </Typography>
                        }
                        title={
                            <Typography variant="h5">
                                {this.props.cardInfo.description}
                            </Typography>
                        }
                        subheader={
                            <Typography color="textSecondary">
                                {this.props.cardInfo.dueDate}
                            </Typography>
                        }
                    />
                    <CardContent>
                    <Typography className="pos" color="textPrimary">
                        Responsible: {this.props.cardInfo.responsible.name}
                    </Typography>
                    <Typography className="pos" color="textSecondary" >
                        {this.props.cardInfo.responsible.email}
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <br></br>
            </div>
        );
    }
}

export default CardItem;