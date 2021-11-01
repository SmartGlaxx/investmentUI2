import { useHistory } from "react-router"
import { Button, makeStyles, Divider } from "@material-ui/core"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UseContext } from "../contexts.js/context"
import { InvestorNavLinks } from "../utils/utilLinks"
import {FaWindowClose, FaChevronLeft} from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
    ma:{
        display: "none"
    },
    la:{
        display : "block"
    },
    main:{
        background:"linear-gradient(to right, #667ce7, #754fa7)",
        background:"#fff",
        position: "fixed",
        padding:"1rem",
        paddingLeft:"0rem",
        top: "0",
        left : "0",
        width:"13rem", 
        height : "100vh",
        zIndex : "20",
        display:"block",
        fontSize: "0.7rem",
        boxShadow: "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)",
        [theme.breakpoints.down('sm')]:{
            display: "none",
            width:"20rem"
        }
    },
    mainCollapsed:{
        background:"linear-gradient(to right, #667ce7, #754fa7)",
        background:"#fff",
        position: "fixed",
        padding:"1rem",
        paddingLeft:"0rem",
        top: "0",
        left : "0",
        width:"2rem", 
        height : "100vh",
        zIndex : "20",
        display:"block",
        fontSize: "0.7rem",
        boxShadow: "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)",
        [theme.breakpoints.down('sm')]:{
            display: "none",
            width:"20rem"
        }
    },
    navLink:{
        textDecoration: "none",
        borderRadius:"0 2rem 2rem 0",
    },
    classone:{
        // height:"1.5rem",
        width: "95%",
        
        background: "none",
        
        color:"#2d375a",
        // color:"#333",
        fontWeight: "400",
        fontSize: "0.7rem",
        borderRadius:"0 2rem 2rem 0",
        display:"flex",
        alignItems: "center",
        paddingLeft:"2rem",
    },
    classtwo:{
        height:"auto",
        width: "95%",
        background:"#d3dcf9",
        color:"#6184ff",
        color:"#608cfe",
        borderRadius:"0 2rem 2rem 0",
        boderRadius:"1rem",
        fontWeight: "400",
        fontSize: "0.7rem",
        display:"flex",
        alignItems: "center",
        paddingLeft:"2rem",
    },
    navBtnBox:{
        borderRadius:"0 2rem 2rem 0",
        
    },
    closeBtn:{
        float: "right",
        fontSize: "1rem",
        cursor: "pointer",
        color:"#f00"
    },
    closeBtnCollapsed:{
        float: "right",
        fontSize: "1rem",
        cursor: "pointer",
        color:"#0f0"
    },
    sideBarTitle:{
        color : "#212121",
        fontSize :"0.9rem",
        fontWeight: "600",
        textAlign: "center"
    },
    sideBarTitleCollapsed:{
        display:"none"
    },
    titleLink:{
        textDecoration : 'none'
    },
    
    authBtn:{
        float : "right",
        color:"#000",
        fontWeight: "500",
        fontSize:"0.7rem"
    },
    authBtnCollapsed:{
        display:"none"
    },
    divider:{

    },
    dividerCollapsed:{
        display:"none"
    },
    container:{
        paddingTop:"2rem", 
        paddingLeft:"0rem"
    },
    containerCollapsed:{
        display:"none"
    },
    name:{
        width:"100%",
        textAlign:"left",
        marginLeft:"0.8rem"
    },



    // mobile
    mainMobile:{
        background:"linear-gradient(to right, #667ce7, #754fa7)",
        background:'#fff',
        position: "fixed",
        padding:"1rem",
        paddingLeft:"0rem",
        top: "0",
        left : "0",
        width:"75vw", 
        height : "100vh",
        zIndex : "20",
        display:"none",
        boxShadow: "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042), 41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07)",
        [theme.breakpoints.down('sm')]:{
            display: "block",    
            width:"17rem"   
        },
        [theme.breakpoints.down('xs')]:{
            width:"80%"      
        }
    },
    navLinkMobile:{
        textDecoration: "none",
        borderRadius:"0 2rem 2rem 0",
    },
    classoneMobile:{
        // height:"3rem",
        width: "95%",
        background:"linear-gradient(to right, #667ce7, #754fa7)",
        background:"#fff",
        color:"#2d375a",
        // color:"#333",
        fontWeight: "400",
        fontSize: "0.6rem",
        //borderRadius:"0 2rem 2rem 0",
        display:"flex",
        alignItems: "center",
        paddingLeft:"2rem",
    },
    classtwoMobile:{
        // height:"3rem",
        width: "95%",
        background:"#d3dcf9",
        color:"#6184ff",
        color:"#608cfe",
        borderRadius:"0 2rem 2rem 0",
        boderRadius:"1rem",
        fontWeight: "400",
        fontSize: "0.6rem",
        display:"flex",
        alignItems: "center",
        paddingLeft:"2rem",
    },
    navBtnBoxMobile:{
        borderRadius:"0 2rem 2rem 0",
        
    },
    closeBtnMobile:{
        float: "right",
        marginTop:"0.5rem",
        fontSize: "1rem",
        cursor: "pointer",
        color:"#f00"
    },
    sideBarTitleMobile:{
        color : "#212121",
        fontSize :"1.3rem",
        fontWeight: "600",
        textAlign: "center"
    },
    authBtnMobile:{
        float : "right",
        color:"#000",
        fontWeight: "500",
        fontSize:"0.7rem"
    },
    containerMobile:{
        paddingTop:"2rem", 
        paddingLeft:"0rem"
    },
    nameMobile:{
        width:"100%",
        textAlign:"left",
        marginLeft:"0.8rem"
    }
}))


//Desktop


export const InvestorSidebar = ()=>{
    const classes = useStyles()
    const history= useHistory()
    const {setAuthenticated, authenticated, setOverlayState, overlayState, setMenuState, menuState} = UseContext()
    const [clickedBtnIndex,setClickedBtnIndex] = useState()
    // const [path,setPath] = useState('')

    // useEffect(()=>{
    //     const historyLocation = history.location.pathname
    //     console.log(historyLocation)
    //     if(historyLocation== `/`){
    //         console.log('dsfgf')
    //         // setPath(history.location.pathname)
    //     }
    // },[])
    const setIndex = (value)=>{
        setClickedBtnIndex(value)
    }
    
    const setMenu =()=>{
        setMenuState(menuState)
        setOverlayState(true)
    }
    
    return(
        //<div className={path == `${'/'}` ? classes.checkOne : classes.checkTwo } >
        <div className={ menuState ? classes.main : classes.mainCollapsed} >
            <div ><FaChevronLeft onClick={setMenu} className={menuState? classes.closeBtn : classes.closeBtnCollapsed}/></div>
            <Link to='/' className={classes.titleLink }><div className={menuState ? classes.sideBarTitle : classes.sideBarTitleCollapsed}>Invest App</div></Link>
        <div className={menuState ? classes.container : classes.containerCollapsed}>
        {InvestorNavLinks.map((item, i) =>{
            const {id, name, icon, link} = item
            const index = i + 1
            return  <div key={id} className={classes.navBtnBox}>
               <Link to={link} className={classes.navLink}>
                   <Button className={ index == clickedBtnIndex ? classes.classtwo : classes.classone} onClick={()=>setIndex(id)}>
                   <span>{icon}</span><div className={classes.name}>{name}</div></Button>
                </Link>
            </div>
        })}
        </div>
        <Divider className={menuState ?  classes.divider : classes.dividerCollapsed}/>
         
        <Button onClick={()=>setAuthenticated(false)} className={menuState ?  classes.authBtn : classes.authBtnCollapsed}>Logout</Button> 
        {/* </div> */}
        
    </div>)
}




//Mobile
export const InvestorSidebarMobile = ()=>{
    const classes = useStyles()
    const {setAuthenticated, authenticated, setOverlayState, overlayState, setMenuState, menuState} = UseContext()
    const [clickedBtnIndex,setClickedBtnIndex] = useState()
    
    const setIndex = (value)=>{
        setClickedBtnIndex(value)
    }
    
    const setMenu =()=>{
        setMenuState(menuState)
        setOverlayState(true)
    }
    return(<div >
        {menuState && <div className={classes.mainMobile} >
            <div ><FaChevronLeft onClick={setMenu} className={classes.closeBtnMobile}/></div>
        <div className={classes.sideBarTitleMobile}>Invest App</div>
        <div className={classes.containerMobile}>
        {InvestorNavLinks.map((item, i) =>{
            const {id, name, icon, link} = item
            const index = i + 1
            return  <div key={id} className={classes.navBtnBoxMobile}>
               <Link to={link} className={classes.navLink}>
                   <Button className={ index == clickedBtnIndex ? classes.classtwoMobile : classes.classoneMobile} onClick={()=>setIndex(id)}>
                   <span>{icon}</span><div className={classes.nameMobile}>{name}</div></Button>
                </Link>
            </div>
        })}
        </div>
        <Divider />
        
        <Button onClick={()=>setAuthenticated(false)} className={classes.authBtnMobile}>Logout</Button> 
        </div>}
        
    </div>)
}
