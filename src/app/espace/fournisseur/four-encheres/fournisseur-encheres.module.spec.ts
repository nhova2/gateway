import { EncheresFournisseurModule } from "./fournisseur-encheres.module";


describe('EncheresFournisseurModule', () => {
  let encheresFournissModule: EncheresFournisseurModule;

  beforeEach(() => {
    encheresFournissModule = new EncheresFournisseurModule();
  });

  it('should create an instance', () => {
    expect(encheresFournissModule).toBeTruthy();
  });
});
