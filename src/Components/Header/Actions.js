import classes from "./Actions.module.css";
const Actions = () => {
  return (
    <div className="actions">
      <a className={`${classes.action} ${classes.active}`} href="/">
        Home
      </a>
      <a className={classes.action} href="/">
        Skills
      </a>
      <a className={classes.action} href="/">
        Projects
      </a>
      <a className={classes.action} href="/">
        Contact
      </a>
    </div>
  );
};
export default Actions;
