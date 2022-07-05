import React, { useState } from 'react';
import fakeData from 'src/fakeDate.json';
import { NextPage } from 'next';
import Layout from 'components/layout';
import RightSide from 'components/Home/RightSide';
import LeftSide from 'components/Home/LeftSide';
import MessageBox from 'components/Messages/MessageBox';
import { useRouter, NextRouter } from 'next/router';
import ProfileComponent from 'components/ProfileComponent';
import { useAppSelector } from 'store/hooks';
import { selectUser } from 'store/sliders/userSlider';

interface IndexProps {
  username: string;
}

const Index: NextPage<IndexProps> = ({}: IndexProps) => {
  const router: NextRouter = useRouter();

  const user = useAppSelector(selectUser);

  const [title, setTitle] = useState<string>(
    `${user.name} (@${user.username})`
  );

  return (
    <Layout title={title}>
      <div className="justify-center flex">
        <div className="w-[270px]">
          <LeftSide />
        </div>
        <div className="w-[600px] h-auto">
          <ProfileComponent {...{ router }} />
        </div>
        <div className="w-[382px]">
          <RightSide relativePeopleState={true} />
        </div>
      </div>
      <MessageBox />
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = fakeData.map((data) => ({
    params: { username: data.username },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { ...params } };
}

export default Index;
