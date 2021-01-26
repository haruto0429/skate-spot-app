import { useHistory } from 'react-router-dom';
import {} from '@material-ui/core'

const AreaChoiceButton = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);
    return(
        
        <button onClick={() => handleLink('../area')}>エリア選択</button>
    )
}

export default AreaChoiceButton