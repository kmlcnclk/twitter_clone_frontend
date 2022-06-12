import React from 'react';
import Icon from 'src/Icon';
import RightSideMenuItem from './tools/rightSideMenuItem';
import NextImage from 'next/image';

const navList = [
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Imprint',
  'Accessibility',
  'Ads info',
  'More...',
  '© 2022 Twitter, Inc.',
];

function RightSide() {
  return (
    <div className="px-8 h-full">
      <div className="bg-white w-full h-[60px] fixed z-10">
        <div className="flex items-center px-1 py-3 w-[350px] h-[45px] bg-[#f7f9f9] my-1 rounded-full">
          <Icon name="search" color="#536471" width="44px" height="18.75px" />
          <input
            type="text"
            className="w-full mx-4 h-[45px] bg-[#f7f9f9] focus:outline-none"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="w-[370px] overflow-y-scroll h-full fixed pt-16 pb-8">
        <div className="w-[350px] h-auto bg-[#f7f9f9] pt-3 rounded-2xl ">
          <h3 className="text-[#0f1419] px-4 font-bold text-xl">
            Trends for you
          </h3>
          <RightSideMenuItem />
          <RightSideMenuItem />
          <RightSideMenuItem />
          <RightSideMenuItem />
          <RightSideMenuItem />
          <RightSideMenuItem />
          <RightSideMenuItem />
          <RightSideMenuItem />
          <RightSideMenuItem />
          <RightSideMenuItem />
          <div className="w-full h-[52px] cursor-pointer hover:bg-[#EFF1F1] rounded-b-2xl transition-all ">
            <p className="text-twitter text-sm p-4">Show more</p>
          </div>
        </div>
        <div className="w-[350px] mt-4 h-auto bg-[#f7f9f9] pt-3 rounded-2xl ">
          <h3 className="text-[#0f1419] px-4 font-bold text-xl">
            Who to follow
          </h3>
          <div className="flex mt-4 items-center justify-between transition-all hover:bg-[#EFF1F1] px-4 py-2 cursor-pointer">
            <div className="flex items-center">
              <NextImage src="/python.png" width="48px" height="48px" />
              <div className="-space-y-1 ml-2">
                <p className="text-[#0f1419] font-semibold hover:underline">
                  Kamilcan Çelik
                </p>
                <p className="text-sm text-[#536471] font-semibold">
                  @kmlcnclk
                </p>
              </div>
            </div>
            <div className="w-[77px] h-[32px] bg-[#0f1419] hover:bg-[#272c30] transition-all rounded-full flex items-center justify-center">
              <p className="text-white text-sm">Follow</p>
            </div>
          </div>
          <div className="flex mt-4 items-center justify-between transition-all hover:bg-[#EFF1F1] px-4 py-2 cursor-pointer">
            <div className="flex items-center">
              <NextImage src="/python.png" width="48px" height="48px" />
              <div className="-space-y-1 ml-2">
                <p className="text-[#0f1419] font-semibold hover:underline">
                  Kamilcan Çelik
                </p>
                <p className="text-sm text-[#536471] font-semibold">
                  @kmlcnclk
                </p>
              </div>
            </div>
            <div className="w-[77px] h-[32px] bg-[#0f1419] hover:bg-[#272c30] transition-all rounded-full flex items-center justify-center">
              <p className="text-white text-sm">Follow</p>
            </div>
          </div>
          <div className="flex mt-4 items-center justify-between transition-all hover:bg-[#EFF1F1] px-4 py-2 cursor-pointer">
            <div className="flex items-center">
              <NextImage src="/python.png" width="48px" height="48px" />
              <div className="-space-y-1 ml-2">
                <p className="text-[#0f1419] font-semibold hover:underline">
                  Kamilcan Çelik
                </p>
                <p className="text-sm text-[#536471] font-semibold">
                  @kmlcnclk
                </p>
              </div>
            </div>
            <div className="w-[77px] h-[32px] bg-[#0f1419] hover:bg-[#272c30] transition-all rounded-full flex items-center justify-center">
              <p className="text-white text-sm">Follow</p>
            </div>
          </div>
          <div className="w-full h-[52px] cursor-pointer hover:bg-[#EFF1F1] rounded-b-2xl transition-all">
            <p className="text-twitter text-sm p-4">Show more</p>
          </div>
        </div>
        <div className="h-auto w-[350px] px-4 flex flex-wrap justify-start mt-3">
          {navList.map((item, i) => (
            <p
              key={i}
              className="text-[#536471] text-xs mr-4 cursor-pointer hover:underline"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSide;
