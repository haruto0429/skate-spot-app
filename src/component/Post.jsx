import { useHistory } from 'react-router-dom';
import {} from '@material-ui/core'

const Post = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);
    return(
        
        <button onClick={() => handleLink('../share')}>投稿</button>
    )
}

export default Post