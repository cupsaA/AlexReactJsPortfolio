import React from "react";
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../../../assets/react-logo.png'


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        width: '200px',
        paddingTop: '56.25%',
        margin: 'auto'
    },
});

const CardProject = () => {
    const classes = useStyles();

    return(
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Logo}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        My React Portfolio
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       information about my portfolio
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href="https://github.com/cupsaA/AlexReactJsPortfolio" target="_blank">
                    View Github
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardProject;