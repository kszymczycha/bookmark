import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonInterface } from "@/interface/button.interface";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import { ButtonColorEnum } from "@/enum/button-color.enum";

const ButtonComponent: FC<ButtonInterface> = ({
  submit = false,
  size = ButtonSizeEnum.SM,
  color = ButtonColorEnum.PRIMARY,
  children,
  onClick,
}) => {
  let buttonSize = "";
  if (size === ButtonSizeEnum.SM) {
    buttonSize = styles.small;
  } else if (size === ButtonSizeEnum.LG) {
    buttonSize = styles.large;
  } else if (size === ButtonSizeEnum.XL) {
    buttonSize = styles["extra-large"];
  } else {
    buttonSize = "";
  }

  let buttonColor = "";
  if (color === ButtonColorEnum.PRIMARY) {
    buttonColor = styles.primary;
  } else if (color === ButtonColorEnum.SECONDARY) {
    buttonColor = styles.secondary;
  } else if (color === ButtonColorEnum.GRAY) {
    buttonColor = styles.gray;
  } else if (color === ButtonColorEnum.TRANSPARENT) {
    buttonColor = styles.transparent;
  } else {
    buttonColor = "";
  }

  return (
    <button
      type={submit ? "submit" : "button"}
      className={`${styles.btn} ${buttonSize} ${buttonColor} flex items-center justify-center btn pl-2 pr-2`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { ButtonComponent };
