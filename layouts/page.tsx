import React, { FunctionComponent } from 'react';

import Meta, { Props as MetaProps } from '../components/meta';
import Header from '../components/header';
import { HeaderType } from '../components/header/interfaces';

import styles from './page.module.css';

interface Props {
  headerData: HeaderType;
  metaData: MetaProps;
  children: JSX.Element | JSX.Element[];
}

const Page: FunctionComponent<Props> = ({
  headerData, metaData, children,
}: Props) => (
  <div className={styles.page}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Meta {...metaData} />
    <Header data={headerData} />
    <>
      {children}
    </>
  </div>
);

export default Page;
