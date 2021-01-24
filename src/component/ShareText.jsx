import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {TextField,} from '@material-ui/core';
import {useState,useEffect} from 'react'
import {Button} from '@material-ui/core'
import { storage } from "../config/firebase";
import { useHistory } from 'react-router-dom';
import {db} from '../config/firebase';


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
        
        },
        back: {
            backgroundColor:'#CCFF99',
            height: '100vh',
        },
        shareTitle: {
            textAlign:'center',
            fontFamily: 'Impact',
            color: 'green',
        },
        imgResize:{
            height: '150px',
            width:  '150px',
            backgroundColor: 'gray',
        }
    }));

    const classes = useStyles();

    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const [explanation,setExplanation]=useState("")
    const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
    const [file,setFile] = useState(null)
    const [url,setUrl]=useState(null)
    
    
    const handleSubmit = (e) => {
        // e.preventDefault();
        db.collection('posts').add({
            name: name,
            addres: address,
            explanation: explanation,
        })
        .then(() => {console.log('登録成功')
        })
        .catch(()=>{console.log('登録失敗')})
    }

    useEffect(() => {
        db.collection('posts')
        .get()
        .then((querySnapshot)=> {
            console.log(
                querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
        )
    })
    },[])




    const handleImage = (e) =>  {
    const url =createObjectURL(e.target.files[0]);
        setUrl(url)
        setFile(e.target.files[0])
        console.log(e.target.files[0].name)
    }
    
    const upload = ()=>{
        console.log(file)

        const uploadTask = storage.ref(`images/${file.name}`).put(file);
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
                    console.log(url)
                });
            }
        )
    }


    console.log("file: ", file);
    
    const history = useHistory();
    const handleLink = path => history.push(path);
    
    
    
    
    return (
        <div className={classes.back}>

        <form className={classes.shareForm} >
            

        <h1 className={classes.shareTitle}>spot share</h1>
        <TextField  
            name='name'
            label="スポット名" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        <TextField
            name='address'
            label='住所'
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            />
        <TextField
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
                    onClick={(e)=>{upload();handleSubmit();}}
                    variant="contained" 
                    color="primary" 
                    component="span"
                    >
                    UPLOAD
                </Button>
            </div>
            
        
        <button onClick={() => handleLink('../Page1')}>戻る</button>
            
        
    </form>
        </div>

        
    )
}

export default ShareText