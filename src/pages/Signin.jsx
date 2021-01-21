import { TextField } from "@material-ui/core";
import { useState } from 'react';
import { auth } from '../config/firebase';
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'

const Signin = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useContext(AuthContext)


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
        return <Redirect to='/area' />
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>ユーザー登録ページ</h1>
            <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label='ユーザーネーム' />
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label='メールアドレス' />
            <TextField
                value={password}
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                label='パスワード' />
            <button type='submit'>登録</button>
            <Link to='/Login'>アカウントをお持ちの方はコチラ</Link>
        </form>

    )
}








export default Signin;