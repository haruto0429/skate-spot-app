
import MediaCard from '../component/MediaCard'
import {useEffect, useState} from 'react'
import {db} from '../config/firebase';
import { useHistory } from 'react-router-dom';
import {Button, Toolbar} from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { auth } from '../config/firebase'




const Page1 = () => {
    const useStyles = makeStyles(theme =>({
        root: {
    flexGrow: 1,
     
     
  },
  
  title: {
    flexGrow: 1,
    display: 'none',
    fontFamily: 'Impact',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontSize: '1.8rem',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: '0',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  AppBar:{
    position: 'fixed',
  
  },
        wrap:{
            margin:'0 auto',
            width: '100%',
            
            
        },
        row:{
            display:'flex',
            flexWrap: 'wrap',
            
        },
        areaName:{
            textAlign:'center'
        },
        postButton:{
            height: '8%',
            width: '5%',
            borderRadius: '70px',
            position:'fixed',
            bottom: '5%',
            left: '47%',
            right: '50%',
            [theme.breakpoints.down('sm')]:{
                position: 'fixed',
                bottom: '3%',
                left: '43%',
                right: '50%',
            }
        },
        
        bottomBar: {
            top: 'auto',
            bottom: '0',
          
        }
        
        
        
    }))

    const classes = useStyles();
    const history = useHistory();
    const handleLink = path => history.push(path);
    const [posts,setPosts]=useState([]);
    const [value,setValue]=useState('');
    const logout = () => {
        auth.signOut();
    }
    
     const handleSerchChanges = (e) => {
      setValue(e.target.value)
    }

    
  
    
    
    useEffect(() => {

      db.collection('posts').orderBy('createAt') .onSnapshot(((querySnapshot) => {
        setPosts(
          querySnapshot.docs.map((doc)=>({...doc.data(),id:doc.id}))
          )
        }))
      }, [value]);
        
    
    const handleSubmit = () => {

        
    //検索バーの中身が空の時は全投稿表示
    if (value === "") {
      setPosts(posts);
      return;
    }

    const searchKeywords = value
      .trim() // 空白による検索の妨げ防止
      .match(/[^\s]+/g);　// １文字以上の任意の文字をヒットさせその要素を返す
      
      
      
    
    if (searchKeywords === '') {
      setPosts(posts);
      return;
    }

    const result = posts.filter((post) =>
    searchKeywords.every((search) => post.addres.toString().toLowerCase().indexOf(search) !== -1)
    );
    console.log(result)

    setPosts(result.length ? result : alert("検索結果はありません"));
  }
    
    return (
        <>
            
        <div className={classes.page1}>
            <div className={classes.root}>
      <AppBar position="static" color='default' className={classes.AppBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            SKATE SPOT APP
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={handleSerchChanges}
              value={value}
              type='text'
              placeholder="都道府県や市町村で検索！"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
            <Button onClick={handleSubmit}>検索</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
            
            <section className={classes.wrap}>
                <div className={classes.row}>
              {/* 取得したコレクションをカード形式で表示 */}
            {posts &&
                posts.map((post) => (
                    <div>
                        <MediaCard 
                            user={post.username}
                            key={post.id}
                            image={post.image}
                            name={post.name} 
                            address={post.addres} 
                            explanation={post.explanation} 
                            />
                    </div>
                ))}

                </div>
            </section>

        <AppBar position="fixed" color="inherit" className={classes.bottomBar}>
            <Toolbar>
            
            {/* 投稿ページに移行 */}
        <Button
            className={classes.postButton}
            onClick={() => handleLink('../share')}
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
            >
            +
        </Button>

          <Button 
            onClick={logout}
            variant="contained"
            color="default"
            startIcon={<ExitToAppIcon />}
          >
            LOGOUT
          </Button>

            </Toolbar>
                </AppBar>
        </div>
        </>
    )
  }



export default Page1;