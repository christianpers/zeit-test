import React from 'react';
import { NextPage } from 'next';

import Page from '../layouts/page';

import contentfulServiceInstance from '../core/contentful';

import Title from '../components/title';
import MapContent from '../components/map-content';
import { MappedPageType } from '../interfaces/interfaces';

import styles from './index.module.css';

interface Props {
  resp: MappedPageType;
}

const Home: NextPage<Props> = (props: Props) => {
  const { resp: { title, header, body } } = props;

  console.log('this is prod');

  return (
    <Page
      metaData={{ title: 'Radon - NextJS Template', description: 'Start using NextJS now!' }}
      headerData={header}
    >
      <div className={styles.home}>
        <Title title={title} />
        <MapContent content={body.content} />
      </div>
    </Page>
  );
};

Home.getInitialProps = async (): Promise<{resp: MappedPageType}> => {
  // const contentfulService = new ContentfulService();
  const resp: MappedPageType = await contentfulServiceInstance.fetchByContentTypeAndSlug('page', 'home');
  return { resp };
};

export default Home;
