"use client";
import { FC, useState } from "react";
import styles from "./ExpandCollapse.module.scss";
import { IconArrowSvg } from "@/components/Svgs";
import { ExpandCollapseInterface } from "@/interface/expand-collapse.interface";

const useExpandCollapseComponent = (): any => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return { isExpanded, toggleExpand };
};

const ExpandCollapseComponent: FC<ExpandCollapseInterface> = ({
  title,
  children,
}) => {
  const { isExpanded, toggleExpand } = useExpandCollapseComponent();

  return (
    <div className={`${styles["expand-collapse"]} w-100 pr-4 bb-1 b-gray`}>
      <button
        onClick={toggleExpand}
        className={`flex justify-between items-center text-medium text-normal w-100 appearance-none bg-transparent pointer b-none outline-none pt-8 pb-8 hover-red`}
      >
        <span className="text-left text-medium">{title}</span>{" "}
        {!isExpanded ? (
          <IconArrowSvg />
        ) : (
          <IconArrowSvg className={styles["rotate-icon"]} />
        )}
      </button>
      <div
        className={`${styles.content} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        <p className="p text-small text-gray pb-8">{children}</p>
      </div>
    </div>
  );
};

export { ExpandCollapseComponent };
