import { useState } from "react";
import { Button, Card,  TextField} from "@material-ui/core"
import { makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom";
import Image from '../../assets/background.jpg'
import { UseContext } from "../../contexts.js/context";
import Divider from '@material-ui/core/Divider'
import { useHistory } from "react-router-dom";
// import { LoginSignupBtn } from "../../components";
import {
    Typography, Grid, Input, InputLabel, FormControl, FormHelperText
  } from '@material-ui/core';
  import {
    Checkbox,
    FormControlLabel,
    FormGroup,
  } from '@material-ui/core';
import axios from "axios";



const useStyles = makeStyles((theme) =>({
    main:{
        minHeight:"100vh",
        display: "flex",
        justifyContent : "center",
       // background: "linear-gradient(125deg, #873ab7, #58319c)"
        //background : "linear-gradient(123deg,  purple, blue, gold),url(../../assets/background/jpg)",
        
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
        width: "100%",
        // display: "flex",
        // justifyContent : "center",
        //background: "blue",
        [theme.breakpoints.down('xs')]:{
            width : "100%"
        },
        // '&:hover':{
        //     background:"#fff",
        //     color:"#0a66c2"
        // }
    },
    boxItem:{
       
    },
    logindivBox:{
        background:"#fff",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:"25rem",
        width:"100%",
        // marginRight:"5rem",
        marginTop:"-1rem",
        zIndex:"5",
        // position:"absolute",
        boxShadow:"2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),12.5px 12.5px 10px rgba(0, 0, 0, 0.035),22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),100px 100px 80px rgba(0, 0, 0, 0.07)",
        boxShadow:" 3PX 40PX 40PX black",
        [theme.breakpoints.down('xs')]:{
            display:"none"
        }
    },
    logindiv:{
        textAlign:"center",
        color:"#555"
    },
    formItems:{
        // position:"relative",
        background:"rgba(200,200,200,0.4)",
        background:"#fff",
        width: "20rem",
        boxSizing:"content-box",
        padding: "0.5rem",
        
        height:"23rem",
        [theme.breakpoints.down('xs')]:{
            margin:"0 auto",
            width:"80%"
        }
    },
    input:{
        outline: "none",
        border: "none",
        width:"100%",
   
    },
    ckeckbox:{
        zoom:"0.7",
        
        // background:"red",
        // display:'flex',
        // alignSelf:"center"
    },
    
    loginBtnBox:{
        width:"100%",
        display:"grid",
        placeItems:"center",
        margin:"1.5rem 0"
    },
    loginBtn:{
        width:"70%",
        height:"1.6rem",
        background: "#512da8",
        color:"#fff",
        '&:hover':{
            background:"#411d98"
        }
    },
      divider: {
        display: 'block',
        margin: `${theme.spacing(3)}px 0`,
      },
      formControl: {
        width:"95%",
        margin: theme.spacing(1),
        marginBottom:"0.7rem",
        [theme.breakpoints.down('xs')]:{
            width:"100%",
            margin: theme.spacing(0.1),
        }
      },
      formHeader:{
          margin:"0.5rem"
      },
      formBox:{
          display: "grid",
          justifyContent:'center',
          alignItems:"center", 
      },
      authBtnsBox:{
        height: "3rem",
        display:"flex",
        alignItems:"center",
        padding:"1rem",
        justifyContent: "space-between"
      },
      forgotpsw:{
          fontSize: "0.7rem",
          color:"green"
      },
      forgotpswBtn:{
      zoom: "0.7",
      color:"#f00"
      },
      singup:{
          zoom:"0.7",
          color:"#f00"
      },
      authLink:{
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
        width:"50%",
        height:"85%",
        fontSize:"0.7rem",
        marginLeft:"50%",
        transform:"translate(-50%)"
      }
}))

const Login = ()=>{
    const classes = useStyles()
    const [checkedValue, setCheckedValue] = useState(false)
    const [formData, setFormData] = useState({})
    const [error, setError] = useState({status : false, message: ""})
    const {setAuthenticated, setLoginDetail} = UseContext()
    const history = useHistory()
    const setCheckedVal = ()=>{
        setCheckedValue(prev => {return !prev})
    }
    const setFormValues=(e)=>{
        const name = e.target.name
        const value = e.target.value
    
        setFormData(prev =>{
            return {...prev, [name] : value}
        })
    }

  
    const setErrorHandler = (a,b)=>{
        setError({status : a, message : b})
            setTimeout(()=>{
            setError({status : false, message : ''})
           }, 4000)
       }
       const setLoginValues =(status, detail)=>{
           setAuthenticated(status)
           setLoginDetail(detail)
       }

    const login = async()=>{
        
       try{
           if(!formData.emailOrUsername || !formData.password){
            setErrorHandler( true,'Please fill all fields.')
        }else{
            
            let emailOrUsername = formData.emailOrUsername
            let password = formData.password
            
               if(password.length < 8){
                setErrorHandler( true,  'Password should not be less than 8 characters.')
              }else{

                setErrorHandler( false, '')
                const options = {
                url : 'https://investmain2daily.herokuapp.com/api/v1/auth/login',
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: {
                    emailOrUsername : emailOrUsername,
                    password : password
                }    
                    
                }
                await axios(options)
                .then(result =>{
                    const {response} = result.data
                    if(response == "success"){
                        setLoginValues(true, emailOrUsername)
                        history.push('/dashboard')
                    }else{
                        setErrorHandler(true, 'Login unsuccessful. Please make sure you used the correct email or passsword.')
                        window.location.href = '/login'
                    }
                })
        }

        }

        }catch(error){
            console.log(error)
        }
    }



return(<div className={classes.main} >
        <span>
        <h4 className={classes.pageTite}>Invest App</h4>
            <FormGroup  className={classes.loginForm} >
            <Grid container>
            {/* <Grid item xs={0} sm={6} md={6} lg={6} className={classes.boxItem}>
                <div className={classes.logindivBox}>
                    <div className={classes.logindiv}>
                    <h3>Welcome to</h3>
                    
                    <h1>Invest App</h1>
                    </div>
                </div>
                </Grid> */}
                <Grid item className={classes.boxItem}>
                <Card className={classes.formItems} >
                <h3 className={classes.formHeader}>Login</h3>
                {error.status && <div className={classes.errorMessage}>{error.message}</div>} 
           
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="emailOrUsername">Email or Username</InputLabel>
                    <Input id="emailOrUsername" className={classes.input} name='emailOrUsername' onChange={setFormValues} 
                    value={formData.emailOrUsername} type="text" required/>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" className={classes.input} name='password' onChange={setFormValues} 
                    value={formData.password} type="password" required/>
                </FormControl>
               
                <FormControl className={classes.formBox}>
                <FormControlLabel
                    control={(
                      <Checkbox
                      className={classes.ckeckbox}
                        checked={checkedValue}
                        onChange={()=>setCheckedVal()}
                        value="remember"
                      />
                    )}
                    label="Remember me"
                  />
                </FormControl>
                <FormControl className={classes.loginBtnBox}>
                    <Button className={classes.loginSignupBtn} onClick={login} >CONTINUE</Button>
                </FormControl>       
                
                    <hr className ={classes.divider} />
                    
                <div className={classes.authBtnsBox}>
                    <div className={classes.forgotpsw}> Forgot password? 
                        <Link to='/forgotPassword' className={classes.authLink}>
                        <Button className={classes.forgotpswBtn}>Reset Password</Button>
                        </Link>
                     </div>
                    <div className={classes.singup}>
                        <Link to='/signup' className={classes.authLink}>
                        <Button  style={{color:"red"}}>Register</Button>
                        </Link>
                    </div>
                </div>
                 </Card> 
            </Grid>
            </Grid>
            </FormGroup>
            </span>
        </div>
)
}

export default Login

