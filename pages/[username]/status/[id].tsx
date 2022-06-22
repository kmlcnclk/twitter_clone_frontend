import UsernameStatusIdComponent from 'components/Status/UsernameStatusIdComponent';
import React, { useState } from 'react';
import fakeData from 'src/fakeDate.json';
import RightSide from 'components/Home/RightSide';
import LeftSide from 'components/Home/LeftSide';
import { NextRouter, useRouter } from 'next/router';
import Layout from 'components/layout';
import { NextPage } from 'next';

type IdProps = {
  id: number;
  username: string;
};

const Id: NextPage<IdProps> = ({}: IdProps) => {
  const router: NextRouter = useRouter();
  const [title, setTitle] = useState<string>('');

  return (
    <Layout title={title}>
      <div className="justify-center flex">
        <div className="w-[270px]">
          <LeftSide />
        </div>
        <div className="w-[600px] h-auto">
          <UsernameStatusIdComponent {...{ router, setTitle }} />
        </div>
        <div className="w-[382px]">
          <RightSide relativePeopleState={true} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = fakeData.status.map((s) => ({
    params: { id: s.id, username: fakeData.username },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { params } };
}

export default Id;
