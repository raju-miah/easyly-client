import React from 'react';
import Categories from '../../Categories/Categories/Categories';
import Banner from '../Banner/Banner';
import HomeExtraSection from '../HomeExtraSection/HomeExtraSection';
import HomeExtraSectionTwo from '../HomeExtraSection/HomeExtraSectionTwo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <HomeExtraSection></HomeExtraSection>
            <HomeExtraSectionTwo></HomeExtraSectionTwo>
        </div>
    );
};

export default Home;