import React from 'react';
import './FollowContent.css';
import Nineteen from '../../../constants/img/1975.jpg';
import Button from '../../button/Button';

const FollowContent = ({grouperContent}) => (
    <div className="followContent">
        <div className="followContent_container">
            <div className="followContent_image">
                <img src={Nineteen} alt="1975"></img>
            </div> 
            <div className="followContent_details">
                <a href="/#" className="followContent_user">
                    <div className="followContent_user-text">
                        <div className="followContent_user-name">
                            <span>{grouperContent.user.name}</span>
                        </div>
                        <div className="followContent_user-tag">
                            <span>{grouperContent.user.tag}</span>
                        </div>
                    </div>
                </a>
                <div className="followContent_button">
                    <Button>Follow</Button>
                </div>
            </div>
        </div>
    </div>
);

export default FollowContent;
