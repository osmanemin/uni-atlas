import React from "react";
import FavoriteUniversityCard from "../../molecules/FavoriteUniversityCard/FavoriteUniversityCard";

import styles from "./favoriteUniversityCardList.module.scss";

export default function FavoriteUniversityCardList() {
  return (
    <div className={styles.container}>
      <FavoriteUniversityCard uniName="İstanbul Üniversitesi" />
      <FavoriteUniversityCard uniName="İstanbul Üniversitesi" />
      <FavoriteUniversityCard uniName="İstanbul Üniversitesi" />
      <FavoriteUniversityCard uniName="İstanbul Üniversitesi" />
      <FavoriteUniversityCard uniName="İstanbul Üniversitesi" />
    </div>
  );
}
