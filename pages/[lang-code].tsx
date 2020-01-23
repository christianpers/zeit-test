import React from 'react';
import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

import Page from '../layouts/page';

import contentfulServiceInstance from '../core/contentful';

import Title from '../components/title';
import MapContent from '../components/map-content';
import { MappedPageType } from '../interfaces/interfaces';

import styles from './index.module.css';

interface RouterType {
  query: ParsedUrlQuery;
}

interface Props {
  resp: MappedPageType;
}

const LangHome: NextPage<Props> = (props: Props) => {
  const { resp: { title, header, body } } = props;

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

LangHome.getInitialProps = async (router: RouterType): Promise<{resp: MappedPageType}> => {
  const langCode: string = Array.isArray(router.query['lang-code']) ? router.query['lang-code'][0] : router.query['lang-code'];
  const resp: MappedPageType = await contentfulServiceInstance.fetchByContentTypeAndSlug('page', 'home', langCode);
  return { resp };
};

export default LangHome;
