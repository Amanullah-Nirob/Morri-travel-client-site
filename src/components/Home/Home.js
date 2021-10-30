import React from 'react';
import AxtraInformation from './AxtraInformation';
import BackgroundImg from './BackgroundImg';
import ClintAccess from './ClintAccess';
import Experiance from './Experiance';
import './Home.css'
import HomeBenner from './HomeBenner';
import HomeServices from './HomeServices';
import Intruduction from './Intruduction';
import Moments from './Moments';
import Review from './Review';
import TeamGuide from './TeamGuide';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo'
import Story from './Story';
const Home = () => {
    return (
<div>
<HomeBenner></HomeBenner>
<AxtraInformation></AxtraInformation>
<Intruduction></Intruduction>
<HomeServices></HomeServices>
<BackgroundImg></BackgroundImg>
<Experiance></Experiance>
<TeamGuide></TeamGuide>
<Moments></Moments>
<Review></Review>
<ClintAccess></ClintAccess>
<BackgroundVideo></BackgroundVideo>
<Story></Story>
</div>
    );
};

export default Home;