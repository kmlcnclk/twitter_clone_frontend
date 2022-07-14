import React, { Component } from 'react';
import Icon from 'src/Icon';

interface Props {
  a: string;
}
interface States {}

class ProfileTopicsItem extends Component<Props, States> {
  render() {
    const { a } = this.props;
    return (
      <div className="border-[1px] flex-nowrap border-[#cfd9de] w-auto h-10 rounded-full flex items-center justify-between">
        <div className="flex justify-center w-full items-center h-full cursor-pointer hover:bg-[#E8F5FD] transition-all rounded-l-full pr-2 pl-3 ">
          <div className="flex items-center justify-between w-full cursor-pointer hover:bg-[#E8F5FD]">
            <p className="text-[#0f1419] text-md font-semibold mr-3">{a}</p>
            <Icon name="plus" size="18.75px" color="#1D9BF0" />
          </div>
        </div>
        <div className="border-l-[1px] border-[#eff3f4] h-[18.75px] w-[1px] flex items-center justify-center"></div>
        <div className="flex justify-center items-center h-full cursor-pointer hover:bg-[#E8F5FD] transition-all rounded-r-full pl-2 pr-3 ">
          <Icon name="cross" size="18.75px" color="#b9cad3" />
        </div>
      </div>
    );
  }
}

export default ProfileTopicsItem;
