import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


const MediaCard = (props) => {
    const classes = useStyles();
    // const {name,address,explanation,url}=props;
    return (
        
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                    component='img'
                    image={props.file}/>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                          {props.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                         {props.address}
                    </Typography>
                        {props.explanation}
                    <Typography variant="body2" color="textSecondary" component="p">
                        
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
            
            
            
    )
}

export default MediaCard