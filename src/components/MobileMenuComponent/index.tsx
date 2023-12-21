import { FC } from "react";
import style from "./MobileMenu.module.scss";
import { TOP_MENU_ITEMS_DATA } from "@/data/top-menu-items.data";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ButtonColorEnum } from "@/enum/button-color.enum";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import { IconFacebookSvg, IconTwitterSvg } from "@/components/Svgs";
import Link from "next/link";

const MobileMenuComponent: FC<any> = () => {
  return (
    <div
      className={`${style.mobile} absolute w-100 flex justify-content flex-column pt-25 pr-8 pb-8 pl-8 inset-0 text-white z-index-2`}
    >
      <nav>
        <ul className="list-style-none">
          {TOP_MENU_ITEMS_DATA.map((item, index) => (
            <li
              className={`flex justify-center pt-3 pb-3 bb-1 b-gray ${
                index === 0 ? "bt-1" : ""
              }`}
              key={index}
            >
              <Link href="/" className="w-100">
                <ButtonComponent
                  size={ButtonSizeEnum.LG}
                  color={ButtonColorEnum.TRANSPARENT}
                >
                  {item}
                </ButtonComponent>
              </Link>
            </li>
          ))}
          <li
            className={`flex justify-center pt-3 pb-3 ${style["btn-login-wrapper"]}`}
          >
            <Link href="/" className="w-100">
              <ButtonComponent
                size={ButtonSizeEnum.LG}
                color={ButtonColorEnum.TRANSPARENT}
              >
                LOGIN
              </ButtonComponent>
            </Link>
          </li>
        </ul>
      </nav>

      <div className={`${style.socials} pt-8 pb-8 flex justify-center`}>
        <Link href="/">
          <IconFacebookSvg className="mr-6" />
        </Link>
        <Link href="/">
          <IconTwitterSvg className="ml-6" />
        </Link>
      </div>
    </div>
  );
};

export { MobileMenuComponent };
