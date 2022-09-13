import React from "react";

import styles from "./columnOfGraph.module.scss";

export default function ColumnOfGraph({ percent, title }) {
  return (
    <div className={styles.container}>
      <div className={styles.column} style={{ height: `${percent}%` }}>
        <p className={styles.rate}>{`%${percent.replace(".", ",")}`}</p>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
}
