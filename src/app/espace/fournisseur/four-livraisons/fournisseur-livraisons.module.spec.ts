import { LivraisonsFournisseurModule } from "./fournisseur-livraisons.module";


describe('LivraisonsFournisseurModule', () => {
  let livraisonsFournissModule: LivraisonsFournisseurModule;

  beforeEach(() => {
    livraisonsFournissModule = new LivraisonsFournisseurModule();
  });

  it('should create an instance', () => {
    expect(livraisonsFournissModule).toBeTruthy();
  });
});
