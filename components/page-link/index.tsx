import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { Fields } from './interfaces';

import styles from './index.module.css';

export const PageLinkDef = {
  title: '',
  url: '',
};

const PageLink: FunctionComponent<Fields> = ({ title, url }: Fields) => (
  <Link href={url}>
    <a className={styles.pageLink}>{title}</a>
  </Link>
);

export default PageLink;
