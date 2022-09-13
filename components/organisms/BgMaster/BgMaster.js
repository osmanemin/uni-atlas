import React from "react";
import styles from "./bgMaster.module.scss";
import cn from "classnames";

export default function BgMarket({ classBg }) {
  return (
    <div className={cn(styles.bgImage, classBg)}>
      <div className={styles.linearGradient}></div>
    </div>
  );
}
