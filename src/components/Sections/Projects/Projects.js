import React from "react";
import classes from './Projects.module.css';
import {Paper, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardProject from "./CardProject/CardProject";


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

const Projects = () => {
    const innerClasses = useStyles();

    return (
        <div className={classes.Projects} id="projects">
            <Grid container spacing="100%">
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}><CardProject/></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>xs=3</Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>xs=3</Paper>
                </Grid>
            </Grid>
        </div>
    )

}
export default Projects;