import {HeroButton} from './buttons'
import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'
import Image from '../assets/background.jpg'

const useStyles = makeStyles({
    hero : {
        marginTop: "5rem",
       // background : "linear-gradient(123deg, blue, skyblue)",
        height: "90vh",
        padding: "2rem",
        // textAlign : "left",
        // display : "flex",
        // alignItems : "center"
        backgroundImage : `linear-gradient(to top,  blue, #2233ff, rgba(225,225,225, 0.7)), url(${Image})`,
        backgroundPosition: 'right bottom',
        backgroundAttachment : 'fixed',
        backgroundSize: 'cover',
        //objectFit: "cover",
        backgroundRepeat: "no-repeat",
        
    },
    herowords : {
        color : "#fff",
       fontSize : "2.2rem",
       lineHeight : "1",
       fontWeight: "600",
    // [theme.breakpoints.up("sm")]:{
    //     color : "red"
    // }
    },
    heroname:{
        float: "right",
        fontSize : "4.5rem",
        color: "silver",
        textShadow : "2px 2px 1px black"
    },
    herowordscontainer:{
        textAlign : "left",
        display : "flex",
        alignItems : "center",
        // height  : "100%",
        // background : "red",
    }
})
const Hero =()=>{
   const classes = useStyles()
    return (
        <Grid className={classes.hero} container>
            <Grid className={classes.herowordscontainer} item xs={12}sm={7}>
            <span>
            <h1 className={classes.herowords}>Get in to the most reliable</h1>
            <h2 className={classes.herowords}>Investment Platform</h2>
            <HeroButton />
            </span>
            </Grid>
            <Grid item xs={12}sm={5}>
            <h1 className={classes.heroname}>HIGH YIELD</h1>
            </Grid>
        </Grid>
    )
}

export default Hero