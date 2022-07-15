import React, { Component } from 'react';
import Icon from 'src/Icon';
import { NextRouter } from 'next/router';
import { UserType } from 'store/sliders/userSlider';
import NextImage from 'next/image';
import NextLink from 'next/link';
import TweetsComponent from './Tweets/TweetsComponent';
import { Spinner } from '@chakra-ui/react';

interface Props {
  router: NextRouter;
  user: UserType;
}

interface States {
  profileUrl: string;
  profileBar: string;
}

export default class Profile extends Component<Props, States> {
  state = {
    profileUrl: '',
    profileBar: 'Tweets',
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
    const { profileUrl, profileBar } = this.state;

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
        <div className="border-x-[1px] border-b-[1px] border-[#eff3f4] pt-20">
          <div className="px-4">
            <div>
              <div>
                <h5 className="text-lg font-bold text-[#0f1419] ">
                  {user.name}
                </h5>
                <p className="text-sm text-[#536471]">@{user.username}</p>
              </div>
              <div className="mt-4">
                <p className="text-md text-[#0f1419] ">{user.profileText}</p>
              </div>
              <div className="mt-4">
                <div className="flex items-center flex-wrap">
                  <div className="flex">
                    <Icon name="location" color="#536471" size="18.75px" />
                    <p className="text-[#536471] text-sm ml-1 mr-3">
                      {user.location}
                    </p>
                  </div>
                  <div className="flex">
                    <Icon name="link" color="#536471" size="18.75px" />
                    <NextLink href={`${user.profileWebsiteLink}`}>
                      <a
                        className="text-[#1d9bf0] text-sm ml-1 mr-3 hover:underline cursor-pointer "
                        target="_blank"
                      >
                        {profileUrl}
                      </a>
                    </NextLink>
                  </div>
                  <div className="flex">
                    <Icon name="birthDate" color="#536471" size="18.75px" />
                    <p className="text-[#536471] text-sm ml-1 mr-3">
                      Born {user.birthDate}
                    </p>
                  </div>
                  <div className="flex">
                    <Icon name="join" color="#536471" size="18.75px" />
                    <p className="text-[#536471] text-sm ml-1 mr-3">
                      Joined {user.joinDate}
                    </p>
                  </div>
                </div>

                <div className="flex mt-4 space-x-4">
                  <div className="flex cursor-pointer space-x-1 hover:underline">
                    <span className="text-sm font-semibold text-[#0f1419]">
                      {user.following}
                    </span>
                    <span className="text-sm text-[#536471]">Following</span>
                  </div>
                  <div className="flex cursor-pointer space-x-1 hover:underline">
                    <span className="text-sm font-semibold text-[#0f1419]">
                      {user.followers}
                    </span>
                    <span className="text-sm text-[#536471]">Followers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>{' '}
          <div className="flex justify-around mt-4">
            <div
              onClick={() => this.setState({ profileBar: 'Tweets' })}
              className="relative w-[200px] flex flex-col justify-center items-center hover:bg-[#e7e7e8] h-[53px] cursor-pointer transition-all"
            >
              <p
                className={`font-semibold ${
                  profileBar === 'Tweets' ? 'text-[#0f1419]' : 'text-[#536471]'
                }`}
              >
                Tweets
              </p>
              <div
                className={
                  profileBar === 'Tweets' ? 'profileBarBlueAnimation' : ''
                }
              ></div>
            </div>
            <div
              onClick={() => this.setState({ profileBar: 'Tweets & replies' })}
              className="relative w-[200px] flex justify-center items-center hover:bg-[#e7e7e8] h-[53px] cursor-pointer transition-all"
            >
              <p
                className={`font-semibold ${
                  profileBar === 'Tweets & replies'
                    ? 'text-[#0f1419]'
                    : 'text-[#536471]'
                }`}
              >
                Tweets & replies
              </p>
              <div
                className={
                  profileBar === 'Tweets & replies'
                    ? 'profileBarBlueAnimation'
                    : ''
                }
              ></div>
            </div>
            <div
              onClick={() => this.setState({ profileBar: 'Media' })}
              className="relative w-[200px] flex justify-center items-center hover:bg-[#e7e7e8] h-[53px] cursor-pointer transition-all"
            >
              <p
                className={`font-semibold ${
                  profileBar === 'Media' ? 'text-[#0f1419]' : 'text-[#536471]'
                }`}
              >
                Media
              </p>
              <div
                className={
                  profileBar === 'Media' ? 'profileBarBlueAnimation' : ''
                }
              ></div>
            </div>
            <div
              onClick={() => this.setState({ profileBar: 'Likes' })}
              className="relative w-[200px] flex justify-center items-center hover:bg-[#e7e7e8] h-[53px] cursor-pointer transition-all"
            >
              <p
                className={`font-semibold ${
                  profileBar === 'Likes' ? 'text-[#0f1419]' : 'text-[#536471]'
                }`}
              >
                Likes
              </p>
              <div
                className={
                  profileBar === 'Likes' ? 'profileBarBlueAnimation' : ''
                }
              ></div>
            </div>
          </div>
        </div>

        {profileBar === 'Tweets' ? (
          <TweetsComponent />
        ) : (
          <div className='flex justify-center mt-10' >
            <Spinner
              thickness="4px"
              speed="1s"
              emptyColor="gray.200"
              color="#1d9bf0"
              size="lg"
            />
          </div>
        )}
      </div>
    );
  }
}
