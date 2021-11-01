import {useState} from 'react'
import { Button, Card, Input, FormGroup, FormControl, InputLabel} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Link } from 'react-router-dom'
import Image from '../../assets/background.jpg'
import { Divider } from '@material-ui/core'
const useStyles = makeStyles((theme) =>({
    main:{
        minHeight:"100vh",
        display: "flex",
        justifyContent : "center",
       // background: "linear-gradient(125deg, #873ab7, #58319c)"
        //background : "linear-gradient(123deg, blue, skyblue)",
        backgroundImage : `linear-gradient(to top,  blue, #556bd6, rgba(225,225,225, 0.7)), url(${Image})`,
        backgroundPosition: 'center',
        backgroundAttachment : 'fixed',
        backgroundSize: 'cover',
        //objectFit: "cover",
        backgroundRepeat: "no-repeat"
    },
    pageTite:{
        textAlign : "center",
        fontSize:"1.3rem",
        // color : "#fff"
    },
    loginForm:{
        // marginTop: "3rem",
        height: "auto",
        // padding: "1rem",
        width: "20rem",
        // display: "flex",
        // justifyContent : "center",
        //background: "blue",
        [theme.breakpoints.down('xs')]:{
            width : "90%"
        },
        // '&:hover':{
        //     background:"#fff",
        //     color:"#0a66c2"
        // }
    },
    divider: {
        marginTop:"5rem",
        display: 'block',
        margin: `${theme.spacing(3)}px 0`,
      },
      formItems:{
        // position:"relative",
        background:"rgba(200,200,200,0.4)",
        background:"#fff",
        marginLeft:"0.2rem",
        width: "20rem",
        boxSizing:"content-box",
        padding: "0.4rem",
        height:"auto",
    },
    authBtnsBox:{
        height: "3rem",
        display:"flex",
        alignItems:"center",
        padding:"1rem",
        justifyContent: "space-between"
      },
    formControl: {
        width:"95%",
        margin: theme.spacing(1),
      },
    input:{
        outline: "none",
        border: "none",
        width:"100%",
   
    },
    login:{
        zoom:"0.8",
        color:"#f00",
        float: "right"
    },
    resetBtnBox:{
        width:"100%",
        display:"grid",
        placeItems:"left",
    },
    resetBtn:{
        width:"70%",
        height:"1.6rem",
        background: "#512da8",
        color:"#fff",
        margin: "1rem 0",
        '&:hover':{
            background:"#411d98"
        }
    },
    resetLink:{
      textDecoration: "none"
    },
    errorMessage:{
        fontSize: "0.8rem",
        color: "#f00",
        textAlign: "center"
    },
    loginSignupBtn:{
        color:"#fff",
        background:"red",
        background : "linear-gradient(123deg, silver, gray)",
        boxShadow: "2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)",
        fontSize: "0.6rem",
        width:"100%",
        height:"85%",
        fontSize:"0.7rem",
        marginLeft:"33%",
        transform:"translate(-50%)"
      }
}))

const ForgotPassword = ()=>{
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [error, setError] = useState({status : false, message: ""})

    const setErorHandler = (a,b)=>{
    setError({status : a, message : b})
        setTimeout(()=>{
        setError({status : false, message : ''})
        }, 4000)
    }


    const resetPassword = async()=>{
        const email2 = email.split("").reverse().join("")
        const checkAt = email2.includes('@')
        const checkDot = email2.includes('.')
        const indexOfCheckAt = email2.indexOf('@')
        const indxOfCheckDot = email2.indexOf('.')
        
        try{
            if(!email){
                setErorHandler( true,'Please fill in your email')
            }else{
                if(!checkAt){
                    setErorHandler( true,'Please use a valid email')
                }else{
                    if(!checkDot){
                        setErorHandler( true,'Please use a valid email')
                    }else{
                        if(indxOfCheckDot > indexOfCheckAt){
                            setErorHandler( true,'Please use a valid email')
                        }else{
                            setErorHandler( false, '')
                            //route to send email backend here
                        }
                    }
                }
            }
            
        }catch(error){
            console.log(error)
        }
    }
    return(<div className={classes.main}>
        
        <span>
         <h4 className={classes.pageTite}>Invest App</h4>
            <FormGroup  className={classes.loginForm} >
                <Card className={classes.formItems} >
                <h3 className={classes.formControl}>Reset Password</h3>
                {error.status && <div className={classes.errorMessage}>{error.message}</div>} 
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="name" className={classes.input} name='email' onChange={(e)=>setEmail(e.target.value)} 
                    value={email} type="email" required/>
                </FormControl>
                {/* <FormControl className={classes.resetBtnBox}>
                    <Button  onClick={resetPassword} className={classes.resetBtn}>Reset password</Button>
                </FormControl>  */}
                <Divider />
                <div className={classes.authBtnsBox}>
                    <div className={classes.login}><Link to='/login'  className={classes.resetLink}>
                        <Button  style={{color:"red"}}>Login</Button></Link>
                    </div>
                    <Button  onClick={resetPassword} className={classes.loginSignupBtn}>Reset password</Button>
                </div>    
                </Card>
            </FormGroup>
        </span>
    </div>
    )
}


export default ForgotPassword