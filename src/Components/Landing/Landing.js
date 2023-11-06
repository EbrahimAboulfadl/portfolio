import classes from "./Landing.module.css";
import landing from "./../../assets/landingFinal.png";

const Landing = () => {
  
  return (
    <div className={classes.landing}>
      <img src={landing} alt="landing" className={classes.landingImg} />
      <div className={classes.landingContent}>
        <h1>I'm Ebrahim Aboulfadl</h1>
        <p>A Junior Full Stack Web and Mobile Developer </p>
      </div>
    </div>
  );
};
export default Landing;
