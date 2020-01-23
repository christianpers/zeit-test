import { Entry } from 'contentful';
import { ImageSlotType, ImageSlotDef as imageSlot } from '../components/image-slot';
import { TextSlotType, TextSlotDef as textSlot } from '../components/text-slot';
import { HeaderType } from '../components/header/interfaces';
import { HeroSlotType, HeroSlotDef as hero } from '../components/hero-slot';
import { PageLinkDef as pageLink } from '../components/page-link';

export const ComponentDefs = {
  imageSlot,
  textSlot,
  hero,
  pageLink,
};

export interface PageItemFields {
  title: string;
  content: Array<Entry<TextSlotType | ImageSlotType>>;
}

export interface PageBody {
  title: string;
  hero: Entry<HeroSlotType>;
  content: Array<Entry<TextSlotType | ImageSlotType>>;
}

export interface PageType {
  slug: string;
  title: string;
  header: Entry<HeaderType>;
  body: Entry<PageBody>;
}

export interface MappedPageType {
  title: string;
  header: HeaderType;
  body: {
    title: string;
    hero: object;
    content: Array<ImageSlotType | TextSlotType>;
  };
}
