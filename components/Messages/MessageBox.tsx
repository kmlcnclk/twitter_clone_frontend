import React, { FunctionComponent } from 'react';
import Icon from 'src/Icon';
import MessageItem from './MessageItem';
import { changeValue, selectMessageBox } from 'store/sliders/messageBoxSlider';
import { useAppSelector, useAppDispatch } from 'store/hooks';

const MessageBox: FunctionComponent = ({}) => {
  const messageBox = useAppSelector(selectMessageBox);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div
        className={messageBox ? 'message-box message-box-open' : 'message-box'}
      >
        <div
          className="w-[400px] p-4 h-[56px] flex items-center justify-between cursor-pointer"
          onClick={() => dispatch(changeValue())}
        >
          <h3 className="text-xl text-[#0f1419] font-semibold">Messages </h3>
          <div className="flex items-center space-x-2">
            <div className="hover:bg-[#E7E7E8] p-2 rounded-full flex items-center justify-center transition-all">
              <Icon name="newMessage" color="#0f1419" size="20px" />
            </div>
            {messageBox ? (
              <div className="hover:bg-[#E7E7E8] p-2 rounded-full flex items-center justify-center transition-all">
                <Icon name="collapse" color="#0f1419" size="20px" />
              </div>
            ) : (
              <div className="hover:bg-[#E7E7E8] p-2 rounded-full flex items-center justify-center transition-all">
                <Icon name="expand" color="#0f1419" size="20px" />
              </div>
            )}
          </div>
        </div>
        <MessageItem />
        <MessageItem />
      </div>
    </div>
  );
};

export default MessageBox;
