import React, { Component, Fragment } from 'react';
import Icon from 'src/Icon';

interface Props {
  a: string;
}
interface States {
  normal: boolean;
  ok: boolean;
  reject: boolean;
}

class ProfileTopicsItem extends Component<Props, States> {
  state = {
    normal: true,
    ok: false,
    reject: false,
  };

  addThisTopic = () => {
    this.setState({
      normal: false,
      ok: true,
    });
  };

  removeThisTopic = () => {
    this.setState({
      normal: true,
      ok: false,
    });
  };

  destroyThisTopic = () => {
    this.setState({
      normal: false,
      reject: true,
    });
  };

  render() {
    const { a } = this.props;
    const { normal, ok, reject } = this.state;

    return (
      <Fragment>
        {ok && (
          <div
            onClick={this.removeThisTopic}
            className="bg-[#1a8cd8] border-[1px] flex-nowrap border-[#cfd9de] w-full h-10 rounded-full flex items-center justify-between"
          >
            <div className="flex justify-center w-full items-center h-full cursor-pointer transition-all rounded-l-full pr-3 pl-3">
              <div className="flex items-center justify-between w-full cursor-pointer">
                <p className="text-white text-md font-semibold w-full mr-3">
                  {a}
                </p>
                <Icon name="tick" size="18.75px" color="#fff" />
              </div>
            </div>
          </div>
        )}

        {normal && (
          <div className="border-[1px] flex-nowrap border-[#cfd9de] w-full h-10 rounded-full flex items-center justify-between">
            <div
              onClick={this.addThisTopic}
              className="flex justify-center w-full items-center h-full cursor-pointer hover:bg-[#E8F5FD] transition-all rounded-l-full pr-2 pl-3"
            >
              <div className="flex items-center justify-between w-full cursor-pointer">
                <p className="text-[#0f1419] text-md font-semibold mr-3">{a}</p>
                <Icon name="plus" size="18.75px" color="#1D9BF0" />
              </div>
            </div>
            <div className="border-l-[1px] border-[#eff3f4] h-[18.75px] w-[1px] flex items-center justify-center"></div>
            <div
              onClick={this.destroyThisTopic}
              className="flex justify-center items-center h-full cursor-pointer hover:bg-[#E8F5FD] transition-all rounded-r-full pl-2 pr-3 "
            >
              <Icon name="cross" size="18.75px" color="#b9cad3" />
            </div>
          </div>
        )}

        {reject && (
          <div className="bg-white border-[1px] flex-nowrap border-[#eff3f4] w-full h-10 rounded-full flex items-center justify-between">
            <div className="flex justify-center w-full items-center h-full cursor-pointer transition-all rounded-l-full pr-3 pl-3">
              <div className="flex items-center justify-between w-full cursor-pointer">
                <p className="text-[#878a8c] text-md font-semibold w-full mr-3">
                  {a}
                </p>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default ProfileTopicsItem;
