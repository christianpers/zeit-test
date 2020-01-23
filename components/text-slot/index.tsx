import React, { FunctionComponent } from 'react';
import { ComponentType } from '../interfaces';

import styles from './index.module.css';

interface Fields {
  text: string;
}

export type TextSlotType = ComponentType<Fields>;

export const TextSlotDef = {
  text: '',
};

const TextSlot: FunctionComponent<Fields> = ({ text }: Fields) => (
  <p>{text}</p>
);

export default TextSlot;
