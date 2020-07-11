import React from 'react';
import './HappeningCard.css';
import nascarPicture from '../../constants/img/NASCAR.jpg';

const HappeningCard = ({ grouperContent }) => (
    <div className="happeningCard">
        <a href="/#">
            <div className="happeningCard_text-container">
                <div className="happeningCard_category">
                    <div className="happeningCard_trend-type">
                        <span>{grouperContent.user}</span>
                    </div>
                    <div className="happeningCard_dot">
                        <span>•</span>
                    </div>
                    <div className="happeningCard_time-place">
                        <span>{grouperContent.time}</span>
                    </div>
                </div>
                <div className="happeningCard_main">
                    <span>{grouperContent.text}</span>
                </div>
            </div>
            <div className="happeningCard_picture-container">
                <img src={nascarPicture} alt='trendingpicture'></img>
            </div>
        </a>
    </div>

);

export default HappeningCard;
