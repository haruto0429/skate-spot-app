import { makeStyles, TextField, Button,  } from "@material-ui/core";
import { useState } from 'react';
import { auth } from '../config/firebase';
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme=>({
    signUpForm: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '500px',
        width: '250px',
        margin: '0 auto',
    },
    signUpTitle: {
        textAlign: 'center',
        fontFamily: 'Impact',
        fontSize: '3rem',
    },
    signUpButton: {
        width: '30%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]:{
            width: '40%',
            height: '10%'
        }
    }
    

}))
const Signin = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useContext(AuthContext);
    const classes = useStyles()
    

    const handleSubmit = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((result) => {
                result.user.updateProfile({ displayName: username }).then(() => {
                    console.log('ユーザー作成成功', result);
                })
            })
            .catch((error) => {
                console.log('ユーザー作成失敗', error);
            });
    };

    if (user) {
        return <Redirect to='/page1' />
    }

    return (
        <form className={classes.signUpForm} onSubmit={handleSubmit}>
            <h1 className={classes.signUpTitle}>SignUp</h1>
            <TextField 
                className={classes.personalInfo}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label='ユーザーネーム' />
            <TextField 
                className={classes.personalInfo}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label='メールアドレス' />
            <TextField 
                className={classes.personalInfo}
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                label='パスワード'
                variant="filled"                
                />
            <Button 
                className={classes.signUpButton} 
                type='submit'
                variant="contained" 
                color='primary'
                >SIGNUP
            </Button>
            <Link to='/Login'>アカウントをお持ちの方はコチラ</Link>
        </form>

    )
}








export default Signin;