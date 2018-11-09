import { OffresFournisseurModule } from "./fournisseur-offres.module";


describe('OffresFournisseurModule', () => {
  let offresFournissModule: OffresFournisseurModule;

  beforeEach(() => {
    offresFournissModule = new OffresFournisseurModule();
  });

  it('should create an instance', () => {
    expect(offresFournissModule).toBeTruthy();
  });
});
