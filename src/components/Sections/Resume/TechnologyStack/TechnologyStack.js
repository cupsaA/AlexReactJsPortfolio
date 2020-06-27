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
            <Grid container spacing="100%">
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack icon={Git} description={"some text about Git ccghvhbjbcgfxcjhkhgfxgchvjklhdgffhgjhkcgxfchvjv"}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack icon={Java}  description={"some text about Java"}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack icon={ReactJS}  description={"some text about ReactJs"}/>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={innerClasses.paper}>
                        <CardStack icon={NodeJs}  description={"some text about NodeJs"}/>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
};

export default TechnologyStack;

