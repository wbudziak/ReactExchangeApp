// import * as S from "./style";
import styles from "./Button.module.css";
const Button = (props) => {
  //   return <S.Button onClick={props.onClick}>{props.children}</S.Button>;
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
