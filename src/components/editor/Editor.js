import React from 'react';
import styles from './Editor.module.scss';
import Button from '../../common/Button/Button';
import profilePicture from '../../constants/img/Profile_picture.jpg';

const Editor = ({content, createTweet}) => (
    <div className={styles.editor}>
        <div className={styles.profile}>
            <img src={profilePicture} alt='profile' />
        </div>
        <div className={styles.content}>
            <div className={styles.inputContainer}>
                <input type="text" placeholder="What's happening?" value={content}/>
            </div>
            <div className={styles.button}>
                <div>
                    <Button clicked={(content) => createTweet(content)}>Tweet</Button>
                </div>
            </div>
        </div>
    </div>
);

export default Editor;
