import React from 'react';

const Intruduction = () => {
    return (
        <div className='intruduction-area'>
        <div className="container intruduction-area-main">
            <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                    <div className='intruduction-area-left-text'>
                    <h5>WELCOME TO MORII</h5>
                    <h1>Nature's Majesty Awaits You</h1>
                    <p>The Mori Travel website is one of the tourism related websites that allows you to travel anywhere in the world, get a practically good guide and get around with a professional assistant.</p>
                    <button>learn more</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                    <div className='intruduction-area-right-images'>
                     <div className='first-img'>
                     <img src="http://askproject.net/morii/wp-content/uploads/sites/8/2021/07/top-aerial-view-of-antalya-deniz-feneri-2021-04-04-07-51-36-utc.jpg" alt="" />
                     </div>
                     <div className='second-img'>
                     <img src="http://askproject.net/morii/wp-content/uploads/sites/8/2021/07/dancing-underwater-PWT6K2M-768x1024.jpg" alt="" />
                     </div>
                     <div className='third-img'>
                     <img src="http://askproject.net/morii/wp-content/uploads/sites/8/2021/07/aurora-borealis-over-snowy-mountains-and-frozen-se-J6LTWV2-800x533.jpg" alt="" />
                     </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Intruduction;