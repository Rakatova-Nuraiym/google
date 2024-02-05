import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <p className={scss.text}>
        <img
          src="https://i.pinimg.com/originals/13/3d/65/133d655dc17a78d01ca64d6d7b258b7f.png"
          alt=""
        />
        Sign up with google
      </p>
    </footer>
  );
};

export default Footer;
