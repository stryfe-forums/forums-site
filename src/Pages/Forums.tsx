import React, { useState, useEffect } from 'react';

import { withRouter, RouteComponentProps } from 'react-router';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const ForumsComponent = ({ match, darkMode }: ForumsProps) => {
  const [pinnedThreads, setPinnedThreads] = useState<PinnedThreads>([]);

  const [threadList, setThreadList] = useState<ThreadList>([]);

  useEffect(() => {}, [pinnedThreads, threadList]);

  const Breadcrumbs = (
    <>
      <BreadcrumbItem active>{match.params.thread || 'Forums'}</BreadcrumbItem>
    </>
  );

  return (
    <>
      <div
        className='d-flex justify-content-center'
        style={{ padding: '20px 10%' }}
      >
        <div className='container'>
          <Breadcrumb>{Breadcrumbs}</Breadcrumb>
        </div>
      </div>
    </>
  );
};

type Thread = {
  title: string;
  tag: string;
  description: string;
  picture: string;
  link: string;
};

type PinnedThreads = Thread[];

type ThreadList = Thread[];

type ForumsState = {
  path: { name: string; href: string | null }[];
};

type PathParamsType = {
  thread: string;
};

type ForumsProps = RouteComponentProps<PathParamsType> & {
  darkMode: boolean;
};

const Forums = withRouter(ForumsComponent);

export { Forums };

/*
  // const breadcrumbs = path.map(({ name, href }) =>
  //   href ? (
  //     <BreadcrumbItem>
  //       <a href={href}>{name}</a>
  //     </BreadcrumbItem>
  //   ) : (
  //     <BreadcrumbItem active>{name}</BreadcrumbItem>
  //   )
  // );
*/
