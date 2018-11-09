import { CommandesFournisseurModule } from "./fournisseur-commandes.module";


describe('CommandesFournisseurModule', () => {
  let commandesFournissModule: CommandesFournisseurModule;

  beforeEach(() => {
    commandesFournissModule = new CommandesFournisseurModule();
  });

  it('should create an instance', () => {
    expect(commandesFournissModule).toBeTruthy();
  });
});
