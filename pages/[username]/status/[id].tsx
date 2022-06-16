import UsernameStatusIdComponent from 'components/Status/UsernameStatusIdComponent';
import React from 'react';
import fakeData from '../../../src/fakeDate.json';
import RightSide from '../../../components/Home/RightSide';
import LeftSide from '../../../components/Home/LeftSide';
import { NextRouter, useRouter } from 'next/router';

function Id({ id }) {
  const router: NextRouter = useRouter();

  return (
    <div className="justify-center flex">
      <div className="w-[270px]">
        <LeftSide />
      </div>
      <div className="w-[600px] h-auto">
        <UsernameStatusIdComponent {...{ router }} />
      </div>
      <div className="w-[382px]">
        <RightSide relativePeopleState={true} />
      </div>
    </div>
  );
}

export default Id;

export async function getStaticPaths() {
  const paths = fakeData.status.map((s) => ({
    params: { id: s.id, username: fakeData.username },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { params } };
}
