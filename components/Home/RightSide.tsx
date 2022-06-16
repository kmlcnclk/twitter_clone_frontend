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

function RightSide({ relativePeopleState }) {
  return (
    <div className="px-8 h-min relative">
      <div className="bg-white w-[350px] h-[60px] absolute right-0 -top-[70px]">
        <div className="flex items-center px-1 py-3 w-[350px] h-[45px] bg-[#f7f9f9] my-1 rounded-full">
          <Icon name="search" color="#536471" width="44px" height="18.75px" />
          <input
            type="text"
            className="w-full mx-4 h-[45px] bg-[#f7f9f9] focus:outline-none"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      {relativePeopleState ? (
        <div className="bg-white rounded-2xl border-[1px] border-[#eff3f4] w-[350px] mt-20 h-auto ">
          <p className="text-2xl font-bold text-[#0F1419] px-4 py-3">
            Relevant People
          </p>
          <div className="flex items-center justify-between transition-all hover:rounded-b-2xl hover:bg-[#EFF1F1] px-4 py-3 cursor-pointer">
            <div className="flex items-center">
              <NextImage
                src="/python.png"
                width="48px"
                height="48px"
                objectFit="cover"
                className="rounded-full"
              />
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
        </div>
      ) : (
        <div className="mt-20"></div>
      )}

      <div className="w-[370px] h-full my-4 ">
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
              <NextImage
                src="/python.png"
                width="48px"
                height="48px"
                objectFit="cover"
                className="rounded-full"
              />
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
              <NextImage
                src="/python.png"
                width="48px"
                height="48px"
                objectFit="cover"
                className="rounded-full"
              />
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
              <NextImage
                src="/python.png"
                width="48px"
                height="48px"
                className="rounded-full"
              />
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
