import Link from "next/link";
import React from "react";
import styles from "./menuButton.module.scss";

export default function MenuButton({ title, bgColor, children, href }) {
  return (
    <Link href={href}>
      <a>
        <div
          className={styles.container}
          style={{ backgroundColor: `${bgColor}` }}
        >
          {children}
          <h2 className={styles.title}>{title}</h2>
        </div>
      </a>
    </Link>
  );
}
