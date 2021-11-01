import { Card, Grid, Paper, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
  root: {
    paddingTop:"2rem",
    // background: "red",
    minHeight:"60vh"
  },
  packagesBox:{
    padding:"3rem",
    // background: "gray"
  },
  packages:{
      padding:'1rem',
    // background:"green",
  // '&:hover':{
  //       background:"#fff",
  //       color:"#0a66c2"
  //   }
  },
  packageDescription:{
    width:"90%",
    margin:"0 auto",
      minHeight:"60vh",
    position:"relative",
    transition: "all 0.7s ease-in-out",
    '&:hover':{
      transform : "scale(1.1)"
  }
  },
  label:{
    color:"#fff",
    position: "absolute",
    top:"0",
    height:"4rem",
    width: "100%",
    padding:"0.3rem",
    background: "#00f",
    display:"grid",
    alignItems:"center"
  },
  featured:{
    color:"#fff",
    position: "absolute",
    bottom:"-7%",
    right:"-47%",
    height:"5rem",
    width: "100%",
    padding:"0.3rem",
    background: "#00f",
    display:"grid",
    alignItems:"top",
    transform: "rotate(-45deg)"
  }

}))


const Packages = ()=>{
  const classes = useStyles()
  return(<div className={classes.root}>
    <Grid container className={classes.packagesBox}>
      <Grid item xs={12} md={4} className={classes.packages}>
        <Card className={classes.packageDescription}>  
        <div className={classes.label}> <h4>Basic</h4></div>
        </Card>
        </Grid>
        <Grid item xs={12} md={4} className={classes.packages}>
        <Card className={classes.packageDescription}>
          <div className={classes.label}><h4> Standard</h4></div>


          <div className={classes.featured}> 20% extra </div>
        </Card>
        </Grid>
        <Grid item xs={12} md={4} className={classes.packages}>
        <Card className={classes.packageDescription}>
        <div className={classes.label}> <h4>Premium</h4></div>
        </Card>
        </Grid>
    </Grid>
  </div>)
}

export default Packages