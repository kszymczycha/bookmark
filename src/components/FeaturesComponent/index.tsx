"use client";
import { FC } from "react";
import styles from "./Features.module.scss";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ButtonColorEnum } from "@/enum/button-color.enum";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import { PanelComponent } from "@/components/PanelComponent";
import { FeaturesNavigationComponent } from "@/components/FeaturesNavigationComponent";
import { basePath } from "@/config";

const FeaturesComponent: FC<any> = () => {
  return (
    <>
      <div className="ml-8 mr-8 pt-8 pb-8">
        <div
          className={`${styles.feature} container flex items-center flex-column ml-8 mr-8 pt-8 pb-8`}
        >
          <h2 className="h2 text-center">Features</h2>
          <p className="p text-center text-gray pt-4 pb-4">
            Our aim is to make it quick and easy for you to access your favorite
            website. You bookmarks sync between your devices so you can access
            them on the go.
          </p>
          <FeaturesNavigationComponent />
        </div>
      </div>
      <PanelComponent
        title="Bookmark in one click"
        description="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites."
        image={{
          src: `${basePath}/assets/svg/illustration-features-tab-1.svg`,
          alt: "Illustration features",
          width: 536,
          height: 345,
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
    </>
  );
};

export { FeaturesComponent };
