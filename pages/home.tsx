import React, { useEffect } from 'react';
import LeftSide from 'components/Home/LeftSide';
import RightSide from 'components/Home/RightSide';
import MidSide from 'components/Home/MidSide';
import Layout from 'components/layout';
import { NextPage } from 'next';
import MessageBox from 'components/Messages/MessageBox';
import { changeValue } from 'store/sliders/userSlider';
import { useAppDispatch } from 'store/hooks';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      changeValue({
        name: 'Kamilcan Çelik',
        username: 'kmlcnclk',
        status: [{ id: '1' }],
        profileText: 'Frontend developer & Backend for Frontend developer',
        location: 'Turkey',
        profileWebsiteLink: 'https://github.com/kmlcnclk',
        birthDate: 'May 2, 2001',
        joinDate: 'December 2021',
      })
    );
  }, [dispatch]);

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
            <RightSide />
          </div>
        </div>
      </div>
      <MessageBox />
    </Layout>
  );
};

export default Home;
