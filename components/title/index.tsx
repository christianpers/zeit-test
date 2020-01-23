import React, { FunctionComponent } from 'react';

interface Props {
  title: string;
}

const Title: FunctionComponent<Props> = ({ title }: Props) => (
  <h1>{title}</h1>
);

export default Title;
