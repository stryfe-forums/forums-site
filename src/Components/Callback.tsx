import React from 'react';

import { withRouter, RouteComponentProps, Redirect } from 'react-router';

import { parse } from 'query-string';

const CallbackComponent = ({ match, setState }: CallbackProps) => {
  setState(parse(match.url));

  return <Redirect to='/' />;
};

type CallbackParamTypes = {};

type CallbackProps = RouteComponentProps<CallbackParamTypes> & {
  setState: any;
};

const Callback = withRouter(CallbackComponent);

export { Callback };
