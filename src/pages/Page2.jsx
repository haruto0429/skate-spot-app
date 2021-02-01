
import MediaCard from '../component/MediaCard'
import {makeStyles} from '@material-ui/core/styles'
import {useEffect, useState} from 'react'
import {db} from '../config/firebase';
import { useHistory } from 'react-router-dom';
import {Button} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const Page2 = () => {
    const useStyles = makeStyles(theme =>({
        wrap:{
            margin:'0 auto',
            width: '100%',
            
            
        },
        row:{
            display:'flex',
            // flexDirection: 'row',
            flexWrap: 'wrap',
            
        },
        areaName:{
            textAlign:'center'
        },
        postButton:{
            height: '8%',
            width: '5%',
            borderRadius: '70px',
            position:'fixed',
            bottom: '5%',
            left: '40%',
            right: '50%',
            [theme.breakpoints.down('sm')]:{
                position: 'fixed',
                bottom: '5%',
                left: '30%',
                right: '50%',
            }
        },
        areaChoiceButton:{
            height: '8%',
            width: '8%',
            position:'fixed',
            bottom: '5%',
            left: '50%',
            right: '50%',
            [theme.breakpoints.down('sm')]:{
                width: '22%'
            }
        }
        
        
    }))

    const classes = useStyles();
    const [posts,setPosts]=useState([]);
    const history = useHistory();
    const handleLink = path => history.push(path);

    useEffect(() => {
        db.collection('posts')
        .get()
        .then((querySnapshot)=> {
            setPosts(querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
            console.log(
                querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
    })
    },[])
    
    
    return (
        <>
        <div className={classes.page1}>

            <h1 className={classes.areaName}>東北エリア</h1>

            <section className={classes.wrap}>
                <div className={classes.row}>
            {posts &&
                posts.map((post) => (
                    <div>
                        <MediaCard 
                            image={post.image}
                            name={post.name} 
                            address={post.addres} 
                            explanation={post.explanation} />
                    </div>
                ))}

                </div>
            </section>
        <Button
            className={classes.postButton}
            onClick={() => handleLink('../share')}
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
        >
            +
        </Button>
        <Button 
            className={classes.areaChoiceButton}
            onClick={() => handleLink('../area')}
            variant="contained"
            color="default"
        >
            エリア選択
        </Button>
        </div>
        </>
    )
}






export default Page2