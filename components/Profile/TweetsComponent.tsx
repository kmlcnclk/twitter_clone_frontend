import React, { Component } from 'react';
import Icon from 'src/Icon';
import NextImage from 'next/image';
import TweetsItem from './TweetsItem';

interface Props {}
interface States {}

class TweetsComponent extends Component<Props, States> {
  render() {
    return (
      <div className=" pt-4  border-x-[1px] border-[#eff3f4] w-full">
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
    );
  }
}

export default TweetsComponent;
