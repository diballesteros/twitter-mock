import React from 'react';
import './FollowCard.css';
import Nineteen from '../../constants/img/1975.jpg';
import Button from '../../common/Button/Button';

const FollowCard = ({grouperContent}) => (
    <div className="followCard">
        <div className="followCard_container">
            <div className="followCard_image">
                <img src={Nineteen} alt="1975"></img>
            </div> 
            <div className="followCard_details">
                <a href="/#" className="followCard_user">
                    <div className="followCard_user-text">
                        <div className="followCard_user-name">
                            <span>{grouperContent.user.name}</span>
                        </div>
                        <div className="followCard_user-tag">
                            <span>{grouperContent.user.tag}</span>
                        </div>
                    </div>
                </a>
                <div className="followCard_button">
                    <Button>Follow</Button>
                </div>
            </div>
        </div>
    </div>
);

export default FollowCard;
