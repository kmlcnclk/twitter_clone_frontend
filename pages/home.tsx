import LeftSide from 'components/Home/LeftSide';
import RightSide from 'components/Home/RightSide';
import MidSide from 'components/Home/MidSide';
import React from 'react';

function Home() {
  return (
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
  );
}

export default Home;
