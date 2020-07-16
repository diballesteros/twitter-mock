import React, { useState } from 'react';
import styles from './Editor.module.scss';
import Button from '../../common/Button/Button';
import noprofile from '../../assets/svg/noprofile.svg';

const Editor = ({ handleTweet }) => {
    const [content, setContent] = useState('');

    return (
        <div className={styles.editor}>
            <div className={styles.profile}>
                <img src={noprofile} alt='profile' />
            </div>
            <div className={styles.content}>
                <form className={styles.inputContainer}>
                    <input type="text" placeholder="What's happening?" value={content} onChange={e => setContent(e.target.value)} />
                </form>
                <div className={styles.button}>
                    <div>
                        <Button clicked={() => handleTweet(content)}>Tweet</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Editor;
