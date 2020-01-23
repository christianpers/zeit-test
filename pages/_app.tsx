import React from 'react';
import { NextPage } from 'next';
import {
  NextComponentType,
} from 'next/dist/next-server/lib/utils';

import '../styles/theme.css';

interface Props {
  Component: NextComponentType;
  pageProps: any;
}

const MyApp: NextPage<Props> = ({ Component, pageProps }: Props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
