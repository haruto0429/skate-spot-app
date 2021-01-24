import { useHistory } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'
import image from '../img/jan-kopriva-oK2OoXCpOB4-unsplash.jpg'

const Top = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);
    const useStyles = makeStyles({

        topAll:{
            backgroundImage : `url(${image})`,
            minHeight: '100vh',
            backgroundSize:'cover',
            

        },

        topForm:{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: '350px',
            width: '100vh',
            margin: '0 auto',
            
            },
        topTitle:{
            textAlign:'center',
            fontSize :'5rem',
            fontFamily: 'Impact',
        },
        topSubTitle:{
            textAlign:'center',
            fontFamily: 'Impact',
            fontSize: '2rem',
        },
        signinLogin:{
            textAlign:'center',
            marginBottom: '5%',
            
        },
        signinButton:{
            marginRight:'1%',
            width :'12%',
            height: '120%',
        
        },
        loginButton:{
            width: '12%',
            height: '120%',
        },
        gestButton:{
            width: '20%',
            height: '15%',
            margin:'0 auto',
        }
    })
    const classes = useStyles();
    
    return (
        <>  
            <div className={classes.topAll}>

            <div className={classes.topForm}>
            <h1 className={classes.topTitle}>SKATE SPOTT App</h1>
            <h2 className={classes.topSubTitle}>Welcom!!</h2>
            
            <div className={classes.signinLogin}>
            <Button className={classes.signinButton}
                    onClick={() => handleLink('./Signin')} 
                    variant="contained" 
                    color='primary'
                    >
                    SignUp
            </Button>
            
            <Button className={classes.loginButton}
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
            
        </div>


        </>
    );
}

export default Top