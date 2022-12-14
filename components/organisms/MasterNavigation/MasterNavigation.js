import React from 'react'

import styles from './masterNavigation.module.scss'

import UniAtlas from '../../molecules/UniAtlas/UniAtlas'

export default function MasterNavigation({title, color}) {
    return (
        <div className={styles.container} style={{backgroundColor: `${color}`}}>
            <UniAtlas className={styles.uniAtlas} titleClass={styles.uniTitle}/>
            <h1 className={styles.title}>{title}</h1>
        </div>
    )
}
