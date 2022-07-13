import React from 'react';
import Icon from 'src/Icon';
import NextImage from 'next/image';

function TweetsItem() {
  return (
    <div className="hover:bg-[#f7f7f7] p-4 cursor-pointer transition-all">
      <div className="flex items-center space-x-1 ml-8 mb-1">
        <div className="flex justify-end">
          <Icon name="profileFill" color="#536471" size="16px" />
        </div>
        <p className="text-[#5d6d79] text-xs font-semibold">
          Mehmet Aslan and 6 others follow
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex w-full">
          <div className="w-auto">
            <NextImage
              src="/1.jpg"
              width="48px"
              height="48px"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="ml-3 w-full">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#1a202c]">Neriman Aslan</p>
                <p className="text-[#536471] text-xs">@NerimanAslan</p>
              </div>
              <div className="w-[77px] h-[32px] bg-[#0f1419] hover:bg-[#272c30] transition-all rounded-full flex items-center justify-center">
                <p className="text-white text-sm">Follow</p>
              </div>
            </div>
            <p className="text-[#0f1419] text-sm">
              Frontend Developer & Some Backend Knowledge
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetsItem;
