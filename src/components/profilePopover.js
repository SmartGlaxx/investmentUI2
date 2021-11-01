import React, {useEffect} from 'react'
import {Popover} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import {Button} from'@material-ui/core'
import { useHistory } from "react-router-dom";
import { UseContext } from '../contexts.js/context'
import { makeStyles } from '@material-ui/core'
import {FaAngleDown} from 'react-icons/fa'
import profilePicture from '../assets/profilePic.jfif'
import placeholderPicture from '../assets/background.jpg'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box'
import axios from 'axios'

const useStyles = makeStyles((theme)=>({
    main:{
        width: "5rem",
        height: "5rem",
        display:"grid",
        justifyContent:'center',
        alignItems:"center",
    },
    popover:{
        cursor : "pointer",
        width:"2.7rem", 
        height:"2.7rem", 
        position:'relative',
        display:"grid",
        placeItems: "center"
    },
    popoverBox:{
    width: "10rem",
    display:"grid",
    placeItems: "center",
    padding:"0.3rem 0",
    // marginRight:"1rem",
    // background:"green"
    // boxSizing:"content-box"
    },
    profilePic:{
        width:"90%",
        height:"90%",
        borderRadius: "50%",
        position:"absolute"
    },
    profilePic2:{
        width:"3rem",
        height:"3rem",
        marginTop:"1rem",
        borderRadius: "50%",
        marginLeft:"50%",
        transform:"translate(-50%)"
    },
    name:{
        fontWeight:"700",
        fontSize:"0.7rem",
        width:"100%",
        textAlign:"center"
    },
    popoverBtn:{
        border:"none",
        outline:"none",
        background:"#fff",
        boxShadow:"9",
        fontSize:"0.7rem",
        "&:hover":{
            background:"#fff",
            boxShadow:"9",
        }
    },
    popoverBtnItem:{
        width:"9rem",
        textAlign: "left",
        margin:"0 0.5rem",
        fontSize:"0.6rem"
    },
    popoverBtnItem2:{
      width:"9rem",
      textAlign: "center",
      margin:"0 0.5rem",
      fontSize:"0.6rem"
    },
    popoverContainer:{
      display:"grid", 
      justifyContent:"center"
    },
    authBtn:{
      color:"#fff",
      background:"red",
      fontSize: "0.6rem",
      width:"60%",
      height:"85%",
      fontSize:"0.55rem",
      marginLeft:"50%",
      transform:"translate(-50%)",
      "&:hover":{
        background:"#a00"
      }
  },
    angleDown:{
      marginLeft:"2.5rem", 
      fontSize:"1.1rem"
    },
    divider:{
      margin:"0.8rem 0"
    },
    popoverLink:{
      textDecoration:"none",
      color:"#2d375a",
      "&:hover":{
        color:"#608cfe",
        textDecoration:"none",
      }
    },
 
}))

export default function ProfilePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {setAuthenticated, setLoginDetail, userCreated, userDetail} = UseContext()
  const classes = useStyles()
  const [userData, setUserData] = React.useState({})
  const history = useHistory()
  
  //const url = 'https://investmentapp10.herokuapp.com/api/v1/auth/users'
  const url = 'https://investmentapp10.herokuapp.com/api/v1/users/616fece5b52df4ff5f85025c/newcheck'
  // const url2 = 'https://investmentapp10.herokuapp.com/api/v1/users'
 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // const fetchCreatedUsers=async(url)=>{
  //    await axios.get(url)
  //   .then(res =>{
  //    const usersCreated =  res.data.usersData
  //    usersCreated.filter(user =>{
  //      if(user.email === userEmail){
  //        console.log('user created already', user)
  //      }else{

  //      }
  //    })
     
  //  })
  //  }
  //  fetchCreatedUsers(url2)
  const fetchUsersData=async(url)=>{
    await axios.get(url)
   .then(res =>{
     
    // const usersAuth =  res.data.usersAuth
    // usersAuth.filter(user =>{
    //   if(user.email === 'smart2@gmail.com'){
    //     // console.log(user)
    //   }
    // })
    
  })
  }

  useEffect(()=>{
    fetchUsersData(url) 
  },[])

  const setLoginValues =(status, detail)=>{
    setAuthenticated(status)
    setLoginDetail(detail)
    history.push('/')
}
  

  // const buttons = [
  //   <div className={classes.popoverBtnItem}></div>,
  //   <Button><Link href='/' className={classes.popoverLink}><div className={classes.popoverBtnItem} key="1">My Profile</div></Link></Button> ,
  //   <Button><Link href='' className={classes.popoverLink}><div className={classes.popoverBtnItem} key="2">My Account</div></Link></Button>,
  //   <Button><Link href='' className={classes.popoverLink}><div className={classes.popoverBtnItem} key="3">Bank Details</div></Link></Button>,
  // ];
  // const checkUserCreatedUserDetail = userCreated && userDetail 

  return (
    <div className={classes.main}>
      
      <div className={classes.popover} onClick={handleClick} >
        <img src={profilePicture ? profilePicture : placeholderPicture} alt='profile' className={classes.profilePic}/>
       
        <FaAngleDown className={classes.angleDown}/>
    
     </div>
      
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        
      >
           <div  className={classes.popoverBox}>
             <div className={classes.popoverContainer}>

          { userCreated ? <>
            <img src={profilePicture} alt='profile' className={classes.profilePic2}/>
            <div className={classes.name}>Smart Egbuchulem</div>
            <Divider className={classes.divider} />         
              <Button><Link href='/' className={classes.popoverLink}><div className={classes.popoverBtnItem} key="1">My Profile</div></Link></Button> 
              <Button><Link href='' className={classes.popoverLink}><div className={classes.popoverBtnItem} key="2">My Account</div></Link></Button>
              <Button><Link href='' className={classes.popoverLink}><div className={classes.popoverBtnItem} key="3">Bank Details</div></Link></Button>   
            <Divider className={classes.divider} />    
          </> : <Link to='/createuser' className={classes.popoverLink}>
              <Button  className={classes.popoverBtnItem2} >create user Profile</Button>
            </Link> 
          }
          <Button onClick={()=>setLoginValues(false, '')} className={classes.authBtn}>Logout</Button>
        </div>
        </div>
      </Popover>
    </div>
  );
}
