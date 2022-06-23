import React, { FunctionComponent, useState } from 'react';
import Icon from 'src/Icon';
import MessageItem from './MessageItem';

const MessageBox: FunctionComponent = ({}) => {
  const [messageBoxState, setMessageBoxState] = useState<boolean>();

  return (
    <div>
      <div
        className={
          messageBoxState ? 'message-box message-box-open' : 'message-box'
        }
      >
        <div
          className="w-[400px] p-4 h-[56px] flex items-center justify-between cursor-pointer"
          onClick={() => setMessageBoxState(!messageBoxState)}
        >
          <h3 className="text-xl text-[#0f1419] font-semibold">Messages </h3>
          <div className="flex items-center space-x-2">
            <div className="hover:bg-[#E7E7E8] p-2 rounded-full flex items-center justify-center transition-all">
              <Icon name="newMessage" color="#0f1419" size="20px" />
            </div>
            {messageBoxState ? (
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

      {/* <div className="overflow-y-auto mt-44 w-[350px] py-5 h-[472px] px-2 z-40">
     
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
        <div className="" onClick={() => setMessageBoxState(!messageBoxState)}>
          asd
        </div>
      </div> */}
    </div>
  );
};

export default MessageBox;
