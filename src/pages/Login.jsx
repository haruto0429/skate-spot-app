import { useState, useContext } from 'react';
import { TextField } from "@material-ui/core";
import { auth } from '../config/firebase';

import { AuthContext } from '../context/AuthContext'
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useContext(AuthContext)


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
        <form onSubmit={handleSubmit}>
            <h1>ユーザーログインページ</h1>
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
            />
            <button type="submit">ログイン</button>
        </form>

    )
}














export default Login;