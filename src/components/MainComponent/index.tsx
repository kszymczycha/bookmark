import { FC } from "react";
import { PanelComponent } from "@/components/PanelComponent";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ButtonColorEnum } from "@/enum/button-color.enum";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import { FeaturesComponent } from "../FeaturesComponent";
import { DownloadExtensionComponent } from "../DownloadExtensionComponent";
import { FaqComponent } from "@/components/FaqComponent";
import { FormComponent } from "../FormComponent";
import { basePath } from "@/config";

const MainComponent: FC<any> = () => {
  return (
    <main>
      <PanelComponent
        reverse={true}
        title="A Simple Bookmark Manager"
        description="A clean and simple interface to organize your favorite websites.
        Open a new browser tab see your sites load instantly. Try for
        free."
        image={{
          src: `${basePath}/assets/svg/illustration-hero.svg`,
          alt: "Illustration hero",
          width: 657,
          height: 466,
        }}
      >
        <>
          <div className="pr-2 w-50 pt-10">
            <ButtonComponent
              size={ButtonSizeEnum.LG}
              color={ButtonColorEnum.PRIMARY}
            >
              Get in on Chrome
            </ButtonComponent>
          </div>
          <div className="pl-2 w-50 pt-10">
            <ButtonComponent
              size={ButtonSizeEnum.LG}
              color={ButtonColorEnum.GRAY}
            >
              Get in on Firefox
            </ButtonComponent>
          </div>
        </>
      </PanelComponent>
      <FeaturesComponent />
      <DownloadExtensionComponent />
      <FaqComponent />
      <FormComponent />
    </main>
  );
};

export { MainComponent };
