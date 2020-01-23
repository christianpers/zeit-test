import { ComponentType } from '../interfaces';

export interface Fields {
  title: string;
  url: string;
}

export type PageLinkType = ComponentType<Fields>;
