import { FC } from "react";
import styles from "./ExtensionTile.module.scss";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ButtonColorEnum } from "@/enum/button-color.enum";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import { BgDotsSvg } from "@/components/Svgs";
import { ExtensionTileInterface } from "@/interface/extension-tile.interface";

const ExtensionTileComponent: FC<ExtensionTileInterface> = ({
  children,
  browser,
  versionNumber,
}) => {
  return (
    <div className={`${styles.tile} box-shadow b-radius-15 mr-4 ml-4`}>
      <div className="ml-8 mr-8 pt-8 pr-8 pl-8 pb-4 flex flex-column items-center">
        <div className="pb-8">{children}</div>
        <p className="text-medium pb-2 text-center">Add to {browser}</p>
        <p className="text-gray text-medium text-x-small pb-6 text-center">
          Minimun version {versionNumber}
        </p>
      </div>
      <BgDotsSvg className="w-100" />
      <div className="pl-8 pr-8 mb-8 pt-8">
        <ButtonComponent
          size={ButtonSizeEnum.LG}
          color={ButtonColorEnum.PRIMARY}
        >
          Add & Install Extension
        </ButtonComponent>
      </div>
    </div>
  );
};

export { ExtensionTileComponent };
