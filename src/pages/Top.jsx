import { useHistory } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'
import image from '../img/jan-kopriva-oK2OoXCpOB4-unsplash.jpg'

const Top = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);
    const useStyles = makeStyles(theme => ({

        topAll:{
            backgroundImage : `url(${image})`,
            minHeight: '100vh',
            backgroundSize:'cover',
            [theme.breakpoints.down('sm')]:{
                minHeight: '100vh',
                width:'100%',
                backgroundSize:'cover',
                backgroundPosition: 'center'
            }
            

        },

        topForm:{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            height: '350px',
            width: '100vh',
            margin: '0 auto',
            [theme.breakpoints.down('sm')]:{
                width: '100%'
            }
            
            },
        topTitle:{
            textAlign:'center',
            fontSize :'5rem',
            fontFamily: 'Impact',
            [theme.breakpoints.down('sm')]:{
                fontSize: '4rem'
            }
        },
        topSubTitle:{
            textAlign:'center',
            fontFamily: 'Impact',
            fontSize: '2rem',
            [theme.breakpoints.down('sm')]:{
                marginBottom: '15%',
            }
        },
        signinLogin:{
            textAlign:'center',
            marginBottom: '5%',
            [theme.breakpoints.down('sm')]:{
                marginBottom: '0%',
            }
            
        },
        signinButton:{
            marginRight:'1%',
            width :'12%',
            height: '120%',
            [theme.breakpoints.down('sm')]:{
                marginRight:'5%',
                width :'20%',
                height: '130%',
            }
        
        },
        loginButton:{
            width: '12%',
            height: '120%',
            [theme.breakpoints.down('sm')]:{
                width: '20%',
            height: '130%',
            }
        },
        gestButton:{
            width: '17%',
            height: '15%',
            margin:'0 auto',
            [theme.breakpoints.down('sm')]:{
                height: '50px',
                width: '35%',
                marginTop: '10%'
            }
        },
        caution: {
            textAlign:'center',
            color: 'orange',
            fontSize: '1.3rem',
            marginTop: '15%',
            [theme.breakpoints.down('sm')]:{
                fontSize: '0.8rem',
            }
             
        }
    }))
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
                    onClick={() => handleLink('./page1')}
                    variant="contained" 
                    color="default"
                    >
                    ログインなしで始める
            </Button>

            <div className={classes.caution}>
            <p>※「ログインなしで始める」では投稿機能は利用できません</p>
            <p>投稿機能を利用する場合はログインページにて<br/>メールアドレス：test＠gmail.com　パスワード：123456</p>

            </div>
            </div>
        </div>


        </>
    );
}

export default Top