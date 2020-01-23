import {
  createClient, Entry, EntryCollection, LocaleCollection,
} from 'contentful';
import { PageType, MappedPageType, ComponentDefs } from '../interfaces/interfaces';

import { getDeep } from './helpers';

const Space: string = process.env.CONTENTFUL_SPACE || '';
const Token: string = process.env.CONTENTFUL_TOKEN || '';

class ContentfulService {
  private client = createClient({
    space: Space,
    accessToken: Token,
  });

  async getLocales(): Promise<LocaleCollection> {
    try {
      const resp: LocaleCollection = await this.client.getLocales();
      return resp;
    } catch (e) {
      return e;
    }
  }

  async fetchByContentTypeAndSlug(
    contentType: string,
    slug: string,
    langCode?: string,
  ): Promise<MappedPageType> {
    try {
      const resp: EntryCollection<PageType> = await this.client.getEntries({
        // eslint-disable-next-line @typescript-eslint/camelcase
        content_type: contentType,
        'fields.slug': slug,
        locale: langCode || 'en-US',
        include: 3,
      });

      const emptyResp = {
        title: '',
        header: {
          links: [],
        },
        body: {
          title: '',
          hero: {},
          content: [],
        },
      };

      const pageResp = resp.items.find((t) => t.fields.slug === slug);

      if (!pageResp) {
        return emptyResp;
      }

      /*
        Object types below must be the same name as the id of the content type
      */
      const links = getDeep(pageResp, ['header', 'links', { pageLink: ComponentDefs.pageLink }]);
      const bodyTitle = getDeep(pageResp, ['body', 'title']);
      const heroData = getDeep(pageResp, ['body', 'hero', { hero: ComponentDefs.hero }]);
      const content = getDeep(pageResp, ['body', 'content', {
        textSlot: ComponentDefs.textSlot,
        imageSlot: ComponentDefs.imageSlot,
      }]);
      const title = getDeep(pageResp, ['title']);

      return {
        title,
        header: {
          links,
        },
        body: {
          title: bodyTitle,
          hero: heroData,
          content,
        },
      };
    } catch (e) {
      return e;
    }
  }

  // async getContentType(type: string): Promise<EntryCollection<HeaderItemFields>> {
  //   return this.client.getEntries({
  //     // eslint-disable-next-line @typescript-eslint/camelcase
  //     content_type: type,
  //   });
  // }

  async getPage(id: string): Promise<Entry<PageType>> {
    return this.client.getEntry(id);
  }

  // async getBlogPostEntries(
  //   {limit, skip, tag}: { limit?: number; skip?: number; tag?: string } = {
  //     limit: 5,
  //     skip: 0,
  //     tag: '',
  //   },
  // ) {
  //   try {
  //     const contents = await this.client.getEntries({
  //       include: 1,
  //       limit,
  //       skip,
  //       order: 'fields.publishDate',
  //       'fields.tags.sys.id': tag,
  //       content_type: CONTENT_TYPE_BLOGPOST,
  //     });

  //     const entries = this.mapData(contents.items);

  //     const total = contents.total;

  //     return {entries, total, limit, skip};
  //   } catch (error) {
  //     // TODO: add error handling
  //     console.log(error);
  //   }
  // }
}

const contentfulServiceInstance = new ContentfulService();

export default contentfulServiceInstance;
