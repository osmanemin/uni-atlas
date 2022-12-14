import React from "react";

import styles from "./universitiesFilterSide.module.scss";

import SearchBar from "../../molecules/SearchBar/SearchBar";

export default function UniversitiesFilterSide() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <SearchBar />
    </div>
  );
}
