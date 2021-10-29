import React from 'react';

const AxtraInformation = () => {
    return (
        <div className='axtra-information'>
        <div className="container axtra-information-main">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                    <div className='axtra-information-items'>
                        <div><i class="far fa-map"></i></div>
                        <div>
                            <h4>Location</h4>
                            <p>Alaska</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                    <div className='axtra-information-items'>
                        <div><i class="fas fa-calendar-alt"></i></div>
                        <div>
                            <h4>Date</h4>
                            <p>10/29/2021</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                    <div className='axtra-information-items'>
                        <div><i class="fas fa-suitcase-rolling"></i></div>
                        <div>
                            <h4>Trip Length</h4>
                            <p>14 days</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
    );
};

export default AxtraInformation;