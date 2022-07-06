import React, { Component } from 'react';
import Icon from 'src/Icon';
import { NextRouter } from 'next/router';
import { UserType } from 'store/sliders/userSlider';
import NextImage from 'next/image';
import NextLink from 'next/link';

interface Props {
  router: NextRouter;
  user: UserType;
}

interface States {
  profileUrl: string;
}

export default class Profile extends Component<Props, States> {
  state = {
    profileUrl: '',
  };

  componentDidMount(): void {
    const {
      user: { profileWebsiteLink },
    } = this.props;

    this.setState({
      profileUrl: profileWebsiteLink.split('https://')[1],
    });
  }

  render() {
    const { user, router } = this.props;
    const { profileUrl } = this.state;

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
          <div className="absolute right-4 top-2 font-semibold bg-white border-[1px] cursor-pointer px-4 py-1 hover:bg-[#e7e7e8] transition-all rounded-full border-[#cfd9de]">
            Edit profile
          </div>
        </div>
        <div className="pt-20  border-x-[1px] border-[#eff3f4] px-4">
          <div>
            <div>
              <h5 className="text-lg font-bold text-[#0f1419] ">{user.name}</h5>
              <p className="text-sm text-[#536471]">@{user.username}</p>
            </div>
            <div className="mt-4">
              <p className="text-md text-[#0f1419] ">{user.profileText}</p>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <Icon name="location" color="#536471" size="18.75px" />
                <p className="text-[#536471] text-sm ml-1 mr-3">
                  {user.location}
                </p>
                <Icon name="link" color="#536471" size="18.75px" />
                <NextLink href={`${user.profileWebsiteLink}`}>
                  <a className="text-[#1d9bf0] text-sm ml-1 mr-3 hover:underline cursor-pointer " target="_blank">
                    {profileUrl}
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
