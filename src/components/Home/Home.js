import React from 'react';
import AxtraInformation from './AxtraInformation';
import BackgroundImg from './BackgroundImg';
import './Home.css'
import HomeBenner from './HomeBenner';
import HomeServices from './HomeServices';
import Intruduction from './Intruduction';
const Home = () => {
    return (
<div>
<HomeBenner></HomeBenner>
<AxtraInformation></AxtraInformation>
<Intruduction></Intruduction>
<HomeServices></HomeServices>
<BackgroundImg></BackgroundImg>
<div className='experiance'>
    <div className="container experiance-main">
    <div className='titleText a'>
                   <h4>WHY CHOOSE US</h4>
               <h1>Countless Experiences</h1>
               </div>
        <div className="row pt-2">
            <div className="col-lg-3 col-12 col-12">
                <div className='expreancBox'>
                    <div><i class="far fa-compass"></i></div>
                    <div className='experiance-text'>
                        <h4>Experienced</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-12 col-12">
                <div className='expreancBox'>
                    <div><i class="fas fa-globe"></i></div>
                    <div className='experiance-text'>
                        <h4>Worldwide</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-12 col-12">
                <div className='expreancBox'>
                    <div><i class="fas fa-wallet"></i></div>
                    <div className='experiance-text'>
                        <h4>Cheap</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-12 col-12">
                <div className='expreancBox'>
                    <div><i class="fas fa-headphones-alt"></i></div>
                    <div className='experiance-text'>
                        <h4>24/7 Service</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor.</p>
                    </div>
                </div>
            </div>
            <div className='experiuns-btn'>
                <button >Book Now</button>
            </div>
        </div>
    </div>
</div>
</div>
    );
};

export default Home;