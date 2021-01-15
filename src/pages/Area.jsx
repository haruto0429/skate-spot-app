import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { auth } from '../config/firebase'


const useStyles = makeStyles({
    title: {
        color: 'green',
    },
    AreaChoice: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '350px',
        width: '400px',
        margin: '0 auto',
    }
});

const Area = () => {

    const logout = () => {
        auth.signOut();
    }
    const classes = useStyles();
    return (
        <div className={classes.AreaChoice}>
            <h1 className={classes.title}>エリア選択</h1>

            <Link to='/Page1'>北海道</Link>
            <Link to='/Page2'>東北</Link>
            <Link>中部</Link>
            <Link>関東</Link>
            <Link>近畿</Link>
            <Link>中国•四国</Link>
            <Link>九州</Link>
            <Link>沖縄</Link>

            <button onClick={logout}>ログアウト</button>
        </div>
    )
}

export default Area