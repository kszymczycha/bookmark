import { FC } from "react";
import style from "./Footer.module.scss";
import {
  LogoBookmarkSvg,
  IconFacebookSvg,
  IconTwitterSvg,
} from "@/components/Svgs";
import { TOP_MENU_ITEMS_DATA } from "@/data/top-menu-items.data";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ButtonColorEnum } from "@/enum/button-color.enum";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import Link from "next/link";

const FooterComponent: FC<any> = () => {
  return (
    <footer>
      <div className={`pt-4 pb-4 bg-dark-blue text-white`}>
        <div
          className={`${style.footer} container pl-8 pr-8 flex flex-column items-center`}
        >
          <div className="pt-4 pb-4">
            <Link href="/" className="flex">
              <LogoBookmarkSvg className={style[`logo-white`]} />
            </Link>
          </div>
          <nav>
            <ul
              className={`${style["menu-items"]} flex-column list-style-none justify-end flex`}
            >
              {TOP_MENU_ITEMS_DATA.map((item) => (
                <li
                  className={`${style["menu-item"]} pt-2 pr-2 pb-2 pl-2 flex-1`}
                  key={item}
                >
                  <Link href="/">
                    <ButtonComponent
                      size={ButtonSizeEnum.LG}
                      color={ButtonColorEnum.TRANSPARENT}
                    >
                      {item}
                    </ButtonComponent>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={`${style.socials} pt-8 pb-8 flex`}>
            <Link href="/">
              <IconFacebookSvg className="mr-6" />
            </Link>
            <Link href="/">
              <IconTwitterSvg className="ml-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FooterComponent };
