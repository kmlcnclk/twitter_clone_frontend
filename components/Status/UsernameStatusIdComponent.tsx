import React, { Component } from 'react';
import Icon from 'src/Icon';
import NextImage from 'next/image';
import { NextRouter } from 'next/router';
import { Image } from '@chakra-ui/react';

type Props = {
  router: NextRouter;
};

export default class UsernameStatusIdComponent extends Component<Props> {
  render() {
    const { router } = this.props;

    return (
      <div className="w-full h-full border-x-[1px] border-[#eff3f4]">
        <div className="p-3 border-b-[1px] border-[#eff3f4]">
          <div className="flex items-center">
            <div
              className="hover:bg-[#e7e7e8] w-[25px] h-[25px] cursor-pointer rounded-full flex items-center justify-center transition-all "
              onClick={() => router.back()}
            >
              <Icon name="leftArrow" size="20px" color="#0f1419" />
            </div>
            <h3 className="text-xl font-bold ml-8">Tweet</h3>
          </div>
          <div className="mt-6 ">
            <div className="flex items-center space-x-3">
              <Icon name="fillLike" color="#536471" size="16px" />
              <p className="text-[#536471] font-semibold text-sm">
                Kamilcan Çelik and Can Demir liked
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center">
                <NextImage
                  src="/python.png"
                  width="48px"
                  height="48px"
                  objectFit="cover"
                  className="rounded-full"
                />
                <div className="ml-2">
                  <p className="text-[#0F1419] text-sm font-bold hover:underline">
                    Kamilcan Çelik
                  </p>
                  <p className="text-[#536471] text-sm ">@kmlcnclk</p>
                </div>
              </div>
              <Icon
                name="threePoint"
                color="#536471"
                size="18.75px"
                className="mr-1"
              />
            </div>
            <div>
              <p className="text-black text-xl w-[506px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/1/18/Manchester_United_v_Newcastle_United%2C_11_September_2021_%2810%29.jpg"
                alt="ronaldo"
                className="tweet-image"
                objectFit="contain"
              />
            </div>

            <div className="flex items-center mt-4 pb-4  border-b-[1px] border-[#eff3f4]">
              <p className="text-[#536471] hover:underline cursor-pointer">
                9.20 AM · Jun 14, 2022 ·
              </p>
              <p className="text-[#536471] hover:underline cursor-pointer ml-1">
                Twitter for iPhone
              </p>
            </div>
            <div className="hover:underline flex items-center space-x-1 py-4 cursor-pointer w-min border-b-[1px] border-[#eff3f4]">
              <p className="text-[#0f1419] font-semibold">66</p>
              <p className="text-[#536471]">Likes</p>
            </div>
            <div className="my-4 pb-4 flex justify-around items-center  border-b-[1px] border-[#eff3f4]">
              <div className="flex items-center space-x-3">
                <div className=" transition-colors">
                  <Icon
                    name="reply"
                    size="22.50px"
                    className="hover:fill-[#2F9CE5] fill-[#536471] hover:outline-1 transition-colors hover:outline-[#2F9CE5] hover:rounded-full"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="retweet" size="22.50px" color="#536471" />
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="like" size="22.50px" color="#536471" />
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="share" size="22.50px" color="#536471" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3 w-full">
                <NextImage
                  src="/python.png"
                  width="48px"
                  height="48px"
                  objectFit="cover"
                  className="rounded-full cursor-pointer"
                />
                <div className="cursor-text w-full">
                  <p className="text-[#536471] text-xl ">Tweet your reply</p>
                </div>
              </div>
              <div className="bg-twitter opacity-60 w-[75px] rounded-[28px] cursor-default flex items-center justify-center h-[36px]">
                <p className="text-white font-semibold text-lg">Reply</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}
