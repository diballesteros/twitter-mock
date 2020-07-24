import React from 'react';
import styles from './Editor.module.scss';
import Button from '../../common/Button/Button';
import noprofile from '../../assets/svg/noprofile.svg';

const Editor = ({ content, sendTweet, handleChange }) => (
	<div className={styles.editor}>
		<div className={styles.profile}>
			<img src={noprofile} alt="profile" />
		</div>
		<div className={styles.content}>
			<form className={styles.inputContainer}>
				<input
					type="text"
					placeholder="What's happening?"
					value={content}
					onChange={(e) => handleChange(e.target.value)}
				/>
			</form>
			<div className={styles.button}>
				<div>
					<Button
						clicked={() => sendTweet(content)}
						disabled={content === ''}>
						Tweet
					</Button>
				</div>
			</div>
		</div>
	</div>
);

export default Editor;
