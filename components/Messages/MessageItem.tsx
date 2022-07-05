import React, { FunctionComponent } from 'react';
import NextImage from 'next/image';
import Icon from 'src/Icon';

const MessageItem: FunctionComponent = ({}) => {
  return (
    <div className="messageItem">
      <NextImage
        src="/python.png"
        width="48px"
        height="48px"
        alt="kmlcnclk"
        objectFit="cover"
        className="rounded-full"
      />
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-1">
            <p className="text-[#37434d] text-md font-semibold">
              Kamilcan Çelik
            </p>
            <p className="text-[#536371] text-sm ">@kmlcnclk </p>
            <p className="text-[#536371] text-sm ">·</p>
            <p className="text-[#536371] text-sm ">10m</p>
          </div>
          <Icon
            className="messageMoreIcon"
            name="threePointNotCircle"
            size="18.75px"
            color="#536471"
          />
        </div>
        <p className="text-[#536371] text-sm ">Shared a tweet</p>
      </div>
    </div>
  );
};

export default MessageItem;
