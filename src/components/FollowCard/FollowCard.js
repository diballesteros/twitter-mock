import React from 'react';
import styles from './FollowCard.module.scss';
import Button from '../../common/Button/Button';
import Nineteen from '../../assets/img/1975.jpg';

const FollowCard = ({grouperContent}) => (
    <div className={styles.followCard}>
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={Nineteen} alt="1975"></img>
            </div> 
            <div className={styles.details}>
                <a href="/#" className={styles.user}>
                    <div className={styles.text}>
                        <div className={styles.username}>
                            <span>{grouperContent.user.name}</span>
                        </div>
                        <div className={styles.tag}>
                            <span>{grouperContent.user.tag}</span>
                        </div>
                    </div>
                </a>
                <div className={styles.button}>
                    <Button>Follow</Button>
                </div>
            </div>
        </div>
    </div>
);

export default FollowCard;
