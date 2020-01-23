import { useState, useEffect } from 'react';
import { LocaleCollection, Locale } from 'contentful';

import contentfulServiceInstance from '../../core/contentful';

const useLocales: () => Array<Locale> = () => {
  const [locales, setLocales] = useState<Array<Locale>>([]);

  useEffect(() => {
    async function getLocales(): Promise<void> {
      // const contentfulService = new ContentfulService();
      const resp: LocaleCollection = await contentfulServiceInstance.getLocales();

      console.log('resp: ', resp);

      setLocales(resp.items);
    }

    getLocales();
  }, []);

  return locales;
};

export default useLocales;
