import { useHistory } from 'react-router-dom';
import {Button} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';




const Post = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);



    return(
        
        <Button
        onClick={() => handleLink('../share')}
        variant="contained"
        color="primary"
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
        
    )
}

export default Post