import React, {useState} from 'react'
import { Button, Grid } from "@material-ui/core"
import axios from 'axios'
import { makeStyles } from "@material-ui/core"
import { useEffect } from "react"
import {Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import { UseContext } from '../contexts.js/context'
import Overlay from '../pages/UtilPages/overlay'
import { ProfilePopover } from '.'

const useStyles = makeStyles((theme) => ({
    main:{
        background:"#667ce7",
        background:"#556bd6",
        //background:"linear-gradient(to right, #667ce7, #754fa7)",
        color:"#fff",
        fontSize : "2rem",
        position:"fixed",
        top:"0",
        left: "0",
        height : "5rem",
        padding : "0 1rem",
        zIndex: "10",
        boxShadow: "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)",



    },
    logo:{
        textAlign : "left" ,
        display : "flex",
        alignItems: "center",
        paddingLeft:"14rem",
        fontSize:"1rem",
        [theme.breakpoints.down('sm')]:{
            paddingLeft:"0rem",
        }
    },
    logoCollapsed:{
        textAlign : "left" ,
        display : "flex",
        alignItems: "center",
        fontSize:"1rem",
        paddingLeft:"3rem",
        [theme.breakpoints.down('sm')]:{
            paddingLeft:"0rem",
        }
    },
    mwnuBtnBox:{
        textAlign : "right",
        display : "flex",
        alignItems: "center",
        justifyContent : "right",
        paddingRight: "1rem",
        [theme.breakpoints.down('sm')]:{
            paddingRight: "0",
        }
    },
    authBtnBox1:{
        width: "3rem",
        
        placeItems: "center",
        display: "none",
        [theme.breakpoints.down('sm')]:{
            display: "grid"
        }
        // justifyContent:"space-between",
        // paddingRight: "1rem"
        // background:"green"
    },
    authBtnBox2:{
        width: "6.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between",
        [theme.breakpoints.down('sm')]:{
            display: "none"
        }
        // paddingRight: "1rem"
        // background:"green"
    },
    authLinks:{
        textDecoration : 'none',
        fontSize : "0.8rem"
    },
    authBtn:{
        color:"#fff",
        fontSize: "0.6rem",
    },
    menuNavItems:{
        width:"70%",
        fontSize : "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
       
        [theme.breakpoints.down('sm')]:{
            display: "none"
        }
    },
    menulinks:{
        listStyleType: "none",
      textDecoration: "none",
      color: "#fff"
    },
    menuItems:{
        textTransform: "uppercase",
        fontSize:"0.7rem",
        margin:"0 1rem"
    },
    openMenu:{
        fontSize:"1.1rem"
    }

}))




const DashboardHeader = ()=>{
    const {setAuthenticated, authenticated, setMenuState, menuState, setOverlayState, overlayState, loginDetail, 
        setUserCreated, setUserDetail, setUserFullData, userDetail, userFullData} = UseContext()
    const classes = useStyles()
    const url = 'https://investmentapp10.herokuapp.com/api/v1/users'
    const openMenu =()=>{
        setMenuState(menuState)
        setOverlayState(overlayState)
    }

    // const fetchCreatedUsers=async(url)=>{
    //     await axios.get(url)
    //    .then(res =>{
    //     const usersCreated =  res.data.usersData
    //     usersCreated.filter(user =>{
    //       if(user.email === loginDetail || user.username === loginDetail){
    //         setUserCreated(true)
    //         setUserDetail(loginDetail)
    //         setUserFullData(user)
    //       }else{            
    //         setUserCreated(false)
    //       }
    //     })
        
    //   })
    //   }
    //   useEffect(()=>{
    //     fetchCreatedUsers(url) 
    //   },[authenticated, loginDetail])
     
    
    return (<>
        <Overlay />
        <Grid container className={classes.main}>
            <Grid item xs={8} sm={4} className={menuState ? classes.logo : classes.logoCollapsed}> 
            {/* <Grid item xs={8} sm={4} md={3} className={classes.logo}>  */}
                <h4>Invest App</h4>
            </Grid>
            <Grid item xs={4} sm={8} className={classes.mwnuBtnBox}> 
                <div className={classes.authBtnBox1}>
                    <FaBars onClick={openMenu} className={classes.openMenu}/>
                </div>
                <div className={classes.authBtnBox2}>
                 {authenticated ? <ProfilePopover /> :
                <>
                    <Link className={classes.menulinks} to={'/login'}><Button className={classes.authBtn}>Login</Button></Link>
                    <Link className={classes.menulinks} to={'/signup'}><Button className={classes.authBtn}>Register</Button></Link>
                </>
                }       
                </div>
            </Grid>
        </Grid>
        </>
    )
}

export default DashboardHeader