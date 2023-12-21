"use client";
import { FC, useState, useEffect, useRef } from "react";
import { TOP_MENU_ITEMS_DATA } from "@/data/top-menu-items.data";
import style from "./Header.module.scss";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ButtonColorEnum } from "@/enum/button-color.enum";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import { LogoBookmarkSvg } from "@/components/Svgs";
import { MobileMenuComponent } from "@/components/MobileMenuComponent";
import { useScreenSize } from "@/hooks/use-screen-size.hook";
import { ScreenSizeEnum } from "@/enum/screen-size.enum";
import Link from "next/link";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { PanelComponent } from "@/components/PanelComponent";
import { FeaturesNavigationComponent } from "@/components/FeaturesNavigationComponent";
import { basePath } from "@/config";

const useHeaderComponentHook = (): any => {
  const [expand, setExpand] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const headerHoverRef = useRef(false);

  const handleCheckboxChange = (e: any) => setExpand(e.target?.checked);

  const { width } = useScreenSize();

  useEffect(() => {
    const collapse = width > ScreenSizeEnum.LAPTOP;
    if (collapse) {
      setExpand(!collapse);
    }
  }, [width]);

  useEffect(() => {
    if (expand) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [expand]);

  useEffect(() => {
    setTimeout(onOpenModal, 30000);
  }, []);

  const onHeaderHover = (): any => {
    if (headerHoverRef.current) return;
    onOpenModal();
    headerHoverRef.current = true;
  };

  return { handleCheckboxChange, expand, open, onHeaderHover, onCloseModal };
};

const HeaderComponent: FC<any> = () => {
  const { handleCheckboxChange, expand, open, onCloseModal, onHeaderHover } =
    useHeaderComponentHook();

  return (
    <>
      <header>
        <div
          onMouseEnter={onHeaderHover}
          className={`ml-8 mr-8 pt-8 pb-8 z-index-3 relative`}
        >
          <div
            className={`${style.wrapper} flex justify-between items-center relative container flex-row z-index-1`}
          >
            <div className="flex w-100 mr-auto logo-wrapper pt-4 pb-4">
              <Link href="/" className="flex">
                <LogoBookmarkSvg
                  className={`${expand ? `${style[`logo-white`]}` : ""}`}
                />
              </Link>
            </div>
            <input
              type="checkbox"
              className={style.hamburger}
              id="hamburger"
              onChange={handleCheckboxChange}
              checked={expand}
            />
            <label htmlFor="hamburger" className={style["hamburger-label"]} />
            <nav className="w-100 display-none show-lg">
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
                <li
                  className={`${style["menu-item"]} pt-2 pr-2 pb-2 pl-2 flex-1`}
                >
                  <Link href="/">
                    <ButtonComponent
                      size={ButtonSizeEnum.LG}
                      color={ButtonColorEnum.SECONDARY}
                    >
                      LOGIN
                    </ButtonComponent>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {expand && <MobileMenuComponent />}
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "custom-modal",
        }}
      >
        <div className="flex flex-column items-center pt-25 pb-25">
          <div className={`${style["navigation-wrapper"]} w-100 pb-10`}>
            <FeaturesNavigationComponent defaultTab={1} />
          </div>
          <PanelComponent
            title="Inteligent search"
            description="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
            image={{
              src: `${basePath}/assets/svg/illustration-features-tab-2.svg`,
              alt: "Illustration features",
              width: 478,
              height: 416,
            }}
          >
            <>
              <div className="pr-2 w-50 pt-10 display-none show-md">
                <ButtonComponent
                  size={ButtonSizeEnum.LG}
                  color={ButtonColorEnum.PRIMARY}
                >
                  More info
                </ButtonComponent>
              </div>
            </>
          </PanelComponent>
        </div>
      </Modal>
    </>
  );
};

export { HeaderComponent };
