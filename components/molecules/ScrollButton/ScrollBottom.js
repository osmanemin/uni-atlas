import React from 'react'

import styles from './scrollBottom.module.scss'


export default function ScrollBottom() {
    return (
        <div className={styles.container}>

            <div className={styles.mause}>
                <div className={styles.scroll}></div>
            </div>
        </div>
    )
}
