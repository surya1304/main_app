import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar
} from "recharts";
import {Collapse} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: "50vh",
        margin : 20,
    },
    media: {
        height: 0,
        paddingTop: "56.25%"
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    linechart: {
        overflowX: "scroll",
        display: "flex",
        justifyContent: "center"
    }
}));

const SmallTiles = ({first, second}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    const data = [
        {
            name: "Plant Availability",
            Actual: 95,
            Estimated: 100
        }
    ];
    const title = `${first} vs ${second}`;

    return (
        <Card id='helloworld' className={classes.card}>
            <CardHeader
                title={title}
                subheader="2019-07-11"
                action={
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                }
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent className={classes.linechart}>
                    <BarChart width={300} height={400} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Actual" fill="#8884d8" />
                        <Bar dataKey="Estimated" fill="#82ca9d" />
                    </BarChart>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default withRouter(SmallTiles);