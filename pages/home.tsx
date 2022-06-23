import LeftSide from 'components/Home/LeftSide';
import RightSide from 'components/Home/RightSide';
import MidSide from 'components/Home/MidSide';
import React from 'react';
import Layout from 'components/layout';
import { NextPage } from 'next';
import MessageBox from 'components/Messages/MessageBox';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div>
        <div className="justify-center flex">
          <div className="w-[270px]">
            <LeftSide />
          </div>
          <div className="w-[600px] h-auto">
            <MidSide />
          </div>
          <div className="w-[382px] h-auto">
            <RightSide relativePeopleState={false} />
          </div>
        </div>
      </div>
      <MessageBox />
    </Layout>
  );
};

export default Home;
