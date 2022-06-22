import React, { FunctionComponent } from 'react';
import Icon from 'src/Icon';
import NextImage from 'next/image';

const LeftSide: FunctionComponent = () => {
  return (
    <div className="m-1 min-h-screen fixed">
      <div className="flex min-h-screen flex-col justify-between">
        <div>
          <div className="w-[50px] h-[50px] hover:bg-[#E8F5FD] flex justify-center items-center rounded-full transition-all cursor-pointer">
            <Icon name="twitterBird" width={50} height={30} color="#1D9BF0" />
          </div>
          <div className="w-[251px] h-full mt-1 transition-all">
            <div className="leftSide">
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div>
                  <Icon name="home" color="#0F1419" size="26.25px" />
                  <p className=" ml-5 text-xl font-bold">Home</p>
                </div>
              </div>
            </div>
            <div className="leftSide">
              <div className="leftSideItem">
                <div className="flex items-center">
                  <Icon name="explore" color="#0F1419" size="26.25px" />
                  <p className=" ml-5 text-xl font-normal text-[#676A6D]">
                    Explore
                  </p>
                </div>
              </div>
            </div>
            <div className="leftSide">
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon name="notification" color="#0F1419" size="26.25px" />
                  <p className=" ml-5 text-xl font-normal text-[#676A6D]">
                    Notifications
                  </p>
                </div>
              </div>
            </div>
            <div className="leftSide">
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon name="message" color="#0F1419" size="26.25px" />
                  <p className=" ml-5 text-xl font-normal text-[#676A6D]">
                    Messages
                  </p>
                </div>
              </div>
            </div>
            <div className="leftSide">
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon name="bookmark" color="#0F1419" size="26.25px" />
                  <p className=" ml-5 text-xl font-normal text-[#676A6D]">
                    Bookmarks
                  </p>
                </div>
              </div>
            </div>
            <div className="leftSide">
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon name="list" color="#0F1419" size="26.25px" />
                  <p className=" ml-5 text-xl font-normal text-[#676A6D]">
                    Lists
                  </p>
                </div>
              </div>
            </div>
            <div className="leftSide">
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon name="profile" color="#0F1419" size="26.25px" />
                  <p className=" ml-5 text-xl font-normal text-[#676A6D]">
                    Profile
                  </p>
                </div>
              </div>
            </div>
            <div className="leftSide">
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon name="more" color="#0F1419" size="26.25px" />
                  <p className=" ml-5 text-xl font-normal text-[#676A6D]">
                    More
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-twitter w-[225px] rounded-[28px] flex items-center justify-center h-[52px] mt-2 hover:bg-[#1084d1] transition-colors cursor-pointer">
              <p className="text-white font-semibold text-lg">Tweet</p>
            </div>
          </div>
        </div>

        <div className="w-[251px] h-16 flex items-center justify-between mb-4 px-3">
          <div className="justify-center flex">
            <NextImage
              src="/python.png"
              width="40px"
              priority={true}
              height="40px"
              objectFit="contain"
            />
            <div className="ml-2">
              <p className="text-[#0F1419] font-semibold">Kamilcan Çelik</p>
              <p className="text-[#536471] -mt-1 text-sm">@kmlcnclk</p>
            </div>
          </div>
          <Icon name="threePoint" size="18.75px" color="#000" />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
