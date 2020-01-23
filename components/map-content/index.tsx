import React, { FunctionComponent } from 'react';

import ImageSlot, { ImageSlotType } from '../image-slot';
import TextSlot, { TextSlotType } from '../text-slot';
import PageLink from '../page-link';
import { PageLinkType } from '../page-link/interfaces';

type mappedTypes = {
  [key: string]: Function;
}

interface ContentType{
  content: Array<TextSlotType | ImageSlotType | PageLinkType>;
}

const mappedComponents: mappedTypes = {
  textSlot: TextSlot,
  imageSlot: ImageSlot,
  pageLink: PageLink,
};

const MapContent: FunctionComponent<ContentType> = ({ content }: ContentType) => {
  const componentsRender = content.map((t) => {
    const ComponentType = mappedComponents[t.type];
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <ComponentType key={t.id} {...t.fields} />
    );
  });
  return (
    <>
      {componentsRender}
    </>
  );
};

export default MapContent;
