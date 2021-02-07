import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {TextField,} from '@material-ui/core';
import {useState,useEffect, useContext} from 'react'
import {Button} from '@material-ui/core'
import { storage } from "../config/firebase";
import { useHistory } from 'react-router-dom';
import {db} from '../config/firebase';
import { AuthContext } from '../context/AuthContext';



const ShareText = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
            textAlign: 'center'
        },
        input: {
            display: 'none',
        },
        shareForm: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '350px',
        width: '250px',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: '500px',
            width: '250px',
            margin: '0 auto',
            }
        },
        back: {
            height: '100vh',
        },
        shareTitle: {
            textAlign:'center',
            fontFamily: 'Impact',
            color: 'black',
            [theme.breakpoints.down('sm')]:{
                textAlign:'center',
                fontFamily: 'Impact',
                color: 'black',
            }
        },
        imgResize:{
            height: '150px',
            width:  '150px',
            backgroundColor: 'gray',
            [theme.breakpoints.down('sm')]:{
                height: '150px',
                width:  '150px',
                backgroundColor: 'gray',
            }
        
        },
        backButton:{
            marginTop: '8%',
            [theme.breakpoints.down('sm')]:{
                marginTop: '8%',
                height: '40px',
                width: '250px',
            }
        },
        nameFiled: {
            width: '100%',
            height:'100%',
        },
        addressFiled: {
            width: '100%',
            height:'100%',
        },
        explanationFiled: {
            width: '100%',
            height:'100%',
        }
    }));

    const classes = useStyles();

    const [name,setName]=useState("")
    const [addres,setAddres]=useState("")
    const [explanation,setExplanation]=useState("")
    const user = useContext(AuthContext)
    const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
    const [file,setFile] = useState(null)
    const [url,setUrl]=useState(null)
    
    
    

    useEffect(() => {
        db.collection('posts')
        .get()
        .then((querySnapshot)=> {
            console.log(
                querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
                )
            })
        },[])
        
        
        // 画像プレビュー
        const handleImage = (e) =>  {
            const url =createObjectURL(e.target.files[0]);
            setUrl(url)
            setFile(e.target.files[0])
            console.log(e.target.files[0].name)
        }
        
        
        // 画像、テキストをfirestoreに格納
        const upload = ()=>{
            
        const uploadTask = storage.ref(`images/${file?.name}`).put(file);
        uploadTask.on(
            "state_changed",
            snapshot => {
                console.log('snapshot', snapshot)
            },
            error => {
                console.log(error)
            },
            ()=> {
                storage
                .ref("images")
                .child(file.name)
                .getDownloadURL()
                .then(url=> {
                    console.log(url);
                    db.collection('posts')
                    .add({
                        name: name,
                        addres: addres,
                        explanation: explanation,
                        image: url,
                        createAt: new Date(),
                        username:user.displayName,
                    })
                    .then(() => {handleLink('./page1')
                })
                .catch(()=>{console.log('error')})
                });
            }
        )
    }


    
    
    const history = useHistory();
    const handleLink = path => history.goBack(path);
    
    
    
    
    return (
        <div className={classes.back}>

        <form className={classes.shareForm} >
            

        <h1 className={classes.shareTitle}>spot share</h1>
        <TextField  className={classes.nameFiled}
            name='name'
            label="スポット名" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        <TextField className={classes.addressFiled}
            name='address'
            label='住所'
            value={addres}
            onChange={(e)=>setAddres(e.target.value)}
            />
        <TextField className={classes.explanationFiled}
            name='explanation'
            label="説明"
            multiline
            rows={5}
            value={explanation}
            onChange={(e)=>setExplanation(e.target.value)}
            />


            <div className={classes.root}>
                <input accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type='file'
                    onChange={handleImage}
                    name='image'
                    />
                <label htmlFor="icon-button-file">
                    <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                    <div id='preview'>画像を追加</div>
                    <img className={classes.imgResize}  src={url}/>
                 
                 <Button 
                    type='submit'
                    onClick={()=>{
                        upload();
                        
                    }}
                    variant="contained" 
                    color="primary" 
                    component="span"
                    >
                    UPLOAD
                </Button>
            </div>
            
        
        <Button className={classes.backButton}
        onClick={() => handleLink()}
        variant="outlined"
        color="primary"
        >
            投稿一覧へ
        </Button>
            
        
    </form>
        </div>

        
    )
}

export default ShareText