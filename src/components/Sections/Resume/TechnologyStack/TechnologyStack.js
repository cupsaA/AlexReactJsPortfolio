import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import CardStack from "./CardStack/CardStack";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        marginLeft: '25px',
        marginRight: '25px',
        marginTop: '25px',
        color: theme.palette.text.secondary,
    },
}));

const TechnologyStack = () => {
    const innerClasses = useStyles();

    return (
        <div>
            <h1>My Favoriut Stacks</h1>
            <Grid container spacing="100%">
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
};

export default TechnologyStack;

