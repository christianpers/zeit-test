import React, { FunctionComponent } from 'react';
import { Asset } from 'contentful';

import { ComponentType } from '../interfaces';
import styles from './index.module.css';

interface ImageSlotFields {
  image: Asset;
  fullbleed: boolean;
  imageText?: string;
}

export type ImageSlotType = ComponentType<ImageSlotFields>;

export const ImageSlotDef = {
  image: '',
  fullbleed: '',
  imageText: '',
};

const ImageSlot: FunctionComponent<ImageSlotFields> = (
  { image, fullbleed }: ImageSlotFields,
) => (
  <div className={`${styles.imageSlot} ${fullbleed ? styles.fullbleed : ''}`}>
    <img src={image.fields.file.url} alt="slot" />
  </div>
);

export default ImageSlot;
