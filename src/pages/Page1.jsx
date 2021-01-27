import Post from '../component/Post'
import MediaCard from '../component/MediaCard'
import {makeStyles} from '@material-ui/core/styles'
import AreaChoiceButton from '../component/AreaChoiceButton'
import {useEffect, useState} from 'react'
import {db} from '../config/firebase';





const Page1 = () => {
    const useStyles = makeStyles({
        wrap:{
            margin:'0 auto',
            width: '100%',
            
            
        },
        row:{
            display:'flex',
            // flexDirection: 'row',
            flexWrap: 'wrap',
            
        },
        
        
    })

    const classes = useStyles();
    const [posts,setPosts]=useState([]);

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

            <h1>北海道エリア</h1>
        <Post />
        <AreaChoiceButton />
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
        </div>
        </>
    )
}

export default Page1;