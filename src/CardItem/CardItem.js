import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./CardItem.css";
import { CardHeader } from "@material-ui/core";
import moment from "moment";
import PlayCircleFilledWhiteOutlined from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import DonutLarge from "@material-ui/icons/DonutLarge";
import Done from "@material-ui/icons/Done";

class CardItem extends React.Component {
    render() {
        var statusIcon;
        if (this.props.cardInfo.status === "Ready") {
            statusIcon = (<PlayCircleFilledWhiteOutlined className="status" color="primary" />);
        } else if(this.props.cardInfo.status === "In Progress") {
            statusIcon = (<DonutLarge className="status" color="primary" />);
        } else {
            statusIcon = (<Done className="status" color="primary" />);
        }
        return (
            <div>
                <Card className="card">
                    <CardHeader
                        action={statusIcon}
                        title={
                            <Typography variant="h5">
                                {this.props.cardInfo.description}
                            </Typography>
                        }
                        subheader={
                            <Typography color="textSecondary">
                                {moment(this.props.cardInfo.dueDate).format("DD-MM-YYYY HH:MM")}
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
                        <Button size="small">See More</Button>
                    </CardActions>
                </Card>
                <br></br>
            </div>
        );
    }
}

export default CardItem;