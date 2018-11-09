import { BoutiquesFournisseurModule } from "./fournisseur-boutiques.module";


describe('BoutiquesFournisseurModule', () => {
  let boutiquesFournissModule: BoutiquesFournisseurModule;

  beforeEach(() => {
    boutiquesFournissModule = new BoutiquesFournisseurModule();
  });

  it('should create an instance', () => {
    expect(boutiquesFournissModule).toBeTruthy();
  });
});
