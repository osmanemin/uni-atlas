import React, { useContext } from "react";

import styles from "./universityCardList.module.scss";

import { Context } from "../../../storage/Context";
import UniversityCard from "../../molecules/UniversityCard/UniversityCard";

export default function UniversityCardList() {
  const context = useContext(Context);

  return (
    <div className={styles.container}>
      <ul className={styles.content}>
        {context.unies.map((uni) => (
          <li key={uni.id}>
            <UniversityCard
              src={`/uni_avatars/${uni.img}`}
              uniName={uni.uniName}
              city={uni.city}
              slug={uni.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
