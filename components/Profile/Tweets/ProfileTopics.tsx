import React, { Ref, useEffect, useRef, useState } from 'react';
import Icon from 'src/Icon';
import ScrollContainer from 'react-indiana-drag-scroll';
import ProfileTopicsItem from './ProfileTopicsItem';

let a = [
  'a',
  'asd',
  'grekmgoremg erkgmergmeklrg',
  'grekmgoremg erkgmergmeklrg asd as d as',
  'asdasdasd',
  'ilgödlfg',
  'sdfmsdşfmsd sşdlf sd',
  'Viral Tweets',
  'a',
  'asd',
  'grekmgoremg erkgmergmeklrg',
  'grekmgoremg erkgmergmeklrg asd as d as',
  'asdasdasd',
  'ilgödlfg',
  'sdfmsdşfmsd sşdlf sd',
  'Viral Tweets',
];

function ProfileTopics() {
  const topicsRef = useRef<HTMLDivElement>(null);

  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);
  const [arrowsVisibility, setArrowsVisibility] = useState(false);

  useEffect(() => {
    if (topicsRef?.current) {
      const refCurrent = topicsRef?.current;
      const scrollHandle1 = () => {
        const isEnd =
          refCurrent.scrollLeft + refCurrent.offsetWidth ==
          refCurrent.scrollWidth;
        const isBegin = refCurrent.scrollLeft == 0;
        setPrev(!isBegin);
        setNext(!isEnd);
      };
      scrollHandle1();
      refCurrent.addEventListener('scroll', scrollHandle1);

      return () => {
        refCurrent.removeEventListener('scroll', scrollHandle1);
      };
    }
  }, []);

  const slideTopicsRefPrev = () => {
    topicsRef.current.scrollLeft -= 300;
  };
  const slideTopicsRefNext = () => {
    topicsRef.current.scrollLeft += 300;
  };

  return (
    <div className="mt-4">
      <div className="px-4">
        <h3 className="text-[#0f1419] text-xl font-bold">Topics to follow</h3>
        <p className="text-[#536471] text-sm">
          Tweets about the Topics you follow show up in your Home timeline
        </p>
      </div>
      <div
        className="mt-5 p-1"
        onMouseEnter={() => setArrowsVisibility(true)}
        onMouseLeave={() => setArrowsVisibility(false)}
      >
        <div className="relative">
          {prev && (
            <button
              className={`navigate-2 prev-navigate-2 ${
                arrowsVisibility ? 'flex justify-center items-center' : 'hidden'
              }`}
              onClick={slideTopicsRefPrev}
            >
              <Icon name="leftArrow" size={20} color="#ffffff" />
            </button>
          )}
          {next && (
            <button
              onClick={slideTopicsRefNext}
              className={`navigate-2 next-navigate-2 ${
                arrowsVisibility ? 'flex justify-center items-center' : 'hidden'
              }`}
            >
              <Icon name="rightArrow" size={20} color="#ffffff" />
            </button>
          )}
          <ScrollContainer
            innerRef={topicsRef}
            className="scroll-container-2"
            vertical={false}
          >
            {a.map((a, i) => (
              <div key={i} className="min-w-max" >
                <ProfileTopicsItem a={a} />
              </div>
            ))}
          </ScrollContainer>
        </div>
      </div>
    </div>
  );
}

export default ProfileTopics;
