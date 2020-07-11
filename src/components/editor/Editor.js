import React from 'react';
import './Editor.css';
import Button from '../../common/Button/Button';
import profilePicture from '../../constants/img/Profile_picture.jpg';

const Editor = ({content, sendTweet}) => (
    <div className="editor">
        <div className="editor_profile-picture">
            <img src={profilePicture} alt='profile' />
        </div>
        <div className="editor_content-container">
            <div className="editor_input-container">
                <input type="text" placeholder="What's happening?" value={content}/>
            </div>
            <div className="editor_buttons-container">
                <div>
                    <Button onClick={(content) => sendTweet(content)}>Tweet</Button>
                </div>
            </div>
        </div>
    </div>
);

export default Editor;
