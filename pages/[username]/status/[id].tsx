import UsernameStatusIdComponent from 'components/Status/UsernameStatusIdComponent';
import React, { useState } from 'react';
import fakeData from 'src/fakeDate.json';
import RightSide from 'components/Home/RightSide';
import LeftSide from 'components/Home/LeftSide';
import { NextRouter, useRouter } from 'next/router';
import Layout from 'components/layout';
import { NextPage } from 'next';
import MessageBox from 'components/Messages/MessageBox';

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
          <RightSide relativePeopleState={true} text="Relevant People" bgColor="#ffffff"/>
        </div>
      </div>
      <MessageBox />
    </Layout>
  );
};

export async function getStaticPaths() {
  let paths = [];
  for (const data of fakeData) {
    for (const s of data.status) {
      let params ={params: { id: s.id, username: data.username }};
      paths.push(params);
    }
  }
 

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { ...params } };
}

export default Id;
