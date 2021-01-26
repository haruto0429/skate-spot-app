import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../config/firebase'
import {Button} from '@material-ui/core'
import image from '../img/jenny-hill-bzGL7ci_lvc-unsplash.jpg'


const useStyles = makeStyles(theme=>({
    title: {
        color: 'green',
        fontSize: '3rem',
        margin: '0',
        paddingTop: '2%',
    },
    AreaChoice: {
        margin: '0 auto',
        textAlign: 'center',
        // backgroundImage : `url(${image})`,
        // minHeight: '100vh',
        // backgroundSize:'cover',
        backgroundColor: 'black',
        height: '100vh', 
        
    },
    linkList: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        
        

    },
    logoutButton: {
        margin: '0 auto',
        width: '12%', 
        [theme.breakpoints.down('sm')]:{
            width:'30%',
            margin: '10% auto',
        }
    },
    page: {
        marginBottom : '3%',
        fontSize: '1.5rem',
        [theme.breakpoints.down('sm')]:{
         marginTop: '5%'   
            
        }
        
    }
}));

const Area = () => {

    const logout = () => {
        auth.signOut();
    }
    const classes = useStyles();
    return (
        <div className={classes.AreaChoice}>
            <h1 className={classes.title}>エリア選択</h1>

            <div className={classes.linkList}>

            <Link className={classes.page} to='/Page1'>北海道</Link>
            <Link className={classes.page} to='/Page2'>東北</Link>
            <Link className={classes.page}>中部</Link>
            <Link className={classes.page}>関東</Link>
            <Link className={classes.page}>近畿</Link>
            <Link className={classes.page}>中国•四国</Link>
            <Link className={classes.page}>九州</Link>
            <Link className={classes.page}>沖縄</Link>
            </div>

            <Button className={classes.logoutButton}
            onClick={logout}
            variant="contained"
            >
                ログアウト
            </Button>
        </div>
    )
}

export default Area