import React from 'react';
import { NextPage } from 'next';
import { Entry } from 'contentful';

import Page from '../../layouts/page';

import { ContentfulService } from '../../core/contentful';

import { ImageSlotType } from '../../components/image-slot';
import { TextSlotType } from '../../components/text-slot';

import styles from './index.module.css';

interface PageItemFields {
  title: string;
  content: Array<Entry<TextSlotType | ImageSlotType>>;
}

interface Props {
  resp: Entry<PageItemFields>;
}

const About: NextPage<Props> = ({ resp }: Props) => {
  // const { title, content } = resp.fields;

  // return (
  //   <Page metaData={{ title: 'Radon - NextJS Template', description: 'Start using NextJS now!' }}>
  //     <div className={styles.index}>
  //       <Title title={title} />
  //       {/* <Content content={content} /> */}
  //     </div>
  //   </Page>
  // );
};

About.getInitialProps = async (): Promise<Props> => {
  const contentfulService = new ContentfulService();
  const resp: Entry<PageItemFields> = await contentfulService.getPage('4oWcLKZrGbc2QnlPPVlmmM');

  return { resp };
};

export default About;
