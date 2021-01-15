import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import {TextField} from '@material-ui/core';
import {useState} from 'react'
import {Button} from '@material-ui/core'
import firebase, { storage } from "../pages/firebase/firebase";



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
        shareTitle: {
            textAlign:'center',
        },
        imgResize:{
            height: '150px',
            width:  '150px',
            backgroundColor: 'gray',
        }
    }));

    const classes = useStyles();

    const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
    const [file,setFile]=useState("")
    
    const [name,setName]=useState("")
    const [address,setAddress]=useState("")
    const [explanation,setExplanation]=useState("")

    
    
    

    return (
       
        <form className={classes.shareForm} >

        <h1 className={classes.shareTitle}>spot share</h1>
        <TextField  
            label="スポット名" 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <TextField
            label='住所'
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
        />
        <TextField
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
                    onChange={e=>{const image_url =
                        createObjectURL(e.target.files[0]);
                        setFile(image_url)
                    }}
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
                    <img className={classes.imgResize}  src={file}/>
                 
                 <Button 
                    
                    variant="contained" 
                    color="primary" 
                    component="span"
                    >
                    UPLOAD
                </Button>
            </div>
        
    </form>
        
    )
}

export default ShareText