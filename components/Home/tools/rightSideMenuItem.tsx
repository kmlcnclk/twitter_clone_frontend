import React, { FunctionComponent } from 'react';
import Icon from 'src/Icon';

const RightSideMenuItem: FunctionComponent = () => {
  return (
    <div className="hover:bg-[#EFF1F1] px-4 py-2 mt-4 cursor-pointer transition-all">
      <div className="flex items-center justify-between">
        <p className="text-xs text-[#536471]">Business & finance · Trending</p>
        <div className="fill-[#536471] hover:fill-[#1D9BF0]">
          <Icon name="threePoint" size="18.75px" />
        </div>
      </div>
      <p className="text-[#0f1419] font-semibold ">Benzine 2</p>
      <p className="text-[#798690] text-xs font-semibold ">12.8K Tweets</p>
    </div>
  );
};

export default RightSideMenuItem;
