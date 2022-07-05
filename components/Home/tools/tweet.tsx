import React, { FunctionComponent, useEffect } from 'react';
import Icon from 'src/Icon';
import NextImage from 'next/image';
import { Image } from '@chakra-ui/react';
import { useRouter, NextRouter } from 'next/router';
import fakeData from 'src/fakeDate.json';

const Tweet: FunctionComponent = () => {
  const router: NextRouter = useRouter();

  useEffect(() => {
    router.prefetch(`${fakeData[0].username}/status/${fakeData[0].status[0].id}`);
  }, [router]);

  return (
    <div
      className="cursor-pointer hover:bg-[#f7f7f7] transition-colors p-4"
      onClick={() =>
        router.push(`${fakeData[0].username}/status/${fakeData[0].status[0].id}`)
      }
    >
      <div className="tweet-icon ml-1">
        <Icon name="messageOne" color="#536471" size={16} />
        <div className="flex items-center space-x-1">
          <p className="text-sm font-semibold text-[#536471] hover:underline">
            Python
          </p>
          <p>·</p>
          <p className="text-sm font-semibold text-twitter hover:underline">
            See more
          </p>
        </div>
      </div>
      <div className="mt-2 flex space-x-2 items-start">
        <NextImage
          src="/python.png"
          width="48px"
          height="48px"
          className="rounded-full"
          objectFit="cover"
        />
        <div>
          <div className="flex justify-between items-center pr-3">
            <div className="flex space-x-1">
              <p className="text-[#0F1419] text-sm font-bold hover:underline">
                Kamilcan Çelik
              </p>
              <Icon name="blueTick" size="18.75px" color="#1D9BF0" />
              <p className="text-[#536471] text-sm font-bold">@kmlcnclk</p>
              <p className="text-[#536471] text-sm font-bold">·</p>
              <p className="text-[#536471] text-sm font-bold">8h</p>
            </div>
            <Icon name="threePointNotCircle" size="18.75px" color="#536471" />
          </div>
          <div>
            <p className="text-black text-sm w-[506px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/Manchester_United_v_Newcastle_United%2C_11_September_2021_%2810%29.jpg"
              alt="ronaldo"
              className="tweet-image"
              objectFit="contain"
            />
          </div>
          <div className="mt-3 flex justify-between items-center pr-20">
            <div className="tweet-icon">
              <Icon name="reply" size="18.75px" className="tweet-icon-icon" />
              <p className="tweet-p">7</p>
            </div>
            <div className="tweet-icon">
              <Icon name="retweet" size="18.75px" className="tweet-icon-icon" />
              <p className="tweet-p">1</p>
            </div>
            <div className="tweet-icon">
              <Icon name="like" size="18.75px" className="tweet-icon-icon" />
              <p className="tweet-p">78</p>
            </div>
            <div className="tweet-icon">
              <Icon name="share" size="18.75px" className="tweet-icon-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
