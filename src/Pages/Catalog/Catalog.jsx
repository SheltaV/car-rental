import { Catalog } from 'components/Catalog/Catalog';
import { Filters } from 'components/Filter/Filter';
import { Page } from 'components/Global/Global.styled';

export const CatalogPage = () => {
  return (
    <Page>
      <Filters />
      <Catalog />
    </Page>
  );
};