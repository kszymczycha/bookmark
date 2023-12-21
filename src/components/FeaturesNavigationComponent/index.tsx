import { FC, useState, useEffect } from "react";
import styles from "./FeaturesNavigation.module.scss";
import { FEATURES_ITEMS } from "@/data/features-items.data";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ButtonColorEnum } from "@/enum/button-color.enum";
import { ButtonSizeEnum } from "@/enum/button-size.enum";
import { FeaturesNavigationInterface } from "@/interface/features-navigation.interface";

const useFeaturesComponentHook = ({
  defaultTab = 0,
}: FeaturesNavigationInterface): any => {
  const [tab, setTab] = useState<number>(0);

  useEffect(() => {
    setTab(defaultTab);
  }, []);

  return { tab, setTab };
};

const FeaturesNavigationComponent: FC<FeaturesNavigationInterface> = ({
  defaultTab,
}) => {
  const { tab, setTab } = useFeaturesComponentHook({ defaultTab });

  return (
    <nav className="w-100">
      <ul className={`${styles.navigation} list-style-none flex flex-column`}>
        {FEATURES_ITEMS.map((item, index) => (
          <li key={index} className={`w-100 text-center bb-1 b-gray`}>
            <div
              className={`${styles["feature-item"]} ${
                tab === index ? styles.underline : ""
              } d-inline-block`}
            >
              <ButtonComponent
                size={ButtonSizeEnum.XL}
                color={ButtonColorEnum.TRANSPARENT}
                onClick={() => setTab(index)}
              >
                {item}
              </ButtonComponent>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { FeaturesNavigationComponent };
