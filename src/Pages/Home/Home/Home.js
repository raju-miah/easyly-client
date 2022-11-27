import React from 'react';
import AdvertiseHome from '../../AdvertiseHome/AdvertiseHome';
import Categories from '../../Categories/Categories/Categories';
import Banner from '../Banner/Banner';
import HomeExtraSection from '../HomeExtraSection/HomeExtraSection';
import HomeExtraSectionTwo from '../HomeExtraSection/HomeExtraSectionTwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertiseHome></AdvertiseHome>
            <HomeExtraSection></HomeExtraSection>
            <HomeExtraSectionTwo></HomeExtraSectionTwo>
        </div>
    );
};

export default Home;