import React from 'react';
import fakeData from 'src/fakeDate.json';
import { NextPage } from 'next';

interface IndexProps {
  username: string;
}

const Index: NextPage<IndexProps> = ({ username }: IndexProps) => {
  return <div>{username}asd</div>;
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
