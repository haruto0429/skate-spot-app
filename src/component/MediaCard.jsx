import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useState} from 'react'


const useStyles = makeStyles({
  root: {
    width: '300px',
    height: '100%',
    marginLeft:'40px',
    marginTop: '20px',
    
    
  },
  cardMedia: {
      width: '100%',
      height: '200px',
      
  },
  cardContent: {
      width: '100%',
      
  },
  
});


const MediaCard = (props) => {
    const classes = useStyles();
    const [favorite,setFavorite] = useState({ count: 0, clicked: false});

        // いいねボタン
       const FavoriteButton = () => {
           setFavorite({
               count: favorite.count + (favorite.clicked ? -1 : 1),
               clicked: !favorite.clicked            
           })
       }
    
    

    return (
        
        <Card className={classes.root}>
            <CardActionArea >
                <CardMedia className={classes.cardMedia}
                    component='img'
                    image={props.image}/>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h4" component="h2">
                          {props.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h4">
                         {props.address}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.explanation}
                        
                    </Typography>
                </CardContent>


                <IconButton  aria-label="add to favorites">
                    <FavoriteIcon onClick={FavoriteButton} />
                </IconButton>
                {favorite.count}
            </CardActionArea>
        </Card>
            
            
            
    )
}

export default MediaCard