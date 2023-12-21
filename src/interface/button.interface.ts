import { ReactNode, MouseEvent } from "react";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import { ButtonColorEnum } from "@/enum/button-color.enum";

export interface ButtonInterface {
  submit?: boolean;
  size: ButtonSizeEnum;
  color: ButtonColorEnum;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
