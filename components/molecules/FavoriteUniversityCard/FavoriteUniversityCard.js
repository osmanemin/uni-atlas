import React from "react";
import ArrowRightButton from "../../atoms/ArrowRigthButton/ArrowRightButton";

import styles from "./favoriteUniversityCard.module.scss";

export default function FavoriteUniversityCard({ uniName }) {
  return (
    <div className={styles.container} style={{backgroundImage: "url(/favoriteUnies/favoriteUni.jpg)"}}>
      {/* <img className={styles.uniImage} src="/favoriteUnies/favoriteUni.jpg"/> */}
      <div className={styles.linearGradientTop} />
      <h2 className={styles.title}>{uniName}</h2>
      <div className={styles.star}></div>
      <div className={styles.linearGradientBottom} />
      <ArrowRightButton className={styles.goToUniversity}/>
    </div>
  );
}
