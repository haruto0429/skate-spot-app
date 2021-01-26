import Post from '../component/Post'
import MediaCard from '../component/MediaCard'
import {makeStyles} from '@material-ui/core/styles'
import AreaChoiceButton from '../component/AreaChoiceButton'




const Page1 = () => {
    const useStyles = makeStyles({
        wrap:{
            margin:'0 auto',
            maxWidth:'1024px',
            position:'relative',
            textAlign:'center',
            widht: '100%',
        },
        row:{
            display:'flex',
            flexFlow:'rowWrap'
        }
    })

    const classes = useStyles();
    


    return (
        <>
            <section className={classes.wrap}>
                <div className={classes.row}>

                </div>
            </section>
            <h1>北海道エリア</h1>
            <MediaCard 
                
                />
            <Post />
            <AreaChoiceButton />
        </>
    )
}

export default Page1;