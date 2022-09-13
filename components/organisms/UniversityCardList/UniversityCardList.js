import React, { useContext } from "react";
import Link from "next/link";

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
            <Link href="/universiteler/[uni]" as={`/universiteler/${uni.slug}`}>
              <a>
                <UniversityCard
                  src={`/uni_avatars/${uni.img}`}
                  uniName={uni.uniName}
                  city={uni.city}
                />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
