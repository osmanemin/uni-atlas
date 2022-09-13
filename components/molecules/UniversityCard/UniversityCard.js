import React from "react";
import Image from "next/image";

import styles from "./universityCard.module.scss";

export default function UniversityCard({ src, uniName, city }) {
  return (
    <div className={styles.container}>
      <Image src={src} width={500} height={500} alt={uniName} />
      <h2 className={styles.uniName}>{uniName}</h2>
      <h4 className={styles.city}>{city}</h4>
      <div className={styles.detailButton}>İncele</div>
    </div>
  );
}
