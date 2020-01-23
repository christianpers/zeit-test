import React, { FunctionComponent } from 'react';
import Head from 'next/head';

export interface Props {
  title?: string | null;
  description?: string | null;
  image?: string | null;
}

const Meta: FunctionComponent<Props> = ({ title, description, image }: Props) => {
  const items = [];

  if (title) {
    items.push(
      <title key="title">{title}</title>,
    );

    items.push(
      <meta key="og:title" name="og:title" content={title} />,
    );
  }

  if (description) {
    items.push(
      <meta key="description" name="description" content={description} />,
    );

    items.push(
      <meta key="og:description" name="og:description" content={description} />,
    );
  }

  if (image) {
    items.push(
      <meta key="og:image" name="og:image" content={image} />,
    );
  }

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ee2e43" />
      <meta name="msapplication-TileColor" content="#ee2e43" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />

      {items}
    </Head>
  );
};

export default Meta;
