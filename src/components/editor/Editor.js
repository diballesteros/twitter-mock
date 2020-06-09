import React from 'react';
import './Editor.css';
import profilePicture from '../../constants/img/Profile_picture.jpg';

const Editor = (props) => (
    <div className="editor">
        <div className="editor_profile-picture">
            <img src={profilePicture} alt='profile'/>
        </div>
        <div className="editor_content-container">
            <div className="editor_input-container">
                <input type="text" placeholder="What's happening?"/>
            </div>
            <div className="editor_buttons-container">
                <div>

                </div>
                <button></button>
            </div>
        </div>
    </div>
);

export default Editor;
