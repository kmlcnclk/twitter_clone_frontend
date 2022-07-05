import React, { Component } from 'react';
import Icon from 'src/Icon';
import { NextRouter } from 'next/router';
import { UserType } from 'store/sliders/userSlider';
import NextImage from 'next/image';

interface Props {
  router: NextRouter;
  user: UserType;
}

interface States {}

export default class Profile extends Component<Props, States> {
  render() {
    const { user, router } = this.props;
    return (
      <div>
        <div className="flex justify-start items-center h-[53px] px-4 border-x-[1px] border-[#eff3f4] ">
          <div
            onClick={() => router.back()}
            className="hover:bg-[#e7e7e8] w-8 h-8 flex justify-center items-center cursor-pointer rounded-full transition-all"
          >
            <Icon name="leftArrow" size="20px" color="#0f1419" />
          </div>
          <div className="ml-9">
            <h2 className="text-lg font-bold text-[#0f1419]">{user.name}</h2>
            <p className="text-xs text-[#536471]">0 Tweets</p>
          </div>
        </div>
        <NextImage
          src="/profile_background_image.jpg"
          alt={`${user.username} Background Image`}
          width="600px"
          height="199.33px"
          objectFit="cover"
          priority={true}
        />
        <div className="relative">
          <div className="absolute -bottom-16 left-5 w-[140.5px] bg-white flex justify-center items-center rounded-full h-[140.5px]">
            <NextImage
              src="/python.png"
              alt={`${user.username} Profile Image`}
              width="133.5px"
              height="133.5px"
              objectFit="cover"
              className="rounded-full"
              priority={true}
            />
          </div>
          <div className="absolute right-4 top-2 font-semibold bg-white border-[1px] cursor-pointer px-4 py-1 hover:bg-[#e7e7e8] transition-all rounded-full border-[#cfd9de]" >Edit profile</div>
        </div>

      </div>
    );
  }
}
