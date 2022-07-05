import React, { FunctionComponent } from 'react';
import NextImage from 'next/image';
import Icon from 'src/Icon';
import Tweet from './tools/tweet';

const MidSide: FunctionComponent = () => {
  return (
    <div className="w-full h-full border-x-[1px] border-[#eff3f4]">
      <div>
        <div className="border-b-[1px] border-[#eff3f4]">
          <div className="flex justify-between items-center h-[53px] fixed w-[600px] z-10 bg-white p-3 opacity-95">
            <p className="font-bold text-xl">Home</p>
            <Icon name="topTweets" size={20} color="#0f1419" />
          </div>
          <div className="p-3">
            <div className="mt-12 flex ">
              <NextImage
                src="/python.png"
                width="48px"
                priority={true}
                height="48px"
                objectFit="cover"
                className="rounded-full"
              />
              <div className="ml-3 mt-[10px] flex">
                <p className="text-[#5d6d79] text-xl">What&apos;s happening?</p>
              </div>
            </div>
            <div className="ml-[60px] mt-6 flex justify-between items-center  ">
              <div className="flex space-x-4">
                <Icon name="media" color="#1d9bf0" size={20} />
                <Icon name="gif" color="#1d9bf0" size={20} />
                <Icon name="poll" color="#1d9bf0" size={20} />
                <Icon name="emoji" color="#1d9bf0" size={20} />
                <Icon name="schedule" color="#1d9bf0" size={20} />
                <Icon
                  name="location"
                  color="#1d9bf0"
                  size={20}
                  className="opacity-70"
                />
              </div>
              <div className="bg-twitter opacity-60 w-[75px] rounded-[28px] flex items-center justify-center h-[36px]">
                <p className="text-white font-semibold text-lg">Tweet</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[48px] border-b-[1px] border[#eff3f4] flex justify-center items-center cursor-pointer hover:bg-[#f7f7f7] transition-colors">
          <p className="text-twitter">Show 71 Tweets</p>
        </div>
        <div>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    </div>
  );
};

export default MidSide;
