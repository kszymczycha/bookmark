import { FC } from "react";
import styles from "./PanelComponent.module.scss";
import Image from "next/image";
import { PanelInterface } from "@/interface/panel.interface";

const PanelComponent: FC<PanelInterface> = ({
  children,
  reverse = false,
  title,
  description,
  image,
}) => {
  return (
    <div
      className={`${styles.panel} ${
        reverse ? `${styles.reverse}` : ""
      } relative`}
    >
      <div className={`${styles.wrapper} ml-8 mr-8 pt-8 pb-8`}>
        <div className={`${styles.container} container flex flex-column`}>
          <div
            className={`${styles["img-wrapper"]} flex items-center justify-center mb-6`}
          >
            <Image
              src={image?.src}
              alt={image?.src}
              sizes="100vw"
              className="z-index-1 relative"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={image?.width}
              height={image?.height}
            />
            <div
              className={`${reverse ? styles.right : styles.left} absolute`}
            />
          </div>
          <div className={`${styles.content} flex flex-column`}>
            <h2 className={`${styles.header} h1 text-center`}>{title}</h2>
            <p
              className={`${styles.text} p text-center text-gray pr-3 pl-3 pt-6`}
            >
              {description}
            </p>
            <div className={`${styles.buttons} flex justify-between`}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PanelComponent };
