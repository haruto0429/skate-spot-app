import { useState, useContext } from 'react';
import { makeStyles, TextField,Button} from "@material-ui/core";
import { auth } from '../config/firebase';
import { AuthContext } from '../context/AuthContext'
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme=>({
    loginForm: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '500px',
        width: '250px',
        margin: '0 auto',
    },
    loginTitle: {
        textAlign: 'center',
        fontFamily: 'Impact',
        fontSize: '3rem',
    },
    loginButton: {
        width: '30%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]:{
            width: '40%',
            height: '10%'
        }
    },
    noAccountLink: {
        width: '110%',
    
    }
}))
    

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useContext(AuthContext)
    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log('ログイン成功', result)
            })
            .catch((error) => {
                console.log('ログイン失敗', error)
            })
    }

    if (user) {
        return <Redirect to='/area' />
    }

    return (
        <form className={classes.loginForm} onSubmit={handleSubmit}>
            <h1 className={classes.loginTitle}>Login</h1>
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label='メールアドレス'
            />
            <TextField
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                label='パスワード'
                variant="filled" 
            />
            <Button 
            className={classes.loginButton} 
            type="submit"
            variant="contained" 
            color='secondary'
            >
                LOGIN
            </Button>
            <Link className={classes.noAccountLink} to='/Signin'>アカウントをお持ちでない方はコチラ</Link>
        </form>

    )
}














export default Login;