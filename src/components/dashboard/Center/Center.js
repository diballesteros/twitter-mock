import React from 'react';
import styles from './Center.module.scss';

const Center = ({ header, section, body }) => (
    <div className={styles.center}>
        <div className={styles.title}>
            {header}
        </div>
        <div className={styles.section}>
            {section}
        </div>
        <div className={styles.separator}></div>
        {body}
    </div>
);

export default Center;
