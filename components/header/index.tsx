import React, {
  FunctionComponent, useMemo,
} from 'react';
import { Locale } from 'contentful';
import Link from 'next/link';
import useLocales from './use-locales';

import { HeaderType } from './interfaces';

import MapContent from '../map-content';
import styles from './index.module.css';

interface Props {
  data: HeaderType;
}

const Header: FunctionComponent<Props> = ({ data }: Props) => {
  const locales = useLocales();
  const mapContentRender = useMemo(() => <MapContent content={data.links} />, [data.links]);

  const localesComponent = useMemo(() => locales.map((t: Locale) => (
    <Link key={t.code} href={`/${t.code}`}>
      <a>{t.name}</a>
    </Link>
  )), [locales]);

  return (
    <header className={styles.header}>
      <div className={styles.linksContainer}>
        {mapContentRender}
      </div>
      <div>
        {localesComponent}
      </div>
    </header>
  );
};

export default Header;
