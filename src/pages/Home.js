import React, { Component } from 'react';
import HomeBanner from './../components/HomeBanner';
import HomeMediaObject from './../components/HomeMediaObject';
import HomeProductService from './../components/HomeProductService';
import HomeBannerBottom from './../components/HomeBannerBottom';
import HomeBlogCard from './../components/HomeBlogCard';
import HomeFAQ from './../components/HomeFAQ';

class Home extends Component {
  render() {
    return (
      <div class="hakita-body">
        <HomeBanner />
        <HomeMediaObject />
        <HomeProductService />
        <HomeBannerBottom />
        <HomeBlogCard />
        <HomeFAQ />
      </div>
    )
  }
}

export default Home;
