import { FC } from "react";
import styles from "./DownloadExtensionComponent.module.scss";
import { ExtensionTileComponent } from "@/components/ExtensionTileComponent";
import {
  LogoChromeSvg,
  LogoFirefoxSvg,
  LogoOperaSvg,
} from "@/components//Svgs";

const DownloadExtensionComponent: FC<any> = () => {
  return (
    <>
      <div className="ml-8 mr-8 pt-20">
        <div
          className={`${styles.extension} container flex items-center flex-column ml-8 mr-8 pt-8 pb-8`}
        >
          <h2 className="h2 text-center">Download the extension</h2>
          <p className="p text-center text-gray pt-4 pr-10 pl-10">
            We've got more in pipeline. Please do let us know if you've got a
            favorite you'd like us to prioritize.
          </p>
        </div>
      </div>
      <div
        className={`${styles.tiles} flex flex-column items-center justify-center ml-8 mr-8 pt-8 pb-25 flex-wrap`}
      >
        <ExtensionTileComponent browser="Chrome" versionNumber={62}>
          <LogoChromeSvg />
        </ExtensionTileComponent>
        <ExtensionTileComponent browser="Firefox" versionNumber={55}>
          <LogoFirefoxSvg />
        </ExtensionTileComponent>
        <ExtensionTileComponent browser="Opera" versionNumber={46}>
          <LogoOperaSvg />
        </ExtensionTileComponent>
      </div>
    </>
  );
};

export { DownloadExtensionComponent };
