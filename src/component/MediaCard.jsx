import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useState} from 'react'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme=>({
  root: {
    width: '300px',
    marginLeft:'40px',
    marginTop: '50px',
    marginBottom: '15%',
    position: 'relative',
    
  },
  cardMedia: {
      width: '100%',
      height: '200px',
      
  },
  cardContent: {
      height: '280px',
      
  },
  cardTitle: {
    height: '115px'
  },
  cardExplanation: {
    height: '100px'
  },
  favorite:{
    position: 'absolute',
    bottom: '0',
    left: '5%',
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  More:{
    position: 'absolute',
    bottom: '0',
    left: '100px',
    transform: 'rotate(180deg)',
  }
  
  
  
}));



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
        
        <Card className={classes.root} >
            <CardActionArea className={classes.action}>
               <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                  
                </Avatar>
                }
                title={props.user}
                subheader={props.createAt}
                />
                <CardMedia className={classes.cardMedia}
                    component='img'
                    image={props.image}/>
                <CardContent className={classes.cardContent}>
                    <Typography className={classes.cardTitle} gutterBottom variant="h4" component="h2">
                          {props.name}
                    </Typography>
                    <Typography gutterBottom  component="h4">
                        〒{props.address}
                    </Typography>
                    <Typography className={classes.cardExplanation} variant="body2" color="textSecondary" component="p">
                        {props.explanation}
                        
                    </Typography>
                </CardContent>

            </CardActionArea>
                <div className={classes.favorite}>

                <IconButton 
                  aria-label="add to favorites" 
                  onClick={FavoriteButton}>
                     <FavoriteIcon 　 />
                </IconButton>
                {favorite.count}
                
                </div>
        </Card>
            
            
            
    )
}

export default MediaCard