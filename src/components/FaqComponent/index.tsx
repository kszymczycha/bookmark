import { FC } from "react";
import styles from "./FaqComponent.module.scss";
import { ExpandCollapseComponent } from "@/components/ExpandCollapseComponent";
import { ButtonComponent } from "@/components/ButtonComponent";
import { ButtonColorEnum } from "@/enum/button-color.enum";
import { ButtonSizeEnum } from "@/enum/button-size.enum";

const FaqComponent: FC<any> = () => {
  return (
    <div className="ml-8 mr-8 pt-20">
      <div
        className={`${styles.faq} container flex items-center flex-column ml-8 mr-8 pt-8 pb-8`}
      >
        <h2 className="h2 text-center">Frequently Asked Question</h2>
        <p className="p text-center text-gray pt-4 pr-10 pl-10">
          Here are some of our FAQs. If you have any other questions you'd like
          answered, please feel free to email us.
        </p>
      </div>
      <div className="flex flex-column items-center pt-8">
        <ExpandCollapseComponent title="What is Bookmark?">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ab a error eaque, eius aperiam at consequuntur illo
          possimus sunt maxime exercitationem voluptates explicabo dolores
          consectetur cumque tempore voluptatum alias! Consectetur veritatis
          expedita neque dolore nobis placeat atque commodi sequi asperiores
          fuga assumenda tempore fugiat modi ducimus a voluptates laudantium,
          nisi vero. Qui cum molestias numquam, nihil sunt provident quibusdam?
        </ExpandCollapseComponent>
        <ExpandCollapseComponent title="How can I request a new browser?">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ab a error eaque, eius aperiam at consequuntur illo
          possimus sunt maxime exercitationem voluptates explicabo dolores
          consectetur cumque tempore voluptatum alias! Consectetur veritatis
          expedita neque dolore nobis placeat atque commodi sequi asperiores
          fuga assumenda tempore fugiat modi ducimus a voluptates laudantium,
          nisi vero. Qui cum molestias numquam, nihil sunt provident quibusdam?
        </ExpandCollapseComponent>
        <ExpandCollapseComponent title="Is there a mobile app?">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ab a error eaque, eius aperiam at consequuntur illo
          possimus sunt maxime exercitationem voluptates explicabo dolores
          consectetur cumque tempore voluptatum alias! Consectetur veritatis
          expedita neque dolore nobis placeat atque commodi sequi asperiores
          fuga assumenda tempore fugiat modi ducimus a voluptates laudantium,
          nisi vero. Qui cum molestias numquam, nihil sunt provident quibusdam?
        </ExpandCollapseComponent>
        <ExpandCollapseComponent title="Is there a mobile app?">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit ab a error eaque, eius aperiam at consequuntur illo
          possimus sunt maxime exercitationem voluptates explicabo dolores
          consectetur cumque tempore voluptatum alias! Consectetur veritatis
          expedita neque dolore nobis placeat atque commodi sequi asperiores
          fuga assumenda tempore fugiat modi ducimus a voluptates laudantium,
          nisi vero. Qui cum molestias numquam, nihil sunt provident quibusdam?
        </ExpandCollapseComponent>
        <div className={`${styles["btn-wrapper"]} pt-14`}>
          <ButtonComponent
            size={ButtonSizeEnum.LG}
            color={ButtonColorEnum.PRIMARY}
          >
            More Info
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export { FaqComponent };
