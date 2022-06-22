import Head from 'next/head';
import React, { FunctionComponent, ReactHTML, ReactNode } from 'react';

type LayoutProps = {
  title?: string;
  content?: string;
  children: ReactNode;
};

const Layout: FunctionComponent<LayoutProps> = ({
  title = "Twitter. It's what's happening",
  content = 'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
  children,
}: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title} / Twitter</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/twitter.2.png" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
