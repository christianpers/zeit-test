import React, { FunctionComponent } from 'react';

import { Asset } from 'contentful';

export interface HeroSlotType{
  image: Asset;
  heroText?: string;
}

export const HeroSlotDef = {
  image: '',
  heroText: '',
};

const HeroSlot: FunctionComponent<HeroSlotType> = ({ image, heroText }: HeroSlotType) => (
  <>
    <img src={image.fields.file.url} alt="slot" />
    {heroText && (
      <h4>{heroText}</h4>
    )}
  </>
);

export default HeroSlot;
