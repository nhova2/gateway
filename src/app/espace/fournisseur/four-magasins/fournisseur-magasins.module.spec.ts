import { MagasinsFournisseurModule } from "./fournisseur-magasins.module";


describe('MagasinsFournisseurModule', () => {
  let magasinsFournissModule: MagasinsFournisseurModule;

  beforeEach(() => {
    magasinsFournissModule = new MagasinsFournisseurModule();
  });

  it('should create an instance', () => {
    expect(magasinsFournissModule).toBeTruthy();
  });
});
