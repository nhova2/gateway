import { CataloguesFournisseurModule } from "./fournisseur-catalogues.module";


describe('CataloguesFournisseurModule', () => {
  let cataloguesFournissModule: CataloguesFournisseurModule;

  beforeEach(() => {
    cataloguesFournissModule = new CataloguesFournisseurModule();
  });

  it('should create an instance', () => {
    expect(cataloguesFournissModule).toBeTruthy();
  });
});
