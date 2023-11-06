import Actions from "./Actions";
import classes from "./Header.module.css";
import logo from "./../../assets/Logo.png";
const Header = () => {
  return (
    <header>
      <img className={classes.logo} src={logo} alt="logo" />
      <Actions />
    </header>
  );
};
export default Header;
