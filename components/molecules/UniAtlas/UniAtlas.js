import React from "react";
import cn from "classnames";

import styles from "./uniAtlas.module.scss";

import Link from "next/link";

export default function UniAtlas({ className, titleClass }) {
  return (
    <Link href="/">
      <a>
        <div className={cn(className, styles.container)}>
          <h1 className={cn(titleClass, styles.title)}>UNİ ATLAS</h1>
        </div>
      </a>
    </Link>
  );
}
