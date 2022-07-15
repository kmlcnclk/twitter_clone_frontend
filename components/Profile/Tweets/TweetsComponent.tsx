import React, { Component } from 'react';
import TweetsItem from './TweetsItem';
import ProfileTopics from './ProfileTopics';
import Tweet from '../../Home/tools/tweet';

interface Props {}
interface States {}

class TweetsComponent extends Component<Props, States> {
  render() {
    return (
      <div className="border-[#eff3f4] w-full border-x-[1px]">
        <Tweet />
        <Tweet />
        <Tweet />
        <div className=" pt-4">
          <div className="border-[#eff3f4] border-b-[1px]">
            <h3 className="text-[#0f1419] px-4 font-bold text-xl mb-4">
              Who to follow
            </h3>
            <TweetsItem />
            <TweetsItem />
            <TweetsItem />
            <div className="w-full h-[52px] cursor-pointer hover:bg-[#EFF1F1] transition-all ">
              <p className="text-twitter text-sm p-4">Show more</p>
            </div>
          </div>
          <Tweet />
          <Tweet />
          <ProfileTopics />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    );
  }
}

export default TweetsComponent;
