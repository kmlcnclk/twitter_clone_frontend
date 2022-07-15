import React, { FunctionComponent, useState, useEffect } from 'react';
import Icon from 'src/Icon';
import NextImage from 'next/image';
import { selectUser } from 'store/sliders/userSlider';
import {
  selectLeftMenuSelected,
  changeValue,
} from 'store/sliders/leftMenuSelectedSlider';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { useRouter, NextRouter, Router } from 'next/router';

const LeftSide: FunctionComponent = () => {
  const router: NextRouter = useRouter();

  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);
  const leftMenuSelected = useAppSelector(selectLeftMenuSelected);

  const [profilePopupState, setProfilePopupState] = useState<boolean>(false);
  const [moreState, setMoreState] = useState<boolean>(false);

  useEffect(() => {
    router.prefetch(`/${user.username}`);
    router.prefetch(`/home`);

    if (router.pathname == '/home') dispatch(changeValue('home'));
    else if (router.pathname == '/explore') dispatch(changeValue('explore'));
    else if (router.pathname == '/notifications')
      dispatch(changeValue('notifications'));
    else if (router.pathname == '/messages') dispatch(changeValue('messages'));
    else if (router.pathname == '/i/bookmarks')
      dispatch(changeValue('bookmarks'));
    else if (router.pathname == '/[username]/lists')
      dispatch(changeValue('lists'));
    else if (router.pathname == '/[username]') dispatch(changeValue('profile'));
    else dispatch(changeValue(''));
  }, [router, user, dispatch]);

  return (
    <div
      className="m-1 min-h-screen fixed"
      onMouseLeave={() => {
        setMoreState(false);
        setProfilePopupState(false);
      }}
    >
      <div className="flex min-h-screen flex-col justify-between">
        <div>
          <div className="w-[50px] h-[50px] hover:bg-[#E8F5FD] flex justify-center items-center rounded-full transition-all cursor-pointer">
            <Icon
              name="twitterBird"
              width={50}
              height={30}
              color="#1D9BF0"
              onClickFunc={() => router.push('/home')}
            />
          </div>
          <div className="w-[251px] h-full mt-1 transition-all">
            <div
              className="leftSide"
              onClick={() => {
                dispatch(changeValue('home'));
                router.push(`/home`);
              }}
            >
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div>
                  <Icon
                    name={leftMenuSelected == 'home' ? 'homeFill' : 'home'}
                    color="#0F1419"
                    size="26.25px"
                  />
                  <p
                    className={`ml-5 text-xl ${
                      leftMenuSelected == 'home'
                        ? 'font-bold'
                        : 'font-normal text-[#0f1419]'
                    }`}
                  >
                    Home
                  </p>
                </div>
              </div>
            </div>
            <div
              className="leftSide"
              onClick={() => dispatch(changeValue('explore'))}
            >
              <div className="leftSideItem">
                <div className="flex items-center">
                  <Icon
                    name={
                      leftMenuSelected == 'explore' ? 'exploreFill' : 'explore'
                    }
                    color="#0F1419"
                    size="26.25px"
                  />
                  <p
                    className={`ml-5 text-xl ${
                      leftMenuSelected == 'explore'
                        ? 'font-bold'
                        : 'font-normal text-[#0f1419]'
                    }`}
                  >
                    Explore
                  </p>
                </div>
              </div>
            </div>
            <div
              className="leftSide"
              onClick={() => dispatch(changeValue('notifications'))}
            >
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon
                    name={
                      leftMenuSelected == 'notifications'
                        ? 'notificationFill'
                        : 'notification'
                    }
                    color="#0F1419"
                    size="26.25px"
                  />
                  <p
                    className={`ml-5 text-xl ${
                      leftMenuSelected == 'notifications'
                        ? 'font-bold'
                        : 'font-normal text-[#0f1419]'
                    }`}
                  >
                    Notifications
                  </p>
                </div>
              </div>
            </div>
            <div
              className="leftSide"
              onClick={() => dispatch(changeValue('messages'))}
            >
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon
                    name={
                      leftMenuSelected == 'messages' ? 'messageFill' : 'message'
                    }
                    color="#0F1419"
                    size="26.25px"
                  />
                  <p
                    className={`ml-5 text-xl ${
                      leftMenuSelected == 'messages'
                        ? 'font-bold'
                        : 'font-normal text-[#0f1419]'
                    }`}
                  >
                    Messages
                  </p>
                </div>
              </div>
            </div>
            <div
              className="leftSide"
              onClick={() => dispatch(changeValue('bookmarks'))}
            >
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon
                    name={
                      leftMenuSelected == 'bookmarks'
                        ? 'bookmarkFill'
                        : 'bookmark'
                    }
                    color="#0F1419"
                    size="26.25px"
                  />
                  <p
                    className={`ml-5 text-xl ${
                      leftMenuSelected == 'bookmarks'
                        ? 'font-bold'
                        : 'font-normal text-[#0f1419]'
                    }`}
                  >
                    Bookmarks
                  </p>
                </div>
              </div>
            </div>
            <div
              className="leftSide"
              onClick={() => dispatch(changeValue('lists'))}
            >
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon
                    name={leftMenuSelected == 'lists' ? 'listFill' : 'list'}
                    color="#0F1419"
                    size="26.25px"
                  />
                  <p
                    className={`ml-5 text-xl ${
                      leftMenuSelected == 'lists'
                        ? 'font-bold'
                        : 'font-normal text-[#0f1419]'
                    }`}
                  >
                    Lists
                  </p>
                </div>
              </div>
            </div>
            <div
              className="leftSide"
              onClick={() => {
                dispatch(changeValue('profile'));
                router.push(`/${user.username}`);
              }}
            >
              <div className="leftSideItem">
                <div className="flex relative items-center">
                  {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                  <Icon
                    name={
                      leftMenuSelected == 'profile' ? 'profileFill' : 'profile'
                    }
                    color="#0F1419"
                    size="26.25px"
                  />
                  <p
                    className={`ml-5 text-xl ${
                      leftMenuSelected == 'profile'
                        ? 'font-bold'
                        : 'font-normal text-[#0f1419]'
                    }`}
                  >
                    Profile
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              {moreState && (
                <div
                  className="absolute bg-white w-[225px] h-auto overflow-y-auto -top-[404px] z-10 shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] rounded-md"
                  onMouseLeave={() => setMoreState(false)}
                >
                  <div className="border-b-[1px] border-[#eff3f4] transition-all">
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer rounded-t-md">
                      <Icon name="topics" color="#0f1419" size="18.75px" />
                      <p className="text-sm text-[#0f1419]">Topics</p>
                    </div>
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer">
                      <Icon name="moments" color="#0f1419" size="18.75px" />
                      <p className="text-sm text-[#0f1419]">Moments</p>
                    </div>
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer">
                      <Icon name="newsletters" color="#0f1419" size="18.75px" />
                      <p className="text-sm text-[#0f1419]">Newsletters</p>
                    </div>
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer">
                      <Icon
                        name="twitterForProfessionals"
                        color="#0f1419"
                        size="18.75px"
                      />
                      <p className="text-sm text-[#0f1419]">
                        Twitter for Professionals
                      </p>
                    </div>
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer">
                      <Icon name="twitterAds" color="#0f1419" size="18.75px" />
                      <p className="text-sm text-[#0f1419]">Twitter Ads</p>
                    </div>
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer">
                      <Icon name="analytics" color="#0f1419" size="18.75px" />
                      <p className="text-sm text-[#0f1419]">Analytics</p>
                    </div>
                  </div>
                  <div className="transition-all">
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer">
                      <Icon
                        name="settingsAndPrivacy"
                        color="#0f1419"
                        size="18.75px"
                      />
                      <p className="text-sm text-[#0f1419]">
                        Settings and privacy
                      </p>
                    </div>
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer">
                      <Icon name="helpCenter" color="#0f1419" size="18.75px" />
                      <p className="text-sm text-[#0f1419]">Help Center</p>
                    </div>
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer">
                      <div className="relative">
                        <Icon
                          name="displayOut"
                          color="#0f1419"
                          size="18.75px"
                        />
                        <Icon
                          name="displayIn"
                          color="#1D9BF0"
                          size="18.75px"
                          className="absolute top-0"
                        />
                      </div>
                      <p className="text-sm text-[#0f1419]">Display</p>
                    </div>
                    <div className="flex items-center p-4 space-x-4 hover:bg-[#F7F9F9] cursor-pointer rounded-b-md">
                      <Icon
                        name="keyboardShortcuts"
                        color="#0f1419"
                        size="18.75px"
                      />
                      <p className="text-sm text-[#0f1419]">
                        Keyboard shortcuts
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div
                className="leftSide"
                onClick={() => setMoreState(!moreState)}
              >
                <div className="leftSideItem">
                  <div className="flex relative items-center">
                    {/* <div className="w-[7px] h-[7px] bg-twitter rounded-full absolute left-[18px] -top-1"></div> */}
                    <Icon name="more" color="#0F1419" size="26.25px" />
                    <p className=" ml-5 text-xl font-normal text-[#0f1419]">
                      More
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-twitter w-[225px] rounded-[28px] flex items-center justify-center h-[52px] mt-2 hover:bg-[#1084d1] transition-colors cursor-pointer">
              <p className="text-white font-semibold text-lg">Tweet</p>
            </div>
          </div>
        </div>

        <div>
          {profilePopupState && (
            <div
              className="relative"
              onMouseLeave={() => setProfilePopupState(false)}
            >
              <div className="absolute -top-56 -left-10 w-[300px] h-[210px] shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)]  rounded-3xl bg-white z-10">
                <div className="flex justify-between p-3 items-center border-b-[1px] border-[#eff3f4]">
                  <div className="justify-center items-center flex">
                    <NextImage
                      src="/python.png"
                      width="48px"
                      height="48px"
                      objectFit="cover"
                      className="rounded-full"
                    />
                    <div className="ml-2">
                      <p className="text-[#0F1419] font-semibold">
                        Kamilcan Çelik
                      </p>
                      <p className="text-[#536471] -mt-1 text-sm">@kmlcnclk</p>
                    </div>
                  </div>
                  <Icon name="tick" size="18.75px" color="#1D9BF0" />
                </div>
                <div className="transition-all">
                  <p className="text-md py-4 px-6 cursor-pointer text-[#0f1419] hover:bg-[#f7f7f7]">
                    Add an existing account
                  </p>
                  <p className="text-md text-[#0f1419] py-4 cursor-pointer px-6  hover:bg-[#f7f7f7]">
                    Log out @kmlcnclk
                  </p>
                </div>
              </div>
              <div className="absolute rotate-45 -top-7 left-28 shadow-[0_2px_10px_2px_rgba(0,0,0,0.3)] -translate-x-1/2 w-5 h-5 bg-white"></div>
            </div>
          )}
          <div
            onClick={() => setProfilePopupState(!profilePopupState)}
            className="w-[251px] h-16 flex items-center justify-between mb-4 px-3 hover:bg-[#E7E7E8] rounded-full cursor-pointer transition-all"
          >
            <div className="justify-center flex">
              <NextImage
                src="/python.png"
                width="40px"
                priority={true}
                height="40px"
                objectFit="cover"
                className="rounded-full"
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
    </div>
  );
};

export default LeftSide;
