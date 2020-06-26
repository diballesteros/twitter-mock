import React from 'react';
import nascarPicture from '../../../constants/img/NASCAR.jpg';
import './GrouperChild.css';

const GrouperChild = ({ grouperContent }) => (
    <div className="grouperChild">
        <a href="/#">
            <div className="grouperChild_text-container">
                <div className="grouperChild_category">
                    <div className="grouperChild_trend-type">
                        <span>{grouperContent.user}</span>
                    </div>
                    <div className="grouperChild_dot">
                        <span>.</span>
                    </div>
                    <div className="grouperChild_time-place">
                        <span>{grouperContent.time}</span>
                    </div>
                </div>
                <div className="grouperChild_main">
                    <span>{grouperContent.text}</span>
                </div>
            </div>
            <div className="grouperChild_picture-container">
                <div>
                    <img src={nascarPicture} alt='trendingpicture'></img>
                </div>
            </div>
        </a>
    </div>
);

export default GrouperChild;
