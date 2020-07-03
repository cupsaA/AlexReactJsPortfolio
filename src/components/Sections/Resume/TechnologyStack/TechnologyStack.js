import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Paper} from "@material-ui/core";
import CardStack from "./CardStack/CardStack";
import Git from '../../../../assets/git-logo.jpg'
import Java from '../../../../assets/java.jpg'
import ReactJS from '../../../../assets/reactjs.png'
import NodeJs from '../../../../assets/nodejs.png'

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
        boxShadow: 'none'

    },
}));

const TechnologyStack = () => {
    const innerClasses = useStyles();

    return (
        <div style={{marginRight: '10%',marginLeft: '10%' }}>
            <h1>My Favoriut Stacks</h1>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack icon={Git} description={"I use Git for all of my projects so far. I have used Git for version control in small teams."}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack icon={Java}  description={"Java was my first programming language that I started using in college years ago. It is by far the language" +
                        " I am most familiar with in terms of data-structure and algorithm programming."}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack icon={ReactJS}  description={"I am fairly new to React and really did not like it at first. It has grown on me though and I will continue" +
                        " to use it going forward. I have built a ReactJS based resume-website template (link below in portfolio) which I used as a starting point for this" +
                        " personal site."}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack icon={NodeJs}  description={"Node JS is my server-side scripting language of choice. The bulk of my experience with it has been in" +
                        " conjunction with ReactJS-based projects."}/>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
};

export default TechnologyStack;

