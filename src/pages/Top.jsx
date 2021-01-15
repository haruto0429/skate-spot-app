import { useHistory } from 'react-router-dom';


const Top = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);

    return (
        <>
            <h1>CAFE SPOTT App</h1>
            <h2>Welcom!!</h2>
            <button onClick={() => handleLink('./Signin')}>Signin</button>
            <button onClick={() => handleLink('./Login')}>Login</button>

        </>
    );
}

export default Top