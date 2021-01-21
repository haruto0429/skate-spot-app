import { useHistory } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'

const Top = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);
    const useStyles = makeStyles({
        topForm:{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: '350px',
            width: '100vh',
            margin: '0 auto',
            },
        topTitle:{
            textAlign:'center'
        },
        topSubTitle:{
            textAlign:'center'
        },
        signinLogin:{
            textAlign:'center',
        },
        signinButton:{
            marginRight:'1%'
        },
        gestButton:{
            width: '25%',
            height: '13%',
            margin:'0 auto',
        }
    })
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.topForm}>
            <h1 className={classes.topTitle}>SKATE SPOTT App</h1>
            <h2 className={classes.topSubTitle}>Welcom!!</h2>
            
            <div className={classes.signinLogin}>
            <Button className={classes.signinButton}
                    onClick={() => handleLink('./Signin')} 
                    variant="contained" 
                    color="primary"
                    >
                    SignUp
            </Button>
            
            <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => handleLink('./Login')}
                    >
                    Login
            </Button>
            </div>

            <Button className={classes.gestButton} 
                    onClick={() => handleLink('./area')}
                    variant="contained" 
                    >
                    ログインなしで始める
            </Button>

            </div>
            


        </>
    );
}

export default Top