import React from "react";

import styles from "./masterComponent.module.scss";

import BgMaster from "../../organisms/BgMaster/BgMaster";
import MasterNavigation from "../../organisms/MasterNavigation/MasterNavigation";
import Head from "../../molecules/Head";

export default function MasterComponent({children, title, color, classBg}) {
  return (
    <div className={styles.upSide}>
      <Head />
      <MasterNavigation title={title} color={color} />
      <BgMaster classBg={classBg}/>
      {children}
    </div>
  );
}
