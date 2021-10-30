import React from 'react';
import video from '../../video/foodvideo.mp4'
import './Background.css'


const BackgroundVideo = () => {
    return (
        <div className='backgotund-area'>
             <div className="container area">
                {/* <div className='bac-icon'><i class="fas fa-play"></i></div> */}
                <h5>START YOUR ADVENTURE</h5>
              <h1>Let's Explore This World</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            <button className='backbtn'>Book Now</button>
            </div>
            <div className="video-container">
            <div className="overley"></div>
                <video src={video} autoPlay loop muted></video>
              
            </div>
            
            
        </div>
    );
};

export default BackgroundVideo;