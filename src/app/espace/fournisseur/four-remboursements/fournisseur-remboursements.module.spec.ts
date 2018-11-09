import { RemboursementsFournisseurModule } from "./fournisseur-remboursements.module";


describe('RemboursementsFournisseurModule', () => {
  let remboursementsFournissModule: RemboursementsFournisseurModule;

  beforeEach(() => {
    remboursementsFournissModule = new RemboursementsFournisseurModule();
  });

  it('should create an instance', () => {
    expect(remboursementsFournissModule).toBeTruthy();
  });
});
